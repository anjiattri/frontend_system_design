const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
      <form className="block p-4 m-4">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-blue-600 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
