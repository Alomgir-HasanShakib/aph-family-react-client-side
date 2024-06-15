import Banner from "../../Components/Banner/Banner";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";
import PetCategory from "../../Components/PetCategory/PetCategory";
import CTA from "./CTA";

const Home = () => {
  return (
    <>
      <DynamicTitle title="Home"></DynamicTitle>
      <div className="pt-24  bg-[#FCEED5]">
        <Banner></Banner>
      </div>
      {/* // pet category */}
      <PetCategory></PetCategory>

      <CTA></CTA>
    </>
  );
};

export default Home;
