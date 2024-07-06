import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import Reveal from './reveal';

const Footer = () => {
	return (
		<footer className="mt-20 py-20 px-20">
			<div className="flex justify-between">
				<Reveal>
					<div>
						<h1 className="font-lobster text-2xl">Foodieland.</h1>
						<p className="text-black text-opacity-60 mt-4">
							Lorem ipsum dolor sit amet, consectetuipisicing elit
						</p>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex justify-end">
						<ul className="flex items-center gap-14 font-medium">
							<li>Home</li>
							<li>Recipes</li>
							<li>Blog</li>
							<li>Contact</li>
							<li>About us</li>
						</ul>
					</div>
				</Reveal>
			</div>
			<Reveal>
				<hr className="my-12" />
			</Reveal>
			<Reveal>
				<div className="relative flex justify-center">
					<p className="text-black text-opacity-60">
						&copy; 2024 Flowbase. Powered by <span className="text-rose-500">Webflow</span>
					</p>
					<div className="flex items-center gap-7 text-xl absolute right-0">
						<a href="#">
							<RiFacebookFill />
						</a>
						<a href="#">
							<RiTwitterFill />
						</a>
						<a href="#">
							<RiInstagramLine />
						</a>
					</div>
				</div>
			</Reveal>
		</footer>
	);
};

export default Footer;
