'use client'
import CountUp from 'react-countup'

export default function Static3() {
	return (
        <>
            <style jsx>{`
                /* 4K & Ultra Wide Scaling */
                @media (min-width: 2000px) {
                    .section-static-1 .m-5 {
                        max-width: 1800px !important;
                        /* margin: 0 auto !important; REMOVED to prevent breaking layout */
                    }
                    .section-static-1 h5 {
                        font-size: 2.5rem !important;
                    }
                    .section-static-1 .count {
                        font-size: 5rem !important;
                    }
                    .section-static-1 p {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>
		<section className="w-full section-static-1 position-relative fix z-0 py-8">
			<div className="m-5 p-5 ">
				<div className="inner">
					<div className="row align-items-center justify-content-center justify-content-lg-between gy-4">

						{/* Heading */}
						<div className="col-12 col-lg-auto text-center text-lg-start mb-4 mb-lg-0">
							<h5 className="mb-0">
								See why we are <br /> the presentation design experts
							</h5>
						</div>

						{/* Counter 1 */}
						<div className="col-6 col-md-3 col-lg-auto">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<span className="h1 count fw-black my-0" style={{ color: '#1E90FF' }}>
										<CountUp end={850} enableScrollSpy />+
									</span>
									<p>Presentations Created</p>
								</div>
							</div>
						</div>

						{/* Counter 2 */}
						<div className="col-6 col-md-3 col-lg-auto">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<span className="h1 count fw-black my-0" style={{ color: '#1E90FF' }}>
										+<CountUp end={150} enableScrollSpy />
									</span>
									<p>Happy Clients</p>
								</div>
							</div>
						</div>

						{/* Counter 3 */}
						<div className="col-6 col-md-3 col-lg-auto">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<span className="h1 count fw-black my-0" style={{ color: '#1E90FF' }}>
										<CountUp end={98} enableScrollSpy />%
									</span>
									<p>Client Satisfaction</p>
								</div>
							</div>
						</div>

						{/* Counter 4 */}
						<div className="col-6 col-md-3 col-lg-auto">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<span className="h1 count fw-black my-0" style={{ color: '#1E90FF' }}>
										<CountUp end={7} enableScrollSpy />+
									</span>
									<p>Years Experience</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* Blobs — untouched */}
			<div className="bouncing-blobs-container">
				<div className="bouncing-blobs-glass fix" />
				<div className="bouncing-blobs">
					<div className="bouncing-blob bouncing-blob--green" />
					<div className="bouncing-blob bouncing-blob--primary" />
					<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
				</div>
			</div>
		</section>
        </>
	)
}
