import React from 'react'

export default function Campus() {
  return (
    <>
       <div className="divThree">
         <section className="headingSec">
            <h1><span className="highlight">Our</span> Global Campus</h1>
            <p>
               Discover a world of opportunities at Sanjivani's global campus. Immerse 
               in diverse perspectives, collaborate globally, and broaden your horizons. Join us 
               in transcending boundaries and exploring the world.
            </p>
         </section>

         <section className="firstSec">
            <section className="imgSec" style={{university:'PUNE'}}>
               <image src="building-1.jpg" alt="University building"/>
            </section>
            <section className="imgSec" style={{university: 'NASHIK'}}>
               <image src="building-2.jpg" alt="University building"/>
            </section>
            <section className="imgSec" style={{university: 'KOPARGAON'}}>
               <image src="building-3.jpg" alt="University building"/>
            </section>
         </section>
      </div>
    </>
  )
}
