import Link from "next/link"

export default function Contact3() {
	return (
		<section className="section-contact-3 position-relative section-padding fix">
			<div className="container position-relative z-1">
				<div className="text-center">
					<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
						<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
						<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Get in Touch</span>
					</div>
					<h3 className="ds-3 mt-3 mb-3">Contact Our Presentation Team</h3>
					<p className="fs-5">
						We specialize only in presentation designing—pitch decks, sales decks, company profiles, and slide redesigns.
						<br />
						We will contact you within 24 hours.
					</p>
				</div>
				<div className="row mt-8">
					<div className="col-lg-10 mx-lg-auto">
						<div className="row">
							<div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
								<h4>Leave a message</h4>
								<form action="#">
									<div className="row mt-5">
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4 mt-md-0">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="email" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="email" placeholder="you@example.com" aria-label="email" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="phone" placeholder="Phone" aria-label="phone" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="subject" placeholder="Subject" aria-label="subject" />
											</div>
										</div>
										<div className="col-12">
											<div className="input-group d-flex mt-4">
												<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
													<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
														<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
													</svg>
												</div>
												<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="message" placeholder="Tell us about your presentation needs" aria-label="With textarea" />
											</div>
										</div>
										<h6 className="mt-4 mb-4">Services</h6>
										<div className="d-flex align-items-center">
											<div>
												<div className="form-check mb-2">
													<input className="form-check-input" type="checkbox" id="presentationService1" defaultChecked />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService1"> Pitch Deck Design </label>
												</div>
												<div className="form-check mb-2 me-3">
													<input className="form-check-input" type="checkbox" id="presentationService2" />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService2"> Sales Presentation </label>
												</div>
												<div className="form-check mb-2 me-3">
													<input className="form-check-input" type="checkbox" id="presentationService3" />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService3"> Company Profile Deck </label>
												</div>
											</div>
											<div className="ms-8">
												<div className="form-check mb-2 me-3">
													<input className="form-check-input" type="checkbox" id="presentationService4" />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService4"> Presentation Redesign </label>
												</div>
												<div className="form-check mb-2">
													<input className="form-check-input" type="checkbox" id="presentationService5" defaultChecked />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService5"> Data Visualization </label>
												</div>
												<div className="form-check mb-2 me-3">
													<input className="form-check-input" type="checkbox" id="presentationService6" />
													<label className="form-check-label text-900 fw-bold" htmlFor="presentationService6"> Slide Animation </label>
												</div>
											</div>
										</div>
										<div className="col-12">
											<button type="submit" className="btn bg-primary text-white hover-up mt-4">
												Send Message
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
												</svg>
											</button>
										</div>
									</div>
								</form>
							</div>
							<div className="col-lg-6">
								<div className="ps-lg-6">
									<h6>Chat with us</h6>
									<p className="text-500">Our team replies quickly during working hours</p>
									<div className="d-flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<g clipPath="url(#clip0_602_10655)">
												<path d="M15.0051 12.0403L13.9452 10.9803C13.656 10.6912 13.2563 10.5462 12.8494 10.5828C12.4421 10.6194 12.0749 10.833 11.8418 11.1689L11.4726 11.701C10.9704 11.6115 9.99908 11.3584 9.3201 10.6793C8.64084 10 8.38771 9.02824 8.29842 8.52687L8.8306 8.15761C9.16654 7.92449 9.38017 7.55719 9.41662 7.14992C9.45314 6.74265 9.30822 6.34328 9.01912 6.05422L7.9592 4.99429C7.53326 4.5684 6.89127 4.46675 6.36158 4.74121C5.43283 5.22238 4.82275 6.12433 4.64353 7.2809C4.35162 9.16523 5.22275 11.3883 6.91693 13.0825C8.39451 14.56 10.2742 15.4115 11.9808 15.4115C12.231 15.4115 12.4776 15.3932 12.7185 15.3559C13.8751 15.1768 14.777 14.5666 15.2582 13.6379C15.5326 13.1081 15.431 12.4661 15.0051 12.0403ZM14.1797 13.0791C13.7974 13.8172 13.0729 14.0719 12.5326 14.1556C11.0468 14.3857 9.17963 13.6274 7.77576 12.2236C6.37197 10.8198 5.61361 8.95265 5.84377 7.46683C5.92744 6.92644 6.1822 6.20207 6.92025 5.81965C6.94025 5.80933 6.96236 5.80429 6.98478 5.80429C7.02603 5.80429 7.06838 5.82129 7.10025 5.85312L8.16021 6.91308C8.20424 6.95719 8.20986 7.00726 8.20677 7.04152C8.20369 7.07582 8.18931 7.1241 8.13806 7.15965L7.30084 7.74058C7.12576 7.86207 7.02713 8.06652 7.04107 8.27918C7.04634 8.35949 7.18447 10.2614 8.46119 11.5381C9.73791 12.8148 11.6398 12.953 11.7201 12.9582C11.9326 12.9719 12.1372 12.8736 12.2587 12.6984L12.8397 11.8612C12.8752 11.81 12.9235 11.7956 12.9578 11.7925C12.9921 11.7894 13.0421 11.7951 13.0863 11.8391L14.1462 12.899C14.1954 12.9482 14.2092 13.0223 14.1797 13.0791Z" fill="#6B7280" />
												<path d="M17.0709 2.92906C15.1821 1.0402 12.6708 0 9.99959 0C7.32834 0 4.81709 1.0402 2.92826 2.92902C1.32291 4.53438 0.303771 6.65902 0.0584589 8.9116C-0.173455 11.0411 0.289357 13.2086 1.36311 15.046L0.320998 18.9352C0.264826 19.1447 0.324748 19.3684 0.478225 19.5218C0.631623 19.6752 0.855334 19.7351 1.06479 19.679L4.95393 18.6369C6.48143 19.5296 8.23725 20 10.0096 20C10.369 20 10.7292 19.9807 11.0883 19.9415C13.3409 19.6962 15.4656 18.6771 17.0709 17.0717C18.9598 15.1829 20 12.6716 20 10.0004C20 7.32922 18.9597 4.81789 17.0709 2.92906ZM16.2121 16.2128C13.3085 19.1164 8.84877 19.6323 5.36686 17.4677C5.26967 17.4073 5.15846 17.3761 5.04615 17.3761C4.99358 17.3761 4.94076 17.383 4.88901 17.3968L1.76647 18.2335L2.60319 15.111C2.64662 14.9488 2.62096 14.7758 2.53233 14.6332C0.3676 11.1511 0.883615 6.69141 3.78709 3.78789C7.21272 0.362344 12.7865 0.362344 16.2121 3.78789C19.6376 7.21344 19.6376 12.7873 16.2121 16.2128Z" fill="#6B7280" />
											</g>
											<defs>
												<clipPath>
													<rect width={20} height={20} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
									</div>
									<div className="d-flex mb-2 mb-5">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.4585C14.962 1.4585 18.9587 5.1185 18.9587 9.5835C18.9587 14.0485 14.962 17.7085 10.0003 17.7085C8.83533 17.7085 7.72199 17.506 6.70199 17.1393L4.02949 18.476C3.82199 18.5793 3.57449 18.5602 3.38533 18.4243C3.19699 18.2893 3.09949 18.0602 3.13116 17.8302L3.50283 15.176C1.97449 13.716 1.04199 11.746 1.04199 9.5835C1.04199 5.1185 5.03866 1.4585 10.0003 1.4585ZM10.0003 2.7085C5.76283 2.7085 2.29199 5.77016 2.29199 9.5835C2.29199 11.4977 3.17199 13.226 4.58033 14.4693C4.73783 14.6077 4.81533 14.816 4.78616 15.0243L4.53366 16.826L6.38783 15.8993C6.54616 15.8202 6.73116 15.8118 6.89616 15.8768C7.84699 16.251 8.89699 16.4585 10.0003 16.4585C14.2378 16.4585 17.7087 13.3968 17.7087 9.5835C17.7087 5.77016 14.2378 2.7085 10.0003 2.7085Z" fill="#6B7280" />
											<path fillRule="evenodd" clipRule="evenodd" d="M6.15499 12.227C6.05915 12.302 5.92249 12.2961 5.83332 12.2145C5.74332 12.132 5.72582 11.997 5.79165 11.8945C6.54999 10.7136 7.66999 8.97195 8.29165 8.00445C8.41249 7.81695 8.60415 7.68529 8.82249 7.63945C9.04165 7.59362 9.26915 7.63779 9.45499 7.76195C9.89749 8.05695 10.4525 8.42695 10.8275 8.67695C11.0867 8.84945 11.4217 8.86362 11.6942 8.71195C12.2842 8.38445 13.3392 7.79779 14.0983 7.37612C14.1992 7.32029 14.3258 7.34029 14.4042 7.42529C14.4817 7.51029 14.4917 7.63695 14.4283 7.73362C13.7667 8.72529 12.6933 10.3353 12.0983 11.2278C11.855 11.5928 11.3717 11.707 10.9917 11.4895C10.4542 11.182 9.71415 10.7595 9.23415 10.4853C8.94165 10.3178 8.57582 10.3436 8.30915 10.5511C7.78332 10.9603 6.88415 11.6603 6.15499 12.227Z" fill="#6B7280" />
										</svg>
										<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messenger</Link>
									</div>
									<h6>Send us an email</h6>
									<p className="text-500">Share your brief and we’ll reply with next steps</p>
									<div className="d-flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996ZM1.17188 15.0349V4.96582L6.23586 10.0031L1.17188 15.0349ZM2.00473 15.8594L7.06672 10.8296L7.9284 11.6867C8.48176 12.2401 9.21746 12.5448 10 12.5448C10.7825 12.5448 11.5182 12.2401 12.0705 11.6878L12.9333 10.8296L17.9953 15.8594H2.00473ZM18.8281 15.0349L13.7641 10.0031L18.8281 4.96582V15.0349Z" fill="#6B7280" />
										</svg>
										<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">hello@elevate.com</Link>
									</div>
									<div className="d-flex mb-2 mb-5">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996ZM1.17188 15.0349V4.96582L6.23586 10.0031L1.17188 15.0349ZM2.00473 15.8594L7.06672 10.8296L7.9284 11.6867C8.48176 12.2401 9.21746 12.5448 10 12.5448C10.7825 12.5448 11.5182 12.2401 12.0705 11.6878L12.9333 10.8296L17.9953 15.8594H2.00473ZM18.8281 15.0349L13.7641 10.0031L18.8281 4.96582V15.0349Z" fill="#6B7280" />
										</svg>
										<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">projects@elevate.com</Link>
									</div>
									<h6>For urgent inquiries</h6>
									<p className="text-500">Reach out for immediate assistance</p>
									<div className="d-flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996ZM1.17188 15.0349V4.96582L6.23586 10.0031L1.17188 15.0349ZM2.00473 15.8594L7.06672 10.8296L7.9284 11.6867C8.48176 12.2401 9.21746 12.5448 10 12.5448C10.7825 12.5448 11.5182 12.2401 12.0705 11.6878L12.9333 10.8296L17.9953 15.8594H2.00473ZM18.8281 15.0349L13.7641 10.0031L18.8281 4.96582V15.0349Z" fill="#6B7280" />
										</svg>
										<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+01 (24) 568 900</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
			<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			<div className="rotate-center-rev ellipse-rotate-info position-absolute z-0" />
		</section>
	)
}

