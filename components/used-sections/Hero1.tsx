
'use client'
import Link from "next/link"

export default function Hero1() {
	return (
		<>
			<section id="home" className="position-relative overflow-hidden pb-10">
				<div className="container">
					<div className="row content align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2">
								<Link href="#" className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1 mt-10" style={{ backgroundColor: '#EDF8FF' }}>

									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>Professional Templates</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<h3 className="ds-4 mt-3 mb-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={0}>
									Create Stunning <span className="fw-bold">Presentation Designs </span>
									That Captivate
								</h3>
								<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Transform your ideas into compelling visual stories with our premium presentation design services and professional templates.</p>

								<div className="d-flex justify-content-center justify-content-lg-start">
									<Link href="#contact" className="btn btn-gradient hover-up rounded-pill px-3 py-2" style={{ color: 'white', fontSize: '0.8rem' }} data-aos="fade-zoom-in" data-aos-delay={500}>
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
						<div className="col-lg-6 d-flex mt-2 justify-content-center align-items-center">
						<div
							style={{
								position: 'relative',
								maxWidth: '90%',
								width: '100%',

							}}
							onMouseMove={(e) => {
								const img = document.querySelector('#hero-img') as HTMLImageElement;
								if (!img) return;

								const rect = img.getBoundingClientRect();
								const x = e.clientX - rect.left - rect.width / 2;
								const y = e.clientY - rect.top - rect.height / 2;
								
								img.style.transform = `
									perspective(1000px)
									translate(${-x/20}px, ${-y/20}px)
									scale(1)
								`;
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
								src="/assets/imgs/hero-1/2.jpg" 
								alt="Hero Image" 
								className="img-fluid rounded-4" 
								style={{ 
									width: '100%',
									height: 'auto', 
									objectFit: 'cover',
									transition: 'all 0.3s ease',
									cursor: 'pointer',
									transform: 'perspective(1000px)'
								}}
								data-aos="fade-zoom-in" 
								data-aos-delay={300}
							/>
						</div>
					</div>
					</div>
				</div>
			</section>
		</>
	)
}
