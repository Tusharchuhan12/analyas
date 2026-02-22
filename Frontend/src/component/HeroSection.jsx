import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative w-full flex justify-center mt-6 sm:mt-11 font-poppins px-4">

      {/* Background */}
      <div
        className="relative w-full max-w-[1334px] h-[260px] sm:h-[400px] rounded-[24px] sm:rounded-[34px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Blur Overlay */}
        <div className="absolute bottom-0 w-full h-[120px] sm:h-[208px] backdrop-blur-[2px] rounded-b-[24px] sm:rounded-b-[34px]" />

        {/* Text */}
        <div className="absolute bottom-6 sm:bottom-[90px] left-5 sm:left-[105px] text-white">
          <h1 className="text-xl sm:text-[48px] font-bold leading-tight">
            Featured Properties For Sale
          </h1>
          <p className="text-sm sm:text-[20px] text-[#EEEEEE] mt-2 max-w-[90%]">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className="
        
        absolute 
        bottom-[-250px] sm:bottom-[-70px]
       w-full max-w-[1334px]
        bg-white
        rounded-[24px] sm:rounded-[46px]
        shadow-[8px_12px_48.9px_rgba(0,0,0,0.15)]
        flex flex-col sm:flex-row
        gap-4 sm:gap-6
        p-4 sm:px-8 sm:h-[90px]
        "
      >

        {/* For Buying */}
        <div className="w-full sm:w-[263px] h-[52px] sm:h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
          <div className="flex items-center gap-3 text-sm sm:text-[18px]">
            <span>🔀</span>
            <span>For Buying</span>
          </div>
          <span>⌄</span>
        </div>

        {/* House */}
        <div className="w-full sm:w-[263px] h-[52px] sm:h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
          <div className="flex items-center gap-3 text-sm sm:text-[18px]">
            <span>🏠</span>
            <span>House</span>
          </div>
          <span>⌄</span>
        </div>

        {/* Location */}
        <div className="w-full sm:w-[263px] h-[52px] sm:h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
          <div className="flex items-center gap-3 text-sm sm:text-[18px]">
            <span>📍</span>
            <span>Indonfesiaff</span>
          </div>
          <span>⌄</span>
        </div>

        {/* Button */}
        <button className="w-full sm:w-[194px] h-[52px] sm:h-[58px] bg-[#1E3A8A] rounded-[31px] text-white text-sm sm:text-[18px] font-semibold">
          Find Property
        </button>
      </div>
    </div>
  );
};

export default HeroSection;