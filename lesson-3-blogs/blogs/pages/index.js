import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loading from "@/components/Loader";
import FourCard from "@/components/Card_4";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [blogpost, setBlogpost] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9&page=3");
    const data = await res.json();
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    console.log(data);
    setBlogs(data);
    setisLoading(false);
    setBlogpost(data1);
  };

  function handleNext() {
    console.log("daraagiin list");
  }

  return (
    <main className={`container mx-auto `}>
      <section>
        <h1 className="p-5 text-4xl">Recent blog posts</h1>
        {isLoading && <Loading />}
        <div className="flex flex-col items-start">
          {blogpost.map((blog) => {
            return <FourCard blog={blog} />;
          })}
        </div>
        <h1 className="p-5 text-4xl">All blog post</h1>
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((blog, i) => {
            return <Card key={i} blog={blog} />;
          })}
        </div>
      </section>
    </main>
  );
}
