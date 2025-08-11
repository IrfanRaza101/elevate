
import Link from "next/link"

export default function Hero1() {
	return (
		<>
			<section id="home" className="position-relative overflow-hidden section-padding">
				<div className="container">
					<div className="row content align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2">
								<Link href="#" className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1" style={{backgroundColor: '#EDF8FF'}}>
									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{backgroundColor: '#1E90FF'}}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{color: '#1E90FF'}}>Professional Templates</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#1E90FF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<h3 className="ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>Create Stunning Presentation Designs That Captivate</h3>
				<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Transform your ideas into compelling visual stories with our premium presentation design services and professional templates.</p>

								<div className="d-flex justify-content-center justify-content-lg-start">
									<Link href="#contact" className="btn btn-gradient hover-up" style={{color: 'white'}} data-aos="fade-zoom-in" data-aos-delay={500}>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Start Your Project
									</Link>
								</div>
								<div className="row mt-8 mb-3">
									<h6 className="text-500 fs-5" data-aos="fade-zoom-in" data-aos-delay={100}>Trusted by leading brands</h6>
								</div>
								<div className="d-flex align-items-center">
									<div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<span className="fs-6 fw-bold">4.9/5 <span className="text-secondary fw-medium">(500+ Presentations)</span></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative justify-content-center">
							<img className="hero-img" src="/assets/imgs/hero-1/background.png" alt="infinia" />
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
    style={{backgroundColor: 'white', color: '#1E90FF'}}
>
    <span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{backgroundColor: '#1E90FF'}}>Book</span>
    <span className="fs-7 fw-medium mx-2" style={{color: '#1E90FF'}}>Free Call</span>
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
