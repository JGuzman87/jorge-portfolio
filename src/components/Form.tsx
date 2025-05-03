
interface FormProps {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  form: {
    email: string;
    name: string;
    comment: string;
  };
}

export default function Form({ submit, change, form }: FormProps) {

  

  return (
    <form className="form shadow-md w-full md:max-w-1/2 shadow-gray-500/50 rounded-xl" onSubmit={submit}>
      
      <label className="label-floating" htmlFor="email">
        Email:
      </label>
      <input
      value={form.email} 
        name="email"
        type="email"
        placeholder="provide valid email"
        onChange={change}
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        value={form.name} 
        name="name"
        type="text"
        placeholder="enter name"
        onChange={change}
        required
      />
      <label htmlFor="comment">Comments:</label>
      <textarea
        value={form.comment} 
        name="comment"
        placeholder="place comments"
        onChange={change}
        required
      ></textarea>
      <button
        className="btn btn-neutral btn-wide transition-all" type="submit"
      >
        Submit
      </button>
    </form>
  );
}
