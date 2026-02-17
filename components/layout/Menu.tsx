import Link from "next/link"

export default function Menu() {
	return (
		<>
			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/" style={{color: '#000'}}>Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/services" style={{color: '#000'}}>Services</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/portfolio" style={{color: '#000'}}>Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/blog" style={{color: '#000'}}>Blog</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/about" style={{color: '#000'}}>About</Link>
					</li>
				</ul>
			</div>

			<style jsx>{`
				.nav-text {
					font-size: clamp(14px, 1vw, 22px);
				}
			`}</style>
		</>
	)
}
