import { useEffect, useState } from "react";
import { fetchMeals } from "../services/api";
import MealCard from "../components/MealCard";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadMeals = async () => {
      try {
        const data = await fetchMeals(controller.signal);
        setMeals(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadMeals();

    return () => controller.abort();
  }, []);

  if (loading) return <p className="status">Loading meals...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="container">
      {meals.map((meal, index) => (
        <MealCard key={meal.idMeal || index} meal={meal} />
      ))}
    </div>
  );
};

export default Home;