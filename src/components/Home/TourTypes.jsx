import React from 'react'

export default function TourTypes() {
     return (
          <>
               {/* Tour types */}
               <section className="p-top-90 p-bottom-90 bg-gray-gradient" data-aos="fade">
                    <div className="container">
                         {/* Types */}
                         <div className="block-title text-center pb-4">
                              <small className="sub-title card-title">Flexible tours</small>
                              <h2 className="h1 title card-title lh-xs">Explore your way</h2>
                         </div>
                         {/* /Title */}
                         <div className="row g-3 g-xl-4">
                              <div className="col-12 col-xl-4 col-md-6">
                                   <a
                                        href="tour-packages-1.html"
                                        className="info-card hover-effect shadow-sm text-center rounded"
                                   >
                                        <div className="card-icon">
                                             <i className="hicon hicon-family-with-teens" />
                                        </div>
                                        <h3 className="h4 card-title">Group tours</h3>
                                        <p className="card-desc">
                                             Join our group tours to explore stunning destinations with
                                             like-minded travelers. Fun and camaraderie guaranteed.
                                        </p>
                                        <span className="card-link">
                                             <span>View tours</span>
                                             <i className="hicon hicon-flights-one-ways" />
                                        </span>
                                   </a>
                              </div>
                              <div className="col-12 col-xl-4 col-md-6">
                                   <a
                                        href="tour-packages-1.html"
                                        className="info-card hover-effect active shadow-sm text-center rounded"
                                   >
                                        <div className="card-icon">
                                             <i className="hicon hicon-regular-travel-protection" />
                                        </div>
                                        <h3 className="h4 card-title">Private tours</h3>
                                        <p className="card-desc">
                                             Enjoy personalized experiences with our private tours. Perfect for
                                             families, couples, or friends seeking exclusivity.
                                        </p>
                                        <span className="card-link">
                                             <span>View tours</span>
                                             <i className="hicon hicon-flights-one-ways" />
                                        </span>
                                   </a>
                              </div>
                              <div className="col-12 col-xl-4 col-md-6">
                                   <a
                                        href="contact.html"
                                        className="info-card hover-effect shadow-sm text-center rounded"
                                   >
                                        <div className="card-icon">
                                             <i className="hicon hicon-tours" />
                                        </div>
                                        <h3 className="h4 card-title">Tailor-Made tours</h3>
                                        <p className="card-desc">
                                             Customize your dream vacation with our tailor-made tours. Create
                                             unique itineraries that suit your interests and schedule.
                                        </p>
                                        <span className="card-link">
                                             <span>Contact us</span>
                                             <i className="hicon hicon-flights-one-ways" />
                                        </span>
                                   </a>
                              </div>
                         </div>
                         {/* /Types */}
                    </div>
               </section>
               {/* /Tour types */}
          </>

     )
}
