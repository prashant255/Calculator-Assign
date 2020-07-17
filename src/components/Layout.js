import React, {Component} from "react";
export default class Layout extends Component {
    onClickButton = (event) => {
        this.props.onClickButton(event.target.name);
    }
    render() {
        return (
            <div className="Button">
                <button name ="(" onClick = {this.onClickButton}>(</button>
                <button name =")" onClick = {this.onClickButton}>)</button>
                <button name ="C" onClick = {this.onClickButton}>C</button>
                <button name ="CE" onClick = {this.onClickButton}>CE</button>
                <button name ="1" onClick = {this.onClickButton}>1</button>
                <button name ="2" onClick = {this.onClickButton}>2</button>
                <button name ="3" onClick = {this.onClickButton}>3</button>
                <button name ="+" onClick = {this.onClickButton}>+</button>
                <button name ="4" onClick = {this.onClickButton}>4</button>
                <button name ="5" onClick = {this.onClickButton}>5</button>
                <button name ="6" onClick = {this.onClickButton}>6</button>
                <button name ="-" onClick = {this.onClickButton}>-</button>
                <button name ="7" onClick = {this.onClickButton}>7</button>
                <button name ="8" onClick = {this.onClickButton}>8</button>
                <button name ="9" onClick = {this.onClickButton}>9</button>
                <button name ="*" onClick = {this.onClickButton}>*</button>
                <button name ="." onClick = {this.onClickButton}>.</button>
                <button name ="0" onClick = {this.onClickButton}>0</button>
                <button name ="=" onClick = {this.onClickButton}>=</button>
                <button name ="/" onClick = {this.onClickButton}>/</button>
                </div>
        )
    }
}