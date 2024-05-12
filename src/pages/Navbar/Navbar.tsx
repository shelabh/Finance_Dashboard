import React from 'react';
import Logo from '../../components/Logo.tsx'
import Hover_Button from '../../components/Buttons/Hover_Button.tsx';


const Navbar = () => {
	return (
		<>
			<div className='flex flex-row justify-between p-10'>
				<div className='flex flex-row gap-10'>
					<Logo />
					<div>
						Solutions and Services
					</div>
					<div>
						Resources
					</div>
					<div>
						Switch to Mailchimp
					</div>
					<div>
						Pricing
					</div>
				</div>
				<div className='flex flex-row gap-10'>
					<img src="/" alt="" />
					<div>
						<img src="/" alt="" />
						<span>
							EN
						</span>
						<img src="/" alt="" />
					</div>
					<div>
						Sales:+1(800) 315-5939
					</div>
					<Hover_Button />
					<Hover_Button />
				</div>	
			</div>
		</>
	)
}

export default Navbar;