import Link from "next/link"

export default function Contact3() {
	return (
		<>
			<section className="section-contact-3 position-relative section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Start a Deck</span>
							</div>
							<h3 className="ds-3 my-3">Let’s build your next presentation</h3>
							<p className="fs-5 mb-0">
								Tell us what you need to present and we’ll help you shape the story, design the slides, and deliver clarity.
							</p>
						</div>
					</div>
					<div className="row mt-8">
						<div className="col-lg-10 mx-auto">
							<div className="row">
								<div className="col-lg-8">
									<div className="card border-0 shadow-sm">
										<div className="card-body p-6">
											<h4 className="mb-4">Tell us about your presentation</h4>
											<form action="#">
												<div className="row">
													<div className="col-md-6 mb-4">
														<label className="form-label fw-medium text-dark">Full Name</label>
														<input type="text" className="form-control" placeholder="Enter your full name" />
													</div>
													<div className="col-md-6 mb-4">
														<label className="form-label fw-medium text-dark">Email Address</label>
														<input type="email" className="form-control" placeholder="Enter your email" />
													</div>
													<div className="col-md-6 mb-4">
														<label className="form-label fw-medium text-dark">Phone Number</label>
														<input type="tel" className="form-control" placeholder="Enter your phone" />
													</div>
													<div className="col-md-6 mb-4">
														<label className="form-label fw-medium text-dark">Company</label>
														<input type="text" className="form-control" placeholder="Enter company name" />
													</div>
													<div className="col-12 mb-4">
														<label className="form-label fw-medium text-dark">Subject</label>
														<select className="form-select">
															<option>Select a subject</option>
															<option>Pitch Deck</option>
															<option>Sales Presentation</option>
															<option>Company Profile</option>
															<option>Board or Investor Update</option>
														</select>
													</div>
													<div className="col-12 mb-4">
														<label className="form-label fw-medium text-dark">Message</label>
															<textarea className="form-control" rows={5} placeholder="Share your goals, audience, and timeline..."></textarea>
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-primary btn-lg">
															Send Request
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
																<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="ps-lg-4 mt-5 mt-lg-0">
										<div className="mb-6">
											<div className="d-flex align-items-center mb-3">
												<div className="icon-shape icon-md rounded-circle bg-primary text-white me-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
														<path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth={2}/>
														<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={2}/>
													</svg>
												</div>
												<div>
													<h6 className="mb-1">Studio</h6>
													<p className="text-500 mb-0">Design District<br />New York, NY</p>
												</div>
											</div>
										</div>
										<div className="mb-6">
											<div className="d-flex align-items-center mb-3">
												<div className="icon-shape icon-md rounded-circle bg-primary text-white me-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
														<path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.56 4.04 6.32 5.84C6.48 6.2 6.36 6.64 6.04 6.88L4.12 8.32C5.64 11.88 8.12 14.36 11.68 15.88L13.12 13.96C13.36 13.64 13.8 13.52 14.16 13.68C15.96 14.44 17.92 14.84 19.92 14.84C20.52 14.84 21 15.32 21 15.92V18.92H22Z" fill="currentColor"/>
													</svg>
												</div>
												<div>
													<h6 className="mb-1">Call Us</h6>
													<Link href="https://wa.me/923172651450" className="text-500 text-decoration-none">+92 317 2651450</Link>
												</div>
											</div>
										</div>
										<div className="mb-6">
											<div className="d-flex align-items-center mb-3">
												<div className="icon-shape icon-md rounded-circle bg-primary text-white me-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
														<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
														<path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</div>
												<div>
													<h6 className="mb-1">Email Us</h6>
													<Link href="mailto:hello@infinia.com" className="text-500 text-decoration-none">hello@infinia.com</Link>
												</div>
											</div>
										</div>
										<div className="mb-6">
											<h6 className="mb-3">Follow Us</h6>
											<div className="d-flex gap-3">
												<Link href="#" className="icon-shape icon-sm rounded-circle bg-neutral-100 text-dark hover-up">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
														<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
													</svg>
												</Link>
												<Link href="#" className="icon-shape icon-sm rounded-circle bg-neutral-100 text-dark hover-up">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
														<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
													</svg>
												</Link>
												<Link href="#" className="icon-shape icon-sm rounded-circle bg-neutral-100 text-dark hover-up">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
														<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
													</svg>
												</Link>
											</div>
										</div>
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
