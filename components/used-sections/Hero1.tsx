
import Link from "next/link"

export default function Hero1() {
	return (
		<>
			<section id="home" className="position-relative overflow-hidden pb-10">
				<div className="container">
					<div className="row content align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2">
								<Link href="#" className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1 mt-5" style={{ backgroundColor: '#EDF8FF' }}>

									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Professional Templates</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<h3 className="ds-3 mt-3 mb-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={0}>
									Create Stunning <span className="fw-bold">Presentation Designs </span>
									That Captivate
								</h3>
								<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Transform your ideas into compelling visual stories with our premium presentation design services and professional templates.</p>

								<div className="d-flex justify-content-center justify-content-lg-start">
									<Link href="#contact" className="btn btn-gradient hover-up rounded-pill px-4 py-3" style={{ color: 'white', fontSize: '0.9rem' }} data-aos="fade-zoom-in" data-aos-delay={500}>
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
						<div className="col-lg-6 position-relative justify-content-center">
							<img className="hero-img" src="/assets/imgs/hero-1/background.png" alt="infinia" style={{ maxWidth: '85%', height: 'auto' }} />
							<div className="shape-1 position-absolute">
								<img className="rightToLeft" src="/assets/imgs/hero-1/shape-1.png" alt="infinia" data-aos="zoom-in" data-aos-delay={500} />
							</div>
							<div className="shape-2 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-2.png" alt="infinia" data-aos="zoom-in" data-aos-delay={200} />
							</div>
							<div className="shape-3 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={300} />
							</div>
							<div className="alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
								<img className="rounded-3" src="/assets/imgs/hero-1/shape-4.png" alt="infinia" />
								<h6 className="mt-3">Free Consultation</h6>
								<p className="fs-7 text-700">
									Get expert advice on your <br />
									presentation design needs
								</p>
								<Link
									href="/contact"
									className="shadow-sm d-flex align-items-center d-inline-flex rounded-pill px-2 py-1 mb-3 hovbr-up"
									style={{ backgroundColor: 'white', color: '#1E90FF' }}
								>
									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>Book</span>
									<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Free Call</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
