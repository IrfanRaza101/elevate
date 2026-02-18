
import Link from "next/link"

export default function Testimonial2() {
	return (
		<>

			<section className="section-testimonial-2 position-relative bg-white section-padding">
				<div className="container position-relative z-1">
					<div className="row pb-9">
						<div className="col-lg-7 mx-lg-auto">
							<div className="text-center mb-lg-0 mb-5">
								<h4 className="ds-4 my-3">
									Teams <span className="fw-regular">trust us for </span><br />
									high-stakes <span className="fw-regular">presentations</span>
								</h4>
								<p className="fs-5 mb-0">
									Clear structure, strong visuals, and a story that wins the room.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bg-neutral-100 p-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
								<p className="text-900">The team turned our pitch into a crisp story with visuals that investors understood immediately. <span className="fw-bold">We closed our round in weeks.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
											<span className="fs-8">CEO, Fintech Startup</span>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
								<p className="text-900">We needed a sales deck that could scale across regions. <span className="fw-bold">They delivered a master template our whole team now uses.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
											<span className="fs-8">VP Sales, SaaS</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
								<p className="text-900">Our board deck finally feels executive-ready. <span className="fw-bold">Every slide now points to a decision.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
											<span className="fs-8">Chief of Staff</span>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
								<p className="text-900">Our board deck finally feels executive-ready. <span className="fw-bold">Every slide now points to a decision.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
											<span className="fs-8">Chief of Staff</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
								<p className="text-900">They simplified our product story into a narrative that customers repeat. <span className="fw-bold">Pipeline quality jumped immediately.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
											<span className="fs-8">Marketing Director</span>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
								<p className="text-900">The team turned our pitch into a crisp story with visuals that investors understood immediately. <span className="fw-bold">We closed our round in weeks.</span></p>
								<div className="d-flex align-items-center mt-5">
									<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
									<div className="d-flex flex-column">
										<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
										<div className="flag ms-3">
											<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
											<span className="fs-8">CEO, Fintech Startup</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-8 position-relative z-3">
					<Link href="#" className="btn btn-dark hover-up">
						View More Stories
						<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
							<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path className="stroke-white" d="M17 7L6.75 17.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</Link>
				</div>
				<div className="mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
			</section>


		</>
	)
}
