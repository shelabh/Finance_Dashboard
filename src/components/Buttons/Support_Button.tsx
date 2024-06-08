import React from 'react';
import { useState } from 'react';


const Support_Button = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className='relative '>
				<button onClick={toggle} className='font-medium'>
					Support
				</button>
				{open && (
					<div className='absolute mt-3 -ml-[10rem] bg-white   flex flex-col gap-5 divide-y-2 rounded-md shadow-xl justify-between w-60 '>
						<div className='flex flex-row items-center  gap-3 px-4 pt-2'>
							<img src="./images/call.svg" alt="call" draggable="false" />
							<div className=' text-[#3B39D9] text-sm flex flex-col gap-1 '>
								<div>
									+91 88777 37777
								</div>
								<div>
									+91 88777 56666
								</div>
							</div>
						</div>
						<div className='flex flex-row items-center gap-3 px-4 py-2 pb-2'>
							<img src="./images/mail.svg" alt="mail" draggable="false" />
							<div className=' text-[#3B39D9] text-sm flex flex-col gap-2 '>
								<div>
									support@silverbullet.in
								</div>
								<div>
									info@silverbullet.in
								</div>
							</div>
						</div>
						
					</div>
				)}
			</div>
		</>
	)
}

export default Support_Button;