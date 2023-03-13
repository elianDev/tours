import React from "react";
import "./global.css";
import styles from "./App.module.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

declare global {
  interface Tour {
    id: string;
    image: string;
    info: string;
    price: string;
    name: string;
  }
}

function App() {
  const [loading, setLoading] = React.useState(false);
  const [tours, setTours] = React.useState([]);

  function removeTour(id: string) {
    const newTours = tours.filter((tour: Tour) => tour.id !== id);
    setTours(newTours);
  }

  async function fetchTours() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project",
      );
      const json = await response.json();
      setLoading(false);
      setTours(json);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;
  if (tours.length === 0) {
    return (
      <div className={`${styles.refresh} container`}>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div className={`${styles.content} container`}>
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
