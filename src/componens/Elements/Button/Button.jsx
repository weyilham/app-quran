const Button = (props) => {
  const {
    type = "button",
    classname = "bg-blue-700",
    children = "Button",
  } = props;
  return (
    <button type={type} className={`${classname} shadow-sm text-slate-800 p-2`}>
      {children}
    </button>
  );
};

export default Button;
