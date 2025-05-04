import { Hero } from "../components/Hero";
import { Team } from "../components/Team";
import { Stats } from "../components/Stats";
import { Gallery } from "../components/Gallary";
import { LogoCloud } from "../components/LogoCloud";
import { Support } from "../components/Support";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
	return (
		<>
			<Hero />
			<Stats />
			<Gallery />
			<Team />
			<LogoCloud />
			<Testimonials />
			<Support />
		</>
	);
}
