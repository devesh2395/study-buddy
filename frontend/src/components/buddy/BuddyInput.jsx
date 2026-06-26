import { useState } from "react";

import { useBuddy } from "../../context/BuddyContext";

export default function BuddyInput() {
    const [text, setText] =
        useState("");

    const {
        sendMessage,
        loading,
    } = useBuddy();

    async function handleSubmit(
        event
    ) {
        event.preventDefault();

        if (
            loading ||
            !text.trim()
        ) {
            return;
        }

        const message = text;

        setText("");

        await sendMessage(
            message
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border-t border-gray-800 p-4 flex gap-2"
        >
            <input
                type="text"
                value={text}
                onChange={(event) =>
                    setText(
                        event.target.value
                    )
                }
                disabled={loading}
                placeholder={
                    loading
                        ? "Buddy is thinking..."
                        : "Ask Buddy..."
                }
                className="flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 disabled:opacity-60"
            />

            <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-red-500 px-5 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading
                    ? "..."
                    : "Send"}
            </button>
        </form>
    );
}