'use client'

import Link from "next/link"

export default function Blog5() {
    return (
        <>
            <style jsx global>{`
                /* Fluid Typography for Blog Titles and Content */
                #blog .ds-4 {
                    font-size: clamp(2.5rem, 3.5vw, 5.5rem) !important;
                    line-height: 1.1;
                }

                #blog h6 {
                    font-size: clamp(1.1rem, 1.3vw, 2.2rem) !important;
                    line-height: 1.3;
                }

                #blog p {
                    font-size: clamp(0.95rem, 1vw, 1.5rem) !important;
                    color: rgba(255, 255, 255, 0.7) !important;
                }

                /* Container Scaling for 4K */
                @media (min-width: 1441px) {
                    #blog .position-relative.z-2 {
                        max-width: 90% !important;
                        margin: 0 auto !important;
                    }
                }

                @media (min-width: 2500px) {
                    #blog .position-relative.z-2 {
                        max-width: 2200px !important;
                    }
                    .section-padding {
                        padding: 150px 0 !important;
                    }
                    /* Image scaling for 4K */
                    .card-team img {
                        width: 450px !important;
                        object-fit: cover;
                    }
                }

                /* Dark Theme Adjustments */
                .card-team {
                    background: rgba(255, 255, 255, 0.03) !important;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    transition: all 0.4s ease;
                }

                .card-team:hover {
                    border-color: #1E90FF !important;
                    box-shadow: 0 0 30px rgba(30, 144, 255, 0.2);
                }

                .card-team .bg-white {
                    background: transparent !important;
                    color: white !important;
                }
                
                #blog .text-900 { color: #e0e0e0 !important; }
            `}</style>

            <section id="blog" className="section-blog-1 section-padding position-relative border-top border-bottom" style={{ backgroundColor: '#0d0118' }}>
                <div className="m-lg-5 p-lg-5 p-3 position-relative z-2">
                    <div className="row align-items-end mb-8">
                        <div className="col-lg-7 me-auto">
                            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in">
                                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Design Insights</span>
                            </div>
                            <h3 className="ds-4 mt-4 mb-3 text-white">Presentation Design Tips</h3>
                            <span className="fs-5 fw-medium text-900">Expert insights and best practices for creating stunning presentations</span>
                        </div>
                        <div className="col-lg-auto mt-4 mt-lg-0">
                            <Link href="/blog" className="btn btn-gradient hover-up rounded-pill px-4 py-3" style={{ color: 'white', fontSize: '1rem' }}>
                                View all tips
                            </Link>
                        </div>
                    </div>

                    <div className="row mt-8 align-items-stretch">
                        {/* Main Featured Post */}
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <div className="card-team h-100 position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 shadow-2 overflow-hidden">
                                <img className="w-100 w-lg-auto h-100" src="/assets/imgs/blog-5/img-1.png" alt="infinia" style={{ objectFit: 'cover' }} />
                                <div className="p-5 flex-grow-1">
                                    <Link href="/blog/1" className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-3">
                                        <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">design tips</span>
                                    </Link>
                                    <h6 className="mb-3 text-white">10 Essential Presentation Design Principles for Professional Presentations</h6>
                                    <p className="mb-4">Master the art of presentation design with these fundamental principles that will transform your slides from ordinary to extraordinary...</p>
                                    
                                    <div className="d-flex align-items-center justify-content-between mt-auto pt-5 border-top border-secondary">
                                        <div className="d-flex align-items-center position-relative z-1">
                                            <div className="icon-shape rounded-circle border border-2 border-white overflow-hidden" style={{ width: '50px', height: '50px' }}>
                                                <img className="img-fluid" src="/assets/imgs/blog-4/avatar-1.png" alt="author" />
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="fs-7 m-0 mb-1 text-white">Sarah Design</h6>
                                                <p className="mb-0 fs-8 text-secondary">15 Dec 2024</p>
                                            </div>
                                            <Link href="/blog/1" className="position-absolute inset-0 z-0" />
                                        </div>
                                        <div className="arrow-icon icon-shape icon-md bg-white rounded-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                <path d="M17.25 15.5322V7.03223H8.75" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 7.28223L6.75 17.5322" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <Link href="/blog/1" className="position-absolute inset-0 z-0" />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Posts */}
                        <div className="col-lg-5">
                            <div className="d-flex flex-column h-100 justify-content-between">
                                <Link href="/blog/2" className="card-team p-4 rounded-3 d-flex flex-column flex-md-row align-items-center hover-up mb-4 h-100">
                                    <img className="rounded-3 w-100 w-md-auto mb-3 mb-md-0" src="/assets/imgs/blog-5/img-2.png" alt="infinia" style={{ maxWidth: '180px' }} />
                                    <div className="content ms-md-4">
                                        <h6 className="mb-2 text-white">Engaging Slide Animations</h6>
                                        <p className="mb-0 fs-7">Learn the balance between eye-catching animations and delivery...</p>
                                    </div>
                                </Link>
                                
                                <Link href="/blog/3" className="card-team p-4 rounded-3 d-flex flex-column flex-md-row align-items-center hover-up h-100">
                                    <img className="rounded-3 w-100 w-md-auto mb-3 mb-md-0" src="/assets/imgs/blog-5/img-3.png" alt="infinia" style={{ maxWidth: '180px' }} />
                                    <div className="content ms-md-4">
                                        <h6 className="mb-2 text-white">Color Psychology Tips</h6>
                                        <p className="mb-0 fs-7">Discover how different colors impact your audience psychology...</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Background Blobs */}
                <div className="bouncing-blobs-container">
                    <div className="bouncing-blobs-glass" />
                    <div className="bouncing-blobs">
                        <div className="bouncing-blob bouncing-blob--infor" />
                    </div>
                </div>
            </section>
        </>
    )
}