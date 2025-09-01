import React from 'react'

export default function Featured() {
     return (
          <>
               {/* Featured */}
               <section className="pt-5 pb-4" data-aos="fade">
                    <div className="container">
                         <ul className="stats-list row g-0">
                              <li className="col-6 col-xl-3">
                                   <div className="stats-item">
                                        <h3 className="h1 stats-number">+250</h3>
                                        <p className="stats-desc">
                                             Attractive tours <br /> around Moliva
                                        </p>
                                   </div>
                              </li>
                              <li className="col-6 col-xl-3">
                                   <div className="stats-item">
                                        <h3 className="h1 stats-number">+1.1M</h3>
                                        <p className="stats-desc">
                                             Clients from
                                             <br /> around the world
                                        </p>
                                   </div>
                              </li>
                              <li className="col-6 col-xl-3">
                                   <div className="stats-item">
                                        <h3 className="h1 stats-number">4.9</h3>
                                        <p className="stats-desc">
                                             <span className="star-rate-view star-rate-size-sm">
                                                  <span className="star-value rate-50" />
                                             </span>
                                             <br />
                                             <span>On Tripadvisor</span>
                                        </p>
                                   </div>
                              </li>
                              <li className="col-6 col-xl-3">
                                   <div className="stats-item">
                                        <h3 className="h1 stats-number">+98%</h3>
                                        <p className="stats-desc">
                                             Our clients <br />
                                             are satisfied
                                        </p>
                                   </div>
                              </li>
                         </ul>
                    </div>
               </section>
               {/* /Featured */}
          </>

     )
}
