import {} from 'lucide-react';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { BgSearch } from '../assets';
import { DummyBlog7 } from '../assets/blog';
import { ForkKnife, Timer } from '../assets/home';
import { DummyMenu10, DummyMenu11, DummyMenu12, DummyMenu9, Heart } from '../assets/menu';
import { Direction, DummyProfile } from '../assets/receipe';
import Reveal from '../components/reveal';

const Blog = () => {
	return (
		<div className="px-20 py-10">
			<section className="">
				<Reveal>
					<p className="font-semibold text-[64px] tracking-[-4px] leading-tight mt-8 text-center">
						Full Guide to Becoming a Professional Chef
					</p>
				</Reveal>
				<Reveal>
					<div className="flex items-center justify-center mt-6 divide-x">
						<div className="flex items-center gap-3 pr-6">
							<img src={DummyProfile} alt="" className="w-10 aspect-square rounded-full" />
							<p className="font-bold tracking-negative-2">John Smith</p>
						</div>
						<div className="pl-6">
							<p className="font-medium text-black text-opacity-60">15 March 2022</p>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="mt-6 max-w-4xl mx-auto">
						<p className="text-black text-opacity-60 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
							Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In
							feugiat vestibulum velit vel pulvinar.
						</p>
					</div>
				</Reveal>
			</section>

			<section className="mt-16">
				<Reveal>
					<img src={DummyBlog7} alt="" className="rounded-[30px]" />
				</Reveal>
			</section>

			<section className="mt-20 px-[150px]">
				<div className="grid grid-cols-4 gap-10">
					<div className="col-span-3 px-10">
						<Reveal>
							<p className="font-semibold text-2xl tracking-negative-4">
								How did you start out in the food industry?
							</p>
							<p className="mt-6 text-black text-opacity-60">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
								Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In
								feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
								elementum ex ut suscipit.
							</p>
						</Reveal>
					</div>
					<Reveal>
						<div className="">
							<p className="font-semibold tracking-widest text-center">SHARE THIS ON:</p>
							<div className="mt-8 flex flex-col gap-y-12 items-center">
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
				</div>
				<div className="grid grid-cols-4 gap-10 mt-20">
					<div className="col-span-3 px-10">
						<Reveal>
							<p className="font-semibold text-2xl tracking-negative-4">
								What do you like most about your job?
							</p>
						</Reveal>
						<Reveal>
							<p className="mt-6 text-black text-opacity-60">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
								Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In
								feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
								elementum ex ut suscipit.
							</p>
						</Reveal>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-10 mt-20">
					<div className="col-span-3 px-10">
						<Reveal>
							<p className="font-semibold text-2xl tracking-negative-4">
								What do you like most about your job?
							</p>
						</Reveal>
						<Reveal>
							<div className="mt-8">
								<img src={Direction} alt="" />
							</div>
						</Reveal>
						<Reveal>
							<div className="mt-8">
								<p className="mt-6 text-black text-opacity-60">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices
									odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus.
									In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
									elementum ex ut suscipit.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
				<div className="grid grid-cols-4 mt-20">
					<div className="col-span-3 px-10">
						<Reveal>
							<p className="font-semibold text-2xl tracking-negative-4">
								What would your advice be to young people looking to get their foot in the door?
							</p>
						</Reveal>
						<Reveal>
							<p className="mt-6 text-black text-opacity-60">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
								Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In
								feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
								elementum ex ut suscipit.
							</p>
						</Reveal>
					</div>
				</div>
				<Reveal>
					<div className="grid grid-cols-4 mt-20">
						<div className="col-span-3 p-8 bg-gradient-to-r from-gray-100 to-[#FFF] border-y border-l">
							<p className="font-medium text-4xl italic tracking-negative-4">
								“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices
								odio.”
							</p>
						</div>
					</div>
				</Reveal>
				<div className="grid grid-cols-4 mt-20">
					<div className="col-span-3 px-10">
						<Reveal>
							<p className="font-semibold text-2xl tracking-negative-4">
								What is the biggest misconception that people have about being a professional chef?
							</p>
						</Reveal>
						<Reveal>
							<p className="mt-6 text-black text-opacity-60">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
								Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In
								feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
								elementum ex ut suscipit.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<div className="mt-40">
				<Reveal>
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
				</Reveal>
			</div>

			<div className="mt-40">
				<Reveal>
					<div className="">
						<p className="font-semibold text-5xl text-center">Check out the delicious recipe</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="mt-20 grid grid-cols-4 gap-10">
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu9} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">
								Mixed Tropical Fruit Salad with Superfood Boosts
							</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Healthy</span>
								</div>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu10} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">Big and Juicy Wagyu Beef Cheeseburger</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Western</span>
								</div>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu11} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">
								Healthy Japanese Fried Rice with Asparagus
							</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Healthy</span>
								</div>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu12} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">Cauliflower Walnut Vegetarian Taco Meat</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Eastern</span>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default Blog;
