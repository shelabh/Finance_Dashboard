import React from "react"

const sections = [
	{
	  	title: 'Video KYC',
	  	action: 'Scheduled On',
		date:'28',
		subtitle:'Utkarsh SF Bank FD Plan 2',
		amount: '20,000',
		tennure: '2 Years',
		interest: '9.10%',
		button1: 'Complete Now',
		button2: 'Reschedule'
	},
	{
		title: 'Pending Payment',
		action: 'Pay By ',
	      	date:'30',
	      	subtitle:'Bajaj Finserv Corp FD 1',
	     	amount: '25,000',
	      	tennure: '18 Months',
	      	interest: '8.10%',
		button1: 'Pay Now',
		button2: 'Cancel Application'
      	},
      	{
		title: 'Upcoming FD Maturity',
		action: 'Renew By',
     		date:'30',
      		subtitle:'Shriram Finance Corp FD 1',
      		amount: '25,000',
      		tennure: '18 Months',
      		interest: '8.10%',
		button1: 'Renew Now',
		button2: 'Compare other FDs'
	},
];

const Calendar = () => {
	return (
		<>
			<div className="w-1/2   ">
				<div className="flex flex-col  h-full justify-between shadow-lg rounded-sm bg-white">
				{sections.map((section, index) => (
				<div key={index} className="p-5 flex flex-col justify-between gap-5   border-b  ">
					<div className="text-base font-bold">
						{section.title}
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex flex-row items-center gap-4  ">
							<div className="text-sm text-[#1A1B1E]/60" style={{ width: '120px' }}>
								{section.action}
							</div>
							<span className=" font-semibold">
								{section.subtitle}
							</span>
						</div>
						<div className="flex flex-row gap-10">
							<div className="flex flex-col items-center justify-between    ">
								<div className="p-3 text-4xl font-bold bg-[#1A1B1E]/5 w-full flex flex-col items-center">
									{section.date}
								</div>
								<div className="bg-[#CE5151] text-white px-3 py-1">
									Oct, 2023
								</div>
							</div>
							<div className="flex flex-row items-center gap-10 ">
								<div className="flex flex-col gap-2">
									<div className="text-sm text-[#1A1B1E]/60">
										Deposit Amt
									</div>
									<div className="text-sm text-[#1A1B1E] font-bold">
										Rs. {section.amount}
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-sm text-[#1A1B1E]/60">
										Tennure
									</div>
									<div className="text-sm text-[#1A1B1E] font-bold">
										{section.tennure}
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-sm text-[#1A1B1E]/60">
										Interest Rate
									</div>
									<div className="text-sm text-[#1A1B1E] font-bold">
										{section.interest}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-center gap-4 ">		
						<button className="py-3 font-semibold rounded-md px-7 w-full bg-[#3B39D9] text-white">
							{section.button1}
						</button>
						<button className="py-3 font-semibold rounded-md px-7 w-full text-[#3B39D9] border border-[#3B39D9] ">
							{section.button2}
						</button>
					</div>
				</div>
   				))}
				</div>
			</div>
		</>
	)
}

export default Calendar