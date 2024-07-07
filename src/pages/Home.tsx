import { BsInstagram } from 'react-icons/bs';
import { BgSearch, Chef, Post, Post1, Post2, Post3 } from '../assets';
import { Breakfast, Chocolate, Dessert, Lunch, Meat, Vegan } from '../assets/category';
import { Badge, ForkKnife, HeroImage2, Recipes, Timer } from '../assets/home';
import {
	Ads,
	DummyMenu,
	DummyMenu10,
	DummyMenu11,
	DummyMenu12,
	DummyMenu13,
	DummyMenu14,
	DummyMenu15,
	DummyMenu16,
	DummyMenu2,
	DummyMenu3,
	DummyMenu4,
	DummyMenu5,
	DummyMenu6,
	DummyMenu7,
	DummyMenu8,
	DummyMenu9,
	Heart,
} from '../assets/menu';
import Reveal from '../components/reveal';

export default function Home() {
	return (
		<div className="pb-[900pxx]">
			<section className="px-20 py-10">
				<div className="bg-[#E7FAFE] h-[640px] rounded-[48px] relative grid grid-cols-2 overflow-hidden">
					<Reveal>
						<div className="p-12">
							<button className="bg-white rounded-3xl px-5 py-3 flex items-center gap-3">
								<img src={Recipes} />
								<span className="font-semibold text-sm">Hot Recipes</span>
							</button>
							<p className="font-semibold text-[64px] tracking-[-4px] leading-tight mt-8">
								Spicy delicious chicken wings
							</p>
							<p className="mt-8 text-black text-opacity-50">
								Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqut enim ad minim
							</p>
							<div className="mt-8 flex items-center gap-4">
								<button className="bg-black bg-opacity-5 rounded-full px-4 py-2 flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm text-black text-opacity-60">
										30 Minutes
									</span>
								</button>
								<button className="bg-black bg-opacity-5 rounded-full px-4 py-2 flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm text-black text-opacity-60">Chicken</span>
								</button>
							</div>
						</div>
					</Reveal>
					<div className="">
						<img src={HeroImage2} className="object-cover h-full" />
					</div>
					<div className="absolute inset-x-0 flex justify-center top-8">
						<img src={Badge} />
					</div>
				</div>
			</section>

			<section className="mt-40 px-20">
				<Reveal>
					<div className="flex items-center justify-between">
						<h2 className="font-semibold text-5xl">Categories</h2>
						<button className="bg-[#E7FAFE] px-7 py-5 font-semibold rounded-2xl">
							View All Categories
						</button>
					</div>
				</Reveal>

				<Reveal>
					<div className="mt-36">
						<div className="flex items-center gap-10">
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#7082461a] to-[#70824600] hover:scale-110 transition-transform">
								<div className="absolute xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Breakfast} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Breakfast</p>
								</div>
							</div>
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#6CC63F1a] to-[#6CC63F00] hover:scale-110 transition-transform">
								<div className="absolute  xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Vegan} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Vegan</p>
								</div>
							</div>
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#CC261B1a] to-[#CC261B00] hover:scale-110 transition-transform">
								<div className="absolute  xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Meat} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Meat</p>
								</div>
							</div>
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#F09E001a] to-[#F09E0000] hover:scale-110 transition-transform">
								<div className="absolute  xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Dessert} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Dessert</p>
								</div>
							</div>
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#8d93641a] to-[#8d936400] hover:scale-110 transition-transform">
								<div className="absolute  xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Lunch} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Lunch</p>
								</div>
							</div>
							<div className="relative w-[180px] h-[152px] rounded-[30px] bg-gradient-to-t from-[#a24f4f1a] to-[#a24f4f00] hover:scale-110 transition-transform">
								<div className="absolute  xl:-right-4 xxl:right-0 -top-14 inset-x-0 flex justify-end">
									<img src={Chocolate} />
								</div>
								<div className="h-full flex flex-col justify-end pb-7 items-center font-semibold text-lg">
									<p>Chocolate</p>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			<section className="mt-40 px-20">
				<div className="text-center max-w-3xl mx-auto">
					<Reveal>
						<h2 className="font-semibold text-5xl">Simple and tasty recipes</h2>
					</Reveal>
					<Reveal>
						<p className="mt-8 text-black text-opacity-60">
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqut enim ad minim
						</p>
					</Reveal>
				</div>

				<div className="mt-20 grid grid-cols-3 gap-10">
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Big and Juicy Wagyu Beef Cheeseburger
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Snack</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu2} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Fresh Lime Roasted Salmon with Ginger Sauce
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Fish</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu3} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Strawberry Oatmeal Pancake with Honey Syrup
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Breakfast</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu4} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Fresh and Healthy Mixed Mayonnaise Salad
							</p>
							<div className="flex items-center gap-6 mt-8">
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
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu5} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Chicken Meatballs with Cream Cheese
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Meat</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal className="h-full">
						<div className="h-full">
							<img src={Ads} className="object-cover h-full w-full" alt="Advertisement" />
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu6} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								Fruity Pancake with Orange & Blueberry
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Sweet</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu7} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								The Best Easy One Pot Chicken and Rice
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Snack</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00] px-4 pb-4 rounded-3xl hover:scale-105 transition-transform">
							<div className="h-[250px] relative">
								<img src={Heart} className="absolute top-5 right-5" />
								<img src={DummyMenu8} className="object-contain rounded-3xl" />
							</div>
							<p className="font-semibold text-2xl mt-6 line-clamp-2">
								The Creamiest Creamy Chicken and Bacon Pasta
							</p>
							<div className="flex items-center gap-6 mt-8">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Noodles</span>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="mt-40 px-20">
				<Reveal>
					<div className="grid grid-cols-2">
						<div className="flex flex-col justify-center">
							<p className="font-semibold text-5xl">Everyone can be a chef in their own kitchen</p>
							<p className="text-black text-opacity-60 mt-8">
								Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqut enim ad minim
							</p>
							<div className="mt-16">
								<button className="bg-black text-white px-12 py-5 rounded-2xl font-semibold text-sm">
									Learn More
								</button>
							</div>
						</div>
						<div className="">
							<img src={Chef} alt="" />
						</div>
					</div>
				</Reveal>
			</section>

			<section className="mt-20 px-20 py-20 bg-gradient-to-t from-[#E7F9FD] to-[#E7F9FD00]">
				<div className="text-center max-w-3xl mx-auto">
					<Reveal>
						<h2 className="font-semibold text-5xl">Check out @foodieland on Instagram</h2>
					</Reveal>
					<Reveal>
						<p className="mt-8 text-black text-opacity-60">
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqut enim ad minim
						</p>
					</Reveal>
				</div>
				<Reveal>
					<div className="mt-20 grid grid-cols-4 gap-10">
						<img src={Post} alt="" />
						<img src={Post1} alt="" />
						<img src={Post2} alt="" />
						<img src={Post3} alt="" />
					</div>
				</Reveal>
				<Reveal>
					<div className="grid place-content-center mt-16">
						<a href="#" className="bg-black px-12 py-5 rounded-2xl flex items-center gap-4">
							<span className="text-white font-semibold text-sm">Visit Our Instagram</span>
							<BsInstagram className="text-white text-xl" />
						</a>
					</div>
				</Reveal>
			</section>

			<section className="mt-40 px-20">
				<Reveal>
					<div className="grid grid-cols-2">
						<div className="pr-20">
							<p className="font-semibold text-5xl">Try this delicious recipe to make your day</p>
						</div>
						<div className="grid place-content-center">
							<p className="text-black text-opacity-60">
								Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqut enim ad minim
							</p>
						</div>
					</div>
				</Reveal>

				<div className="mt-20 grid grid-cols-4 gap-10">
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
					<Reveal>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu13} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">
								Rainbow Chicken Salad with Almond Honey Mustard Dressing
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
					</Reveal>
					<Reveal>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu14} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">Barbeque Spicy Sandwiches with Chips</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Snack</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu15} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">Firecracker Vegan Lettuce Wraps - Spicy!</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Seafood</span>
								</div>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="rounded-2xl overflow-hidden hover:scale-110 transition-transform">
							<div className="h-[200px] relative">
								<img src={Heart} className="absolute top-3 right-3 w-12 aspect-square" />
								<img src={DummyMenu16} className="object-fill h-[200px]" />
							</div>
							<p className="font-semibold text-lg mt-4">Chicken Ramen Soup with Mushroom</p>
							<div className="flex items-center gap-6 mt-6">
								<div className="flex items-center gap-2.5">
									<img src={Timer} />
									<span className="font-semibold text-sm">30 Minutes</span>
								</div>
								<div className="flex items-center gap-2.5">
									<img src={ForkKnife} />
									<span className="font-semibold text-sm">Japanese</span>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="mt-40 px-20">
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
			</section>
		</div>
	);
}
