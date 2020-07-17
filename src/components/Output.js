import React, {Component} from 'react'

export default class Output extends Component {
    render() {
        return (
            <div className = "displayOutput">
                <p> {this.props.result} </p>
            </div>
        )
    }
}