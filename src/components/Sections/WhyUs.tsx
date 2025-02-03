import { FaHeadset, FaRocket, FaShieldAlt } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 bg-black flex items-center justify-center rounded-full border-[8px] border-neutral-200">
            <FaRocket className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p className="text-center">
            Lightning-quick load times and smooth user experience
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 bg-black flex items-center justify-center rounded-full border-[8px] border-neutral-200">
            <FaShieldAlt className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">High Security</h3>
          <p className="text-center">
            Advanced protection for your data and privacy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 bg-black flex items-center justify-center rounded-full border-[8px] border-neutral-200">
            <FaHeadset className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-center">
            Round-the-clock assistance whenever you need help
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
