import Layout from "@/components/layout/Layout"
import Contact3 from "@/components/sections/Contact3"
import Cta8 from "@/components/sections/Cta8"
import Hero2 from "@/components/sections/Hero2"
import Project1 from "@/components/sections/Project1"
import Project2 from "@/components/sections/Project2"
import Static3 from "@/components/sections/Static3"
import Team2 from "@/components/sections/Team2"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function PagePortfolio() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Hero2 />
				<Project1 />
				<Project2 />
				<Team2 />
				<Static3 />
				<Testimonial1 />
				<Contact3 />
				<Cta8 />
			</Layout>
		</>
	)
}
