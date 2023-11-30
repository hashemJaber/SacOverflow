'use client';

import InputComponent from '@/components/SharedComponents/InputComponent';
import React, { useState } from 'react';
import './page.css';

const Page = () => {
	const [formData, setFormData] = useState({
		projectTitle: '',
		projectBudget: '',
		projectDescription: '',
		projectStatus: '',
		projectLocation: '',
		projectStartDate: '',
		projectEndDate: '',
		projectAssignedMembers: '',
		projectCreator: '',
		projectCreatedDate: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleStatusChange = (status: string) => {
		setFormData({
			...formData,
			projectStatus: status,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const updatedFormData = {
			...formData,
			// createdBy: '', // Replace with the actual current user
			createdDate: new Date().toISOString(),
		};

		const jsonFormData = JSON.stringify(updatedFormData);

		// Submit to DB once API is ready
	};

	return (
		<div className="flex flex-col p-6 justify-center ">
			<h1 className="text-2xl sm:text-4xl font-semibold">
				Project Details
			</h1>
			<div>
				<form
					action=""
					method="post"
					className="w-full space-y-2"
					onSubmit={handleSubmit}
				>
					<InputComponent
						label="projectTitle"
						labelText="Title"
						type="text"
						id="projectTitle"
						placeholder="Project Title"
						value={formData.projectTitle}
						onChange={handleChange}
						required={true}
						className="w-full"
					/>
					<InputComponent
						label="projectBudget"
						labelText="Budget"
						type="number"
						id="projectBudget"
						placeholder="Project Budget"
						value={formData.projectBudget}
						onChange={handleChange}
						required={true}
					/>
					<InputComponent
						label="projectDescription"
						labelText="Description"
						type="text"
						id="projectDescription"
						placeholder="Project Description"
						value={formData.projectDescription}
						onChange={handleChange}
						required={true}
					/>
					<label className="text-lg font-semibold leading-6">
						Status
					</label>
					<div className="flex flex-row space-x-2 overflow-auto whitespace-nowrap">
						<button
							className={`px-4 py-1 border bg-yellow-500 rounded-3xl ${
								formData.projectStatus === 'In-Progress'
									? 'border-black border-2'
									: ''
							}`}
							onClick={() => handleStatusChange('In-Progress')}
						>
							In-Progress
						</button>
						<button
							className={`px-4 py-2 border bg-green-500 rounded-3xl ${
								formData.projectStatus === 'Completed'
									? 'border-black border-2'
									: ''
							}`}
							onClick={() => handleStatusChange('Completed')}
						>
							Completed
						</button>
						<button
							className={`px-4 py-2 border bg-blue-500 rounded-3xl ${
								formData.projectStatus === 'Needs-Approval'
									? 'border-black border-2'
									: ''
							}`}
							onClick={() => handleStatusChange('Needs-Approval')}
						>
							Needs-Approval
						</button>
						<button
							className={`px-4 py-2 border bg-red-500 rounded-3xl ${
								formData.projectStatus === 'Action Needed'
									? 'border-black border-2'
									: ''
							}`}
							onClick={() => handleStatusChange('Action Needed')}
						>
							Action Needed
						</button>
					</div>
					<InputComponent
						label="projectLocation"
						labelText="Location"
						type="text"
						id="projectLocation"
						placeholder="Location"
						value={formData.projectLocation}
						onChange={handleChange}
						required={true}
					/>
					<InputComponent
						label="projectStartDate"
						labelText="Start Date"
						type="date"
						id="projectStartDate"
						placeholder="Start Date"
						value={formData.projectStartDate}
						onChange={handleChange}
						required={true}
					/>
					<InputComponent
						label="projectEndDate"
						labelText="End Date"
						type="date"
						id="projectEndDate"
						placeholder="End Date"
						value={formData.projectEndDate}
						onChange={handleChange}
						required={true}
					/>
					<InputComponent
						label="projectAssignedMembers"
						labelText="Assigned Members"
						type="text"
						id="projectAssignedMembers"
						placeholder="Assigned Members"
						value={formData.projectAssignedMembers}
						onChange={handleChange}
						required={true}
						className="mb-4"
					/>
					<button
						className="w-full px-4 py-2 rounded-lg font-semibold text-lg bg-primary-green-400 hover:bg-primary-green-700"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Page;
