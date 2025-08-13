'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

export default function BeforeAfter() {
	const [sliderPosition, setSliderPosition] = useState(50)
	const [isDragging, setIsDragging] = useState(false)
	const [windowWidth, setWindowWidth] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!isDragging || !containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const percentage = (x / rect.width) * 100
		setSliderPosition(Math.max(0, Math.min(100, percentage)))
	}, [isDragging])

	const handleTouchMove = useCallback((e: TouchEvent) => {
		if (!isDragging || !containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()
		const x = e.touches[0].clientX - rect.left
		const percentage = (x / rect.width) * 100
		setSliderPosition(Math.max(0, Math.min(100, percentage)))
	}, [isDragging])

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		
		handleResize()
		window.addEventListener('resize', handleResize)
		
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
			document.addEventListener('touchmove', handleTouchMove)
			document.addEventListener('touchend', handleMouseUp)
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleMouseUp)
		}
	}, [isDragging, handleMouseMove, handleTouchMove])

	return (
		<>
			<section className="section-before-after bg-neutral-0" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto text-center mb-lg-8">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 px-md-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-8 fs-md-7 fw-bold text-linear-2 ms-2 text-uppercase">TRANSFORMATION</span>
							</div>
							<h3 className="ds-4 ds-md-3 my-3" data-aos="fade-up" data-aos-delay={200}>
								See The Difference We Make
							</h3>
							<p className="fs-6 fs-md-5 mb-0 px-2" data-aos="fade-up" data-aos-delay={300}>
								Drag the slider to see how we transform ordinary presentations into 
								stunning visual masterpieces that captivate your audience.
							</p>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-10 col-md-11">
							<div 
								className="before-after-container position-relative overflow-hidden rounded-3 rounded-md-4 shadow-lg"
								ref={containerRef}
								data-aos="fade-up" 
								data-aos-delay={400}
								style={{ height: windowWidth < 768 ? '300px' : windowWidth < 992 ? '400px' : '500px', cursor: isDragging ? 'grabbing' : 'grab' }}
							>
								{/* Before Image */}
								<div className="before-image position-absolute w-100 h-100">
									<img 
										src="/assets/imgs/project-1/img-1.png" 
										alt="Before - Basic Presentation"
										className="w-100 h-100 object-fit-cover"
										style={{ filter: 'grayscale(50%) brightness(0.8)' }}
									/>
									<div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
										<div className="bg-black bg-opacity-75 text-white px-3 px-md-4 py-1 py-md-2 rounded-pill">
											<h6 className="mb-0 fw-bold text-white fs-7 fs-md-6">BEFORE</h6>
										</div>
									</div>
								</div>

								{/* After Image */}
								<div 
									className="after-image position-absolute h-100 overflow-hidden"
									style={{ 
										width: `${sliderPosition}%`,
										clipPath: `inset(0 0 0 0)`
									}}
								>
									<img 
										src="/assets/imgs/project-1/img-2.png" 
										alt="After - Professional Presentation"
										className="w-100 h-100 object-fit-cover"
										style={{ 
											width: `${100 * (100 / sliderPosition)}%`,
											maxWidth: 'none'
										}}
									/>
									<div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
											<div className="bg-primary text-white px-3 px-md-4 py-1 py-md-2 rounded-pill">
												<h6 className="mb-0 fw-bold text-white fs-7 fs-md-6">AFTER</h6>
											</div>
										</div>
								</div>

								{/* Slider Handle */}
								<div 
									className="slider-handle position-absolute top-0 bottom-0 d-flex align-items-center justify-content-center"
									style={{ 
										left: `${sliderPosition}%`,
										transform: 'translateX(-50%)',
										width: '4px',
										backgroundColor: '#fff',
										boxShadow: '0 0 20px rgba(0,0,0,0.3)',
										cursor: 'ew-resize',
										zIndex: 10
									}}
									onMouseDown={handleMouseDown}
									onTouchStart={handleMouseDown}
								>
									<div 
											className="slider-button position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
											style={{
												width: windowWidth < 768 ? '40px' : '50px',
												height: windowWidth < 768 ? '40px' : '50px',
												border: '3px solid #1E90FF',
												cursor: 'ew-resize'
											}}
										>
											<svg width={windowWidth < 768 ? "16" : "20"} height={windowWidth < 768 ? "16" : "20"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 7L3 12L8 17" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												<path d="M16 7L21 12L16 17" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
								</div>

								{/* Labels */}
								<div className="position-absolute bottom-0 start-0 p-2 p-md-4">
									<div className="bg-dark bg-opacity-75 text-white px-2 px-md-3 py-1 py-md-2 rounded">
										<small className="fw-bold fs-8 fs-md-7">Drag to compare</small>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Features Below */}
					<div className="row mt-4 mt-lg-6">
						<div className="col-lg-4 col-md-6 mb-3 mb-lg-3" data-aos="fade-up" data-aos-delay={500}>
							<div className="text-center px-2">
								<div className="icon-shape icon-lg bg-primary-soft rounded-circle mx-auto mb-3">
									<svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
									</svg>
								</div>
								<h6 className="fw-bold mb-2 fs-6">Professional Design</h6>
								<p className="text-500 mb-0 fs-7">Transform basic slides into visually stunning presentations</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-3 mb-lg-3" data-aos="fade-up" data-aos-delay={600}>
							<div className="text-center px-2">
								<div className="icon-shape icon-lg bg-primary-soft rounded-circle mx-auto mb-3">
									<svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
									</svg>
								</div>
								<h6 className="fw-bold mb-2 fs-6">Brand Consistency</h6>
								<p className="text-500 mb-0 fs-7">Maintain your brand identity across all presentation materials</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-2 mb-lg-2 mx-md-auto" data-aos="fade-up" data-aos-delay={700}>
							<div className="text-center px-2">
								<div className="icon-shape icon-lg bg-primary-soft rounded-circle mx-auto mb-3">
									<svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
										<path d="M13 10V3L4 14H11V21L20 10H13Z"/>
									</svg>
								</div>
								<h6 className="fw-bold mb-2 fs-6">Quick Turnaround</h6>
								<p className="text-500 mb-0 fs-7">Get your polished presentations delivered in record time</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}