import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const Card = (props) => {
  const {name,description,image,rating}=props

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
      } else if (i - rating < 1) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }
    return stars;
  };
  return (
    <>
  <div className="flex flex flex-wrap items-center justify-center ml-10 mt-2 py-3 mb-5">
  <div className="flex  flex-col items-center bg-white shadow-lg border border-slate-200 rounded-lg w-96 p-6">
    <div className="flex h-56 w-56 overflow-hidden rounded-full mb-4 shadow-md">
      <img
        src={image}
        alt={name}
        className="object-cover h-full w-full"
      />
    </div>
    <div className="text-left text-mono">
      <h6 className="text-slate-800 text-2xl text-center font-semibold mb-2">{name}</h6>
      <div className="flex justify-center m-5 ">{renderStars(rating)}</div>
      <p className="text-slate-600 font-mono text-justify">
        {description}
       </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Card;
