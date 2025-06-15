import React from "react"
import Banner from "../Images/home-img.jpg"

function Hero() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-[20px] md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome
        <br className="hidden lg:inline-block" /> To ZI Global ExIm
      </h1>
      <p className="mb-8 leading-relaxed">Find & Buy Everything You Need! Pay On Delivery. Wide Range of Genuine Products, Easy Returns, Cash on Delivery, Browse Now!</p>
      <div className="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded h-[500px] w-[500px]" alt="hero" src={Banner} />
    </div>
  </div>
</section>
</>
  )
}

export default Hero