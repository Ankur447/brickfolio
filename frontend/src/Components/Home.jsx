import PropertyCard from "./PropertyCard";
// assets imports
import zeroCard from "../assets/zeroCard.png";
import ZEROBrokarage from "../assets/ZEROBrokarage.png";
const Home = () => {
  return (
    <div className="flex bg-gray-100 h-auto">
      <PropertyCard/>
        <div className="hidden md:flex flex-col md:ml-10 w-auto  ">
          {/* Main Card */}
          <div className="bg-white shadow-lg border border-black rounded-lg p-4 mb-4 flex flex-col  items-center transition duration-500 hover:scale-105 ">
            {/* Image Section */}
            <div className="flex flex-col space-y-2 mb-6">
              <img
                src={zeroCard}
                alt="Zero Card 1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex space-y-2 w-50">
              <img
                src={ZEROBrokarage}
                alt="Zero Card 1"
                className="w-full h-auto rounded"
              />
            </div>
            {/* Text Section */}
            <p className="text-center font-semibold font-poppins p-8">
              We never charge on home purchases, <br />offering you expert guidance
              without any hidden fees or <br /> extra costs.
            </p>
          </div>
          {/* Enquire Now Form */}
          <div className="bg-white shadow-lg mt-12 border border-gray-300 rounded-lg p-4 transition duration-500 hover:scale-105">
            <h2 className="text-3xl text-center font-bold mb-4">Need Help?</h2>
            <h4 className="text-md text-center mb-6">
              Get in touch with Brickfolio Expert for free Consultation
            </h4>
            <form>
              <div className="mb-7">
                <input
                  type="text"
                  id="name"
                  className="border font-semibold border-gray-300 rounded-md p-2 w-full bg-[#F4F4F4]"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-7">
                <input
                  type="tel"
                  id="phone"
                  className="border font-semibold border-gray-300 rounded-md p-2 w-full bg-[#F4F4F4]"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-7">
                <input
                  type="email"
                  id="email"
                  className="border font-semibold border-gray-300 rounded-md p-2 w-full bg-[#F4F4F4]"
                  placeholder="Email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#FF7A00] text-white rounded-md px-4 py-2 hover:bg-blue-600 w-full"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
export default Home;
