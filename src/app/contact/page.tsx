import React from 'react'

const Contact = () => {
  return (
    <form className="form shadow-lg shadow-cyan-500/50">
      <label
        className="label-floating"
        htmlFor="email"
      >
        Email:
      </label>
      <input name="email" type="email" placeholder="provide valid email" />
      <label htmlFor="name">Name</label>
      <input name="name" type="text" placeholder="enter name" />
      <label htmlFor="comment">Comments</label>
      <textarea name="comment" placeholder="place comments"></textarea>
      <button className="btn btn-neutral btn-wide">Submit</button>
    </form>
  );
}

export default Contact