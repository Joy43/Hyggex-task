import hygraph from "../../../assets/logo/hygraph.png";
import { FaSquarePlus } from "react-icons/fa6";
const Published = () => {
  return (
    <div className="flex justify-between">
      {/* --------icon site ---------*/}
      <div className="flex gap-2">
        <div>
          {" "}
          <img src={hygraph} alt="" />
        </div>
        <div className="grid gap-0">
          <p className="text-xl">Publish by </p>
          <h1 className="text-[40px]">HygeeX</h1>
        </div>
      </div>
      {/* -------- flashcard-------*/}
      <div className="flex  items-center">
        <p className="btn btn-outline text-2xl btn-primary">
          {" "}
          <FaSquarePlus></FaSquarePlus>Create Flashcard
        </p>
      </div>
    </div>
  );
};

export default Published;
