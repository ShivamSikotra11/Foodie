const Header = ({ val, content }) => {

  return (
    <div className="text-center mb-20 max-w-[400px] mx-auto">
      {/* New Thing */}
      <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Our {val}
      </p>
      {/* New Thing */}
      <h1 className="text-3xl font-bold mb-2">{val}</h1>
      <p className="text-sm text-gray-400 ">
        {content}
      </p>
    </div>
  );
};
export default Header;
