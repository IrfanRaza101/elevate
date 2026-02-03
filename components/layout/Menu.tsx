import Link from "next/link"

export default function Menu() {
	return (
		<>
			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/services">Services</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/portfolio">Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/blog">Blog</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center nav-text" href="/about">About</Link>
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
