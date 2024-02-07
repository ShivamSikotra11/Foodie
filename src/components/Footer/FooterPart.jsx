const FooterPart = () => {
  return (
    <div className="">
      <div className="py-8 px-4 ">
        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
          Links
        </h1>
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterPart;
