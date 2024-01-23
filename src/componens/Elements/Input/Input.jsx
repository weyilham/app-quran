const Input = (props) => {
  const { type, placeholder, id, onkeypress = () => {} } = props;

  return (
    <div className="container mx-auto my-2">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full h-12 p-6 border-2 border-teal-500 focus:border-blue-700 focus:outline-none"
        onKeyPress={onkeypress}
      />
    </div>
  );
};

export default Input;
