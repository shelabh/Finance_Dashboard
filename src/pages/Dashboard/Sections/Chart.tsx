import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline, TimelineOptions, TimelineTimeAxisScaleType } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './index.css';
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
	const timelineRef = useRef<HTMLDivElement | null>(null);
	const timelineInstance = useRef<Timeline | null>(null);
      
	useEffect(() => {
	  if (timelineRef.current) {
	    const container = timelineRef.current;
	    const items = new DataSet([
	      { id: 1, content: 'Mahindra FD Plan 2', start: '2024-06-01', end: '2026-07-10', className: 'fd-item' },
	      { id: 2, content: 'Bajaj Finserv FD 1', start: '2024-05-01', end: '2025-04-15', className: 'fd-item' },
	      { id: 3, content: 'Shriram FD Plan 2', start: '2024-01-01', end: '2025-05-01', className: 'fd-item' },
	      { id: 4, content: 'Utkarsh FD 1', start: '2024-01-01', end: '2024-08-01', className: 'fd-item' },
	    ]);
      
	    const options: TimelineOptions = {
	      width: '100%',
	      height: '250px',
	      stack: true,
	      showMajorLabels: true,
	      showCurrentTime: false,
	      zoomMin: 1000 * 60 * 60 * 24 * 365 * 3, 
	      zoomMax: 1000 * 60 * 60 * 24 * 365 * 3, 
	      zoomable: false,
	      start: '2024-01-01',
	      end: '2026-12-31',
	      orientation: { axis: 'top' },
	      margin: { item: 10 },
	      format: {
		minorLabels: {
		  month: 'MMM', 
		  day: '',
		},
		majorLabels: {
		  year: 'YYYY',
		},
	      },
	      timeAxis: { scale: 'month' as TimelineTimeAxisScaleType, step: 1 }
	    };
      
	    timelineInstance.current = new Timeline(container, items, options);
	  }
      
	  return () => {
	    if (timelineInstance.current) {
	      timelineInstance.current.destroy();
	    }
	  };
	}, []);
      
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
					<div ref={timelineRef} ></div>

				</div>
				

			</div>
		</>
	)
}

export default Chart;