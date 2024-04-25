import hygraph from "../../../assets/logo/hygraph.png";
const Published = () => {
  return (
    <div className="flex justify-between">
      {/* --------icon site ---------*/}
      <div className="flex gap-2">
        <div>
          {" "}
          <img src={hygraph} alt="" />
        </div>
        <div className="grid">
          <p className="text-xl">Publish by </p>
          <h1 className="tex-3xl">HygeeX</h1>
        </div>
      </div>
      {/* -------- flashcard-------*/}
      <div></div>
    </div>
  );
};

export default Published;
