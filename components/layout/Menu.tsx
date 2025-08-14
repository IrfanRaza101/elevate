import Link from "next/link"

export default function Menu() {

	return (
		<>

			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/">Home</Link>	
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/services">Services</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/portfolio">Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/blog">Blog</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/about">About</Link>
					</li>
					
				</ul>
			</div>
		</>
	)
}
