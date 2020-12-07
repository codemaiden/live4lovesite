import React from 'react'
import './HomeGrid.css'

const HomeGrid = (props) => {
    return {
        <div id="content-container">
            <div className="social bg-light">
                <img src="./facebook.svg" alt="" />
                <img src="./instagram.svg" alt="" />
                <img src="./twitter.svg" alt="" />
            </div>
            <div className="content">
                <h3 className="light">FIND CONFORT</h3>
                <h1 className="l-heading">IN ROUTINES</h1>
                <p className="sub-title">
                    There's beauty all around us. Let's look <span>for it together</span>
                </p>
            </div>
            <div className="showcase"></div>
        </div>
    }
}

export default HomeGrid
