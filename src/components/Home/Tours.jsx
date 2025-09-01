import React from 'react'

export default function Tours() {
     return (
          <>
               {/* Tours */}
               <section className="p-top-90 p-bottom-90 bg-gray-gradient" data-aos="fade">
                    <div className="container">
                         {/* Title */}
                         <div className="text-center mb-4">
                              <div className="block-title">
                                   <small className="sub-title">Many tourists choose</small>
                                   <h2 className="h1 title">Top Moliva Tours</h2>
                              </div>
                              <div className="extra-info">
                                   <strong>+80K</strong>
                                   <span>Tourists have chosen these tours</span>
                              </div>
                         </div>
                         {/* /Title */}
                         <div className="tour-slider-2 splide mb-5">
                              <div className="splide__arrows">
                                   <button className="splide__arrow splide__arrow--prev">
                                        <i className="hicon hicon-edge-arrow-left" />
                                   </button>
                                   <button className="splide__arrow splide__arrow--next">
                                        <i className="hicon hicon-edge-arrow-right" />
                                   </button>
                              </div>
                              {/* Tours list */}
                              <div className="splide__track pt-2 pb-2">
                                   <ul className="splide__list tour-grid">
                                        <li className="splide__slide">
                                             {/* Tour */}
                                             <div className="tour-item rounded shadow-sm hover-effect">
                                                  <div className="tour-img">
                                                       <a href="single-tour-1.html">
                                                            <figure className="image-hover image-hover-overlay ">
                                                                 <img
                                                                      src="assets/img/tours/t1.jpg"
                                                                      srcSet="assets/img/tours/t1@2x.jpg 2x"
                                                                      alt=""
                                                                 />
                                                                 <i className="hicon hicon-plus-thin image-hover-icon" />
                                                            </figure>
                                                       </a>
                                                       <div className="tour-like">
                                                            <button
                                                                 type="button"
                                                                 className="circle-icon like-icon liked"
                                                            >
                                                                 <i className="hicon hicon-favorite-filled" />
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <div className="tour-content">
                                                       <h3 className="tour-title">
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="link-dark link-hover"
                                                            >
                                                                 Explore the castle and ancient village in Karda
                                                            </a>
                                                       </h3>
                                                       <div className="tour-itinerary">
                                                            <span>
                                                                 <i className="hicon hicon-menu-calendar" /> 3 days
                                                            </span>
                                                            <span>
                                                                 <i className="hicon hicon-flights-pin" /> 3 Destinations
                                                            </span>
                                                       </div>
                                                       <div className="inline-review">
                                                            <span className="review-score">4.9</span>
                                                            <span className="star-rate-view star-rate-size-sm me-2">
                                                                 <span className="star-value rate-50" />
                                                            </span>
                                                            <small className="review-total">
                                                                 <span>(231 reviews)</span>
                                                            </small>
                                                       </div>
                                                       <div className="tour-booking">
                                                            <div className="tour-price">
                                                                 <strong>
                                                                      <sup>$</sup>195.80
                                                                 </strong>
                                                                 <span>
                                                                      <sup>$</sup>
                                                                      <del className="">230.00</del>
                                                                 </span>
                                                            </div>
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="circle-icon circle-icon-link"
                                                            >
                                                                 <i className="hicon hicon-flights-one-ways" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* /Tour */}
                                        </li>
                                        <li className="splide__slide">
                                             {/* Tour */}
                                             <div className="tour-item rounded shadow-sm hover-effect">
                                                  <div className="tour-img">
                                                       <a href="single-tour-1.html">
                                                            <figure className="image-hover image-hover-overlay ">
                                                                 <img
                                                                      src="assets/img/tours/t3.jpg"
                                                                      srcSet="assets/img/tours/t3@2x.jpg 2x"
                                                                      alt=""
                                                                 />
                                                                 <i className="hicon hicon-plus-thin image-hover-icon" />
                                                            </figure>
                                                       </a>
                                                       <div className="tour-like">
                                                            <button type="button" className="circle-icon like-icon">
                                                                 <i className="hicon hicon-favorite-filled" />
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <div className="tour-content">
                                                       <h3 className="tour-title">
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="link-dark link-hover"
                                                            >
                                                                 Bathing and Kayaking at Noriva Beach
                                                            </a>
                                                       </h3>
                                                       <div className="tour-itinerary">
                                                            <span>
                                                                 <i className="hicon hicon-menu-calendar" /> 3 days
                                                            </span>
                                                            <span>
                                                                 <i className="hicon hicon-flights-pin" /> 3 Destinations
                                                            </span>
                                                       </div>
                                                       <div className="inline-review">
                                                            <span className="review-score">4.9</span>
                                                            <span className="star-rate-view star-rate-size-sm me-2">
                                                                 <span className="star-value rate-50" />
                                                            </span>
                                                            <small className="review-total">
                                                                 <span>(231 reviews)</span>
                                                            </small>
                                                       </div>
                                                       <div className="tour-booking">
                                                            <div className="tour-price">
                                                                 <strong>
                                                                      <sup>$</sup>195.80
                                                                 </strong>
                                                                 <span>
                                                                      <sup>$</sup>
                                                                      <del className="">230.00</del>
                                                                 </span>
                                                            </div>
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="circle-icon circle-icon-link"
                                                            >
                                                                 <i className="hicon hicon-flights-one-ways" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* /Tour */}
                                        </li>
                                        <li className="splide__slide">
                                             {/* Tour */}
                                             <div className="tour-item rounded shadow-sm hover-effect">
                                                  <div className="tour-img">
                                                       <a href="single-tour-1.html">
                                                            <figure className="image-hover image-hover-overlay ">
                                                                 <img
                                                                      src="assets/img/tours/t4.jpg"
                                                                      srcSet="assets/img/tours/t4@2x.jpg 2x"
                                                                      alt=""
                                                                 />
                                                                 <i className="hicon hicon-plus-thin image-hover-icon" />
                                                            </figure>
                                                       </a>
                                                       <div className="tour-like">
                                                            <button type="button" className="circle-icon like-icon">
                                                                 <i className="hicon hicon-favorite-filled" />
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <div className="tour-content">
                                                       <h3 className="tour-title">
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="link-dark link-hover"
                                                            >
                                                                 Visit Valiba swamp and primeval forest
                                                            </a>
                                                       </h3>
                                                       <div className="tour-itinerary">
                                                            <span>
                                                                 <i className="hicon hicon-menu-calendar" /> 3 days
                                                            </span>
                                                            <span>
                                                                 <i className="hicon hicon-flights-pin" /> 3 Destinations
                                                            </span>
                                                       </div>
                                                       <div className="inline-review">
                                                            <span className="review-score">4.9</span>
                                                            <span className="star-rate-view star-rate-size-sm me-2">
                                                                 <span className="star-value rate-50" />
                                                            </span>
                                                            <small className="review-total">
                                                                 <span>(231 reviews)</span>
                                                            </small>
                                                       </div>
                                                       <div className="tour-booking">
                                                            <div className="tour-price">
                                                                 <strong>
                                                                      <sup>$</sup>195.80
                                                                 </strong>
                                                                 <span>
                                                                      <sup>$</sup>
                                                                      <del className="">230.00</del>
                                                                 </span>
                                                            </div>
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="circle-icon circle-icon-link"
                                                            >
                                                                 <i className="hicon hicon-flights-one-ways" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* /Tour */}
                                        </li>
                                        <li className="splide__slide">
                                             {/* Tour */}
                                             <div className="tour-item rounded shadow-sm hover-effect">
                                                  <div className="tour-img">
                                                       <a href="single-tour-1.html">
                                                            <figure className="image-hover image-hover-overlay ">
                                                                 <img
                                                                      src="assets/img/tours/t5.jpg"
                                                                      srcSet="assets/img/tours/t5@2x.jpg 2x"
                                                                      alt=""
                                                                 />
                                                                 <i className="hicon hicon-plus-thin image-hover-icon" />
                                                            </figure>
                                                       </a>
                                                       <div className="tour-like">
                                                            <button
                                                                 type="button"
                                                                 className="circle-icon like-icon liked"
                                                            >
                                                                 <i className="hicon hicon-favorite-filled" />
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <div className="tour-content">
                                                       <h3 className="tour-title">
                                                            <a href="single-tour-1.html">
                                                                 Visit and boat ride on the beach in Satifo
                                                            </a>
                                                       </h3>
                                                       <div className="tour-itinerary">
                                                            <span>
                                                                 <i className="hicon hicon-menu-calendar" /> 3 days
                                                            </span>
                                                            <span>
                                                                 <i className="hicon hicon-flights-pin" /> 3 Destinations
                                                            </span>
                                                       </div>
                                                       <div className="inline-review">
                                                            <span className="review-score">4.9</span>
                                                            <span className="star-rate-view star-rate-size-sm me-2">
                                                                 <span className="star-value rate-50" />
                                                            </span>
                                                            <small className="review-total">
                                                                 <span>(231 reviews)</span>
                                                            </small>
                                                       </div>
                                                       <div className="tour-booking">
                                                            <div className="tour-price">
                                                                 <strong>
                                                                      <sup>$</sup>195.80
                                                                 </strong>
                                                                 <span>
                                                                      <sup>$</sup>
                                                                      <del className="">230.00</del>
                                                                 </span>
                                                            </div>
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="circle-icon circle-icon-link"
                                                            >
                                                                 <i className="hicon hicon-flights-one-ways" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* /Tour */}
                                        </li>
                                        <li className="splide__slide">
                                             {/* Tour */}
                                             <div className="tour-item rounded shadow-sm hover-effect">
                                                  <div className="tour-img">
                                                       <a href="single-tour-1.html">
                                                            <figure className="image-hover image-hover-overlay ">
                                                                 <img
                                                                      src="assets/img/tours/t6.jpg"
                                                                      srcSet="assets/img/tours/t6@2x.jpg 2x"
                                                                      alt=""
                                                                 />
                                                                 <i className="hicon hicon-plus-thin image-hover-icon" />
                                                            </figure>
                                                       </a>
                                                       <div className="tour-like">
                                                            <button
                                                                 type="button"
                                                                 className="circle-icon like-icon liked"
                                                            >
                                                                 <i className="hicon hicon-favorite-filled" />
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <div className="tour-content">
                                                       <h3 className="tour-title">
                                                            <a href="single-tour-1.html">
                                                                 Climbing and experiencing life in Fruska
                                                            </a>
                                                       </h3>
                                                       <div className="tour-itinerary">
                                                            <span>
                                                                 <i className="hicon hicon-menu-calendar" /> 3 days
                                                            </span>
                                                            <span>
                                                                 <i className="hicon hicon-flights-pin" /> 3 Destinations
                                                            </span>
                                                       </div>
                                                       <div className="inline-review">
                                                            <span className="review-score">4.9</span>
                                                            <span className="star-rate-view star-rate-size-sm me-2">
                                                                 <span className="star-value rate-50" />
                                                            </span>
                                                            <small className="review-total">
                                                                 <span>(231 reviews)</span>
                                                            </small>
                                                       </div>
                                                       <div className="tour-booking">
                                                            <div className="tour-price">
                                                                 <strong>
                                                                      <sup>$</sup>195.80
                                                                 </strong>
                                                                 <span>
                                                                      <sup>$</sup>
                                                                      <del className="">230.00</del>
                                                                 </span>
                                                            </div>
                                                            <a
                                                                 href="single-tour-1.html"
                                                                 className="circle-icon circle-icon-link"
                                                            >
                                                                 <i className="hicon hicon-flights-one-ways" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* /Tour */}
                                        </li>
                                   </ul>
                              </div>
                              {/* /Tour List */}
                         </div>
                    </div>
               </section>
               {/* /Tours */}
          </>

     )
}
