import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative">
					<div className="container-fluid bgft-1">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10" data-aos="fade-zoom-in" data-aos-delay={100}>
									<Link href="/" className="d-flex align-items-center mb-3">
										<img src="/assets/imgs/template/Elevate.png" alt="Elevate" style={{width: "auto", height: "40px", objectFit: "contain", marginRight: "10px"}} />
										<span className="text-white fw-bold fs-6">Elevate <br />Presentations</span>

									</Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">Elevate your presentations with our professional design services. We create stunning, impactful presentations that captivate your audience and deliver your message effectively.</p>
									<div className="d-flex social-icons">
										<Link href="https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										<Link href="https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="https://www.linkedin.com/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={200}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Services</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#services">Design Services</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#services">Custom Templates</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#services">Animation Effects</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#services">Brand Integration</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#services">Fast Delivery</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={300}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/about">About Us</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#team">Our Team</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#portfolio">Portfolio</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#testimonials">Testimonials</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/blog">Blog</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={400}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Support</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#contact">Contact Us</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#faq">FAQ</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#help">Help Center</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#pricing">Pricing</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#process">How It Works</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={500}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Contact Info</h3>
											<div className="d-flex flex-column align-items-start">
												<div className="text-white mb-2 fw-medium fs-6">
													<i className="bi bi-envelope me-2"></i>
													hello@elevate.com
												</div>
												<div className="text-white mb-2 fw-medium fs-6">
													<i className="bi bi-telephone me-2"></i>
													+92 317 2651450
												</div>
												<div className="text-white mb-2 fw-medium fs-6">
													<i className="bi bi-geo-alt me-2"></i>
													New York, NY
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50" data-aos="fade-zoom-in" data-aos-delay={200}>Copyright © 2024 Elevate. All Rights Reserved</span>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="elevate" />
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="elevate" />
					</div>
					<div className="position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="elevate" />
					</div>
				</div>
			</footer>

		</>
	)
}
