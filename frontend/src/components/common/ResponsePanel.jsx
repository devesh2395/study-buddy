import LoadingSpinner from "./LoadingSpinner";

export default function ResponsePanel({
    loading,
    response,
}) {
    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-6 min-h-[350px]">
            {loading ? (
                <LoadingSpinner />
            ) : response ? (
                <>
                    <div className="whitespace-pre-wrap leading-8 text-gray-300">
                        {response.answer}
                    </div>

                    {response.sources &&
                        response.sources.length > 0 && (
                            <>
                                <hr className="my-8 border-gray-800" />

                                <h3 className="text-white text-lg font-semibold mb-4">
                                    Sources Used
                                </h3>

                                <div className="space-y-3">
                                    {response.sources.map(
                                        (source, index) => (
                                            <div
                                                key={index}
                                                className="rounded-lg border border-gray-800 bg-gray-900 p-4"
                                            >
                                                <div className="text-red-400 font-medium">
                                                    {source.document}
                                                </div>

                                                <div className="text-gray-400 text-sm mt-2 whitespace-pre-wrap">
                                                    {source.content}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
                </>
            ) : (
                <p className="text-gray-500 italic">
                    AI response will appear here...
                </p>
            )}
        </div>
    );
}