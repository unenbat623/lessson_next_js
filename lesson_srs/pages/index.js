import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { getData } from "@/utils/function";
import { useRouter } from "next/router";

export default function Home({ blogs, page }) {
  const router = useRouter();
  const myRef = useRef(null);

  // useEffect(() => {
  // myRef.current.scrollIntroView({ behavior: "smooth", block: "end" });
  // });

  return (
    <main className={`container mx-auto`}>
      <section ref={myRef}>
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
          <button
            onClick={() => {
              console.log("clicked");
              const pg = Number(page) + 3;
              router.replace("?page=" + pg);
            }}
            className="text-[16px] rounded-md border border-slate-300 py-3 px-5 gap-3 hover:bg-green-400"
          >
            Load More ...
          </button>
        </div>
      </section>
    </main>
  );
}
export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 3;

  const res = await fetch(`https://dev.to/api/articles?per_page=${page}`);
  const blogs = await res.json();
  console.log("Static Props Work");

  return {
    props: {
      blogs,
      page,
    },
  };
}
