import React from "react";
import Card from "@/components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "@/components/Loader";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9&page=1");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
    setisLoading(false);
  };

  return (
    <main className={`container mx-auto `}>
      <section>
        <h1 className="p-5 text-4xl">All blog posts</h1>
        <div className="grid grid-cols-3 gap-5">
          {isLoading && <Loading />}
          {blogs.map((blog, i) => {
            return <Card key={i} blog={blog} />;
          })}
        </div>
        <div className="flex  justify-center items-center my-3 ">
          <button className="text-[16px] rounded-md border border-slate-300 py-3 px-5 gap-3">
            Load more
          </button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
