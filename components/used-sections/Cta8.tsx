'use client'
import CountUp from 'react-countup'

export default function Cta8() {
    return (
        <>
            <style jsx global>{`
                /* 1440px Se 4K Tak Ke Liye Specific Responsiveness */
                @media (min-width: 1440px) {
                    #process .container {
                        max-width: 1320px !important; /* Fixed width to prevent over-stretching */
                        width: 100% !important;
                        margin: 0 auto !important;
                    }
                    
                    /* Heading scaling */
                    #process .ds-4 {
                        font-size: calc(3.2rem + 1.2vw) !important; 
                        line-height: 1.1 !important;
                        margin-bottom: 1.5rem;
                    }

                    /* Paragraph scaling */
                    #process p {
                        font-size: 1.2rem !important;
                        max-width: 750px !important;
                    }

                    /* Image size adjustment for large screens */
                    #process .col-lg-6 img.rounded-4 {
                        width: 100% !important; 
                        max-width: 800px !important;
                    }

                    /* Floating Blue Box (500+) Scaling */
                    #process .tag-year {
                        padding: 3.5rem 2.5rem !important;
                        right: -10% !important;
                        bottom: 15% !important;
                        width: auto !important; /* Ensure it doesn't stretch */
                        max-width: 400px !important;
                    }
                    
                    #process .tag-year span.h2 {
                        font-size: 3rem !important;
                    }
                }

                /* 2500px+ (Ultra Wide / 4K) ke liye Mazeed Scaling */
                @media (min-width: 2500px) {
                    #process .container {
                        max-width: 2400px !important;
                    }
                    
                    #process .tag-year {
                        right: -5% !important;
                        bottom: 20% !important;
                        padding: 4rem 3rem !important;
                    }
                    
                    #process .ds-4 {
                        font-size: 5.5rem !important;
                    }

                    #process p {
                        font-size: 1.6rem !important;
                        max-width: 1000px !important;
                    }

                    #process .icon-xxl {
                        width: 110px !important;
                        height: 110px !important;
                    }
                }
            `}</style>

            <section id="process" className="section-cta-8 d-bg-7">
                <div className=" position-relative section-padding">
                    <div className="m-5 p-5" >
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="d-flex align-items-center justify-content-center border border-2 border-white d-inline-flex rounded-pill px-4 py-2 bg-1" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                    <span className="tag-spacing fs-7 fw-bold ms-2 text-uppercase" style={{ color: '#1E90FF' }}>Our Process</span>
                                </div>
                                <h5 className="ds-4 mt-2">Creating presentations that make an impact.</h5>
                                <p>We work closely with our clients to understand their message and audience, crafting custom presentation designs that engage, inform, and inspire action.</p>
                                <button className="btn btn-gradient text-white mt-4 rounded-pill px-3 py-2" style={{ backgroundColor: '#1E90FF', borderColor: '#1E90FF', fontSize: '0.8rem' }}>Get Started Now</button>
                                
                                <div className="d-flex pt-3 align-items-center">
                                    <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 bg-1">
                                        <div className="icon">
                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                        </div>
                                    </div>
                                    <div className="ps-5">
                                        <h6>Content Strategy</h6>
                                        <p>We analyze your message and audience to create <br /> compelling presentation narratives.</p>
                                    </div>
                                </div>
                                
                                <div className="d-flex pt-3 align-items-center">
                                    <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 bg-1">
                                        <div className="icon">
                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                        </div>
                                    </div>
                                    <div className="ps-5">
                                        <h6>Design & Delivery</h6>
                                        <p>Professional design execution with timely delivery <br /> of your stunning presentations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
                                <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8" style={{ width: '100%' }}>
                                    <img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" style={{ width: '80%', height: 'auto' }} />
                                    <div className="alltuchtopdown tag-year position-absolute backdrop-filter rounded-4 px-4 py-5 text-center z-1" style={{ backgroundColor: '#1E90FF' }}>
                                        <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={500} enableScrollSpy={true} />+</span>
                                        <p className="text-white text-nowrap mb-0">Presentations Created</p>
                                    </div>
                                    <div className="position-absolute tag-dots z-0 pt-5">
                                        <img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}