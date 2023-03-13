import React from "react";
import Tour from "./Tour";
import styles from "./Tours.module.css";

interface Props {
  tours: Tour[];
  removeTour: (id: string) => void;
}

const Tours = ({ tours, removeTour }: Props) => {
  return (
    <div className={styles.tours}>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
