import React from "react"
import classNames from "classnames";

const sections = [
	{
	  	logo: './images/USFB.png',
	  	name: 'Utkarsh Small Finance Bank',
		bg_card: 'bg-[#F8F0FF]',
	  	tick: './images/purple_tick.svg',
		bg_title: 'bg-[#EFDDFF]',
	  	title1: 'Highest interest Rate',
	  	title2: 'RBI Insured',
	  	interest: '9.10%',
		bg_button: 'bg-[#520B8D]',
	},
	{
		logo: './images/BF.png',
		name: 'Bajaj Finserv',
		bg_card: 'bg-[#EFF6FF]',
		tick: './images/blue_tick.svg',
		bg_title: 'bg-[#D7EAF8]',
		title1: 'Crisil AAA Rated',
		title2: 'No Video KYC required',
		interest: '8.80%',
		bg_button: 'bg-[#0072BB]',
	},
	{
		logo: './images/SF.png',
		name: 'Shriram Finance',
		bg_card: 'bg-[#F4F4F4]',
		tick: './images/black_tick.svg',
		bg_title: 'bg-[#DEDEDE]',
		title1: 'Crisil AAA Rated',
		title2: 'No Video KYC required',
		interest: '8.80%',
		bg_button: 'bg-[#010101]'
	},
	{
		logo: './images/MF.png',
		name: 'Mahindra Finance',
		bg_card: 'bg-[#FFEFEF]',
		tick: './images/red_tick.svg',
		bg_title: 'bg-[#FFD6D7]',
		title1: 'Crisil AAA Rated',
		title2: 'No Video KYC required',
		interest: '8.80%',
		bg_button: 'bg-[#FF0000]',
	},
];

const Booking = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-5 ">
			{sections.map((section, index) => (
				<div key={index} className="p-1  bg-white rounded-sm shadow-lg">
					<div className={classNames("p-5 flex flex-col justify-between gap-5 rounded-sm h-full", section.bg_card)}>
						<div className="flex flex-row items-center gap-4  ">
							<img src={section.logo} width={50} height={50} draggable="false" alt="bank_logo" />
							<span className="text-lg font-semibold">
								{section.name}
							</span>
						</div>
						<div className="flex flex-row gap-2">
							<div className={classNames("flex flex-row items-center gap-2 p-2 rounded-md", section.bg_title)}>
								<img src={section.tick} draggable="false" alt="purple_tick" />
								<div>
									{section.title1}
								</div>
							</div>
							<div className={classNames("flex flex-row items-center gap-2 p-2 rounded-md", section.bg_title)}>
								<img src={section.tick} draggable="false" alt="purple_tick" />
								<div>
									{section.title2}
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between">
							<div className="flex flex-col ">
								<div className="text-sm text-[#1A1B1E]/60">
									Interest Upto
								</div>
								<div className="text-[#1A1B1E] text-sm font-semibold">
									{section.interest} p.a
								</div>
							</div>
							<button className={classNames("py-1 font-medium rounded-md px-7 text-white", section.bg_button)}>
								Book Now
							</button>
						</div>

					</div>
				</div>
   			))}
			</div>
		</>
	)
}

export default Booking