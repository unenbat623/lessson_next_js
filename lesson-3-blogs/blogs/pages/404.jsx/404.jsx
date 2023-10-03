import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="container mx-auto h-96">
      <h1>404</h1>
      <h1>PAGE NOT FOUND</h1>
      <div>
        <p>ta daraa dahin oroldnuu</p>
        <Link href="/"></Link>
      </div>
    </div>
  );
};
