import Link from "next/link"

export default function Hero() {
	return (
		<section className="section-hero-2 position-relative fix section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="d-flex align-items-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Portfolio</span>
						</div>
						<h1 className="ds-2 my-3">Presentation work that looks great and sells the story</h1>
						<p className="fs-5 text-500">
							A curated selection of pitch decks, sales presentations, company profiles, and data-heavy slides—designed for clarity and impact.
						</p>
						<div className="d-flex gap-3 pt-5">
							<Link href="/contact" className="btn btn-primary hover-up">Request a quote</Link>
							<Link href="/services" className="btn btn-outline-primary hover-up">View services</Link>
						</div>
						<div className="row mt-6 g-3">
							<div className="col-md-6 d-flex gap-2">
								<img src="/assets/imgs/hero-2/icon-1.svg" alt="infinia" />
								<div>
									<h6 className="fw-bold">Custom Slide Design</h6>
									<p className="fs-7 text-500 mb-0">Layouts built for readability and flow.</p>
								</div>
							</div>
							<div className="col-md-6 d-flex gap-2">
								<img src="/assets/imgs/hero-2/icon-2.svg" alt="infinia" />
								<div>
									<h6 className="fw-bold">Brand Templates</h6>
									<p className="fs-7 text-500 mb-0">Consistent systems for every deck.</p>
								</div>
							</div>
							<div className="col-md-6 d-flex gap-2">
								<img src="/assets/imgs/hero-2/icon-3.svg" alt="infinia" />
								<div>
									<h6 className="fw-bold">Data Visualization</h6>
									<p className="fs-7 text-500 mb-0">Charts that make proof easy to trust.</p>
								</div>
							</div>
							<div className="col-md-6 d-flex gap-2">
								<img src="/assets/imgs/hero-2/icon-4.svg" alt="infinia" />
								<div>
									<h6 className="fw-bold">Motion Slides</h6>
									<p className="fs-7 text-500 mb-0">Purposeful animation when needed.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 text-center">
						<div className="position-relative mt-lg-0 mt-8 d-inline-block">
							<img className="rounded-4" src="/assets/imgs/hero-2/img-1.png" alt="infinia" />
							<img className="alltuchtopdown position-absolute z-1 top-0 start-0 mt-8 ms-lg-10 ms-md-20 ms-8 rounded-4 shadow-lg" src="/assets/imgs/hero-2/img-2.png" alt="infinia" />
							<img className="alltuchtopdown position-absolute z-1 top-0 end-0 mt-8 me-lg-10 me-md-15 me-8 rounded-4 shadow-lg" src="/assets/imgs/hero-2/img-3.png" alt="infinia" />
							<img className="alltuchtopdown position-absolute z-1 bottom-0 start-0 mb-8 ms-lg-10 ms-md-15 ms-8 rounded-4 shadow-lg" src="/assets/imgs/hero-2/img-4.png" alt="infinia" />
							<img className="alltuchtopdown position-absolute z-1 bottom-0 end-0 mb-8 me-lg-10 me-md-15 me-8 rounded-4 shadow-lg" src="/assets/imgs/hero-2/img-5.png" alt="infinia" />
						</div>
					</div>
				</div>
			</div>
			<div className="position-absolute top-0 start-0 w-100 h-100 z-0">
				<img className="w-100 h-100" src="/assets/imgs/hero-2/bg.png" alt="infinia" />
			</div>
		</section>
	)
}

