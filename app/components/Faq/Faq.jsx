import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 w-6/12 max-sm:w-9/12 m-4">
      <h1 className="text-4xl font-bold text-center mt-4">FAQ's</h1>
      <div className="text-gray-600 text-md text-center mt-2">
        Frequently asked questions about the Program
      </div>
      <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
    </div>
  );
};

export default FAQ;
