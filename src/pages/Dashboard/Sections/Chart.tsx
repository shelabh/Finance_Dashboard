import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 25, label: 'Bajaj Finserv',number: '25,000',  color: '#6C63FF' },
  { value: 20, label: 'Shriram Finance', number: '20,000', color: '#FA9D17' },
  { value: 15, label: 'Mahindra Finance',number: '15,000', color: '#B9C606' },
  { value: 40, label: 'Utkarsh Small Finance \n Bank',number: '40,000', color: '#59CBD3' },
];

const size = {
  width: 600,
  height: 250,
};
const Chart = () => {
	
	return (
		<>
			<div className="flex flex-row gap-5 justify-between ">
				<div className='flex flex-col gap-5 bg-white shadow-lg py-5 px-10 w-[50%]'>
					<div className="flex flex-row items-start justify-between">
						<div className='text-lg font-bold'>
							Your FD Portfolio
						</div>
						<div className='border border-black/25 rounded-md shadow-lg flex flex-row gap-3 p-3'>
							<span>
								Deposit Amt
							</span>
							<img src="./images/right_arrow.svg" className='rotate-90 w-5 ' />
						</div>
					</div>
					<div className='relative'>
					<PieChart
						series={[
							{
								arcLabel: (item) => `${item.number} (${item.value})`,
								arcLabelMinAngle: 45,
								data,
							},
      						]}
						sx={{
							[`& .${pieArcLabelClasses.root}`]: {
							fill: 'white',
							fontSize: 14,
							fontWeight: 'bold',
							},
     						 }}
      						{...size}
   					 />

					</div>
					
					
				</div>
				<div className='flex flex-col gap-5 bg-white shadow-lg py-5 px-10 w-full'>
					<div className='text-lg font-bold'>
						FD Maturity Timeline
					</div>
					<img src="./images/timeline.png" alt="timeline" draggable="false" />

				</div>

			</div>
		</>
	)
}

export default Chart;