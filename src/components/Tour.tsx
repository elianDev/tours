import React from "react";
import styles from "./Tour.module.css";

interface TourWithFunction extends Tour {
  removeTour: (id: string) => void;
}

const Tour = ({
  id,
  image,
  info,
  price,
  name,
  removeTour,
}: TourWithFunction) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <div className={styles.tour}>
      <img src={image} alt={name} />
      <span>{price}</span>
      <div className={styles.tourContent}>
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className={styles.readMore}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className={styles.notInterested} onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
