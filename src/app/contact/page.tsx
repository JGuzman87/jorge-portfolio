"use client";
import { useState } from 'react';
import { ChangeEvent } from 'react';

import Form from "@/components/Form";
import Transition from "@/components/Transition";
const Contact = () => {

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    comment: "",
  });

  const handleChange = (

    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank You")
        console.log("Its Okay 👍🏽");
        await fetch('api/contact');

      } else {
        const errorData = await response.json();
        console.log("submition failed", errorData.message || "unknown error");
      }
    } catch (err) {
      console.error(err);
    }

    console.log(formData);
    setFormData({ email: "", name: "", comment: "" });
  };

  return (
   
      <div className="flex flex-col mt-auto">
         <Transition>
        <Form submit={handleSubmit} change={handleChange} form={formData} />
        </Transition>
      </div>

  );
};

export default Contact;
