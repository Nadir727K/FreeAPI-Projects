const MealCard = ({ meal }) => {
  if (!meal) return null;

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea
  } = meal;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} />

      <h2>{strMeal}</h2>

      <p><strong>Category:</strong> {strCategory}</p>
      <p className="location"><strong>Area:</strong> {strArea}</p>
    </div>
  );
};

export default MealCard;