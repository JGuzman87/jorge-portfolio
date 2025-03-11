"use client";
import { useState, useEffect } from "react";

import React from "react";

const Contact = () => {


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  
    useEffect(() => {
      
      if (email.includes('@')) {
        console.log("not a valid email");
      } else if(name !== '') {
        console.log("a name is being provided");
      } else if(comment.length === 5) {
        console.log("a comment is being typed");
      }
      
    }, [comment, email, name]);

  return (
    <form className="form shadow-lg shadow-cyan-500/50">
      <label className="label-floating" htmlFor="email">
        Email:
      </label>
      <input
        value={email}
        name="email"
        type="email"
        placeholder="provide valid email"
        onChange={(e) => setEmail(e.target.value) }
      />
      <label htmlFor="name">Name</label>
      <input value={name} name="name" type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="comment">Comments</label>
      <textarea value={comment} name="comment" placeholder="place comments" onChange={(e) => setComment(e.target.value)}></textarea>
      <button className="btn btn-neutral btn-wide" onClick={(e) => {e.preventDefault(); console.log('hello')}}>Submit</button>
    </form>
  );
};

export default Contact;
