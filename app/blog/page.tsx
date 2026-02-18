import Layout from "@/components/layout/Layout"
import Blog4 from "@/components/sections/Blog4"
import Blog5 from "@/components/sections/Blog5"
import Newsletter1 from "@/components/sections/Newsletter1"

export default function PageBlog() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Blog5 />
				<Blog4 />
				<Newsletter1 />
			</Layout>
		</>
	)
}
