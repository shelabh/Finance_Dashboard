import React from 'react';
import Hover_Button from '../../../components/Buttons/Hover_Button.tsx';
import Slide_Button from '../../../components/Buttons/Slide_Button.tsx';


const Pricing = () => {
	return (
		<>
			<div className='flex flex-col items-center'>
				<div>
					Limited Time Offer
				</div>
				<div>
					Save 50% for 12 months
				</div>
				<div>
					input
				</div>
				<div className='flex flex-row'> 
					<div className='border flex flex-col'>
						<div>
							<div>
								Premium
							</div>
							<div>
								Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.
							</div>
						</div>
						<div>
							<div>
								Starts at
							</div>
							<div>
								off price
							</div>
							<div>
								real price
							</div>
							<div>
								/month for 12 months*
							</div>
						</div>
						<div>
							<div>
								<img src="/" />
								<span>
									phone & priority Support
								</span>
							</div>			
						</div>
						<Hover_Button />
					</div>
				</div>
				<div>
					<div>
						*See Offer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more
					</div>
					<Slide_Button />
				</div>
			</div>
		</>
	)
}

export default Pricing;