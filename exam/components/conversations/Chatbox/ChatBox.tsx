import Sidebar from "@/components/conversations/Chatbox/Sidebar/Sidebar";
import { ConversationItem } from "@/lib/types/conversation.type";
import MessagesList from "./MassageList/List";
import InputBox from "./InputBox";
import { useCallback, useState } from "react";
import { FiInfo, FiArrowLeft } from "react-icons/fi";

export interface ChatBoxProps {
  conversation: ConversationItem;
}

function ChatBox({ conversation }: { conversation: ConversationItem }) {
  const [message, setMessage] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSendMessage = useCallback((value: string): void => {
    setMessage(value);
  }, []);

  return (
    <div className="flex w-full h-full relative">
      <div
        className={
          `flex flex-col h-full w-full transition-all duration-300 ` +
          ` ${showSidebar ? 'hidden md:flex' : 'flex'} `
        }
      >
        <button
          className="md:hidden absolute top-2 left-2 z-20 bg-white rounded-full shadow p-2 border border-gray-200"
          onClick={() => setShowSidebar(true)}
          aria-label="Show details"
        >
          <FiInfo className="w-5 h-5 text-[#2563eb]" />
        </button>
        <MessagesList conversation={conversation} />
        <InputBox handleSendMessage={handleSendMessage} />
      </div>
      <div
        className={
          `transition-all duration-300 bg-white z-30 ` +
          ` ${showSidebar ? 'fixed inset-0 flex md:static md:flex' : 'hidden md:flex'} ` +
          ` md:relative md:w-[350px] w-full h-full`
        }
        style={{ boxShadow: showSidebar ? '0 0 0 100vw rgba(0,0,0,0.2)' : undefined }}
      >
        <button
          className="md:hidden absolute top-2 right-2 z-40 bg-white rounded-full shadow p-2 border border-gray-200"
          onClick={() => setShowSidebar(false)}
          aria-label="Back to chat"
        >
          <FiArrowLeft className="w-5 h-5 text-[#2563eb]" />
        </button>
        <Sidebar conversation={conversation} />
      </div>
    </div>
  );
}

export default ChatBox;
