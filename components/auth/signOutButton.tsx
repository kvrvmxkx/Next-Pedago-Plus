"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/authClient";

export default function SignoutButton() {
	const router = useRouter();

	const handleSignOut = async () => {
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						router.push("/sign-in");
						router.refresh();
					},
				},
			});
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<button className="block px-4 py-2 hover:bg-gray-100 w-full text-start" onClick={handleSignOut}>
			Sign Out
		</button>
	);
}