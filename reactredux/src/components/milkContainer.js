import React from "react";
import { createBuyMilkAction } from "../redux/milk/milkAction";
import { connect } from "react-redux";
import { useState } from "react";

function MilkContainer(props) {
  const [quantityNumber, setQuantityNumber] = useState(0);
  return (
    <div>
      <h1>Milk Container - {props.availableMilkQuantity}</h1>
      <input
        type={"number"}
        value={quantityNumber}
        placeholder="0"
        onChange={(e) => setQuantityNumber(e.target.value)}
      />
      <button onClick={() => props.buyMilk(quantityNumber)}>BUY MILK</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    availableMilkQuantity: state.numOfMilk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMilk: (quantity) => dispatch(createBuyMilkAction(quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer);
