import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Receipe from './pages/Receipe';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipe" element={<Receipe />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/:id" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
