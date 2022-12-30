import React from 'react'

//Iconos
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
      <div>
        <h1>How we can help you</h1>
        <p>Follow our newsletter. We will regulary update our latest project and availability.</p>
        <form className="">
          <RiMailFill />
          <input type="text" />
          <button type="submit"></button>
        </form>
      </div>
      <div>
        <div>
          <RiMailFill />
          <h1>UI/UX Design</h1>
          <p>Sometimes features require a short description</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Services