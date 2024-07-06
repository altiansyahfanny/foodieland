import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between px-20 border-b" style={{ height: 110 }}>
			<h1 className="font-lobster text-2xl">Foodieland.</h1>
			<ul className="flex items-center gap-14 font-medium">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/recipe">Recipes</Link>
				</li>
				<li>
					<Link to="/blogs">Blog</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
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
