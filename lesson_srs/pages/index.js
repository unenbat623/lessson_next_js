import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { getData } from "@/utils/function";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home({ blogs, page }) {
  const router = useRouter();
  const myRef = useRef(null);

  const [blogList, setBlogList] = useState(blogs);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  const searchBlog = (searchTitle) => {
    const findBlog = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setBlogList(findBlog);
  };

  return (
    <Layout setsearchTitle={searchBlog}>
      <main className={`container mx-auto`}>
        <section ref={myRef}>
          <h1 className="p-5 text-4xl">Recent Blogs</h1>
          {/* <FourCard /> */}
          <div className="container flex w-[1280px] px-8 flex-col items-start gap-8"></div>
          <h2 className="p-5 text-4xl">All blog post</h2>
          <div className="md:grid lg:grid-cols-2 xl:grid-cols-3   gap-5">
            {blogList.map((blog, i) => (
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
    </Layout>
  );
}
export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 9;

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
