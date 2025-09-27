import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Page404 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen">
      <div className={`relative text-center z-10 pt-[20vh] ${isVisible ? "animate-fade-in" : ""}`}>
        <h1 className="text-3xl text-red-400 md:text-5xl lg:text-7xl xl:text-9xl font-black mb-4 animate-pulse">
          Error <span className="inline-block animate-bounce delay-100">4</span>
          <span className="inline-block animate-bounce delay-200">0</span>
          <span className="inline-block animate-bounce delay-300">4</span>
        </h1>
        <div className="w-3/4 h-2  mx-auto rounded-full overflow-hidden">
          <div className="h-full w-full rounded-full animate-bounce"></div>
        </div>
      </div>

      <p className="text-sm md:text-xl lg:text-2xl mt-4 text-center font-light">
        <b>We're sorry, </b>Page Not Found!
        <br /> you're looking for something else.
      </p>

      <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
        <Link
          to={"/"}
          className="px-4 py-3 border border-blue-400  hover:text-blue-500 shadow-lg rounded-md flex items-center gap-4 text-sm font-medium transition-all duration-200 transform hover:scale-[1.1]"
        >
          <ArrowLeft className="w-6 h-6" />
          Back To Home
        </Link>
        <Link
          to={""}
          className="px-4 py-3 border border-blue-400  hover:text-blue-500 shadow-lg rounded-md flex items-center gap-4 text-sm font-medium transition-all duration-200 transform hover:scale-[1.1]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Page404;