import React from 'react'
import Image from 'next/image'

export default function Why() {
     return (
          <>
               {/* Why */}
               <section className="hero" data-aos="fade">
                    <div className="hero-bg">
                         <Image
                              src="/assets/img/background/b6.jpg"
                              alt="Travel experience background"
                              fill
                              className="background-image"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                         />
                    </div>
                    <div className="bg-content container">
                         <div className="p-top-90 p-bottom-50">
                              <div className="block-title text-center pb-2">
                                   <small className="sub-title">Great experience</small>
                                   <h2 className="h1 title text-white">Why choose us</h2>
                              </div>
                              <div className="why-slider splide splide__pagination__start w-100 mb-5 mb-xl-0">
                                   <div className="splide__track pt-2 pb-2">
                                        <ul className="splide__list">
                                             <li className="splide__slide">
                                                  <div className="transparent-card text-center">
                                                       <div className="card-icon">
                                                            <i className="hicon hicon-family-with-teens" />
                                                       </div>
                                                       <h3 className="h5 card-title">
                                                            Leading travel agency in Moliva
                                                       </h3>
                                                       <p className="card-desc">
                                                            Top-rated agency in Moliva is renowned for exceptional
                                                            service and unforgettable travel experiences.
                                                       </p>
                                                  </div>
                                             </li>
                                             <li className="splide__slide">
                                                  <div className="transparent-card text-center">
                                                       <div className="card-icon">
                                                            <i className="hicon hicon-regular-travel-protection" />
                                                       </div>
                                                       <h3 className="h5 card-title">
                                                            Years of experience in tour operations
                                                       </h3>
                                                       <p className="card-desc">
                                                            With years of expertise, we excel at organizing seamless,
                                                            enjoyable, and memorable tours for every traveler.
                                                       </p>
                                                  </div>
                                             </li>
                                             <li className="splide__slide">
                                                  <div className="transparent-card text-center">
                                                       <div className="card-icon">
                                                            <i className="hicon hicon-tours" />
                                                       </div>
                                                       <h3 className="h5 card-title">
                                                            Flexible tour packages and bookings
                                                       </h3>
                                                       <p className="card-desc">
                                                            We offer customizable trips with flexible packages and
                                                            convenient booking options tailored to your needs.
                                                       </p>
                                                  </div>
                                             </li>
                                             <li className="splide__slide">
                                                  <div className="transparent-card text-center">
                                                       <div className="card-icon">
                                                            <i className="hicon hicon-tours" />
                                                       </div>
                                                       <h3 className="h5 card-title">
                                                            Best prices with attractive Offers
                                                       </h3>
                                                       <p className="card-desc">
                                                            Enjoy unbeatable prices and exclusive offers, ensuring you
                                                            receive great value with memorable vacation.
                                                       </p>
                                                  </div>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* /Why */}
          </>

     )
}
