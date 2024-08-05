import { useState, useEffect } from "react";
import "./Yogposes.css";

const Yogposes = () => {
  const [poses, setPoses] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const filteredData = poses.filter(
    (item) =>
      item.english_name.toLowerCase().includes(searchQuery) ||
      item.sanskrit_name.toLowerCase().includes(searchQuery)
  );
  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 8);
  };
  useEffect(() => {
    fetch("/yogapi.json")
      .then((response) => response.json())
      .then((poses) => setPoses(poses))
      .catch((error) => console.error("Error fetching the JSON data:", error));
    console.log(poses);
  }, []);
  return (
    <>
      <section className="py-20 container mx-auto">
        <h3 className="text-center text-4xl font-bold">Yoga Poses!</h3>
        <div className="search-bar-container py-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by English or Sanskrit name..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>
        <div className="yogposes-section flex flex-wrap  justify-center gap-10 mt-10">
          {filteredData.slice(0, itemsToShow).map((item, index) => (
            <div className="yogposes-card md:basis-1/3 p-4">
              <div className="yogpose-img">
                <img src={item.img_url} alt="Navasana" width={250} />
              </div>
              <div className="yogposes-desc">
                <p className="pb-4">
                  Sanskrit name:{" "}
                  <b className="underline font-bold">{item.sanskrit_name}</b>
                </p>
                <p>
                  English name:{" "}
                  <b className="underline font-bold">{item.english_name}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
        {itemsToShow < filteredData.length && (
          <div className="flex justify-center">
            <button onClick={showMoreItems} className="theme-btn">
              Show More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Yogposes;
