import { BgSearch } from '../assets';
import ContactSVG from '../assets/contact/Contact.svg';
import { ForkKnife, Timer } from '../assets/home';
import { DummyMenu10, DummyMenu11, DummyMenu12, DummyMenu9, Heart } from '../assets/menu';
import Reveal from '../components/reveal';

const Contact = () => {
	return (
		<div className="px-20 py-10">
			<section className="">
				<Reveal>
					<p className="font-semibold text-[64px] tracking-[-4px] leading-tight mt-8 text-center">
						Contact us
					</p>
				</Reveal>
			</section>

			<section className="mt-16">
				<div className="grid grid-cols-3 gap-10">
					<div className="col-span-1">
						<Reveal>
							<img src={ContactSVG} alt="" />
						</Reveal>
					</div>
					<div className="col-span-2">
						<div className="grid grid-cols-2 gap-10">
							<Reveal>
								<div>
									<label
										htmlFor="name"
										className="block tracking-widest uppercase text-black text-opacity-60 font-medium text-xs leading-5 mb-3"
									>
										name
									</label>
									<input
										type="text"
										id="name"
										placeholder="Enter your name..."
										className="border focus:outline-none py-[18px] px-5 rounded-2xl w-full text-sm tracking-negative-2 text-black text-opacity-60"
									/>
								</div>
							</Reveal>
							<Reveal>
								<div>
									<label
										htmlFor="email"
										className="block tracking-widest uppercase text-black text-opacity-60 font-medium text-xs leading-5 mb-3"
									>
										email address
									</label>
									<input
										type="text"
										id="email"
										placeholder="Your email address..."
										className="border focus:outline-none py-[18px] px-5 rounded-2xl w-full text-sm tracking-negative-2 text-black text-opacity-60"
									/>
								</div>
							</Reveal>
							<Reveal>
								<div>
									<label
										htmlFor="subject"
										className="block tracking-widest uppercase text-black text-opacity-60 font-medium text-xs leading-5 mb-3"
									>
										subject
									</label>
									<input
										type="text"
										id="subject"
										placeholder="Enter subject..."
										className="border focus:outline-none py-[18px] px-5 rounded-2xl w-full text-sm tracking-negative-2 text-black text-opacity-60"
									/>
								</div>
							</Reveal>
							<Reveal>
								<div>
									<label
										htmlFor="enquiryType"
										className="block tracking-widest uppercase text-black text-opacity-60 font-medium text-xs leading-5 mb-3"
									>
										enquiry type
									</label>
									<input
										type="text"
										id="enquiryType"
										placeholder="Enter enquiry type..."
										className="border focus:outline-none py-[18px] px-5 rounded-2xl w-full text-sm tracking-negative-2 text-black text-opacity-60"
									/>
								</div>
							</Reveal>
						</div>
						<div className="mt-10">
							<Reveal>
								<label
									htmlFor="email"
									className="block tracking-widest uppercase text-black text-opacity-60 font-medium text-xs leading-5 mb-3"
								>
									messages
								</label>
								<textarea
									rows={7}
									id="messages"
									placeholder="Enter enquiry type..."
									className="border focus:outline-none py-[18px] px-5 rounded-2xl w-full text-sm tracking-negative-2 text-black text-opacity-60"
								/>
							</Reveal>
						</div>
						<div className="mt-10">
							<Reveal>
								<button className="focus:outline-none bg-black text-white font-semibold tracking-negative-2 py-5 px-16 rounded-2xl">
									Submit
								</button>
							</Reveal>
						</div>
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
				<div className="">
					<Reveal>
						<p className="font-semibold text-5xl text-center">Check out the delicious recipe</p>
					</Reveal>
				</div>

				<div className="mt-20 grid grid-cols-4 gap-10">
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
					<Reveal>
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
					</Reveal>
				</div>
			</div>
		</div>
	);
};

export default Contact;
