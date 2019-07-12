import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    _handleSubmit = async (e) => {
        e.preventDefault();
        const rawResponse = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function (res) { return res.json(); })
            .then(function (data) { return data });

        
        if (rawResponse.token !== undefined) {
            localStorage.setItem('token', rawResponse.token);
        } else {
            alert("User incorrect");
        }
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this._handleSubmit}>
                    <div>
                        <input type="email" required name="email" onChange={this._handleChange} value={this.state.username} />
                    </div>
                    <div>
                        <input type="password" required name="password" onChange={this._handleChange} value={this.state.password} />
                    </div>
                    <button type="submit"> Login</button>
                </form>
            </div>
        )
    }
}

export default Login;