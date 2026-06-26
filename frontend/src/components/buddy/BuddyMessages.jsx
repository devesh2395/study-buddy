import { useBuddy } from "../../context/BuddyContext";

import BuddyMessage from "./BuddyMessage";
import BuddyThinking from "./BuddyThinking";

export default function BuddyMessages() {
    const {
        messages,
        loading,
    } = useBuddy();

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(
                (message, index) => (
                    <BuddyMessage
                        key={index}
                        message={message}
                    />
                )
            )}

            {loading && (
                <BuddyThinking />
            )}
        </div>
    );
}