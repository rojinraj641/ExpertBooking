import { FiStar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const ExpertCard = () => {
  return (
    <div className="w-fit bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-5">

      {/* Top section */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <FiUser size={28} />
        </div>

        {/* Name and category */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Mr. Rajkumar
          </h2>

          <p className="text-sm text-gray-500">
            Senior Developer
          </p>
        </div>

      </div>

      {/* Rating and experience */}
      <div className="flex items-center gap-8 mt-4">

        <div className="flex items-center gap-1 text-yellow-500 font-medium">
          <FiStar />
          <span className="text-gray-700">4.5</span>
        </div>

        <div className="text-sm text-gray-600">
          2+ years experience
        </div>

      </div>

      {/* Category badge */}
      <div className="mt-3">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
          Web Development
        </span>
      </div>

      {/* Button */}
      <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-200">
        View Details
      </button>
    </div>
  );
};

export default ExpertCard;