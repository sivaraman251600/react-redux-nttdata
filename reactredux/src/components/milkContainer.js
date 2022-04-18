import React from "react";
import { createBuyMilkAction } from "../redux/milk/milkAction";
import { connect } from "react-redux";
import { useState } from "react";

function MilkContainer(props) {
  const [quantityNumber, setQuantityNumber] = useState(0);

  if (props.availableMilkQuantity == 0) {
    alert("You Buyed All The Milk Products");
    document.getElementById("buy_btn").disabled = true;
  }

  return (
    <div>
      <h1>Milk Container - {props.availableMilkQuantity}</h1>
      <input
        type={"number"}
        value={quantityNumber}
        placeholder="0"
        onChange={(e) => setQuantityNumber(e.target.value)}
      />
      <button id="buy_btn" onClick={() => props.buyMilk(quantityNumber)}>
        BUY MILK
      </button>
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
    buyMilk: (quantity) => {
      if (quantity < 0) {
        alert("Please Enter The Valid No Of Milk");
      } else {
        dispatch(createBuyMilkAction(quantity));
        alert("You Are Buyed" + quantity + "milk products");
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer);
