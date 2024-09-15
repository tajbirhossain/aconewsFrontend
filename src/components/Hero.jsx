import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import pixelPhoto from '../assets/images/Pixel-photo.jpg'
import timer from '../assets/images/timer.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Hero = () => {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        axios.get("https://aconewsbackend.onrender.com/api/news?lang=en&country=us").then(res => {
            console.log(res.data.articles);
            setNewsData(res.data.articles)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const navigate = useNavigate()

    const handleSingleNews = (data) => {
        localStorage.setItem("single-post", JSON.stringify(data))
        navigate("/single-news")

    }
    return (
        <section className='hero'>
            <div className="container">
                <h2><span>Latest</span> News</h2>
                <div className="latestNewsContent">
                    {
                        newsData.length > 0 &&
                        <div className="latestNewsWrap">
                            <div className="latestNewsText">
                                <h3>{newsData[0].source.name}</h3>
                                <h1>{newsData[0].title}</h1>
                                <p>
                                    {newsData[0].description}
                                </p>
                                <button onClick={() => handleSingleNews(newsData[0])}>Read More</button>
                            </div>
                            <div className="latestNewsImg">
                                <img src={`${newsData[0].image}`} alt="" />
                            </div>
                        </div>
                    }
                </div>

                <div className="allNewsWrap">
                    {
                        newsData.length > 0 && newsData.map((data, i) => {
                            return (
                                <div className="singleNews" onClick={() => handleSingleNews(data)} key={i}>
                                    <div className="sinNewsImg">
                                        <img src={`${data.image}`} alt="" />
                                    </div>
                                    <div className="sinNewsText">
                                        <h3>{data.title}</h3>
                                        <p>
                                            {data.description}
                                        </p>
                                    </div>
                                    <div className="sinNewsDate">
                                        <p><img src={timer} alt="" /> 5 May 2024</p>
                                        <span className='divider'></span>
                                        <p>by <span>{data.source.name}</span></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <Link to={'/all-news'}>
                    <button className="loadAllBtn">Load More</button>
                </Link>
            </div>
        </section>
    )
}

export default Hero