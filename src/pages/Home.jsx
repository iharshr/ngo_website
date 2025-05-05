import { Hero } from "../components/Hero";
import { Team } from "../components/Team";
import { Stats } from "../components/Stats";
import { Gallery } from "../components/Gallary";
import { Support } from "../components/Support";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
	return (
		<>
			<Hero />
			<Stats />
			<Gallery />
			<Team />
			<Testimonials />
			<Support />
		</>
	);
}
