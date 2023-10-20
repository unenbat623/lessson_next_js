import React from "react";
import { ContactBig, ContactForm } from "@/components/ContactSection";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto h-[895px] w-[895px]  ">
        <ContactBig />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
