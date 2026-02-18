import Layout from "@/components/layout/Layout"
import LogoCloud5 from "@/components/sections/LogoCloud5"
import Newsletter1 from "@/components/sections/Newsletter1"
import Services2 from "@/components/sections/Services2"
import Testimonial2 from "@/components/sections/Testimonial2"

export default function PageServices1() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Services2 />
				<LogoCloud5 />
				<Testimonial2 />
				<Newsletter1 />
			</Layout>
		</>
	)
}
