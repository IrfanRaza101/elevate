import Link from "next/link"

export default function Blog6() {
	return (
		<section className="section-blog-6 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-3.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Templates</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									System
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">How to Build a Slide Template That Scales</h5>
								</Link>
								<p className="mb-0">
									A practical approach to master slides, spacing rules, and reusable components for consistent decks.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-4.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Data</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									Charts
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">Data Slides: 7 Rules for Cleaner Charts</h5>
								</Link>
								<p className="mb-0">
									Make data easier to read with contrast, labeling, and hierarchy—without changing the truth.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-5.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Story</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									Narrative
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">From Notes to Narrative: Turn Content into Slides</h5>
								</Link>
								<p className="mb-0">
									A quick method to outline, prioritize, and turn messy input into a clean slide storyline.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-6.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Design</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									Layout
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">Slide Layout Patterns That Always Work</h5>
								</Link>
								<p className="mb-0">
									A few reliable layouts you can reuse for problem slides, proof slides, and comparisons.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-lg-12">
						<nav aria-label="Page navigation">
							<ul className="pagination justify-content-center">
								<li className="page-item">
									<Link className="page-link" href="#" aria-label="Previous">
										<span aria-hidden="true">«</span>
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										1
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										2
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#">
										3
									</Link>
								</li>
								<li className="page-item">
									<Link className="page-link" href="#" aria-label="Next">
										<span aria-hidden="true">»</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	)
}

