import { useState, useEffect } from "react";
import "./Yogposes.css";

const Yogposes = () => {
  const [poses, setPoses] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8);
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
        <div className="yogposes-section flex flex-wrap  justify-center gap-10 mt-10">
          {poses.slice(0, itemsToShow).map((item, index) => (
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
        {itemsToShow < poses.length && (
          <div className="flex justify-center">
            <button onClick={showMoreItems} className="show-more-button">
              Show More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Yogposes;
