
import hero from "../assets/hero.png";

const HeroSection = () => {
    
    return (
        <div className="relative w-full flex justify-center mt-10 font-poppins">

            {/* Background */}
            <div
                className="relative w-[1334px] h-[400px] rounded-[34px] bg-cover bg-center"
                style={{ backgroundImage: `url(${hero})` }}
            >
                {/* Blur Overlay */}
                <div className="absolute bottom-0 w-full h-[208px]  backdrop-blur-[2px] rounded-b-[34px]" />

                {/* Text */}
                <div className="absolute bottom-[90px]  left-[30px] sm:left-[105px] text-white">
                    <h1 className="text-3xl font-bold  sm:text-[48px]">
                        Featured Properties For Sale
                    </h1>
                    <p className="text-[20px] sm:text-[20px] text-[#EEEEEE] mt-2">
                        Discover, Buy, or Rent Verified Properties with Ease.
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className=" absolute bottom-[-70px] w-[1106px] h-[90px] bg-white rounded-[46px] shadow-[8px_12px_48.9px_rgba(0,0,0,0.15)] flex  items-center gap-6 px-8">

                {/* For Buying */}
                <div className="w-[263px] h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
                    <div className="flex items-center gap-3 text-[18px] text-[#1E1E1E]">
                        <span>🔀</span>
                        <span>For Buying</span>
                    </div>
                    <span className="text-xl">⌄</span>
                </div>

                {/* House */}
                <div className="w-[263px] h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
                    <div className="flex items-center gap-3 text-[18px] text-[#1E1E1E]">
                        <span>🏠</span>
                        <span>House</span>
                    </div>
                    <span className="text-xl">⌄</span>
                </div>

                {/* Location */}
                <div className="w-[263px] h-[58px] border border-[#979797] rounded-[31px] flex items-center justify-between px-5">
                    <div className="flex items-center gap-3 text-[18px] text-[#1E1E1E]">
                        <span>📍</span>
                        <span>Indonesia</span>
                    </div>
                    <span className="text-xl">⌄</span>
                </div>

                {/* Button */}
                <button className="w-[194px] h-[58px] bg-[#1E3A8A] rounded-[31px] text-white text-[18px] font-semibold">
                    Find Property
                </button>

            </div>
        </div>
    );
};

export default HeroSection;
