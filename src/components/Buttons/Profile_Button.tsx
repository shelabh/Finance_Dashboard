import React from 'react';
import { useState } from 'react';


const Profile_Button = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className='relative '>
				<button onClick={toggle} className='border border-[#4A4ED4] flex flex-row items-center justify-center px-3 py-2 gap-2 rounded-full'>
					<img src="./images/profile.svg" draggable="false" alt="profile" />
					<img src="./images/profile_arrow.svg" draggable="false" alt="profile_arrow" />
				</button>
				{open && (
					<div className='absolute mt-3 -ml-[10rem] bg-white border flex flex-col gap-3 rounded-md shadow-xl justify-between w-60 p-4'>
						<div className='flex flex-row items-center gap-3'>
							<img src="./images/myProfile.svg" alt="my-profile" draggable="false" />
							<span className='text-xl text-black/70 font-medium'>
								My Profile
							</span>
						</div>
						<div className='flex flex-row items-center gap-3'>
							<img src="./images/myFD.svg" alt="my-fd" draggable="false" />
							<span className='text-xl text-black/70 font-medium'>
								My FDs
							</span>
						</div>
						<div className='flex flex-row items-center gap-3'>
							<img src="./images/myTransact.svg" alt="my-transact" draggable="false" />
							<span className='text-xl text-black/70 font-medium'>
								My Transactions
							</span>
						</div>
						<div className='flex flex-row items-center gap-3'>
							<img src="./images/logout.svg" alt="logout" draggable="false" />
							<span className='text-xl text-black/70 font-medium'>
								Logout
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Profile_Button;