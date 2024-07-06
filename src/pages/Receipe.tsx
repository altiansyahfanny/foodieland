import { Play, Printer, Upload } from 'lucide-react';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import { BgSearch } from '../assets';
import { ForkKnife, Timer } from '../assets/home';
import {
	Ads,
	DummyMenu10,
	DummyMenu11,
	DummyMenu12,
	DummyMenu5,
	DummyMenu7,
	DummyMenu8,
	DummyMenu9,
	Heart,
} from '../assets/menu';
import { Direction, DummyProfile, DummyReceipe } from '../assets/receipe';
import Reveal from '../components/reveal';

const Receipe = () => {
	return (
		<section className="px-20 py-10">
			<Reveal>
				<div className="flex items-center justify-between">
					<div>
						<p className="font-semibold text-[64px] tracking-[-4px] leading-tight mt-8">
							Health Japanese Fried Rice
						</p>
						<div className="mt-12 flex items-center divide-x">
							<div className="flex items-center gap-4 pr-12">
								<img
									src={DummyProfile}
									className="w-[50px] aspect-square rounded-full object-cover"
								/>
								<div>
									<p className="font-bold">John Smith</p>
									<p className="font-medium text-sm text-black text-opacity-60">15 July 2023</p>
								</div>
							</div>
							<div className="flex items-center gap-4 px-12">
								<img src={Timer} />
								<div>
									<p className="font-medium text-xs">PREP TIME</p>
									<p className="font-medium text-sm text-black text-opacity-60">15 Minutes</p>
								</div>
							</div>
							<div className="flex items-center gap-4 px-12">
								<img src={Timer} />
								<div>
									<p className="font-medium text-xs">COOK TIME</p>
									<p className="font-medium text-sm text-black text-opacity-60">15 Minutes</p>
								</div>
							</div>
							<div className="flex items-center gap-4 px-12">
								<img src={ForkKnife} />
								<p className="font-medium text-xs">Chicken</p>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-8">
						<div>
							<div className="bg-[#E7FAFE] w-20 aspect-square rounded-full grid place-content-center">
								<Printer />
							</div>
							<p className="mt-4 text-center tracking-widest font-medium text-xs">PRINT</p>
						</div>
						<div>
							<div className="bg-[#E7FAFE] w-20 aspect-square rounded-full grid place-content-center">
								<Upload />
							</div>
							<p className="mt-4 text-center tracking-widest font-medium text-xs">SHARE</p>
						</div>
					</div>
				</div>
			</Reveal>

			<Reveal>
				<div className="mt-14">
					<div className="grid grid-cols-3 gap-10">
						<div className="col-span-2 rounded-[30px] overflow-hidden relative">
							<img src={DummyReceipe} alt="" />
							<div className="absolute inset-0 bg-transparent grid place-content-center">
								<div className="bg-[#FFF] bg-opacity-80 w-28 aspect-square rounded-full grid place-content-center">
									<Play fill="#181945" size={32} />
								</div>
							</div>
						</div>
						<div className="bg-[#E7FAFE] rounded-[30px] p-8 flex flex-col justify-between">
							<div>
								<p className="font-semibold text-2xl">Nutrition Information</p>
								<div className="mt-2">
									<div className="flex justify-between items-center py-4 border-b border-black border-opacity-10">
										<span className="font-medium text-lg text-black text-opacity-60">Calories</span>
										<span className="font-medium text-lg text-black">219.9 kcal</span>
									</div>
									<div className="flex justify-between items-center py-4 border-b border-black border-opacity-10">
										<span className="font-medium text-lg text-black text-opacity-60">
											Total Fat
										</span>
										<span className="font-medium text-lg text-black">10.7 g</span>
									</div>
									<div className="flex justify-between items-center py-4 border-b border-black border-opacity-10">
										<span className="font-medium text-lg text-black text-opacity-60">Protein</span>
										<span className="font-medium text-lg text-black">7.9 g</span>
									</div>
									<div className="flex justify-between items-center py-4 border-b border-black border-opacity-10">
										<span className="font-medium text-lg text-black text-opacity-60">
											Carbohydrate
										</span>
										<span className="font-medium text-lg text-black">22.3 g</span>
									</div>
									<div className="flex justify-between items-center py-4 border-b border-black border-opacity-10">
										<span className="font-medium text-lg text-black text-opacity-60">
											Cholesterol
										</span>
										<span className="font-medium text-lg text-black">37.4 mg</span>
									</div>
								</div>
							</div>
							<div>
								<p className="text-center text-black text-opacity-60">
									adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Reveal>

			<Reveal>
				<div className="my-20">
					<p className="text-black text-opacity-60">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</div>
			</Reveal>

			<Reveal>
				<div className="grid grid-cols-3 gap-10">
					<div className="col-span-2">
						<p className="font-semibold text-4xl tracking-negative-4">Ingredients</p>
						<div className="mt-12">
							<p className="font-semibold text-2xl tracking-negative-4">For main dish</p>
							<div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCheckCircleFill size={24} />
									<p className="text-black text-opacity-60 line-through">
										Lorem ipsum dolor sit amet
									</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<p className="font-semibold text-2xl tracking-negative-4">For the sauce</p>
							<div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
								<div className="py-8 border-b flex items-center gap-6">
									<BsCircle size={24} color="#DBE2E5" />
									<p className="text-black">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className="font-semibold text-4xl tracking-negative-4">Other Recipe</p>

						<div className="mt-2">
							<div className="mt-6 flex items-center gap-6">
								<img src={DummyMenu5} className="w-[180px] rounded-[20px]" />
								<div>
									<p className="font-semibold text-xl text-black tracking-negative-4">
										Chicken Meatball with Creamy Chees...
									</p>
									<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
										By Andreas Paula
									</p>
								</div>
							</div>
							<div className="mt-6 flex items-center gap-6">
								<img src={DummyMenu8} className="w-[180px] rounded-[20px]" />
								<div>
									<p className="font-semibold text-xl text-black tracking-negative-4">
										The Creamiest Creamy Chicken an...
									</p>
									<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
										By Andreas Paula
									</p>
								</div>
							</div>
							<div className="mt-6 flex items-center gap-6">
								<img src={DummyMenu7} className="w-[180px] rounded-[20px]" />
								<div>
									<p className="font-semibold text-xl text-black tracking-negative-4">
										The Best Easy One Pot Chicken and Rice
									</p>
									<p className="mt-4 font-medium text-sm text-black text-opacity-60 tracking-negative-2">
										By Andreas Paula
									</p>
								</div>
							</div>
						</div>

						<div className="mt-20">
							<img src={Ads} alt="" />
						</div>
					</div>
				</div>
			</Reveal>

			<div className="mt-14">
				<div className="grid grid-cols-3 gap-10">
					<div className="col-span-2">
						<Reveal>
							<p className="font-semibold text-4xl tracking-negative-4">Directions</p>
						</Reveal>
						<div className="mt-8">
							<div className="flex items-start gap-6">
								<Reveal>
									<div className="w-6 aspect-square">
										<BsCircle size={24} color="#DBE2E5" />
									</div>
								</Reveal>
								<div>
									<Reveal>
										<p className="font-semibold tracking-negative-2 text-2xl leading-none">
											<span className="mr-2">1.</span>Lorem ipsum dolor sit amet
										</p>
										<p className="text-black text-opacity-60 tracking-negative-2 mt-6">
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
											adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
											dolore magnam aliquam quaerat voluptatem.
										</p>
									</Reveal>
									<Reveal>
										<div className="my-12">
											<img src={Direction} alt="" />
										</div>
									</Reveal>
									<Reveal>
										<p className="text-black text-opacity-60 tracking-negative-2 mt-6">
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
											adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
											dolore magnam aliquam quaerat voluptatem.
										</p>
									</Reveal>
								</div>
							</div>
							<Reveal>
								<div className="my-12 h-[1px] bg-black bg-opacity-10" />
							</Reveal>
							<div className="flex items-start gap-6">
								<Reveal>
									<div className="w-6 aspect-square">
										<BsCircle size={24} color="#DBE2E5" />
									</div>
								</Reveal>
								<Reveal>
									<div>
										<p className="font-semibold tracking-negative-2 text-2xl leading-none">
											<span className="mr-2">2.</span>Lorem ipsum dolor sit amet
										</p>
										<p className="text-black text-opacity-60 tracking-negative-2 mt-6">
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
											adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
											dolore magnam aliquam quaerat voluptatem.
										</p>
									</div>
								</Reveal>
							</div>
							<Reveal>
								<div className="my-12 h-[1px] bg-black bg-opacity-10" />
							</Reveal>
							<div className="flex items-start gap-6">
								<Reveal>
									<div className="w-6 aspect-square">
										<BsCircle size={24} color="#DBE2E5" />
									</div>
								</Reveal>
								<div>
									<Reveal>
										<p className="font-semibold tracking-negative-2 text-2xl leading-none">
											<span className="mr-2">3.</span>Lorem ipsum dolor sit amet
										</p>
									</Reveal>
									<Reveal>
										<p className="text-black text-opacity-60 tracking-negative-2 mt-6">
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
											adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
											dolore magnam aliquam quaerat voluptatem.
										</p>
									</Reveal>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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

			<div className="mt-40">
				<Reveal>
					<div className="">
						<p className="font-semibold text-5xl text-center">You may like these recipe too</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="mt-20 grid grid-cols-4 gap-10">
						<div className="rounded-2xl overflow-hidden">
							<div className="h-[200px] relative bg-red-200">
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
						<div className="rounded-2xl overflow-hidden">
							<div className="h-[200px] relative bg-red-200">
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
						<div className="rounded-2xl overflow-hidden">
							<div className="h-[200px] relative bg-red-200">
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
						<div className="rounded-2xl overflow-hidden">
							<div className="h-[200px] relative bg-red-200">
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
		</section>
	);
};

export default Receipe;
