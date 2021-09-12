function List(props) {
  return (
    <div className="list">
      <a href={props.item.recipe.url} target="_blank">
        <img
          src={`https://api.allorigins.win/raw?url=${props.item.recipe.image}`}
          crossOrigin="true"
        />
        <div className="label">
          <h3>{props.item.recipe.label}</h3>
          <p>Calories: {props.item.recipe.calories.toFixed(2)} cal</p>
        </div>
      </a>
    </div>
  );
}
module.exports = List;
