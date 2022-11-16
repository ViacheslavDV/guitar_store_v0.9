import Layout from "../app/components/layout/Layout";
import Home from "../app/components/screens/home/Home";

export default function HomePage(props: any) {
	return (
		<Layout>
			<Home {...props} />
		</Layout>
	);
}
