import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loading from "@/components/Loader";
import FourCard from "@/components/Card_4";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [blogpost, setBlogpost] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [pages, setPages] = useState(3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9&page=2");
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
    setPages(pages + 3);
  }

  return (
    <main className={`container mx-auto `}>
      <section>
        <h1 className="p-5 text-4xl">Recent blog posts</h1>
        {isLoading && <Loading />}
        <div className="container flex w-[1280px] px-8 flex-col items-start gap-8">
          {blogpost.map((blog) => {
            return <FourCard blog={blog} />;
          })}
        </div>
        <h1 className="p-5 text-4xl">All blog post</h1>
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3   gap-5">
          {blogs.map((blog, i) => {
            return <Card key={i} blog={blog} />;
          })}
        </div>
        <div className="flex  justify-center items-center my-3 ">
          <button
            onClick={handleNext}
            className="text-[16px] rounded-md border border-slate-300 py-3 px-5 gap-3 hover:bg-green-400"
          >
            Load more
          </button>
        </div>
      </section>
    </main>
  );
}
