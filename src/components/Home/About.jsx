import React from 'react'

export default function About() {
     return (
          <>
               {/* About */}
               <section className="p-top-90 p-bottom-90 bg-gray-gradient" data-aos="fade">
                    <div className="container">
                         <div className="row g-0">
                              <div className="col-12 col-xl-6">
                                   {/* Image */}
                                   <div className="pe-xl-5 mb-5 mb-xl-0">
                                        <div className="block-title ms-5 mb-5">
                                             <small className="sub-title">About us</small>
                                             <h2 className="h1 title">
                                                  Explore Moliva and enjoy an exciting journey with us
                                             </h2>
                                        </div>
                                        <div className="image-info image-info-right image-info-vertical">
                                             <div className="vertical-title">
                                                  <small>
                                                       <strong className="text-primary fw-semibold">
                                                            Sine 1993
                                                       </strong>{" "}
                                                       - <strong className="text-body fw-semibold">31 years</strong>{" "}
                                                       of experience
                                                  </small>
                                             </div>
                                             <div className="image-center">
                                                  <img
                                                       src="assets/img/about/a2.jpg"
                                                       srcSet="assets/img/about/a2@2x.jpg 2x"
                                                       className="rounded w-100"
                                                       alt=""
                                                  />
                                             </div>
                                             <div className="info-top-right">
                                                  <div className="vertical-award rounded shadow-sm">
                                                       <div className="award-content">
                                                            <img
                                                                 src="assets/img/logos/trip-best.png"
                                                                 srcSet="assets/img/logos/trip-best@2x.png 2x"
                                                                 className="w-100"
                                                                 alt=""
                                                            />
                                                       </div>
                                                       <div className="award-footer">
                                                            <small>Tripadvisor</small>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* /Image */}
                              </div>
                              <div className="col-12 col-xl-6">
                                   {/* Content */}
                                   <div className="image-info image-info-vertical">
                                        <div className="vertical-title">
                                             <small>
                                                  <strong className="text-primary fw-semibold">Moliva </strong>
                                                  <span className="text-body">Travel Agency</span>
                                             </small>
                                        </div>
                                        <div className="image-center mb-4">
                                             <img
                                                  src="assets/img/about/a10.jpg"
                                                  srcSet="assets/img/about/a10@2x.jpg 2x"
                                                  className="rounded w-100"
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                                   <div className="ps-xl-5">
                                        <p>
                                             Moliva Travel Agency offers unique and memorable tours, providing
                                             rich experiences in the beautiful country of Moliva. With a
                                             professional and dedicated team, we are committed to bringing you
                                             wonderful, safe, and exciting journeys, helping you explore the
                                             beauty of the world.
                                        </p>
                                        <ul className="strength-list row g-0 pt-2">
                                             <li className="col-12 col-md-6">
                                                  <div className="strength-item">
                                                       <span className="strength-icon">
                                                            <i className="hicon hicon-150 hicon-confirmation-instant" />
                                                       </span>
                                                       <strong className="strength-title">
                                                            Great travel experiences
                                                       </strong>
                                                  </div>
                                             </li>
                                             <li className="col-12 col-md-6">
                                                  <div className="strength-item">
                                                       <span className="strength-icon">
                                                            <i className="hicon hicon-150 hicon-menu-price-display" />
                                                       </span>
                                                       <strong className="strength-title">
                                                            Competitive pricing offers
                                                       </strong>
                                                  </div>
                                             </li>
                                             <li className="col-12 col-md-6">
                                                  <div className="strength-item">
                                                       <span className="strength-icon">
                                                            <i className="hicon hicon-150 hicon-pay-on-checkin" />
                                                       </span>
                                                       <strong className="strength-title">
                                                            Flexible itinerary options
                                                       </strong>
                                                  </div>
                                             </li>
                                             <li className="col-12 col-md-6">
                                                  <div className="strength-item">
                                                       <span className="strength-icon">
                                                            <i className="hicon hicon-150 hicon-agoda-price-guarante" />
                                                       </span>
                                                       <strong className="strength-title">
                                                            Leading industry reputation
                                                       </strong>
                                                  </div>
                                             </li>
                                        </ul>
                                        <div className="pt-3">
                                             <a
                                                  href="about.html"
                                                  className="btn btn-primary btn-uppercase mnw-180"
                                             >
                                                  <span>Read more</span>
                                                  <i className="hicon hicon-flights-one-ways" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* /Content */}
                              </div>
                         </div>
                    </div>
               </section>
               {/* /About */}
          </>

     )
}
