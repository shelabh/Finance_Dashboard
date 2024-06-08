import React from 'react';
import Logo from '../../components/Logo.tsx'
import Profile_Button from '../../components/Buttons/Profile_Button.tsx';
import Support_Button from '../../components/Buttons/Support_Button.tsx';


const Navbar = () => {
	return (
		<>
			<div className='flex flex-row justify-between items-center py-5 px-16 border'>
				<div className=''>
					<Logo />
				</div>
				<div className='flex flex-row gap-10 font-medium items-center'>
					<div>
						Dashboard
					</div>
					<div>
						FAQs
					</div>
					<Support_Button />
					<Profile_Button />
				</div>	
			</div>
		</>
	)
}

export default Navbar;