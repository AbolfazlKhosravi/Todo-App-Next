import { FaTrashAlt, FaCheckSquare, FaEdit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-start ">
      <header className="flex flex-col items-center my-4 md:my-6">
        <h1 className="font-bold text-white text-2xl mb-2 md:text-3xl">
          To Do List App Using Next & Api Routes & Tailwind Css
        </h1>
      </header>
      <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-lg">
        <div>
          <div className="bg-white w-72 flex  px-2 py-1 rounded-sm mt-2 justify-between items-center md:w-96 md:h-10">
            <p className={`text-gray-900 font-bold md:text-lg `}>reat 1</p>
            <div className="flex items-center justify-between">
              <button className="text-blue-700 text-lg">
                <FaCheckSquare />
              </button>
              <button className="text-green-700 ml-2 text-lg">
                <FaEdit />
              </button>
              <button className="text-red-700 ml-2 text-[1rem]">
                <FaTrashAlt />
              </button>
            </div>
          </div>
          <div className="bg-white w-72 flex  px-2 py-1 rounded-sm mt-2 justify-between items-center md:w-96 md:h-10">
            <p className={`text-gray-900 font-bold md:text-lg `}>reat 2</p>
            <div className="flex items-center justify-between">
              <button className="text-blue-700 text-lg">
                <FaCheckSquare />
              </button>
              <button className="text-green-700 ml-2 text-lg">
                <FaEdit />
              </button>
              <button className="text-red-700 ml-2 text-[1rem]">
                <FaTrashAlt />
              </button>
            </div>
          </div>
          <div className="bg-white w-72 flex  px-2 py-1 rounded-sm mt-2 justify-between items-center md:w-96 md:h-10">
            <p className={`text-gray-900 font-bold md:text-lg`}>reat 3</p>
            <div className="flex items-center justify-between">
              <button className="text-blue-700 text-lg">
                <FaCheckSquare />
              </button>
              <button className="text-green-700 ml-2 text-lg">
                <FaEdit />
              </button>
              <button className="text-red-700 ml-2 text-[1rem]">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
