import { useEffect, useState } from "react";

const FlashCard = () => {
  const [flashcard, setflashcard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://bistro-boss-server-with-cart-part-4.vercel.app/task")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setflashcard(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(flashcard);
  return (
    <div className="grid lg:grid-cols-2 gap-3 p-4 sm:grid-cols-1 ">
      {flashcard.map((flash, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={flash.fileUpload} alt="car!" />
          </figure>
          <div className="card-body">
            <div className="flex gap-1 justify-around">
              <h2 className="card-title"> {flash.emailAddress}</h2>
            </div>
            <div className="card-actions flex gap-2 ">
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold mt-2"> {flash.name}</h3>
                <p className="text-sm text-gray-100">
                  Rating <span>{flash.Rating}</span>
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg text-gray-100 font-semibold mt-2">
                  {flash?.priority}
                </h3>
                <p className="text-sm text-gray-300">{flash?.date}</p>
              </div>
            </div>
            <div className="mt-3 text-lg">
              <h1>{flash.textarea}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashCard;
