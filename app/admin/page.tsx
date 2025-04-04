import UsersTable from "@/components/admin/usersTable";
import { Box, Clock, MonitorSmartphone, UserCheck, Users } from "lucide-react";

export default async function AdminDashboard() {
	return (
		<main className="flex flex-col">
			<div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
				<h1 className="text-2xl font-bold text-primary my-5">Admin Dashboard</h1>

				<div className="grid grid-cols-3 gap-4">
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Sessions</p>
							<p className="text-2xl font-bold mt-3">32,842</p>
							<p className="text-muted-foreground text-sm">Sesssion actually online</p>
						</div>
						<div className="bg-cyan-50 h-fit p-3 rounded-lg">
							<MonitorSmartphone className="text-[#4CC9FE]" />
						</div>
					</div>
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Users</p>
							<p className="text-2xl font-bold mt-3">16,352</p>
							<p className="text-muted-foreground text-sm">Registered on platform</p>
						</div>
						<div className="bg-pink-50 h-fit p-3 rounded-lg">
							<Users className="text-pink-500" />
						</div>
					</div>
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Time on site</p>
							<p className="text-2xl font-bold mt-3">32m 12s</p>
							<p className="text-muted-foreground text-sm">Sesssion time</p>
						</div>
						<div className="bg-orange-50 h-fit p-3 rounded-lg">
							<Clock className="text-orange-500" />
						</div>
					</div>
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Courses</p>
							<p className="text-2xl font-bold mt-3">321</p>
							<p className="text-muted-foreground text-sm">Available for learning</p>
						</div>
						<div className="bg-indigo-50 h-fit p-3 rounded-lg">
							<Box className="text-indigo-500" />
						</div>
					</div>
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Subscribed</p>
							<p className="text-2xl font-bold mt-3">56%</p>
							<p className="text-muted-foreground text-sm">Subscribed on platform</p>
						</div>
						<div className="bg-blue-50 h-fit p-3 rounded-lg">
							<UserCheck className="text-blue-500" />
						</div>
					</div>
					<div className="flex justify-between p-5 border border-gray-300 rounded-xl">
						<div className="flex flex-col gap-1">
							<p className="text-primary font-semibold">Categories</p>
							<p className="text-2xl font-bold mt-3">23</p>
							<p className="text-muted-foreground text-sm">Learning themes</p>
						</div>
						<div className="bg-green-50 h-fit p-3 rounded-lg">
							<Clock className="text-green-500" />
						</div>
					</div>
				</div>

				<div className="p-5 border border-gray-300 rounded-xl">
					<p className="text-primary font-semibold pb-6">Users</p>
					<UsersTable />
				</div>
			</div>
		</main>
	);
}