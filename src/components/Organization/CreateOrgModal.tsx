'use client';
// CSS imports
import './CreateOrgModal.css';
import { useState } from 'react';
import Image from 'next/image';
import { createSupbaseClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function CreateOrgModal({
	className,
	children,
	clickHandler,
}: {
	className?: string;
	children?: React.ReactNode;
	clickHandler?: () => void;
}) {
	const DEFAULT_IMAGE =
		'https://apqmqmysgnkmkyesdrnn.supabase.co/storage/v1/object/public/profile-avatars/wyncoservices.png';
	const router = useRouter();
	const [orgName, setOrgName] = useState('');
	const [image, setImage] = useState<any>([]);
	const [imageURL, setImageURL] = useState(DEFAULT_IMAGE);
	const [orgError, setOrgError] = useState('');

	const handleImageChange = (e: any) => {
		if (!e.target.files) {
			return;
		}

		setImage(e.target.files[0]);
		setImageURL(URL.createObjectURL(e.target.files[0]));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// upload image
		await createOrganization(e);
	};

	const createOrganization = async (e: any) => {
		// create org using user auth
		const supabase = await createSupbaseClient();

		// user info
		const {
			data: { user },
			error,
		} = await supabase.auth.getUser();

		let newURL = null;

		if (imageURL !== DEFAULT_IMAGE) {
			// create custom hash for image
			const hash = Math.random().toString(36).substring(2);
			// upload image to storage
			const { data, error } = await supabase.storage
				.from('profile-avatars')
				.upload(`public/${hash}`, image, {
					cacheControl: '3600',
				});

			if (error) {
				console.error(error);
			}

			// get image url
			const {
				data: { publicUrl },
			} = supabase.storage
				.from('profile-avatars')
				.getPublicUrl(data?.path as string);

			newURL = publicUrl;

			setImageURL(publicUrl);
		}

		// query to create new row entry
		const { data: entryData, error: entryError } = await supabase
			.from('organization')
			.insert([
				{
					name: orgName,
					created_by: user?.id,
					image: newURL || imageURL,
				},
			]);

		if (
			entryError?.message ===
				'duplicate key value violates unique constraint "organization_name_key"' ||
			entryError?.code === '23505'
		) {
			console.log('hello wrld');
			setOrgError('Org name is already taken. Choose a new one.');
			return;
		}
		if (clickHandler) {
			clickHandler();
			router.refresh();
		}
	};
	return (
		<>
			<div className="organization-modal">
				<div className="header-section">
					<span className="title">Create Organization</span>
				</div>

				<form className="form-section flex flex-col gap-2">
					<input
						className=""
						type="text"
						placeholder="Organization Name"
						onChange={e => setOrgName(e.target.value)}
					/>
					<span className="org-error text-xs text-primary-green-200 font-semibold">
						{orgError}
					</span>
					{/* <input
						type="text"
						placeholder="Organization Image"
					/> */}

					<Image
						src={imageURL}
						alt="Organization Image"
						width={50}
						height={50}
						className="self-center rounded-3xl w-full h-[7rem]"
						priority={true}
					/>

					<input
						type="file"
						name="image"
						onChange={handleImageChange}
					/>

					<div className="button-section">
						<button
							className="cancel-button"
							onClick={clickHandler}
						>
							Cancel
						</button>
						<button
							className="create-button"
							onClick={handleSubmit}
						>
							Create
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
