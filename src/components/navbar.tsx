import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between px-20 border-b" style={{ height: 110 }}>
			<h1 className="font-lobster text-2xl">Foodieland.</h1>
			<ul className="flex items-center gap-14 font-medium">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/recipe">Recipes</a>
				</li>
				<li>
					<a href="/">Blog</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
				<li>
					<a href="/">About us</a>
				</li>
			</ul>
			<div className="flex items-center gap-7 text-xl">
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
		</nav>
	);
};

export default Navbar;
