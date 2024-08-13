import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOpenings } from "../../utils/firebase/firebase.utils";
import "./bio.css";

const Bio = () => {
  const { name } = useParams();
  const [openingMap, setOpeningMap] = useState([]);

  const fetchOpeningsItems = async () => {
    await fetchOpenings(setOpeningMap);
  };

  useEffect(() => {
    fetchOpeningsItems();
  }, []);

  // Find the relevant item based on the name
  const category = openingMap?.find((category) =>
    category.items.some((item) => item.name === name)
  );
  const findedMainline = category
    ? category?.items?.find((item) => item.name === name)
    : null;

  if (!findedMainline) {
    return <div>Loading...</div>;
  }

  const { description, cover } = findedMainline;

  return (
    <div className="card-details-container">
      <p className="heading">{name}</p>
      <div className="image-description-section">
        <div className="description-section">
          <p>{description}</p>
          <Link to="/course" className="button">Start</Link>
        </div>
        <div className="image-section">
          <img src={"/images/kings.pawn/" + cover} />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
