const { useState } = require("react");
const List = require("./list");

function Input() {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [type, setType] = useState("Breakfast");
  const apiKey = `59343f924a1b07074f0b9baecee9923a`;
  const appId = `0bce683e`;
  const url = `https://api.edamam.com/api/recipes/v2?`;
  const queryString = `type=public&q=${input}&mealType=${type}&app_id=${appId}&app_key=${apiKey}`;

  function getRecipe() {
    fetch(url + queryString, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setRecipe(data.hits);
      });
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getRecipe();
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for Recipe"
          value={input}
          className="text"
        ></input>

        <select>
          <option
            value="Breakfast"
            onClick={function () {
              setType("Breakfast");
            }}
          >
            Breakfast
          </option>
          <option
            value="Lunch"
            onClick={function () {
              setType("Lunch");
            }}
          >
            Lunch
          </option>
          <option
            value="Dinner"
            onClick={function () {
              setType("Dinner");
            }}
          >
            Dinner
          </option>
          <option
            value="Snack"
            onClick={function () {
              setType("Snack");
            }}
          >
            Snack
          </option>
          <option
            value="Teatime"
            onClick={function () {
              setType("Teatime");
            }}
          >
            Teatime
          </option>
        </select>
        <input type="submit" value="Search" className="submit"></input>
      </form>
      <div className="recipe">
        {recipe.map(function (item, index) {
          return <List item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

module.exports = Input;
