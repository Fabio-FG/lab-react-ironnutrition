import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ foodObject, deleteFood }) {
    

  return (
    <>
      <Col>
        <Card
          title={foodObject.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={foodObject.image} alt={foodObject.name} height="75vh" />
          <p>Calories: {foodObject.calories}</p>
          <p>Servings: {foodObject.servings}</p>
          <p>
            <b>
              Total Calories:{foodObject.calories * foodObject.servings} kcal{" "}
            </b>
          </p>

          <Button onClick={() => deleteFood(foodObject.name)}> Delete</Button>
        </Card>
      </Col>
    </>
  );
}

export default FoodBox;
