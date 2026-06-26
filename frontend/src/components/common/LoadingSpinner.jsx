export default function LoadingSpinner() {
    return (
        <div className="text-center py-10">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>

            <p className="mt-4 text-gray-400">
                Thinking...
            </p>
        </div>
    );
}