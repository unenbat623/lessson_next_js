import Layout from "@/components/Layout";
import React from "react";

const Terms = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-between align-items-center centerintro">
          <div className="col-lg-6">
            <h1 className="text-color:#3f4554;" class="display-2 mb-4">
              Generate Your Terms of Use
            </h1>
            <p className="text-color:#6b7280;" class=" mb-3 mb-lg-5">
              We create customized Terms of Use for web, Android &amp; iOS app,
              Facebook app, Twitter developer account, Squarespace, Blogger,
              Wordpress, Shopify and more.
            </p>
            <a
              className="font-size: 20px btn btn-secondary animate-up-2 mb-5 mb-lg-0"
              href="/generate-terms-and-conditions"
            >
              <i className="fas fa-file-alt mr-2"></i>Generate Terms of Use
            </a>
          </div>
          <div className="col-lg-5 display: flex;justify-content: center;">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 420px;position: absolute;z-index: -1;top: -15px;"
              >
                <path
                  d="M213.147 0.0479074C253.608 -1.33222 285.739 27.4228 321.443 45.4493C364.279 67.0768 425.167 72.9852 442.491 115.84C459.768 158.581 422.299 202.655 401.739 244.079C383.838 280.144 362.634 313.131 331.323 339.816C296.632 369.382 259.766 401.785 213.147 404.812C165.262 407.922 115.951 388.518 82.5418 355.973C51.4793 325.713 56.0591 278.725 42.4986 238.574C29.044 198.736 -10.9548 161.408 3.48006 121.878C17.9198 82.3334 72.6655 74.5688 110.39 52.6485C144.405 32.8837 173.235 1.40933 213.147 0.0479074Z"
                  fill="#FAEDDB"
                  style="fill: #ffeff0;"
                ></path>
              </svg>
            </div>
            <img src="/images/terms-of-use.png" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
