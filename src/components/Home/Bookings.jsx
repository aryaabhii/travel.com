import React from 'react'

export default function Bookings() {
     return (
          <>
               {/* Booking */}
               <section className="p-top-120 p-bottom-120 bg-dark-blue" data-aos="fade">
                    <div className="container">
                         <div className="row justify-content-center text-center">
                              <div className="col-12 col-xl-8">
                                   <div className="text-center">
                                        <div className="block-title">
                                             <small className="sub-title text-light">Start Exploring</small>
                                             <h2 className="h1 title text-white">
                                                  Are you ready for adventures to Moliva?
                                             </h2>
                                        </div>
                                        <div className="d-md-inline-flex align-items-md-center">
                                             <a
                                                  href="tour-packages-1.html"
                                                  className="btn btn-primary btn-uppercase mnw-180 me-2 ms-2 mt-4"
                                             >
                                                  <i className="hicon hicon hicon-bold hicon-menu-calendar" />
                                                  <span>Book tours</span>
                                             </a>
                                             <a
                                                  href="contact.html"
                                                  className="btn btn-outline-light btn-uppercase mnw-180 me-2 ms-2 mt-4"
                                             >
                                                  <i className="hicon hicon hicon-email-envelope" />
                                                  <span>Contact Us</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* /Booking */}
          </>

     )
}
