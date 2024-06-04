import Banner from "../../Components/Banner/Banner";
import PetCategory from "../../Components/PetCategory/PetCategory";

const Home = () => {
  return (
    <>
      <div className="pt-24  bg-[#FCEED5]">
        <Banner></Banner>
      </div>
      {/* // pet category */}
      <PetCategory></PetCategory>
    </>
  );
};

export default Home;
