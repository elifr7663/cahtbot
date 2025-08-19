"use client";

import * as React from "react";
import ConversationFilter from "@/components/conversations/ConversationFilter";
import ConversationState from "@/components/conversations/ConversationState";
import ConversationList from "@/components/conversations/ConversationList";
import { ConversationItem } from "@/lib/types/conversation.type";
import list from "@/data/mock/conversations.json";
import ChatBox from "@/components/conversations/Chatbox/ChatBox";

// Map the list data to match the ConversationItem type
const conversations: ConversationItem[] = list.map((item) => ({
  id: item.id,
  title: item.title,
  messages: item.messages,
  timestamp: item.timestamp,
  status: item.status,
  category: item.category,
  assignedTo: item.assignedTo,
}));

export default function Page() {
  const [filter, setFilter] = React.useState<string>("all");
  const [hideResolved, setHideResolved] = React.useState<boolean>(false);
  const [selectedConversation, setSelectedConversation] =
    React.useState<ConversationItem | null>(null);

  const filteredList = conversations.filter((conv) => {
    if (hideResolved && conv.status === "resolved") return false;
    if (filter === "all") return true;
    return conv.status === filter;
  });

  const getNoConversation = () => {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-sm">
          Select a conversation to view details
        </p>
      </div>
    );
  };

  return (
    <div className="flex h-full max-h-screen">
      {/* Left Sidebar */}
      <div className="w-[360px] flex flex-col h-full border-r border-gray-200">
        {/* Header */}
        <div className="flex flex-col p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold mb-4">Conversations</h1>
          <ConversationState />
          <ConversationFilter
            filter={filter}
            setFilter={setFilter}
            hideResolved={hideResolved}
            setHideResolved={setHideResolved}
          />
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          <ConversationList
            list={filteredList}
            onSelect={setSelectedConversation}
            selectedId={selectedConversation?.id}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {selectedConversation ? (
          <ChatBox conversation={selectedConversation} />
        ) : (
          getNoConversation()
        )}
      </div>
    </div>
  );
}
