import React, { Component } from 'react'
import CardList from "./CardList";
import { Link } from 'react-router-dom'

export default class CardDetail extends Component {
    state = {
        checked: false
    }
    handleCheck = () => {
        this.setState({ checked: !this.state.checked });
    }
    render() {
        var msg = "";
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return (
            <div>
                <CardList />
                <CardList />
                <div>
                    <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
                    <p>this box is {msg}.</p>
                </div>
                <Link to="/lastpage" style={{backgroundColor: 'red'}}>Continuar</Link>
            </div>
        )
    }
}
