import React from "react";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/function";

const FourCard = () => {
  const [blogpost, setBlogpost] = useState([]);

  const fetchblogpost = async () => {
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    setBlogpost(data1);
  };
  useEffect(() => {
    fetchblogpost();
  }, []);

  return (
    <div>
      <div className="w-[592px] h-432px">
        <div className="flex 1 0 grid-col items-start w-[1280px]">
          <div className="flex items-start gap-8 self-stretch">
            <div
              key={blogpost[0]?.id}
              className="flex-col items-start gap-8 flex  self-stretch"
            >
              <div>
                <img
                  src={blogpost[0]?.social_image}
                  className="four_card_image"
                />
                <p className="text-[#97989F]">
                  {formatDate(blogpost.created_at)}
                </p>
                <div className="flex flex-col items-start gap-4">
                  <span className="flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">
                    {blogpost[0]?.type_of}
                  </span>
                  <h1 className="text-[#667085]">{blogpost[0]?.description}</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex 1 0 flex-col justify-center items-start gap-8">
              <div className="flex items-start gap-6 self-stretch">
                <div className="flex">
                  <div key={blogpost[1]?.id} className="">
                    <div className="w-[320px] h-[200px]">
                      <div className="flex"></div>
                      <img src={blogpost[1]?.social_image} />
                    </div>

                    <p className="text-[#97989F]">
                      {formatDate(blogpost.created_at)}
                    </p>

                    <div className="flex flex-col items-start gap-4">
                      <span className=" font-normal text-lg flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">
                        {blogpost[1]?.type_of}
                      </span>
                      <h1 className="text-[#667085]">
                        {blogpost[1]?.description}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 self-stretch">
              <div key={blogpost[2]?.id} className="">
                <div className="w-[320px] h-[200px]">
                  <img src={blogpost[2]?.social_image} />
                </div>
                <p className="text-[#97989F]">
                  {formatDate(blogpost.created_at)}
                </p>
                <div className="flex flex-col items-start gap-4">
                  <span className=" font-normal text-lg flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">
                    {blogpost[2]?.type_of}
                  </span>
                  <h1 className="text-[#667085]">{blogpost[2]?.description}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1440px] pr-[30px] flex-col items-center gap-16">
        <div key={blogpost[3]?.id} className="">
          <div className="h-[246px]">
            <img src={blogpost[3]?.social_image} />
          </div>
          <p className="text-[#97989F]">{formatDate(blogpost.created_at)}</p>
          <div className="flex flex-col items-start gap-4">
            <span className="flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md font-normal text-lg">
              {blogpost[3]?.type_of}
            </span>
            <div>
              <h1 className=" font-sans text-base text-[#667085]">
                {blogpost[3]?.description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourCard;
