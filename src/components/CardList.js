import React, { Component } from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export class CardList extends Component {
    render() {
        return (
            <div className="card">
                <img className="cardimg" src="https://googleplus-covers.com/covers/nature_balloon_ride.jpg" width="100%" height="50%" alt="img" />
                <div className="cardcontent">
                    <p>Thursday, July 16, 2016</p>
                    <h3>Epic looking place</h3>
                    <p>A description so captivating<br /> it will blow your mind.</p>
                </div>
                <div className="cardfooter">
                    <h3>Read More</h3>
                    <Link to="" />
                </div>

                <div className="cardbutton">
                    <i className="fa fa-envelope-open" style={{fontSize: '24px'}}></i>
                </div>

            </div>
        )
    }
}

export default CardList
