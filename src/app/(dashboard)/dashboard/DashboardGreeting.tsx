export default function DashboardGreeting({ username }: { username: string }) {
	return (
		<div id="dashboard-greeting">
			<h1>
				Welcome, <span className="username">{username}</span>
			</h1>
		</div>
	);
}
