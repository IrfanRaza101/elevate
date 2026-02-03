'use client'
import Link from "next/link"

export default function Features5() {
    return (
        <>
            <style jsx>{`
                /* 4K & Ultra-Wide Scaling */
                @media (min-width: 2000px) {
                    .container { max-width: 1800px !important; width: 100%; margin: 0 auto; }
                    .ds-4 { font-size: 5rem !important; }
                    .ds-5 { font-size: 4.5rem !important; }
                    .fs-5 { font-size: 1.8rem !important; }
                    .feature-item { font-size: 1.4rem !important; }
                }

                /* Section Layout */
                .section-feature-5 {
                    padding-top: 80px;
                    padding-bottom: 120px;
                    position: relative;
                    overflow: hidden;
                    background: url('/assets/imgs/features-5/bg-pattern.png') no-repeat center center;
                    background-size: cover;
                }

                .feature-item {
                    padding: 12px 24px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                    font-weight: 600;
                }

                .feature-item:hover { transform: translateY(-5px); }

                /* Mobile & Tablet Fixes */
                @media (max-width: 991px) {
                    .pe-lg-8 { padding-right: 0 !important; }
                    .text-center-mobile { text-align: center !important; }
                    .offset-lg-1 { margin-left: 0 !important; }
                    .mt-7 { margin-top: 2rem !important; }

                    .photo-description { margin: 0 auto 2rem auto; display: block; max-width: fit-content; }
                }

                @media (max-width: 576px) {
                    .ds-4 { font-size: 2.2rem !important; }
                    .ds-5 { font-size: 2rem !important; }
                    .section-feature-5 { padding-bottom: 60px; }
                    .feature-item { width: 100%; text-align: center; }
                }

                /* Gradients & Images */
                .box-gradient-1, .box-gradient-2 {
                    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
                    position: absolute;
                    border-radius: 16px;
                    z-index: 0;
                }

                .photo-description img {
                    border-radius: 16px;
                    border: 2px solid #fff;
                    display: block;
                    width: 100%;
                    height: auto;
                }
            `}</style>

            <section id="features" className="section-feature-5 m-5 rounded">
                <div className=" m-5 p-5 ">

                    {/* First Row */}
                    <div className="row align-items-center text-center-mobile">
                        <div className="col-lg-5">
                            <div className="photo-description position-relative">
                                <img src="/assets/imgs/features-5/img-1.png" alt="Feature Image 1" />
                                <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 z-0" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                            <div className="pe-lg-8">
                                <h4 className="ds-4 fw-regular">
                                    Everything you need <br />
                                    for <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>stunning presentation designs.</span>
                                </h4>
                                <p className="fs-5 mt-3">
                                    Professional design tools, templates, and expertise to create presentations that captivate and convert your audience.
                                </p>
                                <Link href="#projects" className="btn btn-gradient hover-up mt-4 rounded-pill px-4 py-2" style={{color: 'white', fontSize: '0.8rem'}} data-aos="fade-zoom-in" data-aos-delay={200}>
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Features Items */}
                    <div className="row py-90">
                        <div className="col-lg-12 d-flex flex-wrap justify-content-center gap-3">
                            {['Custom Design', 'Animation Effects', 'Brand Integration', 'Template Library', 'Fast Delivery'].map((item, idx) => (
                                <div key={idx} className="feature-item fs-5" data-aos="fade-zoom-in" data-aos-delay={idx*100}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row align-items-center text-center-mobile pt-lg-5">
                        <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-5">
                            <div className="pe-lg-8">
                                <h4 className="ds-5 fw-regular">
                                    Experience the <br /> 
                                    <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>cutting-edge design process</span>
                                </h4>
                                <p className="fs-5 mt-3">
                                    Our streamlined workflow ensures your presentations are delivered on time with exceptional quality.
                                </p>
                                <Link href="#how-it-works" className="btn btn-gradient hover-up mt-4 rounded-pill px-4 py-2" style={{color: 'white', fontSize: '0.8rem'}} data-aos="fade-zoom-in" data-aos-delay={300}>
                                    Explore Now
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
                            <div className="photo-description position-relative d-inline-block">
                                <img src="/assets/imgs/features-5/img-2.png" alt="Feature Image 2" />
                                <div className="position-absolute top-50 start-50 translate-middle z-0 w-100 h-100">
                                    <div className="box-gradient-2 w-100 h-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Icons Row */}
                    <div className="row d-flex justify-content-center pt-lg-100 pt-8 text-center">
                        <div className="col-lg-8">
                            <p className="fs-5 mb-4">Compatible with all major platforms</p>
                            <div className="d-flex justify-content-center flex-wrap gap-4">
                                {[1,2,3,4,5].map(i => (
                                    <img key={i} src={`/assets/imgs/features-5/icon-${i}.png`} alt="icon" style={{maxWidth: '50px'}} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
