import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 w-6/12 max-sm:w-9/12 m-4">
      <h1 className="text-4xl font-bold text-center mt-4" id="Faq">
        FAQ's
      </h1>
      <div className="text-gray-600 text-md text-center mt-2">
        Frequently asked questions about the Program
      </div>
      <Accordion
        title="What is jetpack compose ?"
        answer="
        Jetpack Compose is a modern, fully declarative UI toolkit for building native Android applications. It is a part of the Android Jetpack libraries and is designed to simplify and accelerate UI development on Android. Compose provides a concise and intuitive way to build user interfaces using Kotlin programming language."
      />
      <Accordion
        title="What are the perks of this camp?"
        answer="Learning Opportunities
        Skill Development
        Hands-On Experience
        Networking
        Community Engagement
        Access to Experts
        Resume Building
        Project Showcase
        Certificates and Recognition
        Career Opportunities
        Personal Growth
        Fun and Engaging Environment"
      />
      <Accordion
        title="Is this beginner Friendly?"
        answer="Whether you’re a beginner or ready to master Jetpack Compose, learn about the latest development tools and APIs to build better Android apps.
        "
      />
      <Accordion
        title="Is this Camp Expensive?"
        answer="No, its Absolutely Free!"
      />
      <Accordion
        title="Is this Camp Online?"
        answer="Yes, this camp is completely online"
      />
    </div>
  );
};

export default FAQ;
