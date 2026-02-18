import Link from "next/link"

export default function Blog5() {
	return (
		<section className="section-blog-5 position-relative">
			<div className="container">
				<div className="row pt-6 position-relative z-1">
					<div className="col-lg-7 mx-lg-auto">
						<div className="text-center mb-5">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Blog</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">Presentation Design Insights</h3>
							<p className="fs-5 mb-0">
								Frameworks, tips, and examples for pitch decks, sales decks, and data slides.
							</p>
						</div>
					</div>
				</div>
				<div className="row pb-8">
					<div className="col-lg-6">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-1.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Pitch Deck</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									Structure
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">A Simple Pitch Deck Flow That Keeps Attention</h5>
								</Link>
								<p className="mb-0">
									Use a clear narrative arc—problem, insight, solution, proof, and ask—so your audience never gets lost.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="card-blog-5 mb-4 rounded-4 overflow-hidden bg-white border border-2 border-white hover-up">
							<div className="card-image position-relative">
								<Link href="#">
									<img className="w-100" src="/assets/imgs/blog-5/blog-6/img-2.png" alt="infinia" />
								</Link>
								<span className="badge text-bg-primary position-absolute top-0 start-0 m-4">Sales Deck</span>
							</div>
							<div className="card-info p-4">
								<Link href="#" className="text-primary fw-bold">
									Design
								</Link>
								<Link href="#">
									<h5 className="mt-2 mb-3">Sales Slides: What to Show (and What to Cut)</h5>
								</Link>
								<p className="mb-0">
									Reduce clutter, keep one idea per slide, and use strong hierarchy to make your value obvious in seconds.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/blog-5/bg-1.png" alt="infinia" />
			<img className="position-absolute bottom-0 start-0 z-0" src="/assets/imgs/blog-5/bg-2.png" alt="infinia" />
		</section>
	)
}

