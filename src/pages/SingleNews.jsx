import React, { useEffect, useState } from 'react'
import '../styles/singleNews.css'
import profileImg from '../assets/images/profile.jpg'
import pixelPhoto from '../assets/images/Pixel-photo.jpg'
import timer from '../assets/images/timer.png'


const SingleNews = () => {
  const [newsData, setNewsData] = useState({})
  useEffect(() => {
    const getNews = JSON.parse(localStorage.getItem("single-post"))
    setNewsData(getNews)
  }, [])
  return (
    <section className='singleNews'>
      <div className="container">
        <div className="singleNeLeft">
          <img src={profileImg} alt="" />
          <h3>Tajbir Hossain</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, tempore? Eaque in quod autem voluptatibus tempora quo repellendus explicabo quia beatae iure, architecto dicta. Ullam provident recusandae id velit beatae?
          </p>
        </div>
        <div className="singleNeRight">
          <div className="singleNeRightHeading">
            <h1>{newsData.title}</h1>
            <p>
              {newsData.description}
            </p>
            <div className="sinNewsDate">
              <p><img src={timer} alt="" /> 5 May 2024</p>
              <span className='divider'></span>
              <p>by <span>{newsData.source?.name}</span></p>
            </div>
          </div>
          <img src={`${newsData.image}`} alt="" />
          <div className="singleNeRightDesc">
            <p>
              {newsData.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleNews