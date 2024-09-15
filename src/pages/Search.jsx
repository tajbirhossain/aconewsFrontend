import React, { useEffect, useState } from 'react'
import '../styles/search.css'
import pixelPhoto from '../assets/images/Pixel-photo.jpg'
import timer from '../assets/images/timer.png'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Search = () => {
    const [newsData, setNewsData] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/news?query="${location.pathname.split('/search/')[1]}"`).then(res => {
            console.log(res.data.articles);
            setNewsData(res.data.articles)

        }).catch(err => {
            console.log(err);

        })
    }, [location.pathname])

    const handleSingleNews = (data) => {
        localStorage.setItem("single-post", JSON.stringify(data))
        navigate("/single-news")

    }
    console.log(location.pathname.split('/search/')[1]);

    return (
        <section className='searchSec'>
            <div className="container">
                <div className="allNewsRight">
                    <h1>Showing <span>Search Results</span> for "{location.pathname?.split('/search/')[1]}"</h1>

                    <div className="allNewsCon">
                        {
                            newsData.length > 0 && newsData.map((data, i) => {
                                return (
                                    <div className="allNewsItem" onClick={() => handleSingleNews(data)} key={i}>
                                        <div className="allNewItemImg">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="allNewItemText">
                                            <div className="allNewItemTextTop">
                                                <h3>{data.title}</h3>
                                                <p>
                                                    {data.description}
                                                </p>
                                            </div>
                                            <div className="allNewItemTextBottom">
                                                <div className="sinNewsDate">
                                                    <p><img src={timer} alt="" /> 5 May 2024</p>
                                                    <span className='divider'></span>
                                                    <p>by <span>{data.source.name}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search