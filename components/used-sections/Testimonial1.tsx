
import Link from "next/link"

export default function Testimonial1() {
	return (
		<>

			<section id="testimonials" className="section-testimonial-1 pb-120 @@classList position-relative">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="col-lg-4">
							<div className="pe-8 mt-7">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>What our clients say</h3>
								<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>Discover how our PowerPoint design services have helped businesses create compelling presentations that drive results and engage audiences.</span>
								<div className="d-flex flex-wrap align-items-center mb-8 mt-8">
									<Link href="#contact" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
										<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Start Your Project
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-testimonial-1 bg-neutral-100 p-5 rounded-3 position-relative mt-5 mb-4" data-aos="fade-zoom-in" data-aos-delay={100}>
								<p className="text-900 border-bottom border-600 pb-4 mb-4">"The PowerPoint presentation they created for our product launch was absolutely stunning. It helped us secure $2M in funding!"</p>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<img className="avatar-md" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="ms-3">
											<h6 className="fs-6 mb-0">Sarah Johnson</h6>
											<span className="fs-7 text-600">CEO, TechStart Inc.</span>
										</div>
									</div>

								</div>
							</div>
							<div className="card-testimonial-1 bg-neutral-100 p-5 rounded-3 position-relative mb-4" data-aos="fade-zoom-in" data-aos-delay={200}>
								
								<p className="text-900 border-bottom border-600 pb-4 mb-4">"Professional, creative, and delivered on time. Our sales presentation now converts 40% better than before!"</p>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<img className="avatar-md" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
										<div className="ms-3">
											<h6 className="fs-6 mb-0">Michael Chen</h6>
											<span className="fs-7 text-600">Sales Director, Global Corp</span>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-testimonial-1 bg-neutral-100 p-5 rounded-3 position-relative mb-4" data-aos="fade-zoom-in" data-aos-delay={300}>
								
								<p className="text-900 border-bottom border-600 pb-4 mb-4">"Amazing attention to detail and brand consistency. Our investor presentation helped us close our Series A round successfully!"</p>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<img className="avatar-md" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="ms-3">
											<h6 className="fs-6 mb-0">Emily Rodriguez</h6>
											<span className="fs-7 text-600">Founder, InnovateLab</span>
										</div>
									</div>

								</div>
							</div>
							<div className="card-testimonial-1 bg-neutral-100 p-5 rounded-3 position-relative mb-4" data-aos="fade-zoom-in" data-aos-delay={400}>
								
								<p className="text-900 border-bottom border-600 pb-4 mb-4">"Exceptional work on our training materials. The animations and interactive elements made our content much more engaging!"</p>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<img className="avatar-md" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
										<div className="ms-3">
											<h6 className="fs-6 mb-0">David Park</h6>
											<span className="fs-7 text-600">Training Manager, EduCorp</span>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-0 z-0">
					<img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
				</div>
			</section>


		</>
	)
}
