import {useState} from 'react'

export default function Form() {

      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [comment, setComment] = useState("");

  return (
    <form className="form shadow-lg shadow-gray-500/50">
      <label className="label-floating" htmlFor="email">
        Email:
      </label>
      <input
      value={email}
        name="email"
        type="email"
        placeholder="provide valid email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="name">Name:</label>
      <input
        value={name}
        name="name"
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="comment">Comments:</label>
      <textarea
        value={comment}
        name="comment"
        placeholder="place comments"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        className="btn btn-neutral btn-wide"
        onClick={(e) => {
          e.preventDefault();
          console.log("hello");
        }}
      >
        Submit
      </button>
    </form>
  );
}

