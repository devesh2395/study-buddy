import { useState } from "react";

export default function PromptInput({
    placeholder,
    buttonText,
    onSubmit,
}) {
    const [text, setText] =
        useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!text.trim()) {
            return;
        }

        await onSubmit(text);

        setText("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4 mb-8"
        >
            <input
                value={text}
                onChange={(e) =>
                    setText(e.target.value)
                }
                placeholder={placeholder}
                className="flex-1 rounded-xl bg-gray-800 border border-gray-700 px-5 py-3 text-white"
            />

            <button
                className="bg-red-500 hover:bg-red-600 rounded-xl px-6"
            >
                {buttonText}
            </button>
        </form>
    );
}