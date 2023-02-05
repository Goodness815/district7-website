import React from "react";
import stayHappy from "../../assets/stayhappy.jpg";
import Footer from "../../components/landingPages/footer";
import { BiSearch } from "react-icons/bi";
// import Navbar from "../../components/landingPages/navbar";
import "./homePage.css";
import Navbar from "../../components/landingPages/navbar/nav2";
function Home() {
  return (
    <div>
      {/* Navbar  */}
      <Navbar />
      {/* // Showcase Section  */}
      <div className="h-screen w-full bg-header bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center">
        <div className="w-[80%] md:w-[70%] flex justify-between my-12 md:my-0">
          <input
            type="text"
            placeholder="Search Houses With Locations"
            className="w-[90%] h-[45px] py-[10px] px-[20px] transition-all duration-500 ease-linear focus:outline-[#05c002]"
          />
          <button className="py-0 px-[15px] h-[45px] border-none text-white flex items-center justify-center text-[25px] font-semibold bg-[#05c002]">
            <BiSearch />
          </button>
        </div>

        <div className="w-full p-8 d-flex flex-col items-center justify-center text-center">
          <h1 className="text-[42px] md:text-[64px] text-white font-bold font-header">
            Find Apartments and get Your{" "}
            <span className="text-[#05c002]">Dream Spaces</span>
          </h1>
          <p className="text-[12px] md:text-[16px] font-header font-normal mt-[20px] mb:mt-[30px] text-white">
            We provide access to thousands of house listings in any area of your
            choice. The best stress free way of securing suitable accomodation
          </p>
        </div>
      </div>

      {/* What We Offer Section  */}
      <div className="h-full py-[50px] flex flex-col items-center justify-center">
        <h1 className="font-header text-[30px] md:text-[40px] font-semibold">
          What we offer
        </h1>
        <div className="offer-inner d-flex align-items-center justify-content-center flex-wrap">
          <div className="offer-item">
            <h3>Stress free</h3>
            <p>
              We make search for houses easy as this could be done from the
              comfort of your homes.
            </p>
          </div>
          <div className="offer-item">
            <h3>Cheap rate</h3>
            <p>
              We offer the cheapest apartments for rent by eliminating the cost
              of middle man.
            </p>
          </div>
          <div className="offer-item">
            <h3>High Quality</h3>
            <p>We recommend the best type of houses for rent.</p>
          </div>
          <div className="offer-item">
            <h3>Secured Transaction</h3>
            <p>
              We strictly monitor all payments and ensure all transactions are
              secured.
            </p>
          </div>
          <div className="offer-item">
            <h3>Comfortability</h3>
            <p>We help you create a comfortable space for yourself & family.</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-12">
          <button className="border-none block bg-[#05c002] w-full md:w-[30%] py-[10px] font-header  text-white text-[20px] font-semibold mt-[20px]">
            Get Started
          </button>
          <span className="font-header text-[10px] font-normal mt-[10px]">
            {/* Join our waitlist to know when we go live */}
          </span>
        </div>
      </div>

      {/* Stay Happy Section  */}
      <div className="h-full w-full my-[50px] flex flex-col md:flex-row items-center justify-center gap-4 p-12">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={stayHappy}
            alt=""
            className="w-full md:w-[80%] object-cover"
          />
        </div>
        <div className="flex-1 flex items-center place-content-center">
          <div>
            <h1 className="font-header text-[30px] md:text[50px] font-semibold mb-2">
              Stay happy with your refunds
            </h1>
            <p className="text-[15px] font-header font-normal my-8 text-justify">
              We ensure you are refunded within 2 days of request if you are not
              satisfied with our houses.
            </p>
            <div className="font-header w-full ">
              <button className="border-none block bg-[#05c002] w-full md:w-[30%] py-[10px] font-header  text-white text-[20px] font-semibold mt-[20px] shadow-md mb-2">
                Get Started
              </button>
              <span className="font-header text-[10px] font-normal mt-[10px] text-center md:text-left">
                {/* Join our waitlist to know when we go live */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Find the best tenants Section  */}
      <div className="h-[90vh] md:h-screen w-full bg-no-repeat bg-cover bg-center bg-best-tenants flex flex-col items-center box-border">
        <div className="w-[80%] mt-[50px] mb-[30px]">
          <h2 className="font-header text-[22px] font-semibold text-[#05c002]">
            For Agents & Landlords
          </h2>
        </div>
        <div className="min-h-[70vh] !w-full flex items-center justify-center">
          <div className="w-[80%] md:w-[55%] flex flex-column justify-center align-center">
            <h1 className="font-header text-[35px] md:text-[50px] font-bold text-center text-white">
              Find the best <span className="text-[#05c002]">Tenants</span> for
              Your Houses listed
            </h1>
            <p className="font-header text-[12px] md:text-[15px] font-normal text-[#e6e6e6] my-[14px] text-center">
              We provide access to thousands of tenants listings for any of your
              houses. The best stress free way of securing potential responsible
              customers.
            </p>
            <div className="w-full flex flex-col items-center justify-center">
              <button className="border-none block bg-[#05c002] w-full md:w-[30%] py-[10px] font-header  text-white text-[20px] font-semibold mt-[20px]">
                Get Started
              </button>
              <span className="font-header text-[10px] font-normal text-[#e6e6e6] mt-[10px]">
                {/* Join our waitlist to know when we go live */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default Home;