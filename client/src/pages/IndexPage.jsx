import { TbBrandAirbnb } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";

const IndexPage = () => {
  return (
    <div>
      <header className="p-4 flex justify-between">
        <a href="#" className="flex items-center gap-1">
          <TbBrandAirbnb className="w-8 h-8 text-primary" />
          <span className="font-bold text-xl">airbnb</span>
        </a>
        <div className="flex gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Any where</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary p-1 rounded-full">
            <BiSearchAlt2 className="w-4 h-4 text-[#fff]" />
          </button>
        </div>
        <div className="flex items-center gap-2 border-gray-300 rounded-full py-2 px-4 shadow shadow-gray-300">
          <GiHamburgerMenu size={20} />
          <CgPokemon
            size={20}
            color="white"
            className="bg-primary rounded-full"
          />
        </div>
      </header>
    </div>
  );
};

export default IndexPage;
