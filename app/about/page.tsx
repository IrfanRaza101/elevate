import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contact3 from "@/components/sections/Contact3"
import Cta8 from "@/components/sections/Cta8"
import Features3 from "@/components/sections/Features3"
import Team4 from "@/components/sections/Team4"

export default function PageAbout3() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Cta8 />
				<Features3 />
				<Team4 />
				<Contact3 />
				<Blog1 />
			</Layout>
		</>
	)
}

