export default function BuddyHeader() {
    return (
        <div className="p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                    B
                </div>

                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-black"></span>
            </div>

            <div>
                <h2 className="font-semibold text-white">
                    Buddy
                </h2>

                <p className="text-xs text-gray-400">
                    Your AI Study Assistant
                </p>
            </div>
        </div>
    );
}