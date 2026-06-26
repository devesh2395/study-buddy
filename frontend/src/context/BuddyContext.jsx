import {
    createContext,
    useContext,
    useState,
} from "react";

import { askBuddy } from "../api/api";

const BuddyContext =
    createContext(null);

const INITIAL_MESSAGE = {
    role: "assistant",
    content:
        "Hey there! 👋 I'm Buddy. I'm here to help you throughout your study session.",
};

export function BuddyProvider({
    children,
}) {
    const [messages, setMessages] =
        useState([
            INITIAL_MESSAGE,
        ]);

    const [loading, setLoading] =
        useState(false);

    async function sendMessage(
        content
    ) {
        if (
            loading ||
            !content.trim()
        ) {
            return;
        }

        const userMessage = {
            role: "user",
            content,
        };

        const updatedMessages = [
            ...messages,
            userMessage,
        ];

        setMessages(
            updatedMessages
        );

        setLoading(true);

        try {
            const history =
                updatedMessages.map(
                    (message) => ({
                        role: message.role,
                        content:
                            message.content,
                    })
                );

            const result =
                await askBuddy(
                    content,
                    history
                );

            let answer =
                result.answer;

            if (
                typeof answer ===
                    "object" &&
                answer !== null
            ) {
                answer =
                    answer.answer;
            }

            setMessages(
                (previous) => [
                    ...previous,
                    {
                        role: "assistant",
                        content:
                            answer,
                    },
                ]
            );
        } catch (error) {
            console.error(
                error
            );

            setMessages(
                (previous) => [
                    ...previous,
                    {
                        role: "assistant",
                        content:
                            "Sorry, something went wrong while generating my response.",
                    },
                ]
            );
        } finally {
            setLoading(false);
        }
    }

    function clearChat() {
        setMessages([
            INITIAL_MESSAGE,
        ]);
    }

    return (
        <BuddyContext.Provider
            value={{
                messages,
                loading,
                sendMessage,
                clearChat,
            }}
        >
            {children}
        </BuddyContext.Provider>
    );
}

export function useBuddy() {
    return useContext(
        BuddyContext
    );
}