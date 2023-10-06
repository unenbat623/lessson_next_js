import Link from "next/link";
import Contact from "@/pages/contact";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-72 pt-5 pb-5 border-b-2 border-slate-200">
      <img src="/logo.png" className="lg:h-[36px] lg:w-[158px]" />

      <div className="flex gap-8">
        <div>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="flex  py-2 pr-4 pl-2 items-center gap-3 ">
        <input
          placeholder="Search"
          type="text"
          className="z-4 flex-col"
        ></input>
        <button type="submit">
          <img src="/search_outline.svg" className="w-4 h-4 z-2" />
        </button>
      </div>
    </div>
  );
}
