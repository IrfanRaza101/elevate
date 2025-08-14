
'use client'
import Link from "next/link"

export default function Features5() {
	return (
		<>
			<section id="features" className="section-feature-5">
				<div className="container-fluid position-relative section-padding bg-1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="photo-description position-relative  rounded-4">
									<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-1.png" alt="infinia" />
									<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
								<h4 className="ds-4 fw-regular">Everything you need <br /> for <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>stunning presentation <br className="d-none d-lg-inline" /> designs.</span></h4>
								<p className="fs-5">Professional design tools, templates, and expertise to create presentations that captivate and convert your audience.</p>
								<Link href="#projects" className="btn btn-gradient hover-up mt-5 rounded-pill px-3 py-2" style={{color: 'white', fontSize: '0.8rem'}} data-aos="fade-zoom-in" data-aos-delay={200}>
									View Portfolio
									
								</Link>
							</div>
						</div>
						<div className="row py-90">
							<div className="col-lg-10 px-lg-0 mx-lg-auto d-flex flex-wrap justify-content-center justify-content-lg-between gap-3">
								<div 
									className="fw-bold fs-5 dark:text-white feature-item" 
									data-aos="fade-zoom-in" 
									data-aos-delay={0}
									style={{
										padding: '12px 24px',
										borderRadius: '8px',
										transition: 'all 0.3s ease',
										cursor: 'pointer',
										fontSize: '1.2rem'
									}}
									onMouseEnter={e => {
										e.currentTarget.style.transform = 'translateY(-5px)';
									}}
									onMouseLeave={e => {
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>Custom Design</div>
								<div 
									className="fw-bold dark:text-white feature-item" 
									data-aos="fade-zoom-in" 
									data-aos-delay={100}
									style={{
										padding: '12px 24px',
										borderRadius: '8px',
										transition: 'all 0.3s ease',
										cursor: 'pointer',
										fontSize: '1.2rem'
									}}
									onMouseEnter={e => {
										e.currentTarget.style.transform = 'translateY(-5px)';
									}}
									onMouseLeave={e => {
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>Animation Effects</div>
								<div 
									className="fw-bold dark:text-white feature-item" 
									data-aos="fade-zoom-in" 
									data-aos-delay={200}
									style={{
										padding: '12px 24px',
										borderRadius: '8px',
										transition: 'all 0.3s ease',
										cursor: 'pointer',
										fontSize: '1.2rem'
									}}
									onMouseEnter={e => {
										e.currentTarget.style.transform = 'translateY(-5px)';
									}}
									onMouseLeave={e => {
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>Brand Integration</div>
								<div 
									className="fw-bold dark:text-white feature-item" 
									data-aos="fade-zoom-in" 
									data-aos-delay={300}
									style={{
										padding: '12px 24px',
										borderRadius: '8px',
										transition: 'all 0.3s ease',
										cursor: 'pointer',
										fontSize: '1.2rem'
									}}
									onMouseEnter={e => {
										e.currentTarget.style.transform = 'translateY(-5px)';
									}}
									onMouseLeave={e => {
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>Template Library</div>
								<div 
									className="fw-bold dark:text-white feature-item" 
									data-aos="fade-zoom-in" 
									data-aos-delay={400}
									style={{
										padding: '12px 24px',
										borderRadius: '8px',
										transition: 'all 0.3s ease',
										cursor: 'pointer',
										fontSize: '1.2rem'
									}}
									onMouseEnter={e => {
										e.currentTarget.style.transform = 'translateY(-5px)';
									}}
									onMouseLeave={e => {
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>Fast Delivery</div>
							</div>
						</div>
						<div className="row align-items-start pb-5 pt-lg-5 pt-0">
							<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
								<h4 className="ds-4 fw-regular">Experience the <br /> <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>cutting-edge <br /></span>design process</h4>
								<p className="fs-5">Our streamlined workflow ensures your presentations are delivered on time with exceptional quality and attention to detail.</p>
								<Link href="#how-it-works" className="btn btn-gradient hover-up mt-5 rounded-pill px-3 py-2" style={{color: 'white', fontSize: '0.8rem'}} data-aos="fade-zoom-in" data-aos-delay={300}>
									Explore Now
									
								</Link>
							</div>
							<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
								<div className="photo-description position-relative rounded-4 d-inline-block">
									<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-2.png" alt="infinia" />
									<div className="position-absolute top-50 start-50 translate-middle z-0">
										<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
										</div>
									</div>
									<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={100} />
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-center pt-lg-150 pt-8">
							<div className="col-lg-6">
								<p className="fs-5">Our presentation designs work flawlessly on all platforms and formats.</p>
								<div className="d-flex justify-content-center mt-5">
									<img className="me-3" src="/assets/imgs/features-5/icon-1.png" alt="infinia" />
									<img className="me-3" src="/assets/imgs/features-5/icon-2.png" alt="infinia" />
									<img className="me-3" src="/assets/imgs/features-5/icon-3.png" alt="infinia" />
									<img className="me-3" src="/assets/imgs/features-5/icon-4.png" alt="infinia" />
									<img className="me-3" src="/assets/imgs/features-5/icon-5.png" alt="infinia" />
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	)
}
