import { useCallback, useState } from "react";
import { ConversationItem } from "@/lib/types/conversation.type";
import Bubble from "./Bubble";

interface ConversationDetailProps {
  conversation: ConversationItem;
}

const Massage = ({ conversation }: ConversationDetailProps) => {
  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">No conversation selected</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-4">
      <div className="mb-4">
        <div className="text-xs text-gray-200 bg-[#2563eb] rounded-t-lg rounded-b-none px-3 pt-2 pb-1 w-fit font-semibold">
          {conversation.title}
        </div>
        <div className="text-[10px] text-gray-400 bg-[#2563eb] rounded-b-lg rounded-t-none px-3 pb-2 pt-0 w-fit">
          {conversation.timestamp}
        </div>
      </div>
      <Bubble message="Hello this is a test message" sender="user" />
      <Bubble message="Hello this is a test message" sender="assistant" />
      <Bubble message="Hello this is a test message" sender="user" />
      <Bubble message="Hello this is a test message" sender="assistant" />
      <Bubble message="Hello this is a test message" sender="user" />
      <Bubble message="Hello this is a test message" sender="assistant" />
      <Bubble message="Hello this is a test message" sender="user" />
      <Bubble message="Hello" sender="assistant" />
      <Bubble message="Hello" sender="user" />
      <Bubble message="Hello" sender="assistant" />
      <Bubble message="Hello" sender="user" />
      <Bubble message="Hello" sender="assistant" />
      <Bubble message="Hello" sender="user" />
      <Bubble message="Hello" sender="assistant" />
    </div>
  );
};

export default Massage;
