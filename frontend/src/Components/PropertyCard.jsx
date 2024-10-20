import propertyImage from "../assets/propertyImage.png";
import data from "../assets/data.json";
import area from "../assets/area.png";
import cost from "../assets/cost.png";
import kumar from "../assets/kumar.png";
import time from "../assets/time.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = () => {
  return (
    <div className="">
      {data.map((property, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden my-3 mx-3 md:ml-14"
        >
          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <div className="flex flex-row">
              <img
                className="w-1/3 h-auto object-cover"
                src={propertyImage}
                alt="Property"
              />
              <div className="p-4 w-2/3">
                {" "}
                {/* Makes the text content take up the remaining width */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold">{property.title}</h2>
                  <span className="bg-[#FDE7D7] px-2 py-1 rounded-md text-sm sm:text-xs">
                    Ready To Move
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
                  {property.location}
                </p>
                <p className="font-medium mb-2">Configuration</p>
                {/* Configuration Carousel */}
                <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
                  {" "}
                  {/* Add hide-scrollbar to remove default scrollbar */}
                  {property.configurations.map((config, configIndex) => (
                    <div
                      key={configIndex}
                      className="flex-shrink-0 bg-[#FFF6EF] p-3 rounded-lg min-w-[140px]"
                    >
                      <p className="text-xl font-bold">{config.type}</p>
                      <div className="flex items-center mt-1">
                        <img className="w-3 h-3" src={area} alt="size" />
                        <span className="text-sm text-gray-600 ml-2">
                          {config.size}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <img className="w-3 h-3" src={cost} alt="cost" />
                        <p className="text-orange-500 font-bold ml-2">
                          {config.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* other info  */}
                <div className="flex gap-2 mt-4">
                  <span className="text-sm bg-[#FFF6EF] text-[#FF7A00] px-3 py-1 rounded">
                    {property.emiInfo}
                  </span>
                  <span className="text-sm bg-[#FDE7D7] text-black px-3 py-1 rounded-full">
                    {property.brokerage}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center">
                    <img
                      src={kumar}
                      alt="Kumar Corp"
                      className="w-8 h-8 rounded"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">Kumar Corp</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      View More
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex">
            <div className="shrink-0">
              <img
                className="h-96 w-full object-cover p-4"
                src={propertyImage}
                alt="Property"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center mr-24">
                  <div className="uppercase tracking-wide text-xl text-black font-extrabold">
                    {property.title}
                  </div>
                  <div className="bg-[#F3FFDA] text-xs rounded-sm p-1 text-gray-400">
                    RERA
                  </div>
                </div>
                <div className="bg-[#FDE7D7] px-3  font-semibold rounded-md py-1">
                  Ready To Move
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
                {property.location}
              </p>

              <p className="mt-4 font-medium">Configuration</p>
              <div className="mt-4 flex gap-4">
                {property.configurations.map((config, configIndex) => (
                  <div
                    key={configIndex}
                    className="bg-[#FFF6EF] p-4 rounded-lg"
                  >
                    <p className="text-2xl font-bold">{config.type}</p>
                    <div className="flex items-center mt-2">
                      <img className="w-3 h-3" src={area} alt="size" />
                      <span className="text-sm text-gray-600 ml-2">
                        {config.size}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <img className="w-3 h-3" src={cost} alt="cost" />
                      <p className="text-orange-500 text-lg font-bold ml-2">
                        {config.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <span className="text-sm bg-[#FFF6EF] text-[#FF7A00] px-3 py-1 rounded">
                  {property.emiInfo}
                </span>
                <span className="text-sm bg-[#FDE7D7] text-black font-bold px-3 py-1 rounded-full">
                  {property.brokerage}
                </span>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={kumar}
                    alt="Kumar Corp"
                    className="w-8 h-8 rounded"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">Kumar Corp</p>
                    <p className="text-xs text-gray-600">Developer</p>
                  </div>
                  <div className="border-l border-gray-300 h-6 mx-4"></div>
                  <img src={time} alt="Posted time" className="w-4 h-4" />
                  <p className="text-sm text-gray-400 ml-2">5 Days ago</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-sm font-medium border border-black bg-gray-100 rounded-md hover:bg-gray-200">
                    View More
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
