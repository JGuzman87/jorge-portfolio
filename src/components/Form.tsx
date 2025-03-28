import {ChangeEvent, useState} from 'react'


export default function Form() {

  const [formData, setFormData] = useState({email: '', name: '', comment: ''});

      // const [email, setEmail] = useState("");
      // const [name, setName] = useState("");
      // const [comment, setComment] = useState("");

      const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
      ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

  return (
    <form className="form shadow-lg shadow-gray-500/50">
      <label className="label-floating" htmlFor="email">
        Email:
      </label>
      <input
      value={formData.email} 
        name="email"
        type="email"
        placeholder="provide valid email"
        onChange={handleChange}
      />
      <label htmlFor="name">Name:</label>
      <input
        value={formData.name} 
        name="name"
        type="text"
        placeholder="enter name"
        onChange={handleChange}
      />
      <label htmlFor="comment">Comments:</label>
      <textarea
        value={formData.comment} 
        name="comment"
        placeholder="place comments"
        onChange={handleChange}
      ></textarea>
      <button
        className="btn btn-neutral btn-wide"
        onClick={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        Submit
      </button>
    </form>
  );
}

