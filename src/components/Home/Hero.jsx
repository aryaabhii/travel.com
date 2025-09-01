import React from 'react';
import Image from 'next/image';

export default function Hero() {
     return (
          <>
               {/* Hero */}
               <section className="hero" data-aos="fade">
                    <h1 className="d-none">Moliva</h1>

                    {/* Video/Image Background */}
                    <div className="hero-background">
                         <div className="bg-overlay ratio ratio-16x9 z-0">
                              {/* Using an image fallback since video might not be available */}
                              <Image
                                   src="/assets/img/background/b5.jpg"
                                   alt="Beautiful nature scenery"
                                   fill
                                   className="object-fit-cover"
                                   priority
                              />
                              <div className="bg-content hero-caption">
                                   <div className="container">
                                        <div className="row justify-content-center">
                                             <div className="col-12 col-xl-7 col-md-10">
                                                  <div className="hero-sub-title">
                                                       <span>Explore Moliva</span>
                                                  </div>
                                                  <h2 className="display-3 hero-title">
                                                       Enjoy the beautiful and romantic nature
                                                  </h2>
                                                  <div className="hero-action">
                                                       <a
                                                            href="/tour-packages"
                                                            className="btn btn-outline-light btn-uppercase mnw-180"
                                                       >
                                                            <span>Explore</span>
                                                            <i className="icon icon-flights-one-ways" />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Check tour */}
                    <div className="container">
                         <div className="search-tours search-hero">
                              <form className="search-tour-form" method="post">
                                   <div className="search-tour-input">
                                        <div className="row g-3 g-xl-2">
                                             <div className="col-12 col-xl-4 col-md-6">
                                                  <div className="input-icon-group">
                                                       <label
                                                            htmlFor="txtKeyword"
                                                            className="input-icon icon icon-flights-pin"
                                                       />
                                                       <input
                                                            id="txtKeyword"
                                                            type="text"
                                                            className="form-control shadow-sm"
                                                            placeholder="Where are you going?"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-12 col-xl-3 col-md-6">
                                                  <div className="input-icon-group tour-date">
                                                       <label
                                                            className="input-icon icon icon-menu-calendar icon-bold"
                                                            htmlFor="txtCheckDate2"
                                                       />
                                                       <input
                                                            id="txtCheckDate2"
                                                            type="text"
                                                            className="form-select shadow-sm"
                                                            placeholder="Tour date"
                                                            data-input=""
                                                            readOnly=""
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-12 col-xl-3 col-md-6">
                                                  <div className="input-icon-group">
                                                       <label
                                                            className="input-icon icon icon-menu-calendar icon-bold"
                                                            htmlFor="txtCheckDate2"
                                                       />
                                                       <select
                                                            className="form-select dropdown-select shadow-sm"
                                                            id="selAdults"
                                                       >
                                                            <option value="">All categories</option>
                                                            <option value={1}>Ecotourism & Resort</option>
                                                            <option value={2}>Cultural & Foods</option>
                                                            <option value={3}>Explorer & Adventure</option>
                                                            <option value={4}>Festival & Events</option>
                                                            <option value={5}>Museums & Exhibitions</option>
                                                            <option value={6}>Hiking & Trekking</option>
                                                            <option value={7}>Motor & Bicycles</option>
                                                            <option value={8}>Ships & boats</option>
                                                            <option value={9}>Family Activities</option>
                                                       </select>
                                                  </div>
                                             </div>
                                             <div className="col-12 col-xl-2 col-md-6">
                                                  <button
                                                       type="submit"
                                                       className="btn btn-primary btn-uppercase w-100"
                                                  >
                                                       <i className="icon icon-bold icon-search-box" />
                                                       <span>Search</span>
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
                    {/* /Check tour */}
               </section>

               {/* Add CSS to fix the visibility issues */}
               {/* <style jsx>{`
        .hero {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .hero-background {
          position: relative;
          height: 80vh;
          min-height: 600px;
          overflow: hidden;
          border-radius: 0 0 20px 20px;
        }
        
        .bg-overlay {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .bg-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          z-index: 1;
        }
        
        .hero-caption {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          z-index: 2;
          color: white;
        }
        
        .hero-sub-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .search-tours {
          position: relative;
          margin-top: -50px;
          z-index: 10;
        }
        
        .search-hero {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .input-icon-group {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          color: #6c757d;
        }
        
        .form-control, .form-select {
          padding-left: 45px;
          height: 50px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        
        .btn-uppercase {
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .mnw-180 {
          min-width: 180px;
        }
        
        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        
        .icon-flights-one-ways {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19L8 20.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z'/%3E%3C/svg%3E");
          margin-left: 8px;
        }
        
        .icon-flights-pin {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
        }
        
        .icon-menu-calendar {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z'/%3E%3C/svg%3E");
        }
        
        .icon-search-box {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
          margin-right: 8px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-background {
            height: 60vh;
            min-height: 500px;
          }
        }
      `}</style> */}
          </>
     );
}