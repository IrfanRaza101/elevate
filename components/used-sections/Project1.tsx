"use client"
import Link from 'next/link'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Project1() {

    const swiperOptions = {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1400: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
            992: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <>
            <style jsx>{`
                .section-project-2 {
                    overflow: hidden;
                }
                
                /* 4K & Ultra Wide Scaling */
                @media (min-width: 2000px) {
                    .container { max-width: 1800px !important; }
                    .ds-4 { font-size: 4.5rem !important; }
                    .fs-5 { font-size: 1.75rem !important; }
                }

                /* Text Visibility on Mobile */
                @media (max-width: 576px) {
                    .card-team {
                        padding: 1.5rem !important;
                        margin: 1rem !important;
                    }
                    .ds-4 { font-size: 2.25rem !important; }
                }

                /* Image Fix to prevent stretching */
                .fix img {
                    object-fit: cover;
                    height: 100%;
                    transition: transform 0.5s ease;
                }
                
                .zoom-img:hover .fix img {
                    transform: scale(1.1);
                }

                .backdrop-filter {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
            `}</style>

            <section id="projects" className="section-project-2 pt-10 pb-8">
                <div className="container py-5">
                    <div className="row mb-5 mb-lg-8 align-items-end">
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                            <div className="pe-2">
                                <div className="d-flex align-items-center d-inline-flex rounded-pill px-3 py-1 mb-3" style={{ backgroundColor: '#EDF8FF' }}>
                                    <span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
                                    <span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Portfolio</span>
                                </div>
                                <h3 className="ds-4 mt-2 mb-3 fw-regular">Our Featured <span className="fw-bold">Presentations</span></h3>
                                <p className="fs-5 text-muted pe-lg-10 mb-0">Stunning presentations that drive results and engage audiences.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-flex justify-content-center justify-content-lg-end">
                            <div className="position-relative z-0 d-flex pb-2">
                                <button className="swiper-button-prev btn btn-primary rounded-circle shadow me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', border: 'none', position: 'static'}}>
                                    <i className="bi bi-arrow-left text-white fs-5" />
                                </button>
                                <button className="swiper-button-next btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', border: 'none', position: 'static'}}>
                                    <i className="bi bi-arrow-right text-white fs-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                {...swiperOptions}
                                className="swiper slider-1 pt-2 pb-5"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                {[
                                    { img: "img-1.png", client: "TechStart Inc.", title: "Investor Pitch Deck", desc: "Compelling presentation that secured $2M in Series A funding.", tag: "Pitch Deck" },
                                    { img: "img-2.png", client: "Global Corp", title: "Sales Training Materials", desc: "Interactive training presentation that improved sales conversion by 40%.", tag: "Training" },
                                    { img: "img-3.png", client: "InnovateLab", title: "Product Launch", desc: "Stunning product reveal that generated massive media coverage.", tag: "Product Launch" },
                                    { img: "img-1.png", client: "InnovateTech Inc.", title: "Strategic Solutions", desc: "Streamlining operations and growth strategies for market enhancement.", tag: "Software" },
                                ] .map((item, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                        <div className="text-center h-100">
                                            <div className="zoom-img position-relative d-block z-1 overflow-hidden rounded-3">
                                                <div className="fix">
                                                    <img className="img-fluid w-100" src={`/assets/imgs/project-2/${item.img}`} alt="project" />
                                                </div>
                                                
                                                {/* Content Card Overlay */}
                                                <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter p-4 m-3 m-lg-4 hover-up d-block">
                                                    <p className="fs-7 mb-1 fw-bold" style={{color: '#1E90FF'}}>{item.client}</p>
                                                    <h6 className="fw-bold mb-2">{item.title}</h6>
                                                    <p className="text-muted small mb-0">{item.desc}</p>
                                                </Link>

                                                {/* Category Badge */}
                                                <Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1 shadow-sm" style={{color: '#1E90FF', backgroundColor: 'white', textDecoration: 'none'}}>
                                                    {item.tag}
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
