
import Link from "next/link"

export default function Blog5() {
	return (
		<>
			<section id="blog" className="section-blog-1 section-padding position-relative border-top border-bottom">
				<div className="container position-relative z-2">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Design Insights</span>
							</div>
							<h3 className="ds-4 mt-3 mb-3">Presentation Design Tips</h3>
							<span className="fs-5 fw-medium text-900">Expert insights and best practices for creating stunning presentations</span>
						</div>
						<div className="col-lg-auto">
							<div className="d-flex justify-content-center justify-content-lg-start">
								<Link href="/blog" className="btn btn-gradient hover-up rounded-pill px-3 py-2" style={{ color: 'white', fontSize: '0.8rem' }}>View all tips
									
								</Link>
							</div>
						</div>
					</div>
					<div className="row mt-8 align-items-center">
						<div className="col-lg-7">
							<div className="card-team position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 border  card-hover shadow-2 mb-lg-0 mb-8">
								<img className="rounded rounded-bottom-0 rounded-start-lg rounded-end-lg-0 w-100 w-lg-auto" src="/assets/imgs/blog-5/img-1.png" alt="infinia" />
								<div className="bg-white align-self-stretch rounded rounded-start-lg-0 p-5">
									<Link href="/blog/1" className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-2">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">design tips</span>
									</Link>
									<h6 className="mb-3">10 Essential Presentation Design Principles for Professional Presentations</h6>
									<p>Master the art of presentation design with these fundamental principles that will transform your slides from ordinary to extraordinary...</p>
									<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
										<div className="d-flex align-items-center position-relative z-1">
											<div className="icon-shape rounded-circle border border-2 border-white">
												<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
											</div>
											<div className="ms-3">
												<h6 className="fs-7 m-0 mb-1">Sarah Design</h6>
												<p className="mb-0 fs-8">15 Dec 2024</p>
											</div>
											<Link href="/blog/1" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
										<div className="arrow-icon icon-shape icon-md bg-white rounded-circle border">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
												<path d="M17.25 15.5322V7.03223H8.75" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7.28223L6.75 17.5322" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<Link href="/blog/1" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div>
								<Link href="/blog/2" className="d-flex flex-column flex-md-row align-items-center hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-2.png" alt="infinia" />
									<div className="content ms-5 mt-4 mt-md-0">
										<h6 className="mb-2">How to Create Engaging Slide Animations That Don't Distract</h6>
										<p className="mb-0">Learn the perfect balance between eye-catching animations and professional presentation delivery...</p>
									</div>
								</Link>
								<Link href="/blog/3" className="d-flex flex-column flex-md-row align-items-center mt-7 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-3.png" alt="infinia" />
									<div className="content ms-5 mt-4 mt-md-0">
										<h6 className="mb-2">Color Psychology in Presentation Design: What Works Best</h6>
										<p className="mb-0">Discover how different colors impact your audience and learn to choose the perfect palette for your presentations...</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
			</section>
		</>
	)
}
