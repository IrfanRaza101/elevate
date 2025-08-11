import Layout from "@/components/layout/Layout"
import BeforeAfter from "@/components/used-sections/BeforeAfter"
import Blog5 from "@/components/used-sections/Blog5"
import Contact3 from "@/components/used-sections/Contact3"
import Cta8 from "@/components/used-sections/Cta8"
import Faqs3 from "@/components/used-sections/Faqs3"
import Features5 from "@/components/used-sections/Features5"
import Hero1 from "@/components/used-sections/Hero1"
import HowItWork2 from "@/components/used-sections/HowItWork2"
import LogoCloud1 from "@/components/used-sections/LogoCloud1"
import MeetingScheduler from "@/components/used-sections/MeetingScheduler"
import Project1 from "@/components/used-sections/Project1"
import Services1 from "@/components/used-sections/Services1"
import Static3 from "@/components/used-sections/Static3"
import Team2 from "@/components/used-sections/Team2"
import Testimonial1 from "@/components/used-sections/Testimonial1"

export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />
				<Cta8 />
				<HowItWork2 />
				<LogoCloud1 />
				<BeforeAfter />
				<Services1 />
				<Project1 />
				<Testimonial1 />
				<Features5 />
				<Static3 />
				<Blog5 />
				<Team2 />
				<Faqs3 />
			</Layout>
		</>
	)
}