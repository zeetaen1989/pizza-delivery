import {
  MdStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import style from "./Ratings.module.scss";

const Ratings = ({ rating }) => {
  return (
    <div className={style.container}>
      <span>
        {rating >= 1 ? (
          <MdStar />
        ) : rating >= 0.5 ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <MdStar />
        ) : rating >= 1.5 ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <MdStar />
        ) : rating >= 2.5 ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <MdStar />
        ) : rating >= 3.5 ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <MdStar />
        ) : rating >= 4.5 ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
    </div>
  );
};
export default Ratings;
