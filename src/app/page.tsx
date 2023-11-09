import Card from '@/components/HomePage/Card';
import Image from 'next/image';
import Buttons from '@/components/SharedComponents/Buttons';

import { Lexend_Giga } from 'next/font/google';

const inter = Lexend_Giga({ subsets: ['latin'] });

const cardOneContent = (
	<p className="leading-6">
		<b>Cloud Asset Management Enhanced Launcher (CAMEL)</b>
		is aimed towards assisting Project Managers in running and managing
		their businesses efficiently. Through the use of this application,
		Business Owners will be able to make wiser and informed decisions
	</p>
);

const cardTwoContent = (
	// <div>
	<ul className="list-disc leading-6">
		<li>All-In-One Dashboard</li>
		<li>Document Management</li>
		<li>Time Tracking and Management</li>
		<li>Reporting and Visualization Tools</li>
		<li>Task Prioritization and Scheduling</li>
		<li>Business Overview Analytics</li>
		<li>Project’s Overviews</li>
	</ul>
	// {/* </div> */}
);

const cardThreeContent = (
	<div className="flex flex-col gap-y-2 justify-center items-center">
		<Image
			src={'/images/hashemtmp.jpeg'}
			width={100}
			height={100}
			alt="testimonial-image"
			className="rounded-full w-20 h-20"
		/>
		{/* <div className="testimonial-name"> */}
		<h5 className="testiominal-name font-bold text-primary-green-700">
			Hashem Jaber
		</h5>

		<div className="testimonial-text">
			<p>
				CAMEL has been instrumental in enhancing our product management
				workflow. The intuitive dashboards and analytical tools have
				enabled me to make data-driven decisions that have significantly
				enhanced my projects success rates
			</p>
		</div>
		{/* </div> */}
	</div>
);

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<section id="home-section">
				<div id="image-content">
					<div className={inter.className}>
						<h3 className="page-title">
							Cloud Asset Management Enhanced Launcher
						</h3>
					</div>
					<div className="flex flex-col md:flex-row gap-2 p-24 items-center md:items-stretch">
						<Card
							title="Our Product"
							content={cardOneContent}
						/>
						<Card
							title="Features"
							content={cardTwoContent}
						/>
						<Card
							title="Testimonials"
							content={cardThreeContent}
						/>
					</div>
				</div>
				{/* join us btn */}
				<div className="join-us flex justify-center mt-6">
					<Buttons
						variant="primary"
						size="large"
						content="Join Us"
					/>
				</div>
			</section>
		</main>
	);
}
