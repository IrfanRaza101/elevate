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
						<Link className="nav-link fw-bold d-flex align-items-center" href="/about">About</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#services" onClick={(e) => {
							e.preventDefault();
							document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
						}}>Services</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#projects" onClick={(e) => {
							e.preventDefault();
							document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
						}}>Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#team" onClick={(e) => {
							e.preventDefault();
							document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
						}}>Team</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/blog">Blog</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
