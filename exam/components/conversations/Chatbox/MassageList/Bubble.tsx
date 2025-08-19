import { FiUser } from "react-icons/fi";

export interface BubbleProps {
  message: string;
  sender: string;
  senderName?: string;
  timestamp?: string;
  
}

function Bubble({ message, sender, senderName, timestamp }: BubbleProps) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} mb-4 w-full`}>
      <div className={`relative max-w-[70%] flex flex-col ${sender === "user" ? "items-end" : "items-start"}`}>
        {/* Sender Name */}
        {senderName && (
          <span className="text-xs font-semibold mb-1 text-white/80">{senderName}</span>
        )}
        {/* Message Bubble */}
        <div
          className={`flex flex-col p-3 w-auto whitespace-pre-wrap break-words ${
            sender === "user"
              ? "bg-[#2563eb] text-white rounded-t-2xl rounded-bl-2xl shadow-sm hover:bg-[#2563eb]/90"
              : "bg-gray-100 text-gray-900 rounded-t-2xl rounded-br-2xl shadow-sm hover:bg-gray-200"
          }`}
        >
          {message}
        </div>
        {/* Timestamp */}
        {timestamp && (
          <div>
            <span className={`text-xs mt-1 ${sender === "user" ? "text-gray-200" : "text-gray-500"}`}>{timestamp}</span>
            <p className="text-xs opacity-75">2 days ago</p>
          </div>
        )}
      </div>
      {/* Avatar */}
      <div className="flex items-start ml-2 mr-2 mt-5">
        <FiUser className={`w-5 h-5 ${sender === "user" ? "text-[#2563eb]" : "text-gray-400"}`} />
      </div>
    </div>
  );
}

export default Bubble;
