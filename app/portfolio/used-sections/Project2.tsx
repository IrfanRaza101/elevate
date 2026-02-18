"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
}

export default function Project2() {
	return (
		<section className="section-project-2 section-padding">
			<div className="container">
				<div className="d-flex align-items-center justify-content-between flex-wrap">
					<div className="mb-3 mb-md-0">
						<h3 className="ds-3">Recent Presentation Work</h3>
						<span className="fs-5 fw-medium text-500">
							Decks designed for real meetings: investors, sales calls, and internal presentations
						</span>
					</div>
					<Link href="/portfolio" className="btn btn-outline-primary">
						View All Work
						<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
							<path className="fill-primary" d="M10.9721 1.1936L1.69635 10.4693L2.7563 11.5293L12.032 2.25355V10.764H13.5313V0.764648H3.53194V2.26394H12.0424L10.9721 1.1936Z" fill="#6D4DF2" />
						</svg>
					</Link>
				</div>
				<div className="row mt-8">
					<Swiper {...swiperOptions} className="swiper slider-2 pt-2 pb-3">
						<div className="swiper-wrapper">
							<SwiperSlide>
								<div className="card-project">
									<div className="card-image">
										<Link href="/portfolio-details">
											<img src="/assets/imgs/project-2/project-1.png" alt="infinia" />
										</Link>
									</div>
									<div className="card-info">
										<div className="d-flex align-items-center justify-content-between">
											<span className="tag-project">Pitch Deck</span>
											<div className="d-flex gap-2 align-items-center">
												<img src="/assets/imgs/project-2/rating.svg" alt="infinia" />
												<span className="fs-6 fw-medium text-900">4.9</span>
											</div>
										</div>
										<div className="card-title">
											<Link href="/portfolio-details">Investor Deck Refresh</Link>
										</div>
										<div className="card-description">
											<p className="text-500">Narrative restructure + premium visuals to improve clarity and traction.</p>
										</div>
										<div className="card-meta">
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-user.svg" alt="infinia" />
												<span className="fs-7 text-500">38 slides</span>
											</div>
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-heart.svg" alt="infinia" />
												<span className="fs-7 text-500">120 likes</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card-project">
									<div className="card-image">
										<Link href="/portfolio-details">
											<img src="/assets/imgs/project-2/project-2.png" alt="infinia" />
										</Link>
									</div>
									<div className="card-info">
										<div className="d-flex align-items-center justify-content-between">
											<span className="tag-project">Sales Deck</span>
											<div className="d-flex gap-2 align-items-center">
												<img src="/assets/imgs/project-2/rating.svg" alt="infinia" />
												<span className="fs-6 fw-medium text-900">4.8</span>
											</div>
										</div>
										<div className="card-title">
											<Link href="/portfolio-details">Sales Presentation System</Link>
										</div>
										<div className="card-description">
											<p className="text-500">A modular slide library for different audiences and use-cases.</p>
										</div>
										<div className="card-meta">
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-user.svg" alt="infinia" />
												<span className="fs-7 text-500">52 slides</span>
											</div>
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-heart.svg" alt="infinia" />
												<span className="fs-7 text-500">95 likes</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card-project">
									<div className="card-image">
										<Link href="/portfolio-details">
											<img src="/assets/imgs/project-2/project-3.png" alt="infinia" />
										</Link>
									</div>
									<div className="card-info">
										<div className="d-flex align-items-center justify-content-between">
											<span className="tag-project">Data Slides</span>
											<div className="d-flex gap-2 align-items-center">
												<img src="/assets/imgs/project-2/rating.svg" alt="infinia" />
												<span className="fs-6 fw-medium text-900">5.0</span>
											</div>
										</div>
										<div className="card-title">
											<Link href="/portfolio-details">Metrics & Charts Redesign</Link>
										</div>
										<div className="card-description">
											<p className="text-500">Turned dense reporting into clear visuals and executive-ready summaries.</p>
										</div>
										<div className="card-meta">
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-user.svg" alt="infinia" />
												<span className="fs-7 text-500">24 slides</span>
											</div>
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-heart.svg" alt="infinia" />
												<span className="fs-7 text-500">140 likes</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card-project">
									<div className="card-image">
										<Link href="/portfolio-details">
											<img src="/assets/imgs/project-2/project-4.png" alt="infinia" />
										</Link>
									</div>
									<div className="card-info">
										<div className="d-flex align-items-center justify-content-between">
											<span className="tag-project">Company Profile</span>
											<div className="d-flex gap-2 align-items-center">
												<img src="/assets/imgs/project-2/rating.svg" alt="infinia" />
												<span className="fs-6 fw-medium text-900">4.9</span>
											</div>
										</div>
										<div className="card-title">
											<Link href="/portfolio-details">Company Profile Deck</Link>
										</div>
										<div className="card-description">
											<p className="text-500">Brand-aligned profile with strong hierarchy, icons, and visual storytelling.</p>
										</div>
										<div className="card-meta">
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-user.svg" alt="infinia" />
												<span className="fs-7 text-500">30 slides</span>
											</div>
											<div className="d-flex align-items-center gap-2">
												<img src="/assets/imgs/project-2/icon-heart.svg" alt="infinia" />
												<span className="fs-7 text-500">88 likes</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

