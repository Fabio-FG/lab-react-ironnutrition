import { useState } from "react";
import { Input, Button } from "antd";

function AddFood({ AddNewFood }) {
  //setting the state for the form labels/inputs and their default values
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //setting the handles so we can write on the input and have the action of writing and filling the form value/input.

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  //Form submit handle

  const handleSubmit = (event) => {
    console.log("adding");
    //Preventing the page from reloading when submitting thus losing everything
    event.preventDefault();

    //Get the data from input/state
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    console.log("newFood", newFood);

    AddNewFood(newFood);

    // Clear the inputs
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form>
      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <Button onClick={handleSubmit}> Add Food</Button>
    </form>
  );
}

export default AddFood;
