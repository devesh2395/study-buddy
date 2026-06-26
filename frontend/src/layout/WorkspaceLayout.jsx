import MainLayout from "./MainLayout";

import BuddyChat from "../components/buddy/BuddyChat";

export default function WorkspaceLayout({
    title,
    children,
}) {
    return (
        <MainLayout>
            <div className="flex h-[calc(100vh-72px)] bg-gray-900">

                <BuddyChat />

                <main className="flex-1 overflow-y-auto bg-gray-900 text-gray-300">

                    <div className="container mx-auto px-8 py-8">

                        <h1 className="text-4xl font-bold text-white mb-8">
                            {title}
                        </h1>

                        {children}

                    </div>

                </main>

            </div>
        </MainLayout>
    );
}