import TypingDots from "./TypingDots";

export default function BuddyThinking() {
    return (
        <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shrink-0">
                B
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl px-4 py-3">
                <TypingDots />
            </div>
        </div>
    );
}