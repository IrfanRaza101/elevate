'use client'
import CountUp from 'react-countup'

export default function Cta8() {
	return (
		<>
			<section className="section-cta-8 bg-4">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Studio</span>
								</div>
								<h5 className="ds-5 mt-2">Presentations that clarify ideas and sell the story.</h5>
								<p>We partner with teams to design pitch decks, sales presentations, and company profiles that make complex ideas easy to follow and hard to ignore.</p>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Story-first structure</h6>
										<p>We shape the narrative so every slide leads to a clear decision.</p>
									</div>
								</div>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Data-driven visuals</h6>
										<p>Charts and diagrams that make proof fast to grasp.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
									<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
										<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} />+</span>
										<p className="text-white text-nowrap mb-0">Years in Presentation Design</p>
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
