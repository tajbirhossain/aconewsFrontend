import React from 'react'
import '../styles/footer.css'
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas veritatis libero ducimus sed dolores harum tempora temporibus assumenda.</p>
            </div>
        </footer>
    )
}

export default Footer