'use client'

import Link from "next/link"

export default function Services1() {
    return (
        <>
            <style jsx>{`
                /* General Readability & Layout */
                .section-services {
                    position: relative;
                    overflow: hidden;
                    padding-top: 80px;
                    padding-bottom: 80px;
                }

                .ds-4 {
                    font-size: clamp(2rem, 5vw, 3.5rem); /* Responsive font size */
                    line-height: 1.2;
                }

                .card-service h6 {
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    font-weight: 700;
                }

                .card-service p {
                    font-size: clamp(0.875rem, 1.5vw, 1rem);
                    line-height: 1.6;
                    color: #6c757d; /* Clear grey for readability */
                }

                /* Staggered Layout Fixes */
                @media (min-width: 992px) {
                    .stagger-up { margin-top: 80px; }
                    .stagger-down { margin-top: 40px; }
                }

                @media (max-width: 991px) {
                    .stagger-up, .stagger-down { margin-top: 0 !important; }
                    .card-wrapper { margin-bottom: 20px; }
                    .ds-4 { margin-bottom: 20px; }
                }

                /* Large Screen Width (Desktop 1440px+) */
                @media (min-width: 1440px) {
                    #services .container {
                        max-width: 1600px !important;
                    }
                }

                /* 4K Optimization */
                @media (min-width: 2500px) {
                    #services .container { max-width: 2000px !important; }
                    .ds-4 { font-size: 5rem !important; }
                    .card-service p { font-size: 1.25rem !important; }
                }

                .bg-shape-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 0;
                    width: 100%;
                    max-width: 1200px;
                    opacity: 0.5;
                    pointer-events: none;
                }
            `}</style>

            <section id="services" className="section-services">
                <div className="container py-5 position-relative z-1">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center d-inline-flex rounded-pill px-3 py-1 mb-3" style={{backgroundColor: '#EDF8FF'}} data-aos="zoom-in">
                            <span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
                            <span className="fs-7 fw-medium mx-2" style={{color: '#1E90FF'}}>Our Services</span>
                        </div>
                        
                        <h3 className="ds-4 fw-regular" data-aos="fade-up">
                            Presentation Design <span className="fw-bold">Services</span>
                        </h3>
                        
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-7">
                                <p className="fs-5 mt-3 text-muted" data-aos="fade-up" data-aos-delay={100}>
                                    From corporate presentations to creative pitches, we deliver professional 
                                    presentation designs that make an impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="row position-relative z-1">
                        {/* Column 1 */}
                        <div className="col-lg-4 col-md-6 card-wrapper">
                            <div className="p-2 stagger-up rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up">
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-1.svg" alt="Service 1" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Custom Presentation Design</h6>
                                    <p className="mb-0 flex-grow-1">Transform your ideas into visually stunning presentations with custom layouts, graphics, and animations tailored to your brand.</p>
                                </div>
                            </div>
                            <div className="p-2 mt-4 stagger-down rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up" data-aos-delay={100}>
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-2.svg" alt="Service 2" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Template Creation</h6>
                                    <p className="mb-0 flex-grow-1">Professional presentation templates designed for consistency across your organization with branded elements.</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col-lg-4 col-md-6 card-wrapper">
                            <div className="p-2 stagger-down rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up" data-aos-delay={200}>
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-3.svg" alt="Service 3" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Pitch Deck Design</h6>
                                    <p className="mb-0 flex-grow-1">Compelling investor pitch decks and business presentations that tell your story and secure funding opportunities.</p>
                                </div>
                            </div>
                            <div className="p-2 mt-4 stagger-down rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up" data-aos-delay={300}>
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-4.svg" alt="Service 4" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Training Materials</h6>
                                    <p className="mb-0 flex-grow-1">Educational presentations and training modules designed to engage learners and deliver knowledge effectively.</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="col-lg-4 col-md-12 card-wrapper">
                            <div className="p-2 stagger-up rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up" data-aos-delay={400}>
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-5.svg" alt="Service 5" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Animation & Effects</h6>
                                    <p className="mb-0 flex-grow-1">Dynamic animations, transitions, and interactive elements that bring your presentations to life.</p>
                                </div>
                            </div>
                            <div className="p-2 mt-4 stagger-down rounded-4 shadow-sm bg-white hover-up" data-aos="fade-up" data-aos-delay={500}>
                                <div className="card-service bg-white p-4 p-xl-5 border rounded-4 h-100 d-flex flex-column">
                                    <img src="/assets/imgs/service-1/icon-6.svg" alt="Service 6" style={{width: '48px', height: '48px'}} />
                                    <h6 className="my-3">Brand Integration</h6>
                                    <p className="mb-0 flex-grow-1">Seamless integration of your brand identity, colors, fonts, and messaging across all materials.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Shape */}
                    <div className="bg-shape-center d-none d-lg-block">
                        <img src="/assets/imgs/service-1/img-bg.png" alt="Background decoration" className="img-fluid" />
                    </div>
                </div>
            </section>
        </>
    )
}
