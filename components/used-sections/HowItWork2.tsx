
import Link from "next/link"

export default function HowItWork2() {
	return (
		<>
			<section id="how-it-works" className="howitwork-2 pt-10 pb-8 position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-5 mb-lg-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center d-inline-flex rounded-pill px-2 py-1" style={{ backgroundColor: '#EDF8FF' }}>
							<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
							<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>DESIGN PROCESS</span>
						</div>
						<h3 className="ds-3 ds-md-2 mt-3 mb-3 fw-regular">How We Create Your <span className="fw-bold">Presentation</span></h3>
						<p className="fs-5 fs-md-4 mb-4 px-lg-10">Our streamlined process for delivering stunning presentation designs.</p>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="infinia" />
				</div>
				<div className="container">
					<div className="row position-relative justify-content-center">
						<div className="col-lg-4 col-md-6 text-center px-md-8 px-lg-10 mb-4 mb-lg-0">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xl icon-lg-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/howitwork-2/icon-1.svg" alt="infinia" />
									</div>
								</div>
								<h5 className="my-3 fs-5 fs-lg-4">Share Your Vision</h5>
								<p className="mb-4 mb-lg-6 fs-7 fs-lg-6">Tell us about your presentation needs, audience, and goals to get started.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 text-center px-md-8 px-lg-10 mb-4 mb-lg-0">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xl icon-lg-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/howitwork-2/icon-2.svg" alt="infinia" />
									</div>
								</div>
								<h5 className="my-3 fs-5 fs-lg-4">Design & Create</h5>
								<p className="mb-4 mb-lg-6 fs-7 fs-lg-6">Our expert designers craft your presentation with custom layouts, graphics, and animations.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 text-center px-md-8 px-lg-10">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xl icon-lg-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/howitwork-2/icon-3.svg" alt="infinia" />
									</div>
								</div>
								<h5 className="my-3 fs-5 fs-lg-4">Deliver & Support</h5>
								<p className="mb-4 mb-lg-6 fs-7 fs-lg-6">Receive your stunning presentation with revisions and ongoing support included.</p>
							</div>
						</div>
					</div>
					<div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
						<img src="/assets/imgs/howitwork-2/arrow-1.png" alt="infinia" />
					</div>
					<div className="navigation-arrow-2 d-none d-lg-block position-absolute">
						<img src="/assets/imgs/howitwork-2/arrow-2.png" alt="infinia" />
					</div>
					
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
