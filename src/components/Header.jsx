import React, { useState } from 'react'
import '../styles/header.css'
import logo from '../assets/images/logo.png'
import search from '../assets/images/search.png'
import menuImg from '../assets/images/menu.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [inpVal, setInpVal] = useState("")
    const navigate = useNavigate()

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const handleSearch = () => {
        if (inpVal) {
            navigate(`/search/${inpVal}`)
        }
    }

    return (
        <header>
            <div className={isOpen ? "active overlay" : "overlay"} onClick={handleOpen}></div>
            <div className="container">
                <div className="headerLeft">
                    <img src={logo} alt="" />
                    <ul className={isOpen ? "active" : undefined}>
                        <li>NEWS</li>
                        <li>BUSINESS</li>
                        <li>FINANCE</li>
                        <li>SPORT</li>
                        <li>TRAVEL</li>
                        <li>EARTH</li>
                        <li>CULTURE</li>
                    </ul>
                </div>
                <div className="headerRight">
                    <input type="text" placeholder='Search news' value={inpVal} onChange={e => setInpVal(e.target.value)} />
                    <button onClick={handleSearch}>
                        <span>Search</span>
                        <img src={search} alt="" />
                    </button>
                    <img src={menuImg} alt="" onClick={handleOpen} />
                </div>
            </div>
        </header>
    )
}

export default Header