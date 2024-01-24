import CreateOrgModal from '@/components/Organization/CreateOrgModal';
import {
	CreateOrgCard,
	OrgDetailsCard,
} from '@/components/SharedComponents/DetailsCard/DetailsCard';
import { createSupbaseServerClientReadOnly } from '@/lib/supabase/server';

export default async function Page() {
	const supabase = await createSupbaseServerClientReadOnly();
	const { data, error } = await supabase.from('organization').select('*');

	if (error) {
		console.error(error);
	}

	return (
		<div className="w-full flex flex-col">
			<span className="text-primary-green-600 text-4xl font-bold p-2">
				Choose Organization
			</span>
			{/* <CreateOrgModal  /> */}
			<div className="flex-grow overflow-y-auto bg-white text-default-text">
				{data && data?.length > 0 ? (
					<>
						<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 m-4 gap-4">
							{/* NOTE: When fetching the organization associated with a user, if non center the create org card. */}
							<CreateOrgCard />
							{data.map(org => (
								<OrgDetailsCard
									key={org.id}
									{...org}
								/>
							))}
						</div>
					</>
				) : (
					// Center the object only
					<div className="grid grid-cols-1 m-4 gap-4 justify-items-center">
						<CreateOrgCard />
					</div>
				)}
			</div>
			{/* </div> */}
		</div>
	);
}
