export default function BuddyMessage({
    message,
}) {
    const isUser =
        message.role === "user";

    return (
        <div
            className={`flex ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >
            <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                    isUser
                        ? "bg-red-500 text-white"
                        : "bg-gray-900 border border-gray-800 text-gray-300"
                }`}
            >
                {message.content}
            </div>
        </div>
    );
}