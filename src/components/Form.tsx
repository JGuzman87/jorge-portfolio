import {ChangeEvent, useState} from 'react'


export default function Form() {

  const [formData, setFormData] = useState({email: '', name: '', comment: ''});

      const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
      ) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData({email: '', name:'', comment: ''})
      };

  return (
    <form className="form shadow-md w-full md:max-w-1/2 shadow-gray-500/50 rounded-xl" onSubmit={handleSubmit}>
      
      <label className="label-floating" htmlFor="email">
        Email:
      </label>
      <input
      value={formData.email} 
        name="email"
        type="email"
        placeholder="provide valid email"
        onChange={handleChange}
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        value={formData.name} 
        name="name"
        type="text"
        placeholder="enter name"
        onChange={handleChange}
        required
      />
      <label htmlFor="comment">Comments:</label>
      <textarea
        value={formData.comment} 
        name="comment"
        placeholder="place comments"
        onChange={handleChange}
        required
      ></textarea>
      <button
        className="btn btn-neutral btn-wide" type="submit"
      >
        Submit
      </button>
    </form>
  );
}
