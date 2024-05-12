import React from 'react';
import Slide_Button from '../../../components/Buttons/Slide_Button.tsx';

const Integrations = () => {
	return (
		<>
			<div className='flex flex-col gap-5 items-center'>
				<div>
					Bring in more data, drive more growth with our integrations
				</div>
				<div className='grid grid-cols-3'>
					<div className='flex flex-row '>
						<img src='/' />
						<div className='flex flex-col gap-2'>
							<span>
								Canva
							</span>
							<span>
								Create compelling visuals for your marketing.
							</span>
						</div>
					</div>
					<div className='flex flex-row '>
						<img src='/' />
						<div className='flex flex-col gap-2'>
							<span>
								Canva
							</span>
							<span>
								Create compelling visuals for your marketing.
							</span>
						</div>
					</div>
					<div className='flex flex-row '>
						<img src='/' />
						<div className='flex flex-col gap-2'>
							<span>
								Canva
							</span>
							<span>
								Create compelling visuals for your marketing.
							</span>
						</div>
					</div>
				</div>
				<Slide_Button />
			</div>
		</>
	)
}

export default Integrations