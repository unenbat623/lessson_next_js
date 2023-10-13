import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/function";

const BlogDetail = ({ article }) => {
  return (
    <div className="container flex w-[800px] flex-col items-center gap-8 mx-auto mt-[100px] max-w-4xl">
      <div>
        <div>
          <div>
            <h1 className="text-[36px] font-semibold text-slate-900">
              {article?.title}
            </h1>
            <div className="flex items-center mt-5 gap-5">
              <div className="flex items-center gap-2">
                <img
                  className="w-7 h-7 rounded-full"
                  src={article?.user?.profile_image}
                  alt="avatar"
                />
                <h4 className="ml-2 text-[14px] text-slate-500">
                  {article?.user?.name}
                </h4>
                <p className=" text-[14px] text-slate-500">
                  {formatDate(article?.created_at)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <img className="rounded-md" src={article?.cover_image} />
            </div>
            <div
              className="blogcontent"
              dangerouslySetInnerHTML={{ __html: article?.body_html }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  // console.log("context", first);
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles?per_page=5}`);
  const articles = await res.json();
  const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
  const data1 = await res1.json();
  {
    articles.concat(data1);
  }
  const ids = articles.map((article) => article.id);
  console.log("ids", ids);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
