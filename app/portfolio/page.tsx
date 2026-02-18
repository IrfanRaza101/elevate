import Layout from "@/components/layout/Layout"
import Contact3 from "@/components/sections/Contact3"
import Cta8 from "@/components/used-sections/Cta8"
import Project1 from "@/components/used-sections/Project1"
import Static3 from "@/components/used-sections/Static3"
import Team2 from "@/components/used-sections/Team2"
import Testimonial1 from "@/components/used-sections/Testimonial1"

export default function PagePortfolio() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Project1 />
				<Team2 />
				<Static3 />
				<Testimonial1 />
				<Cta8 />
				<Contact3 />
			</Layout>
		</>
	)
}
