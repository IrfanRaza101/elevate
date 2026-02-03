'use client'
import Marquee from "react-fast-marquee";

export default function LogoCloud1() {
    return (
        <>
            <style jsx global>{`
                /* 1440px+ Specific Responsive Fixes */
                @media (min-width: 1441px) {
                    .section-logo-cloud .container {
                        max-width: 90% !important;
                        width: 100% !important;
                    }
                    /* Scaling Logo images for bigger screens */
                    .logo-img {
                        width: calc(120px + 1vw) !important;
                        height: calc(60px + 0.5vw) !important;
                        margin: 0 40px !important;
                    }
                }

                /* 2500px+ (Ultra Wide/4K) Scaling */
                @media (min-width: 2500px) {
                    .section-logo-cloud .container {
                        max-width: 2200px !important;
                    }
                    .logo-img {
                        width: 180px !important;
                        height: 90px !important;
                        margin: 0 60px !important;
                    }
                }
            `}</style>

            <div className="section-logo-cloud   mt-8 mt-lg-0 border-top border-bottom">
                <div className=" m-5 p-5">
                    <div className="row mask-image">
                        <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
                            <ul className="carouselTicker__list">
                                <Marquee>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-1.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-2.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-3.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-4.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-6.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-7.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-8.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-9.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-10.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-11.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-12.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-13.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-14.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-15.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-16.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                    <li className="carouselTicker__item d-flex align-items-center">
                                        <img src="/assets/imgs/logo-cloud/logo-17.png" alt="infinia" className="logo-img" style={{width: '120px', height: '60px', objectFit: 'contain'}} />
                                    </li>
                                </Marquee>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}