import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [blogpost, setBlogpost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  const Blogs = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res.json();
    console.log(blogpost);
    setBlogs(data1);
  };

  return (
    <main className={`container mx-auto`}>
      <section>
        <h1 className="p-5 text-4xl">All blog post</h1>
        <div className="border flex flex-col p-2">
          <img src={blogpost.cover_image} className="h-[300px]" />
          <div className="flex flex-col">
            <span>{blogpost?.type_of}</span>
            <h1>{blogpost.title}</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((blog, i) => {
            return <Card blog={blog} />;
          })}
        </div>
      </section>
    </main>
  );
}
