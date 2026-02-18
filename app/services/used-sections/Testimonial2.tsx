export default function Testimonial2() {
	return (
		<section className="section-testimonial-2 section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4">
						<div className="pe-5">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonial</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">Loved by teams who present often</h3>
							<p className="fs-5">
								Clear storytelling, premium design, and reliable delivery—exactly what busy teams need.
							</p>
							<div className="mt-6">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/imgs/testimonial-2/star.svg" alt="infinia" />
									<img src="/assets/imgs/testimonial-2/star.svg" alt="infinia" />
									<img src="/assets/imgs/testimonial-2/star.svg" alt="infinia" />
									<img src="/assets/imgs/testimonial-2/star.svg" alt="infinia" />
									<img src="/assets/imgs/testimonial-2/star.svg" alt="infinia" />
								</div>
								<span className="fs-6 text-500">Rated 4.9/5 by clients</span>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="position-relative">
							<div className="card-testimonial-2 bg-white">
								<div className="card-info">
									<p className="fs-5 text-900">
										“From the first draft to the final deck, everything felt intentional—clean layouts, clear flow,
										and visuals that made our story easy to follow. We closed the meeting with confidence.”
									</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar rounded-circle" src="/assets/imgs/testimonial-2/avatar-1.png" alt="infinia" />
										<div className="ms-3">
											<h6 className="mb-1">Theresa Webb</h6>
											<span className="fs-6 text-500">Head of Growth</span>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0 translate-middle" src="/assets/imgs/testimonial-2/bg.png" alt="infinia" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

