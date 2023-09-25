import Image from "next/image";
import { Inter } from "next/font/google";
import about from "./about";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setAricles] = useState([
    {
      title:
        "Files with a green M letter prefix indicate that they have been cached, And red means it is still in the workspace, not cached.",
      user: "gerelee",
      description:
        "Finally, about fixing your .gitignore, take a look at git check-ignore -v <path> to know specifically which .gitignore file ignores your path.",
      color: "blue",
    },
  ]);
  const [] = useState([
    {
      title:
        "Files with a green M letter prefix indicate that they have been cached, And red means it is still in the workspace, not cached.",
      user: "dulmaa",
      description:
        "Finally, about fixing your .gitignore, take a look at git check-ignore -v <path> to know specifically which .gitignore file ignores your path.",
      color: "red",
    },
  ]);
  setAricles(data);

  const getData = async () => {
    const data = await fetch();
  };
  useEffect(() => {
    console.log("Effect");
    getData();
  });
  return (
    <main className="m-8">
      Welcome
      <div>
        {articles.map((articles) => (
          <div className="border my-3 p-4">{articles.title}</div>
        ))}
      </div>
    </main>
  );
}
