
import Link from "next/link"

export default function Services1() {
	return (
		<>
			<section id="services" className="pt-10 pb-8">
				<div className="container">
					<div className="text-center mb-5 mb-lg-6">
						<div className="d-flex align-items-center justify-content-center d-inline-flex rounded-pill px-2 py-1" style={{backgroundColor: '#EDF8FF'}} data-aos="zoom-in" data-aos-delay={100}>
									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{color: '#1E90FF'}}>Our Services</span>
								</div>
						<h3 className="ds-3 ds-md-2 mt-3 mb-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={300}>Presentation Design <span className="fw-bold">Services</span></h3>
						<p className="fs-5 fs-md-4 px-lg-10 mb-4" data-aos="fade-zoom-in" data-aos-delay={100}>From corporate presentations to creative pitches, we deliver professional presentation designs that make an impact.</p>
					</div>
					<div className="row mt-5 mt-lg-6 position-relative">
						<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
							<div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-4 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-1.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Custom Presentation Design</h6>
									<p className="mb-0 flex-grow-1 fs-7">Transform your ideas into visually stunning presentations with custom layouts, graphics, and animations tailored to your brand</p>
								</div>
							</div>
							<div className="p-2 mt-4 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-2.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Template Creation</h6>
									<p className="mb-0 flex-grow-1 fs-7">Professional presentation templates designed for consistency across your organization with branded elements and layouts</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
							<div className="p-2 mt-4 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-3.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Pitch Deck Design</h6>
									<p className="mb-0 flex-grow-1 fs-7">Compelling investor pitch decks and business presentations that tell your story and secure funding opportunities</p>
								</div>
							</div>
							<div className="p-2 mt-4 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-4.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Training Materials</h6>
									<p className="mb-0 flex-grow-1 fs-7">Educational presentations and training modules designed to engage learners and deliver knowledge effectively</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="p-2 mt-lg-8 mt-4 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-5.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Animation & Effects</h6>
									<p className="mb-0 flex-grow-1 fs-7">Dynamic animations, transitions, and interactive elements that bring your presentations to life and engage audiences</p>
								</div>
							</div>
							<div className="p-2 mt-4 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-4 p-lg-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-6.svg" alt="infinia" style={{width: '40px', height: '40px'}} />
									<h6 className="my-3 fs-6">Brand Integration</h6>
									<p className="mb-0 flex-grow-1 fs-7">Seamless integration of your brand identity, colors, fonts, and messaging across all presentation materials</p>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
