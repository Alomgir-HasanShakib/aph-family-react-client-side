import usePets from "../../hooks/usePets";
import banner from "../../assets/parrot.jpg";
import PetCard from "../../Components/PetCard/PetCard";
import { Dropdown, DropdownItem } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";

const Petlisting = () => {
  const [pets] = usePets();
  const [filterPets, setFilterPets] = useState("All");
  const [query, setQuery] = useState("");
  // this filter for will give only not Adopted pet 
  const notAdoptedData = pets.filter((pet) => pet.adopted === false);

  const filterData = notAdoptedData.filter(
    (pets) => filterPets === "All" || pets.category.toLowerCase() === filterPets
  );

  return (
    <div>
      <DynamicTitle title="Pet List"></DynamicTitle>
      <div
        className="bg-cover bg-center h-[800px]"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="text-center mt-16 ">
        <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-blue-900 pb-3">
          Need Any Pets?
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-blue-950">
          Adopt from Here!
        </h2>
      </div>
      <div className="container mx-auto"></div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto mt-16 bg-white p-4 shadow-lg gap-5 rounded-lg">
        <div className="flex items-center">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="border-none bg-slate-200 rounded-full outline-none"
          />
          <p className="bg-blue-900 text-white -ml-4 py-3 px-7  rounded-tr-full rounded-br-full">
            {" "}
            <FaSearch className=""></FaSearch>
          </p>
        </div>
        <Dropdown label="Category">
          <DropdownItem onClick={() => setFilterPets("All")}>All</DropdownItem>
          <DropdownItem onClick={() => setFilterPets("cat")}>Cat</DropdownItem>
          <DropdownItem onClick={() => setFilterPets("dog")}>Dog</DropdownItem>
          <DropdownItem onClick={() => setFilterPets("parrot")}>
            Parrot
          </DropdownItem>
          <DropdownItem onClick={() => setFilterPets("rabbit")}>
            rabbit
          </DropdownItem>
        </Dropdown>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  container mx-auto px-3 mt-16">
        {filterData
          .filter((pet) => pet.name.toLowerCase().includes(query))
          .map((pet) => (
            <PetCard key={pet._id} pet={pet}></PetCard>
          ))}
      </div>
    </div>
  );
};

export default Petlisting;
