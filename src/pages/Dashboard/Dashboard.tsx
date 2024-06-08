import React from 'react';
import Chart from './Sections/Chart.tsx'
import Booking from './Sections/Booking.tsx';
import FAQ from './Sections/FAQ.tsx';
import Calendar from './Sections/Calendar.tsx';



const Dashboard = () => {
	return (
		<>
			<div className='bg-[#F7F8FA] py-5 px-16 h-full w-full flex flex-col gap-4'>
				<div className='text-3xl font-medium'>
					Welcome, Johan Paul
				</div>
				<Chart />
				<div className='flex flex-row gap-5 '>
					<div className='flex flex-col justify-between  w-full'>
						<Booking />
						<FAQ />
					</div>
					<Calendar />
				</div>
				
			</div>
		</>
	)
}

export default Dashboard;