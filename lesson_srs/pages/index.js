import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { getData } from "@/utils/function";
import FourCard from "@/components/Card_4";

export default function Home({ blogs }) {
  return (
    <main className={`container mx-auto`}>
      <section>
        <h1 className="p-5 text-4xl">Recent Blogs</h1>
        <div className="container flex w-[1280px] px-8 flex-col items-start gap-8">
          {/* {blogpost.map((blog) => {
            return <FourCard blog={blog} />;
          })} */}
        </div>
        <h2 className="p-5 text-4xl">All blog post</h2>
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3   gap-5">
          {blogs.map((blog, i) => (
            <Card blog={blog} />
          ))}
        </div>
        <div className="flex  justify-center items-center my-3 ">
          <button className="text-[16px] rounded-md border border-slate-300 py-3 px-5 gap-3 hover:bg-green-400">
            Load More ...
          </button>
        </div>
      </section>
    </main>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles/latest?per_page=9`);
  const blogs = await res.json();
  console.log("RES", blogs);
  return {
    props: {
      blogs,
    },
  };
}
