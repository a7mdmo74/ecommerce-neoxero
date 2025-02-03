import Image from "next/image";

export const Music = () => {
  return (
    <div className="w-full bg-black py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-start justify-center text-white gap-6">
            <h2 className="text-emerald-600 font-semibold">Categories</h2>
            <p className="text-xl md:text-4xl max-w-xs leading-loose font-semibold">
              Enhance Your Music Experience
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
                <p>23</p>
                <span>Hours</span>
              </div>
              <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
                <p>05</p>
                <span>Days</span>
              </div>
              <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
                <p>59</p>
                <span>Minutes</span>
              </div>
              <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
                <p>33</p>
                <span>Sec</span>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/music.png"
            alt="Music"
            width={400}
            height={300}
            className="object-cover shadow-sm shadow-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
