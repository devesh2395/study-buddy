import BuddyHeader from "./BuddyHeader";
import BuddyMessages from "./BuddyMessages";
import BuddyInput from "./BuddyInput";

export default function BuddyChat() {
    return (
        <aside className="w-96 bg-black border-r border-gray-800 flex flex-col h-full shrink-0">
            <BuddyHeader />

            <BuddyMessages />

            <BuddyInput />
        </aside>
    );
}