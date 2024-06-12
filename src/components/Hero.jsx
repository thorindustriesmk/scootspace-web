import heroIcon from "../assets/icons/heroIcon.svg";

function Hero() {
  return (
    <>
      <div
        id="home"
        className="flex pt-20 w-full max-w-screen-xl h-auto bg-heroBg flex-col xl:flex-row items-center justify-center mb-10 "
      >
        <div className="flex flex-col lg:flex-row justify-center w-full">
          <div className="flex flex-col text-center xl:text-start items-center xl:items-start w-full lg:w-auto gap-5 mx-auto px-4 sm:px-8 pt-10 justify-start">
            <div className="font-aptos-black sm:text-5xl w-full lg:w-[531px] flex align-center max-xl:justify-center">
              Scoot In, Secure Up Welcome to ScootSpace Parking!
            </div>
            <div className="text-black text-base w-full lg:w-[531px]">
              Our hubs in Skopje offer convenience, sustainability, and
              security. Enjoy easy payments, free charging, and peace of mind as
              you explore the city. Discover a cleaner, greener way to get
              around."
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start  gap-5 w-full">
              <button className="flex w-full sm:w-44 font-aptos-semibold justify-center items-center text-white text-center py-2 px-3 border-primary bg-primary gap-2.5 border-2 rounded-2xl">
                Download the App
              </button>
              <button className="flex w-full sm:w-44 font-aptos-semibold justify-center items-center text-center text-black py-2 px-3 bg-white rounded-2xl gap-2.5 border-2 border-teal-500">
                How to park?
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-14 lg:pt-24 w-full lg:w-auto">
          <img src={heroIcon} alt="heroImage" className="w-fit xl:w-screen" />
        </div>
      </div>
      <div className="flex w-full flex-row text-center justify-center items-center"></div>
    </>
  );
}

export default Hero;
