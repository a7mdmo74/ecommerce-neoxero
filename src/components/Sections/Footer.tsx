import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaApple, FaFacebook, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Exclucive</h3>
            <p className="text-gray-400">Subscribe</p>
            <p className="text-gray-400">Get 10% off your first order</p>

            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-10 bg-transparent border-gray-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li>111 Bijoy Sarani</li>
              <li>Dh 1515</li>
            </ul>
            <p>exclucive@gmail.com</p>
            <p>(555) 123-4567</p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Account</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Quick Link</h3>
            <ul className="space-y-2">
              <li>privacy policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Content</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="flex items-center justify-between gap-2">
              <Image
                src="/qr.png"
                width={200}
                height={200}
                alt="QR Code"
                className="w-24 h-24"
              />
              <div className="flex flex-col gap-2">
                <button className="bg-transparent text-white border border-white px-4 py-1 rounded">
                  <div className="flex items-center justify-start gap-2">
                    <FaGooglePlay />
                    <div className="flex flex-col items-start">
                      <p className="text-[10px]">Get it on</p>
                      <p className="text-xs">Google Play</p>
                    </div>
                  </div>
                </button>
                <button className="bg-transparent text-white border border-white px-4 py-1 rounded">
                  <div className="flex items-center justify-start gap-2">
                    <FaApple />
                    <div className="flex flex-col items-start">
                      <p className="text-[10px]">Download on</p>
                      <p className="text-xs">App Store</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              {/* Social Links */}
              <FaFacebook className="text-2xl text-gray-400 hover:text-white" />
              <BsTwitter className="text-2xl text-gray-400 hover:text-white" />
              <BsLinkedin className="text-2xl text-gray-400 hover:text-white" />
              <BsGithub className="text-2xl text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-700" />
      <div className="flex items-center justify-center py-4">
        <p className="text-gray-400 text-sm">
          &copy; 2022 Rimel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
