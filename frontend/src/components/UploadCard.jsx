import { useState } from "react";
import { uploadDocument } from "../api/api";

export default function UploadCard() {
    const [fileName, setFileName] =
        useState("");

    const [uploading, setUploading] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    const [error, setError] =
        useState("");

    async function handleFileChange(
        event
    ) {
        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        setFileName(file.name);
        setSuccess("");
        setError("");

        try {
            setUploading(true);

            const result =
                await uploadDocument(
                    file
                );

            setSuccess(
                `Successfully indexed ${result.chunks} chunks`
            );
        } catch (err) {
            setError(
                err.message ||
                    "Upload failed"
            );
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="group relative w-full">
            <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
                <div className="relative p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Upload Study Material
                            </h3>

                            <p className="text-sm text-slate-400">
                                Upload a PDF to begin
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="relative rounded-xl border-2 border-dashed border-slate-700 bg-slate-900/50 p-12">
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={
                                    handleFileChange
                                }
                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            />

                            <div className="space-y-6 text-center">
                                <p className="text-white text-lg">
                                    {uploading
                                        ? "Uploading..."
                                        : "Select PDF"}
                                </p>

                                <p className="text-sm text-slate-400">
                                    One file at a time
                                </p>

                                {fileName && (
                                    <p className="text-cyan-400 text-sm break-all">
                                        {
                                            fileName
                                        }
                                    </p>
                                )}

                                {success && (
                                    <p className="text-green-400 text-sm">
                                        {
                                            success
                                        }
                                    </p>
                                )}

                                {error && (
                                    <p className="text-red-400 text-sm">
                                        {
                                            error
                                        }
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}