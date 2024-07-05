import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Receipe from './pages/Receipe';
import Navbar from './components/navbar';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipe" element={<Receipe />} />
			</Routes>
		</BrowserRouter>
	);
}
