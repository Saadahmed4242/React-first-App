import React, { useState, useEffect, useRef } from 'react';
import "./NewsAlert.css"
import image from "../../assets/f.jpg"
export default function NewsAlert() {
    const [isHovered, setIsHovered] = useState(false);
    // const [newsItems, setNewsItems] = useState([]);
    const tickerRef = useRef(null);

    // useEffect(() => {
    //     // Example: Fetch news data from an API
    //     // const fetchNews = async () => {
    //     //     try {
    //     //         const response = await fetch('http://localhost:1000/api/news/fetchNews');
    //     //         const data = await response.json();
    //     //         setNewsItems(data);
    //     //     } catch (error) {
    //     //         console.error('Error fetching news:', error);
    //     //     }
    //     // };

    //     fetchNews();
    // }, []);

    return (
        <div
            className="ticker-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`ticker ${isHovered ? 'paused' : ''}`}
                
            >
                <div className="ticker-content">
                   
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                        <div className="tick" >
                            <a className='t-content' >
                                <img className='t-image' src={image} alt="" />
                            </a>
                        </div>
                  
                    
                </div>
            </div>
        </div>
    );
}