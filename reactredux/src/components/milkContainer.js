import React from 'react'
import {buyMilk }from '../redux/milk/milkAction'
import { connect } from 'react-redux'

function MilkContainer (props) {

    return(
        <div>
            <h1>Milk Container - {props.numOfMilk}</h1>
            <button onClick = {props.buyMilk}>BUY MILK</button>
        </div>
    )
}

const mapToStateProps = state =>{
    return{
        numOfMilk : state.numOfMilk
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyMilk : ()=>dispatch(buyMilk())
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(MilkContainer)