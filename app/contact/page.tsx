'use client'
import Layout from "@/components/layout/Layout"
import CountUp from 'react-countup'
import MeetingScheduler from "@/components/used-sections/MeetingScheduler"
import Contact3 from "@/components/used-sections/Contact3"

export default function PageContact1() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* Contact 4*/}
				<section className="section-contact-4 bg-4 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
									<h6 className="text-primary">Reach Out</h6>
									<h3 className="ds-3">We look forward to hearing from you.</h3>
									<p className="fs-5">Schedule a demo, inquire, or reach out here. For job opportunities at Iori Corporation, explore our careers page</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-2.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="h-100 bg-primary rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
									<div className="position-relative z-1 fix">
										<div className="d-flex justify-content-center">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<h1 className="count fw-black text-white my-0">+<span className="odometer" /><CountUp end={500} enableScrollSpy={true} />k</h1>
										<p className="fs-5 text-100-keep mb-0">Users Active / Month</p>
									</div>
									<img className="position-absolute top-50 start-50 translate-middle z-0" src="/assets/imgs/contact-4/img-bg-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-3.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</section>
				
				
				
				{/* Meeting Scheduler Section */}
				<MeetingScheduler />
				
				{/* Contact Form Section */}
				<Contact3 />
				
				<div className="contact-map w-100">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
				</div>

			</Layout>
		</>
	)
}