import React from "react"

const sections = [
	{
	  	title: 'How FDs are taxed',
	  	body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		button: 'Read more...',
	},
	{
		title: 'How FDs are taxed',
		body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	      button: 'Read more...',
      	},
	{
		title: 'How FDs are taxed',
		body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	      button: 'Read more...',
      	},
];
const FAQ = () => {
	return (
		<>
			<div className="flex flex-col w-full justify-between gap-5">
				<div className="flex flex-row justify-between">
					<div>
						<span className="text-2xl font-bold">Get Answer</span> <br/> <span className="text-base font-bold">to all your questions</span>
					</div>
					<div className="flex flex-row gap-3">
						<img src="/images/left_arrow.svg" draggable="false" alt="left_arrow" />
						<img src="/images/right_arrow.svg" draggable="false" alt="right_arrow" />
					</div>

				</div>
				<div className="grid grid-cols-3 gap-10 w-full">
					{sections.map((section, index) => (
						<div key={index} className="p-5 bg-white   rounded-md shadow-lg flex flex-col gap-2">
							<div className="text-xl font-semibold w-1/2">
								{section.title}
							</div>
							<div className="w-2/3 text-sm">
								{section.body}
							</div>
							<div className="mt-2 underline underline-offset-1 text-sm text-[#3B39D9]">
								{section.button}
							</div>
						</div>
					))}
				</div>

			</div>
		</>
	)
}

export default FAQ