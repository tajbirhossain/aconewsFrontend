import React, { useEffect, useState } from 'react'
import '../styles/allNews.css'
import pixelPhoto from '../assets/images/Pixel-photo.jpg'
import timer from '../assets/images/timer.png'
import menuImg from '../assets/images/menu.png'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AllNews = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState("general")
    const [lang, setLang] = useState("en")
    const [country, setCountry] = useState("us")
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        axios.get("https://aconewsbackend.onrender.com/api/news?lang=en&country=us&category=world").then(res => {
            console.log(res.data.articles);
            setNewsData(res.data.articles)

        }).catch(err => {
            console.log(err);

        })
    }, [])

    const navigate = useNavigate()

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const handleSingleNews = (data) => {
        localStorage.setItem("single-post", JSON.stringify(data))
        navigate("/single-news")

    }

    const handleFilter = () => {
        axios.get(`https://aconewsbackend.onrender.com/api/news?lang=${lang}&country=${country}&category=${category}`).then(res => {
            console.log(res.data);
            setNewsData(res.data.articles)
        }).catch(err => {
            console.log(err);

        })
    }
    console.log(category);
    console.log(lang);
    console.log(country);

    return (
        <section className="allNews">
            <div className="container">
                <div className={isOpen ? "allNewsLeft active" : "allNewsLeft"}>
                    <h3 onClick={handleOpen}>Filter Options <img src={menuImg} alt="" /></h3>
                    <div className="filOpItemWrap">
                        <div className="filOpItem">
                            <h4>Category:</h4>
                            <select defaultValue={category} onChange={e => setCategory(e.target.value)}>
                                <option value="general">General</option>
                                <option value="world">World</option>
                                <option value="nation">Nation</option>
                                <option value="business">Business</option>
                                <option value="technology">Technology</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="sports">Sports</option>
                                <option value="science">Science</option>
                                <option value="health">Health</option>
                            </select>
                        </div>
                        <div className="filOpItem">
                            <h4>Country:</h4>
                            <select defaultValue={country} onChange={e => setCountry(e.target.value)}>
                                <option value="au">Australia</option>
                                <option value="br">Brazil</option>
                                <option value="ca">Canada</option>
                                <option value="cn">China</option>
                                <option value="eg">Egype</option>
                                <option value="fr">France</option>
                                <option value="de">Germany</option>
                                <option value="gr">Greece</option>
                                <option value="hk">Hong Kong</option>
                                <option value="in">India</option>
                                <option value="ie">Ireland</option>
                                <option value="il">Israel</option>
                                <option value="it">Italy</option>
                                <option value="jp">Japan</option>
                                <option value="nl">Netherlands</option>
                                <option value="no">Norway</option>
                                <option value="pk">Pakistan</option>
                                <option value="pe">Peru</option>
                                <option value="ph">Philippines</option>
                                <option value="pt">Portugal</option>
                                <option value="ro">Romania</option>
                                <option value="ru">Russian Federation</option>
                                <option value="sg">Singapore</option>
                                <option value="es">Spain</option>
                                <option value="se">Sweden</option>
                                <option value="ch">Switzerland</option>
                                <option value="tw">Taiwan</option>
                                <option value="ua">Ukrain</option>
                                <option value="gb">United Kingdom</option>
                                <option value="us">United States</option>
                            </select>
                        </div>
                        <div className="filOpItem">
                            <h4>Language:</h4>
                            <select defaultValue={lang} onChange={e => setLang(e.target.value)}>
                                <option value="ar">Arabic</option>
                                <option value="zh">Chinese</option>
                                <option value="nl">Dutch</option>
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="el">Greek</option>
                                <option value="he">Hebrew</option>
                                <option value="hi">Hindi</option>
                                <option value="it">Italian</option>
                                <option value="ja">Japanese</option>
                                <option value="ml">Malayalam</option>
                                <option value="mr">Marathi</option>
                                <option value="no">Norwegian</option>
                                <option value="pt">Portuguese</option>
                                <option value="ro">Romanian</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                                <option value="sv">Swedish</option>
                                <option value="ta">Tamil</option>
                                <option value="te">Telugu</option>
                                <option value="uk">Ukrainian</option>
                            </select>
                        </div>
                        <button onClick={handleFilter}>Apply</button>
                    </div>
                </div>
                <div className="allNewsRight">
                    <h1><span>News</span> Feed</h1>

                    <div className="allNewsCon">
                        {
                            newsData.length > 0 && newsData.map((data, i) => {
                                return (
                                    <div className="allNewsItem" onClick={() => handleSingleNews(data)}>
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

export default AllNews