import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { getData } from "@/utils/function";
import FourCard from "@/components/Card4/FourCard";
import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <main className={`container mx-auto`}>
      <section>
        <h1 className="p-5 text-4xl">Recent Blogs</h1>
        {/* <FourCard /> */}
        <div className="container flex w-[1280px] px-8 flex-col items-start gap-8"></div>
        <h2 className="p-5 text-4xl">All blog post</h2>
        <div className="md:grid lg:grid-cols-2 xl:grid-cols-3   gap-5">
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
export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?per_page=9`);
  const blogs = await res.json();
  console.log("Static Props Work");
  return {
    props: {
      blogs,
    },
  };
}
