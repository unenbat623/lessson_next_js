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
        <h1 className="p-5 text-4xl">Recent blog posts</h1>
        {isLoading && <Loading />}
        {blogs.map((blog, i) => {
          return <Card key={i} blog={blog} />;
        })}
      </section>
    </main>
  );
};

export default Blog;
