"use client";

import React from "react";
import Form from "@/components/Form";
import Transition from "@/components/Transition";
const Contact = () => {

  return (
    <div className="flex flex-col mt-auto">
      <Transition>
        <Form />
      </Transition>
    </div>
  );
};

export default Contact;
