import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import Awards from "../home/awards/Awards"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>At Real Estate, we are dedicated to redefining how people search for and secure rental properties. Our platform combines advanced technology with an intuitive interface to connect tenants and property owners effortlessly. From detailed listings and high-resolution images to smart search filters, we equip users with all the tools they need to make informed decisions with confidence.</p>
            <p>We believe that finding a home should be transparent, efficient, and stress-free. That’s why Real Estate is committed to providing verified property information, secure communication channels, and a seamless rental experience from start to finish. Whether you’re looking for a modern apartment, a family home, or an executive rental, we’re here to help you discover the right space for your lifestyle.</p>
          
          </div>
          <div className='right row'>
            <img src='./group.jpg' alt='' />
          </div>
        </div>
      </section>
      <Awards/>
    </>
  )
}

export default About
