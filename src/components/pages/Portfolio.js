import React from 'react';
import Carousel from '../Carousel';
import '../styles/portfolioStyle.css'

export default function Portfolio(props) {
    return (
        <div className="about-responsive">
            <div className="container justify-content-center">
                <div className="Row d-flex">
                    <div id="customDiv" className="col-sm-6">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}
