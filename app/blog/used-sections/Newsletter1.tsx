export default function Newsletter1() {
	return (
		<section className="section-newsletter-1 pb-120">
			<div className="container">
				<div className="bg-primary-soft border border-2 border-white rounded-5 px-md-0 px-3 py-md-0 py-6">
					<div className="row">
						<div className="col-lg-6">
							<div className="p-md-8 p-0">
								<h3 className="ds-3">Weekly slide design tips</h3>
								<p className="fs-5 mt-3 mb-6">
									Subscribe for practical advice on pitch decks, sales decks, templates, and data visualization.
								</p>
								<form className="d-flex flex-column flex-md-row gap-3">
									<input className="form-control rounded-pill" type="email" placeholder="Enter your email" />
									<button className="btn btn-primary rounded-pill" type="submit">Subscribe</button>
								</form>
							</div>
						</div>
						<div className="col-lg-6 text-lg-end d-none d-lg-block">
							<div className="position-relative h-100">
								<img className="position-absolute bottom-0 end-0" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

