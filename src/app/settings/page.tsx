import SettingsNav from '@/components/ProfileSettings/SettingsComponent/Nav/SettingsNav';
import AccountManagementComponent from '@/components/ProfileSettings/SettingsComponent/AccountManagementComponent/AccountManagement';
import './page.css';

const page = () => {
	return (
		<section>
			<div className="blankBackground w-full h-screen bg-slate-50">
				{/* <img src={camel} className="camel" alt="" /> this is causing my shit to crash*/}
				<div className="nav">
					<SettingsNav
						src="/images/ArrowLeft.jpg"
						src2="/images/SettingsCogIcon.png"
						title="Settings"
						href="/profile"
					/>
				</div>
				<br></br>
				<div className="content">
					<AccountManagementComponent
						src="/images/AccountSettingsIcon.ico"
						title="Account"
						src2="/images/ArrowRight.png"
						href="/profile/settings/account"
					/>
					<br></br>
					<AccountManagementComponent
						src="/images/Bell.jpg"
						title="Notifications"
						src2="/images/ArrowRight.png"
						href="/profile/settings/notifications"
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
