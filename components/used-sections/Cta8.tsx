'use client'
import CountUp from 'react-countup'

export default function Cta8() {
	return (
		<>
			<section id="process" className="section-cta-8 d-bg-7">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center border border-2 border-white d-inline-flex rounded-pill px-4 py-2 bg-1" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold ms-2 text-uppercase" style={{color: '#1E90FF'}}>Our Process</span>
								</div>
								<h5 className="ds-5 mt-2">Creating presentations that make an impact.</h5>
								<p>We work closely with our clients to understand their message and audience, crafting custom presentation designs that engage, inform, and inspire action.</p>
<button className="btn btn-gradient text-white mt-4" style={{backgroundColor: '#1E90FF', borderColor: '#1E90FF'}}>Get Started Now</button>
								<div className="d-flex pt-3 align-items-center">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 bg-1">
									<div className="icon">
										<img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
									</div>
								</div>
									<div className="ps-5">
										<h6>Content Strategy</h6>
										<p>We analyze your message and audience to create <br /> compelling presentation narratives.</p>
									</div>
								</div>
								<div className="d-flex pt-3 align-items-center">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 bg-1">
										<div className="icon">
											<img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Design & Delivery</h6>
										<p>Professional design execution with timely delivery <br /> of your stunning presentations.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
									<div className="alltuchtopdown tag-year position-absolute backdrop-filter rounded-4 px-4 py-5 text-center z-1" style={{backgroundColor: '#1E90FF'}}>
									<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={500} enableScrollSpy={true} />+</span>
									<p className="text-white text-nowrap mb-0">Presentations Created</p>
								</div>
									<div className="position-absolute tag-dots z-0 pt-5">
										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
