import React from 'react';
import Head from './Sections/Head.tsx';
import Features from './Sections/Features.tsx';
import Pricing from './Sections/Pricing.tsx';
import Functions from './Sections/Functions.tsx';
import Integrations from './Sections/Integrations.tsx';
import Disclaimers from './Sections/Disclaimers.tsx';


const Landing = () => {
	return (
		<>
			<div className=''>
				<Head />
				<Features />
				<Pricing />
				<Functions />
				<Integrations />
				<Disclaimers />
			</div>
		</>
	)
}

export default Landing;