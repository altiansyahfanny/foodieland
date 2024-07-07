import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between px-20 border-b" style={{ height: 110 }}>
			<Link to="/">
				<h1 className="font-lobster text-2xl">Foodieland.</h1>
			</Link>
			<ul className="flex items-center gap-14 font-medium">
				<li className="">
					<Link to="/">Home</Link>
				</li>
				<li className="">
					<Link to="/recipe">Recipes</Link>
				</li>
				<li className="">
					<Link to="/blogs">Blog</Link>
				</li>
				<li className="">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="">
					<Link to="/">About us</Link>
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
