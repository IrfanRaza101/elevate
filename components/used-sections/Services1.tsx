
import Link from "next/link"

export default function Services1() {
	return (
		<>
			<section id="services" className="section-padding">
				<div className="container">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center border border-2 border-white d-inline-flex rounded-pill px-4 py-2" style={{backgroundColor: '#EDF8FF'}} data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold ms-2 text-uppercase" style={{color: '#1E90FF'}}>Our Services</span>
								</div>
						<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>PowerPoint Design Services</h3>
						<p data-aos="fade-zoom-in" data-aos-delay={100}>From corporate presentations to creative pitches, we deliver <br /> professional PowerPoint designs that make an impact.</p>
					</div>
					<div className="row mt-6 position-relative">
						<div className="col-lg-4">
							<div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-6 border rounded-4 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-1.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Custom Presentation Design</h6>
									<p className="mb-0 flex-grow-1">Transform your ideas into visually stunning presentations with custom layouts, graphics, and animations tailored to your brand</p>
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-2.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Template Creation</h6>
									<p className="mb-0 flex-grow-1">Professional PowerPoint templates designed for consistency across your organization with branded elements and layouts</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-3.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Pitch Deck Design</h6>
									<p className="mb-0 flex-grow-1">Compelling investor pitch decks and business presentations that tell your story and secure funding opportunities</p>
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-4.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Training Materials</h6>
									<p className="mb-0 flex-grow-1">Educational presentations and training modules designed to engage learners and deliver knowledge effectively</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-5.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Animation & Effects</h6>
									<p className="mb-0 flex-grow-1">Dynamic animations, transitions, and interactive elements that bring your presentations to life and engage audiences</p>
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-6 border rounded-3 h-100 d-flex flex-column">
									<img src="/assets/imgs/service-1/icon-6.svg" alt="infinia" style={{width: '48px', height: '48px'}} />
									<h6 className="my-3">Brand Integration</h6>
									<p className="mb-0 flex-grow-1">Seamless integration of your brand identity, colors, fonts, and messaging across all presentation materials</p>
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
