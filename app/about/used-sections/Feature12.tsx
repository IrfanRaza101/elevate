import Link from "next/link"

export default function Feature12() {
	return (
		<section className="section-feature-12 border-bottom pb-120 pt-110">
			<div className="container">
				<div className="text-center">
					<h5 className="ds-5">Our Core Values</h5>
					<p className="fs-5 pb-4">
						We design presentations with clarity, strategy, and craft—so your message lands with impact
						<br className="d-none d-lg-block" />
						and your audience remembers what matters.
					</p>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
							<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
								<div className="icon">
									<img className="filter-invert" src="/assets/imgs/service-1/icon-6.svg" alt="infinia" />
								</div>
							</div>
							<h4>Clarity First</h4>
							<p>
								Every slide has one job. We simplify complexity into clear, scannable layouts
								<br />
								that help your audience understand faster and decide with confidence.
							</p>
							<Link href="#" className="text-primary fs-7 fw-bold">
								Learn More
								<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
									<g clipPath="url(#clip0_399_9647)">
										<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
									</g>
									<defs>
										<clipPath>
											<rect width={18} height={18} fill="white" transform="translate(0.5)" />
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
						<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
							<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
								<div className="icon">
									<img className="filter-invert" src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
								</div>
							</div>
							<h4>Story-Driven Structure</h4>
							<p>
								We map the narrative—problem, proof, solution, and next step—so your deck
								<br />
								flows naturally and keeps attention from the first slide to the last.
							</p>
							<Link href="#" className="text-primary fs-7 fw-bold">
								Learn More
								<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
									<g clipPath="url(#clip0_399_9647)">
										<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
									</g>
									<defs>
										<clipPath>
											<rect width={18} height={18} fill="white" transform="translate(0.5)" />
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
							<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
								<div className="icon">
									<img className="filter-invert" src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
								</div>
							</div>
							<h4>Brand Consistency</h4>
							<p>
								We translate your brand into a slide system—colors, typography, spacing, and
								<br />
								components—so every deck looks unmistakably like you.
							</p>
							<Link href="#" className="text-primary fs-7 fw-bold">
								Learn More
								<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
									<g clipPath="url(#clip0_399_9647)">
										<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
									</g>
									<defs>
										<clipPath>
											<rect width={18} height={18} fill="white" transform="translate(0.5)" />
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
						<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
							<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
								<div className="icon">
									<img className="filter-invert" src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
								</div>
							</div>
							<h4>Detail & Craft</h4>
							<p>
								From data charts to icon alignment, details build trust. We refine every element
								<br />
								so your slides feel polished, premium, and presentation-ready.
							</p>
							<Link href="#" className="text-primary fs-7 fw-bold">
								Learn More
								<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
									<g clipPath="url(#clip0_399_9647)">
										<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
									</g>
									<defs>
										<clipPath>
											<rect width={18} height={18} fill="white" transform="translate(0.5)" />
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

