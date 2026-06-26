import Header from "../components/Header";

export default function MainLayout({
    children,
}) {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300">
            <Header />

            {children}
        </div>
    );
}