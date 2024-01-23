const Header = (props) => {
  const { judul, clasname, bg } = props;
  return (
    <div className={`${bg} container p-5 mx-auto border border-teal-600`}>
      <h1 className={`${clasname} font-bold text-center`}>{judul}</h1>
    </div>
  );
};

export default Header;
