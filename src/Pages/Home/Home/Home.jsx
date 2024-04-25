import Cover from "../Cover/Cover";
import FaqPage from "../Faq/FaqPage";
import Published from "../Published/Published";

const Home = () => {
  return (
    <div className="bg-[#F9F9F9] p-4">
      <div>
        <Cover></Cover>
      </div>
      <div>
        <Published></Published>
      </div>
      <div>
        <FaqPage></FaqPage>
      </div>
    </div>
  );
};

export default Home;
