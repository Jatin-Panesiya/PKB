import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#002503] relative">
      <div className="container mx-auto flex justify-between items-center text-white p-4">
        <div className="uppercase">PickaBookie</div>
        <div className="sm:grow justify-center flex">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="sm:hidden"
          >
            {isMenuOpen ? <IoCloseOutline size={30} /> : <IoMdMenu size={30} />}
          </button>

          <div
            className={`sm:flex ${
              isMenuOpen ? "max-sm:grid" : "max-sm:hidden"
            } gap-4 max-sm:absolute max-sm:top-[56px] max-sm:bg-[#002503] max-sm:w-full max-sm:left-0 max-sm:justify-center max-sm:text-center max-sm:py-4`}
          >
            <div className="uppercase text-[#b2b320] font-semibold">
              Top Sites
            </div>
            <div className="uppercase text-[#b2b320] font-semibold">
              Ai Tips
            </div>
            <div className="uppercase text-[#b2b320] font-semibold">News</div>
            <div className="uppercase text-[#b2b320] font-semibold">Faqs</div>
            <div className="uppercase text-[#b2b320] font-semibold">
              Responsible Gambling
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
