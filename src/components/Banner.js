import React from 'react'
import './Banner.css'

let bannerData = {
    title: 'React landing page',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

}
function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>{bannerData.desc}</p>
                        <a href="#" className="banner-btn">Learn more</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
