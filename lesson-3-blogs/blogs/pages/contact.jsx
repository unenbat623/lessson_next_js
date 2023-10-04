import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto h-[895px] w-[895px]  ">
      <div className="flex flex-col p-4">
        <div className=" items-center">
          <h1 className=" items-start text-4xl font-normal mb-5 flex flex-col ">
            Contact Us
          </h1>
        </div>
        <p className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum
          <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut
          <br /> labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <div className="flex  mt-5 gap-12 ">
          <div className="rounded-[10px] border border-slate-500 p-4 w-[50%]">
            <h1 className=" text-2xl gap-1">Address</h1>
            <p className="mt-1 text-[#696A75]">
              1328 Oak Ridge Drive, Saint <br />
              Louis, Missouri
            </p>
          </div>
          <div className="rounded-md border border-slate-500 p-4 w-[50%]">
            <h1 className=" text-2xl gap-1">Contact</h1>
            <p className="mt-1 text-[#696A75]">
              313-332-8662 <br />
              info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex pt-[29px] pb-[26px] pl-[130px] pr-[35px] items-center bg-[#F6F6F7]">
        <div className="flex flex-col items-start gap-6">
          <h1 className=" text-lg">Leave a Message</h1>
          <div className="w-[589px] h-[39px] flex gap-5 flex-shrink-0">
            <input
              placeholder="Your Name"
              className=" py-4 pl-4 pr-5 gap-3 w-[225px] h-[38px] flex items-center border rounded-md"
            ></input>
            <input
              placeholder="Your Email"
              className="py-4 pl-4 pr-5 gap-3 w-[225px] h-[38px] flex items-center border rounded-md"
            ></input>
          </div>
          <div className="gap-5">
            <input
              placeholder="Subject"
              className="py-4 pl-4 pr-5 gap-3 w-[470px] h-[38px] flex items-center border rounded-md "
            ></input>
          </div>
          <div className=" h-[140px] gap-5">
            <textarea
              placeholder="Write a message"
              className="py-4 pl-4 pr-5 gap-3 w-[470px] h-[134px] flex items-start border rounded-md"
            ></textarea>
          </div>
          <div className=" py-3 px-4">
            <button className=" inline-flex flex-col justify-center items-center rounded-md bg-[#4B6BFB] text-[#ffffff] py-3 px-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
