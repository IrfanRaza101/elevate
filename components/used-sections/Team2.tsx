
import Link from "next/link"

export default function Team2() {
	return (
		<>
			<section id="team" className="pt-10 pb-8">
				<div className="container" >
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
							<div className="text-start pe-lg-2">
								<div className="d-flex align-items-center d-inline-flex rounded-pill px-2 py-1" style={{ backgroundColor: '#EDF8FF' }} data-aos="zoom-in" data-aos-delay={100}>
									<span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
									<span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>OUR TEAM</span>
								</div>
								<h3 className="ds-4 mt-3 mb-3 fw-regular">Our Design <span className="fw-bold">Team</span></h3>
								<p className="fs-5 fs-md-4 mb-4 pe-lg-8">
									Meet the talented presentation designers and visual specialists who create stunning visual stories every day.
								</p>
								<div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-5">
									<h6 className="text-500 mb-3 mb-md-0 me-md-3 fs-6">Ready to start your project?</h6>
									<Link
										href="https://wa.me/923172651450"
										target="_blank"
										className="btn btn-gradient d-flex align-items-center rounded-pill px-3 py-2 text-decoration-none hover-up"
										style={{ color: 'white', fontSize: '0.8rem' }}
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
											<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.78-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
										</svg>
										Contact us
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="row">
								<div className="col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="position-relative d-inline-block z-1">

										<div className="zoom-img rounded-3">
											<img className="img-fluid w-10" src="/assets/imgs/team-2/avatar-1.png" alt="Noman"/>
										</div>
										<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
											<h6>Noman Raza</h6>
											<div className="d-flex">
												<span className="fs-6 text-600 me-auto">Creative Director</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#1E90FF">
													<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#1E90FF" />
												</svg>
											</div>
										</Link>
									</div>
								</div>
								<div className="col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="position-relative d-inline-block z-1">

										<div className="zoom-img rounded-3">
											<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-2.png" alt="Noman"/>
										</div>
										<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
											<h6>Jessica Martinez</h6>
											<div className="d-flex">
												<span className="fs-6 text-600 me-auto">Senior Designer</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#1E90FF">
													<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#1E90FF" />
												</svg>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={0}>
							<div className="position-relative d-inline-block z-1">
								<div className="zoom-img rounded-3">
									<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-3.png" alt="infinia" />
								</div>
								<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Sarah Johnson</h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Lead Presentation Designer</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#1E90FF">
											<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#1E90FF" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
							<div className="position-relative d-inline-block z-1">
								<div className="zoom-img rounded-3">
									<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-4.png" alt="infinia" />
								</div>
								<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Michael Chen</h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Animation Specialist</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#1E90FF">
											<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#1E90FF" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
							<div className="position-relative d-inline-block z-1">
								<div className="zoom-img rounded-3">
									<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-5.png" alt="infinia" />
								</div>
								<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Emily Rodriguez</h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Template Designer</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#1E90FF">
											<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#1E90FF" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
							<div className="position-relative d-inline-block z-1">
								<div className="zoom-img rounded-3">
									<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-6.png" alt="infinia" />
								</div>
								<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>David Park</h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Brand Integration Expert</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
											<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
