"use client"
import Link from 'next/link'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Project1() {

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	return (
		<>
			<section id="projects" className="section-project-2 pt-10 pb-8">
				<div className="container">
					<div className="row mb-5 mb-lg-8">
						<div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
							<div className="pe-2">
								<div className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1" style={{ backgroundColor: '#EDF8FF' }}>
									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Portfolio</span>
								</div>
								<h3 className="ds-4 mt-3 mb-3 fw-regular">Our Featured <span className="fw-bold">Presentations</span></h3>
								<p className="fs-5 fs-md-4 fw-medium pe-lg-10 mb-4">Stunning presentations that drive results and engage audiences.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end align-items-end">
							<div className="position-relative z-0 d-flex">
								<button className="swiper-button-prev btn btn-primary rounded-circle shadow me-5 d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px', border: 'none'}}>
									<i className="bi bi-arrow-left text-white fs-6" />
								</button>
								<button className="swiper-button-next btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px', border: 'none'}}>
									<i className="bi bi-arrow-right text-white fs-6" />
								</button>
							</div>
						</div>
					</div>
					<div className="row">
						<Swiper
							{...swiperOptions}
							className="swiper slider-1 pt-2 pb-8"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{/* prettier-ignore */}
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>TechStart Inc.</p>
												<h6>Investor Pitch Deck</h6>
												<p className="text-900">Compelling presentation that secured $2M in Series A funding.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Pitch Deck</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>Global Corp</p>
												<h6>Sales Training Materials</h6>
												<p className="text-900">Interactive training presentation that improved sales conversion by 40%.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Training</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>InnovateLab</p>
												<h6>Product Launch Presentation</h6>
												<p className="text-900">Stunning product reveal that generated massive media coverage.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Product Launch</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>InnovateTech Inc.</p>
												<h6>Strategic Solutions Initiative</h6>
												<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Software Development</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>Pioneer Enterprises</p>
												<h6>Innovate Consulting Challenge</h6>
												<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Consulting</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="text-center">
										<div className="zoom-img position-relative d-inline-block z-1">
											<div className="rounded-3 fix">
												<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
												<p className="fs-7 mb-1" style={{color: '#1E90FF'}}>Summit Corp</p>
												<h6>Growth Catalyst Program</h6>
												<p className="text-900">Accelerating business growth through strategic planning.</p>
											</Link>
											<Link href="#" className="badge px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1" style={{color: '#1E90FF', backgroundColor: 'white'}}>Financial Advisory</Link>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
