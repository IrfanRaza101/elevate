'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ThemeSwitch from '@/components/elements/ThemeSwitch'

export default function MobileMenu({ isMobileMenu, handleMobileMenu, handleSearch }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/template/Elevate.png" alt="Elevate" style={{
								maxHeight: '40px',
								width: 'auto',
								marginRight: '10px'
							}} />
							<span className="font-semibold text-sm d-flex flex-column" style={{
								fontSize: '1.1rem',
								lineHeight: '1.2'
							}}>
								<span style={{
									fontSize: '1.1rem',
									lineHeight: '1.1'
								}}>Elevate</span>
								<span className="text-sm" style={{
									fontSize: '0.9rem',
									lineHeight: '1.1'
								}}>presentations</span>
							</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="#services" onClick={(e) => {
												e.preventDefault();
												handleMobileMenu();
												setTimeout(() => {
													document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
												}, 300);
											}}>Services</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="#projects" onClick={(e) => {
												e.preventDefault();
												handleMobileMenu();
												setTimeout(() => {
													document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
												}, 300);
											}}>Portfolio</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="#team" onClick={(e) => {
												e.preventDefault();
												handleMobileMenu();
												setTimeout(() => {
													document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
												}, 300);
											}}>Team</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="/blog" onClick={() => {
												handleMobileMenu();
											}}>Blog</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="/contact" onClick={() => {
												handleMobileMenu();
											}}>Contact</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div className="mobile-header-info-wrap">
								<div className="d-flex align-items-center justify-content-between py-3 px-3 border-top" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop" onClick={() => {
									handleSearch();
									handleMobileMenu();
								}}>
									<span className="fw-bold text-dark">Search</span>
									<div className="cursor-pointer">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
								<div className="d-flex align-items-center justify-content-between py-3 px-3 border-top">
									<span className="fw-bold text-dark">Dark Mode</span>
									<ThemeSwitch />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
