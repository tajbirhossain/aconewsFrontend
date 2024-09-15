import React from 'react'
import '../styles/newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="container">
            <h3>NEWS</h3>
            <h2>Subscribe to <br /> <span>Our Newsletter</span></h2>
            <form>
                <input type="text" placeholder='Email' />
                <button>Send</button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter