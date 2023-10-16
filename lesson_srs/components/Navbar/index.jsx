import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Blog from "@/pages/blog";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const isActive = usePathname();

  const [blogList, setBlogList] = useState([]);

  const handleChange = (event) => {
    const searchName = event.target.value;

    const getBlogs = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles?per_page=9`);
        const blogs = await response.json();
        const filteredblogs = blogs?.filter((blog) => {
          return blog.title.includes(searchName);
        });
        setBlogList(filteredblogs);
      } catch (err) {
        console.log(err);
        alert("Error, please try again");
      }
    };
  };

  return (
    <div className="container md:mx-auto mt-3 py-1 lg:border-b max-lg:hidden">
      <div className="flex md:justify-between md:items-center">
        <a href="/">
          <img src="Logo.png" alt="logo" className="container" />
        </a>

        <div className="flex gap-12">
          {navigations.map((navigation, i) => (
            <Link
              className={`topnav ${
                isActive === navigation.path
                  ? "text-slate-500"
                  : "hover:text-red-400 "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex md:items-center ">
          <input
            placeholder="Search"
            type="text"
            className="z-4 h-[20px] w-[150px]"
            onChange={handleChange}
          ></input>
          <button type="submit">
            <img src="search-outline.svg" className="w-4 h-4 z-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
