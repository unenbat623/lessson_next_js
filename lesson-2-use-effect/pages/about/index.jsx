import { useState } from "react";

export default function About() {
  const [count, SetCount] = useState(0);

  const add = () => {
    console.log("Add");
    SetCount(count + 9.4607304725808);
  };
  const deleted = () => {
    console.log("Delete");
    SetCount(count - 2.99792458);
  };
  return (
    <div className="m-5">
      <div className="text-5xl font-extrabold text-green-200 text-center m-5">
        About Page
      </div>
      <h1 className="text-center m-5">
        тоо 1 гэрлийн жилээр: 9,460,730,472,580.8 км нэмэгдэнэ. <br />
        тоо гэрэлийн хурдаар хасагдана 299,792,458 км:
        <span className="text-orange-500"> {count}</span>
      </h1>
      <div className="flex justify-center mt-3">
        <button
          className="border rounded-lg bg-purple-400 border-green-500 p-3 mx-4 py-3 -500 hover:bg-green-500"
          onClick={add}
        >
          нэмэх
        </button>
        <button
          className="border rounded-lg bg-orange-400 border-red-500 p-9 mx-9 py-2 -500 hover:bg-red-500"
          onClick={deleted}
        >
          хасах
        </button>
      </div>
    </div>
  );
}
