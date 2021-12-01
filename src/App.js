import "./App.css";
import foodsFromJson from "./foods.json";
import FoodBox from "./component/FoodBox";
import { useState } from "react";
import { Row } from "antd";
import AddFood from "./component/AddFood";
import Search from "./component/Search";

function App() {
  const [allFoods, setAllFoods] = useState(foodsFromJson); //master array with all food
  const [foods, setFoods] = useState(foodsFromJson); //array with the food in display

  const AddNewFood = (foodObj) => {
    //update the displayed food array
    const updatedFoods = [foodObj, ...foods];

    //update the master food array
    const updateAllFoods = [foodObj, ...allFoods];

    //update the state
    setFoods(updatedFoods);
    setAllFoods(updateAllFoods);
  };

  const filterFoodList = (char) => {
    console.log("char", char);
    let filteredFoods;
    if (char === "") {
      filteredFoods = allFoods;
    } else {
      filteredFoods = foods.filter((oneFood) => {
        return oneFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }

    setFoods(filteredFoods);
  };


  const deleteFood = (deleteName) => {
   

    const filteredArr = foods.filter((deleteFood) => {
      return deleteFood.name !== deleteName;
    });

    setFoods(filteredArr)
  }

  return (
    <div className="App">
      <AddFood AddNewFood={AddNewFood} />
      <Search filterFoodList={filterFoodList} />

      <Row>
        {foods.map((foodItem) => {
          return <FoodBox foodObject={foodItem} 
            deleteFood={deleteFood}
          />;
        })}
      </Row>
    </div>
  );
}

export default App;
