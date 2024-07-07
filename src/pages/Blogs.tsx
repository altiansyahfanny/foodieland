import { Link } from 'react-router-dom';
import { BgSearch } from '../assets';
import {
	DummyBlog1,
	DummyBlog2,
	DummyBlog3,
	DummyBlog4,
	DummyBlog5,
	DummyBlog6,
} from '../assets/blog';
import { Ads, DummyMenu5, DummyMenu7, DummyMenu8 } from '../assets/menu';
import { DummyProfile } from '../assets/receipe';
import Reveal from '../components/reveal';

const Blogs = () => {
	return (
		<div className="px-20 py-10">
			<section className="">
				<Reveal>
					<p className="font-semibold text-[64px] tracking-[-4px] leading-tight mt-8 text-center">
						Blog & Article
					</p>
				</Reveal>
				<Reveal>
					<p className="text-black text-opacity-60 text-center mt-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore
					</p>
				</Reveal>
				<Reveal>
					<div className="mt-10">
						<div className="max-w-2xl mx-auto relative border rounded-3xl">
							<input
								type="text"
								placeholder="Search article, news or recipe..."
								className="w-full px-5 py-4 rounded-3xl focus:outline-none h-20"
							></input>
							<button className="bg-black px-12 py-5 absolute right-2.5 top-1/2 -translate-y-1/2 text-white font-semibold text-sm rounded-2xl">
								Search
							</button>
						</div>
					</div>
				</Reveal>
			</section>

			<section className="mt-20">
				<div className="grid grid-cols-3 gap-10">
					<div className="col-span-2 flex flex-col gap-y-8">
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog1} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog2} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog3} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog4} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog5} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
						<Reveal>
							<Link to={'/blogs/1'}>
								<div className="rounded-[20px] overflow-hidden flex items-center gap-10 hover:scale-105 transition-transform">
									<img src={DummyBlog6} alt="" />
									<div>
										<p className="tracking-negative-4 font-semibold text-2xl">
											Crochet Projects for Noodle Lovers
										</p>
										<p className="text-black text-opacity-60 mt-4">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enimd
										</p>
										<div className="mt-8">
											<div className="flex items-center divide-x">
												<div className="pr-6 flex items-center gap-4">
													<img
														src={DummyProfile}
														alt=""
														className="w-10 aspect-square rounded-full"
													/>
													<p className="font-bold tracking-negative-2">Wade Warren</p>
												</div>
												<div className="px-6">
													<p className="font-medium tracking-negative-2 text-black text-opacity-60">
														12 November 2021
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Reveal>
					</div>
					<div>
						<Reveal>
							<p className="font-semibold text-4xl tracking-negative-4">Tasty Recipes</p>
						</Reveal>
						<div className="mt-2">
							<Reveal>
								<div className="mt-6 flex items-center gap-6 hover:scale-105 transition-transform">
									<img src={DummyMenu5} className="w-[180px] rounded-[20px]" />
									<div>
										<p className="font-semibold text-xl text-black tracking-negative-4 line-clamp-3">
											Chicken Meatball with Creamy Chees...
										</p>
										<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
											By Andreas Paula
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="mt-6 flex items-center gap-6 hover:scale-105 transition-transform">
									<img src={DummyMenu8} className="w-[180px] rounded-[20px]" />
									<div>
										<p className="font-semibold text-xl text-black tracking-negative-4 line-clamp-3">
											The Creamiest Creamy Chicken an...
										</p>
										<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
											By Andreas Paula
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="mt-6 flex items-center gap-6 hover:scale-105 transition-transform">
									<img src={DummyMenu7} className="w-[180px] rounded-[20px]" />
									<div>
										<p className="font-semibold text-xl text-black tracking-negative-4 line-clamp-3">
											The Best Easy One Pot Chicken and Rice
										</p>
										<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
											By Andreas Paula
										</p>
									</div>
								</div>
							</Reveal>
						</div>

						<Reveal>
							<div className="mt-20">
								<img src={Ads} alt="" />
							</div>
						</Reveal>
					</div>
				</div>
				<Reveal>
					<div className="mt-20">
						<div className="flex items-center justify-center gap-x-4">
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-black border-black">
								<p className="font-bold text-lg text-white">1</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">2</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">3</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">4</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">5</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">...</p>
							</div>
							<div className="border rounded-2xl grid place-content-center w-16 aspect-square bg-white hover:bg-gray-100 cursor-pointer transition-all">
								<p className="font-bold text-lg text-black">)</p>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			<Reveal>
				<div className="mt-40">
					<div className="relative">
						<img src={BgSearch} alt="" />
						<div className="absolute inset-0 bg-transparent">
							<div className="flex items-center justify-center h-full">
								<div className="max-w-3xl">
									<h2 className="font-semibold text-5xl text-center">
										Deliciousness to your inbox
									</h2>
									<div>
										<p className="text-opacity-60 text-black max-w-xl text-center mt-4 mx-auto">
											Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqut enim ad minim
										</p>
									</div>

									<div className="mt-8">
										<div className="max-w-lg mx-auto relative">
											<input
												type="text"
												placeholder="Your email address..."
												className="w-full px-5 py-4 rounded-3xl focus:outline-none h-20"
											></input>
											<button className="bg-black px-12 py-5 absolute right-2.5 top-1/2 -translate-y-1/2 text-white font-semibold text-sm rounded-2xl">
												Subscribe
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default Blogs;
