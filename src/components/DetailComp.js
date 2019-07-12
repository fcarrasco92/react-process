import React, { Component } from 'react'

export default class DetailComp extends Component {
    render() {
        return (
            <div>
                Hello : {this.props.match.params.greeting}
            </div>
        )
    }
}
