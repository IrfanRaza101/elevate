'use client'
import Link from "next/link"

export default function Hero1() {
    return (
        <>
            <style jsx global>{`
                @media (min-width: 1441px) {
                    #home .container {
                        max-width: 90% !important;
                        width: 100% !important;
                    }
                    #home .ds-4 {
                        font-size: calc(2.5rem + 0.3vw) !important;
                        line-height: 1.1 !important;
                    }
                    #home p {
                        font-size: 1.1rem !important;
                        max-width: 650px !important;
                    }
                    #home .mt-10 {
                        margin-top: 0.75rem !important;
                    }
                    #hero-img {
                        max-height: 70vh;
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                        margin: 0 auto;
                        display: block;
                    }
                }
                @media (min-width: 2500px) {
                    #home .container {
                        max-width: 2200px !important;
                    }
                    #home .ds-4 {
                        font-size: 6rem !important;
                    }
                    #hero-img {
                        max-height: 65vh;
                        max-width: 65% !important;
                    }
                }
            `}</style>

            <section id="home" className="position-relative overflow-hidden pb-10">
                <div className="container">
                    <div className="row content align-items-center" style={{
                        minHeight: 'calc(100vh - 120px)',
                        margin: '0 auto',
                    }}>


                        <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                            <div className="pe-2">
                                <Link href="#" className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1 mt-10" style={{ backgroundColor: '#EDF8FF' }}>
                                    <span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Professional Templates</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
                                        <path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.25 9.5H3.5625" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                
                                <h3 className="ds-4 mt-3 mb-3 pe-10 fw-regular" data-aos="fade-zoom-in" data-aos-delay={0}>
                                    Create Stunning <span className="fw-bold">Presentation Designs </span>
                                    That Captivate
                                </h3>
                                
                                <p className="pe-12 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>
                                    Transform your ideas into compelling visual stories with our premium presentation design services and professional templates.
                                </p>

                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <Link href="#contact" className="btn btn-gradient rounded-pill px-3 py-2" style={{ color: 'white', fontSize: '0.8rem' }} data-aos="fade-zoom-in" data-aos-delay={100}>
                                        Start Your Project
                                    </Link>
                                </div>
                                
                                <div className="row mt-4 mb-2">
                                    <h6 className="text-500 fs-6" data-aos="fade-zoom-in" data-aos-delay={100}>Trusted by leading brands</h6>
                                </div>
                                
                                <div className="d-flex align-items-center">
                                    <div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
                                        <div className="d-flex">
                                            <img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" style={{ width: '30px', height: '30px' }} />
                                            <img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" style={{ width: '30px', height: '30px' }} />
                                            <img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" style={{ width: '30px', height: '30px' }} />
                                        </div>
                                        <span className="fs-7 fw-bold">4.9/5 <span className="text-secondary fw-medium">(500+ Presentations)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 d-flex mt-2 justify-content-center align-items-center"
                            onMouseMove={(e) => {
                                const img = document.querySelector('#hero-img') as HTMLImageElement;
                                if (!img) return;
                                const rect = img.getBoundingClientRect();
                                const x = e.clientX - rect.left - rect.width / 2;
                                const y = e.clientY - rect.top - rect.height / 2;
                                img.style.transform = `perspective(1000px) translate(${-x / 20}px, ${-y / 20}px) scale(1)`;
                                img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={() => {
                                const img = document.querySelector('#hero-img') as HTMLImageElement;
                                if (!img) return;
                                img.style.transform = 'perspective(1000px)';
                                img.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                id="hero-img"
                                src="/assets/imgs/hero-1/2.png"
                                alt="Hero Image"
                                className="img-fluid rounded-4"
                                style={{
                                    maxWidth: '90%',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    transition: 'all 0.6s ease',
                                    cursor: 'pointer',
                                    transform: 'perspective(1000px)',
                                }}
                                data-aos="fade-zoom-in"
                                data-aos-delay={300}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
