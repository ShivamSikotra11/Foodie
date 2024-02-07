const TestimonialUnit = ({data}) => {
  return (
    <div className="my-6">
      <div
        key={data.id}
        className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
      >
        <img
          className="rounded-full block mx-auto w-[70px] h-[70px] object-cover"
          src={data.img}
          alt=""
        />
        <p className="text-gray-500 text-sm line-clamp-3 w-[90%] hover:line-clamp-none text-justify transition ">{data.text}</p>
        <h1 className="text-xl font-bold">{data.name}</h1>
      </div>
    </div>
  );
}

export default TestimonialUnit;