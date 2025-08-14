'use client'
import Layout from '@/components/layout/Layout'
import Hero2 from '@/components/sections/Hero2'
import Project1 from '@/components/sections/Project1'
import Project2 from '@/components/sections/Project2'
import Team2 from '@/components/sections/Team2'
import Testimonial1 from '@/components/sections/Testimonial1'
import Static3 from '@/components/sections/Static3'
import Contact3 from '@/components/sections/Contact3'
import Cta8 from '@/components/sections/Cta8'

export default function Portfolio() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				{/* Portfolio Hero Section */}
				<Hero2 />
				
				{/* Main Projects Portfolio */}
				<Project1 />
				
				{/* Additional Projects */}
				<Project2 />
				
				{/* Team Behind Projects */}
				<Team2 />
				
				{/* Portfolio Statistics */}
				<Static3 />
				
				{/* Client Testimonials */}
				<Testimonial1 />
				
				{/* Contact for Projects */}
				<Contact3 />
				
				{/* Portfolio CTA */}
				<Cta8 />
			</Layout>
		</>
	)
}