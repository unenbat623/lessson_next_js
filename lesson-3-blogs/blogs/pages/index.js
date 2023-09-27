import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };

  return (
    <main className={`container mx-auto`}>
      <section>
        <h1 className="p-5 text-4xl">All blog post</h1>
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((blog, i) => {
            return <Card blog={blog} />;
          })}
        </div>
      </section>
    </main>
  );
}
