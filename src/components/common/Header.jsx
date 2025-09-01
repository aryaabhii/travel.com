import React from 'react'

export default function Header() {
     return (
          <>
               <header id="header" data-aos="fade">
                    {/* Header Topbar */}
                    <div className="header-topbar">
                         <div className="container">
                              <div className="row g-0">
                                   <div className="col-6 col-xl-7 col-md-8">
                                        <div className="d-flex align-items-center">
                                             <a href="tel:+84966704132">
                                                  <i className="hicon hicon-telephone me-1" />
                                                  <span>+33 321-654-987</span>
                                             </a>
                                             <span className="vr bg-white d-none d-md-inline ms-3 me-3" />
                                             <a href="mailto:" className="d-none d-md-inline">
                                                  <i className="hicon hicon-email-envelope me-1" />
                                                  <span>Booking@example.com</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className="col-6 col-xl-5 col-md-4">
                                        <div className="text-end">
                                             <a
                                                  className="d-inline-flex align-items-center me-3"
                                                  data-bs-toggle="modal"
                                                  href="home-3.html#mdlLanguage"
                                             >
                                                  <img
                                                       src="assets/img/flags/en.svg"
                                                       height={14}
                                                       className="me-1"
                                                       alt=""
                                                  />
                                                  <span className="me-1">English</span>
                                                  <i className="hicon hicon-thin-arrow-down hicon-bold hicon-60" />
                                             </a>
                                             <a
                                                  className="d-inline-flex align-items-center"
                                                  data-bs-toggle="modal"
                                                  href="home-3.html#mdlCurrency"
                                             >
                                                  <span className="me-1">USD</span>
                                                  <i className="hicon hicon-thin-arrow-down hicon-bold hicon-60" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* /Header Topbar */}
                    {/* Header Navbar */}
                    <div className="header-navbar">
                         <nav className="navbar navbar-expand-xl">
                              <div className="container">
                                   <button
                                        className="navbar-toggler me-3"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar"
                                        aria-controls="offcanvasNavbar"
                                   >
                                        <i className="hicon hicon-bold hicon-hamburger-menu" />
                                   </button>
                                   <a className="navbar-brand" href="index.html">
                                        <img
                                             src="assets/img/logos/logo.png"
                                             srcSet="assets/img/logos/logo@2x.png 2x"
                                             alt=""
                                        />
                                   </a>
                                   <div
                                        className="offcanvas offcanvas-navbar offcanvas-start border-end-0"
                                        tabIndex={-1}
                                        id="offcanvasNavbar"
                                   >
                                        <div className="offcanvas-header border-bottom p-4 p-xl-0">
                                             <a href="index.html" className="d-inline-block">
                                                  <img
                                                       src="assets/img/logos/menu-logo.png"
                                                       srcSet="assets/img/logos/menu-logo@2x.png 2x"
                                                       alt=""
                                                  />
                                             </a>
                                             <button
                                                  type="button"
                                                  className="btn-close shadow-none"
                                                  data-bs-dismiss="offcanvas"
                                                  aria-label="Close"
                                             />
                                        </div>
                                        <div className="offcanvas-body p-4 p-xl-0">
                                             <ul className="navbar-nav">
                                                  <li className="nav-item dropdown">
                                                       <a
                                                            className="nav-link dropdown-toggle-hover active"
                                                            href="index.html"
                                                            data-bs-display="static"
                                                       >
                                                            <span>Home</span>
                                                            <i className="hicon hicon-thin-arrow-down hicon-bold dropdown-toggle-icon" />
                                                       </a>
                                                       <ul className="dropdown-menu slideIn" data-bs-popper="static">
                                                            <li>
                                                                 <a className="dropdown-item" href="index.html">
                                                                      Home 1
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="home-2.html">
                                                                      Home 2
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item active" href="home-3.html">
                                                                      Home 3
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="nav-item dropdown">
                                                       <a
                                                            className="nav-link dropdown-toggle-hover"
                                                            href="destinations-1.html"
                                                            data-bs-display="static"
                                                       >
                                                            <span>Destinations</span>
                                                            <i className="hicon hicon-thin-arrow-down hicon-bold dropdown-toggle-icon" />
                                                       </a>
                                                       <ul className="dropdown-menu slideIn" data-bs-popper="static">
                                                            <li>
                                                                 <a className="dropdown-item" href="destinations-1.html">
                                                                      Destinations 1
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="destinations-2.html">
                                                                      Destinations 2
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="destinations-3.html">
                                                                      Destinations 3
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="nav-item dropdown">
                                                       <a
                                                            className="nav-link dropdown-toggle-hover"
                                                            href="tour-packages-1.html"
                                                            data-bs-display="static"
                                                       >
                                                            <span>Moliva Tours</span>
                                                            <i className="hicon hicon-thin-arrow-down hicon-bold dropdown-toggle-icon" />
                                                       </a>
                                                       <ul className="dropdown-menu slideIn" data-bs-popper="static">
                                                            <li>
                                                                 <a className="dropdown-item" href="tour-packages-1.html">
                                                                      Tour packages 1
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="tour-packages-2.html">
                                                                      Tour packages 2
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="tour-packages-3.html">
                                                                      Tour packages 3
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="single-tour-1.html">
                                                                      Single tour 1
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="single-tour-2.html">
                                                                      Single tour 2
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="single-tour-3.html">
                                                                      Single tour 3
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="nav-item dropdown">
                                                       <a
                                                            className="nav-link dropdown-toggle-hover"
                                                            href="https://moliva.themenix.com/post-list-1.html"
                                                            data-bs-display="static"
                                                       >
                                                            <span>Travel Insight</span>
                                                            <i className="hicon hicon-thin-arrow-down hicon-bold dropdown-toggle-icon" />
                                                       </a>
                                                       <ul className="dropdown-menu slideIn" data-bs-popper="static">
                                                            <li>
                                                                 <a className="dropdown-item" href="post-list.html">
                                                                      Post list
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a className="dropdown-item" href="single-post.html">
                                                                      Single post
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="nav-item dropdown">
                                                       <a
                                                            className="nav-link dropdown-toggle-hover"
                                                            href="home-3.html#"
                                                            data-bs-display="static"
                                                       >
                                                            <span>Pages</span>
                                                            <i className="hicon hicon-thin-arrow-down hicon-bold dropdown-toggle-icon" />
                                                       </a>
                                                       <div className="dropdown-menu slideIn" data-bs-popper="static">
                                                            <div className="mega-menu">
                                                                 <div className="mega-menu-item">
                                                                      <div className="mega-menu-title">
                                                                           <span>My Account</span>
                                                                      </div>
                                                                      <ul className="nav flex-column ms-6 ms-xl-0">
                                                                           <li>
                                                                                <a className="dropdown-item" href="dashboard.html">
                                                                                     Dashboard
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="booking.html">
                                                                                     Booking
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="wishlist.html">
                                                                                     Wishlist
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="settings.html">
                                                                                     Settings
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="security.html">
                                                                                     Security
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="login.html">
                                                                                     Login
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="register.html">
                                                                                     Register
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a
                                                                                     className="dropdown-item"
                                                                                     href="forgot-password.html"
                                                                                >
                                                                                     Forgot Password
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="new-password.html">
                                                                                     New Password
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                                 <div className="mega-menu-item">
                                                                      <div className="mega-menu-title">
                                                                           <span>Booking</span>
                                                                      </div>
                                                                      <ul className="nav flex-column ms-6 ms-xl-0">
                                                                           <li>
                                                                                <a
                                                                                     className="dropdown-item"
                                                                                     href="shopping-cart.html"
                                                                                >
                                                                                     1. Shopping cart
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="checkout.html">
                                                                                     2. Checkout
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="completed.html">
                                                                                     3. Completed
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                      <div className="mega-menu-title">
                                                                           <span>Other pages</span>
                                                                      </div>
                                                                      <ul className="nav flex-column ms-6 ms-xl-0">
                                                                           <li>
                                                                                <a className="dropdown-item" href="about.html">
                                                                                     About
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="contact.html">
                                                                                     Contact
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="coming-soon.html">
                                                                                     Coming Soon
                                                                                </a>
                                                                           </li>
                                                                           <li>
                                                                                <a className="dropdown-item" href="404.html">
                                                                                     404 page
                                                                                </a>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </li>
                                             </ul>
                                             <div className="d-flex align-items-center ms-auto">
                                                  <a
                                                       href="shopping-cart.html"
                                                       className="circle-icon cart-icon me-4"
                                                  >
                                                       <i className="hicon hicon-bold hicon-shopping-markets" />
                                                       <span>3</span>
                                                  </a>
                                                  <a
                                                       href="wishlist.html"
                                                       className="circle-icon wishlist-icon me-4"
                                                  >
                                                       <i className="hicon hicon-bold hicon-menu-favorite" />
                                                       <span>5</span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="dropdown user-menu ms-xl-auto">
                                        <button
                                             className="circle-icon circle-icon-link circle-icon-link-hover"
                                             data-bs-toggle="dropdown"
                                             data-bs-display="static"
                                        >
                                             <i className="hicon hicon-mmb-account" />
                                        </button>
                                        <ul
                                             className="dropdown-menu dropdown-menu-end animate slideIn"
                                             data-bs-popper="static"
                                        >
                                             <li>
                                                  <a className="dropdown-item" href="register.html">
                                                       <i className="hicon hicon-edit me-1" />
                                                       <span>Register</span>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a className="dropdown-item" href="login.html">
                                                       <i className="hicon hicon-aps-lock me-1" />
                                                       <span>Login</span>
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </nav>
                    </div>
                    {/* /Header Navbar */}
                    {/* Language */}
                    <div
                         className="modal fade"
                         id="mdlLanguage"
                         tabIndex={-1}
                         aria-labelledby="h3Language"
                         aria-hidden="true"
                    >
                         <div className="modal-dialog">
                              <div className="modal-content border-0 shadow-lg">
                                   <div className="modal-header">
                                        <span
                                             className="fs-3 modal-title text-body-emphasis fw-medium"
                                             id="h3Language"
                                        >
                                             Select language
                                        </span>
                                        <button
                                             type="button"
                                             className="btn-close shadow-none"
                                             data-bs-dismiss="modal"
                                             aria-label="Close"
                                        />
                                   </div>
                                   <div className="modal-body">
                                        <ul className="list-unstyled row mb-0">
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/en.svg" height={16} alt="" />
                                                            <span className="ms-2">English</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/fr.svg" height={16} alt="" />
                                                            <span className="ms-2">Français</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/es.svg" height={16} alt="" />
                                                            <span className="ms-2">Español</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/de.svg" height={16} alt="" />
                                                            <span className="ms-2">Deutsch</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/it.svg" height={16} alt="" />
                                                            <span className="ms-2">Italiano</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/nl.svg" height={16} alt="" />
                                                            <span className="ms-2">Nederlands</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/pt.svg" height={16} alt="" />
                                                            <span className="ms-2">Português</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/ru.svg" height={16} alt="" />
                                                            <span className="ms-2">Русский</span>
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-6 col-lg-4">
                                                  <a
                                                       href="home-3.html%3Flang=en.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-flex align-items-center pt-2 pb-2">
                                                            <img src="assets/img/flags/cn.svg" height={16} alt="" />
                                                            <span className="ms-2">日本語</span>
                                                       </span>
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* /Language */}
                    {/* Currency */}
                    <div
                         className="modal fade"
                         id="mdlCurrency"
                         tabIndex={-1}
                         aria-labelledby="h3Currency"
                         aria-hidden="true"
                    >
                         <div className="modal-dialog">
                              <div className="modal-content border-0 shadow-lg">
                                   <div className="modal-header">
                                        <span
                                             className="fs-3 modal-title text-body-emphasis fw-medium"
                                             id="h3Currency"
                                        >
                                             Select currency
                                        </span>
                                        <button
                                             type="button"
                                             className="btn-close shadow-none"
                                             data-bs-dismiss="modal"
                                             aria-label="Close"
                                        />
                                   </div>
                                   <div className="modal-body">
                                        <ul className="list-unstyled row mb-0">
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=usd.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>USD</strong> (United States Dollar)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=eur.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>EUR</strong> (Euro)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=gbp.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>GBP</strong> (Pound Sterling)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=aud.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>AUD</strong> (Australian Dollar)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=nzd.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>NZD</strong> (New Zealand Dollar)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=cad.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>CAD</strong> (Canadian Dollar)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=jpy.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>JPY</strong> (Japanese Yen)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=cny.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>CNY</strong> (Chinese Yuan)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=vnd.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>VND</strong> (Vietnam Dong)
                                                       </span>
                                                  </a>
                                             </li>
                                             <li className="col-12 col-lg-6">
                                                  <a
                                                       href="home-3.html%3Fcurrency=sgd.html"
                                                       className="link-dark link-hover"
                                                  >
                                                       <span className="d-block pt-2 pb-2">
                                                            <strong>SGD</strong> (Singapore Dollar)
                                                       </span>
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* /Currency */}
               </header>
          </>
     )
}
