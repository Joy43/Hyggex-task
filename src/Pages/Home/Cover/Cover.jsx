import { GoHome } from "react-icons/go";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Covercarosel } from "./Covercarosel";
const Cover = () => {
  return (
    <div>
      <div className="flex mt-6 items-center text-2xl">
        <GoHome />
        <MdOutlineNavigateNext />
        <h1>Flashcard</h1>
        <MdOutlineNavigateNext />
        <h1>Mathmatics</h1>
        <MdOutlineNavigateNext />
        <h1>Relation and Function</h1>
      </div>
      <div className="">
        <h1 className="mt-6 text-3xl text-[#06286E]">
          Relations and Functions ( Mathematics )
        </h1>
      </div>
      <div className="mt-8">
        <Covercarosel></Covercarosel>
      </div>
    </div>
  );
};

export default Cover;
