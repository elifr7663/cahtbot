import {
  ConversationItem as ConvItem,
  ConversationItems,
} from "@/lib/types/conversation.type";
import { Box } from "@mui/material";
import { useCallback } from "react";
import ConversationItem from "./ConversationItem";

export interface IConversationList {
  list: ConversationItems;
  selectedId?: string;
  onSelect: (data: ConvItem) => void;
}

const ConversationList = ({
  list,
  onSelect,
  selectedId,
}: IConversationList) => {
  const emptyList = useCallback(() => {
    return (
      <div className="flex items-center justify-center h-20">
        <p className="text-gray-500">No conversations found</p>
      </div>
    );
  }, []);

  const conversationList = useCallback(() => {
    return (
      <div className="divide-y">
        {list.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isSelected={selectedId === conv.id}
            onClick={() => onSelect(conv)}
          />
        ))}
      </div>
    );
  }, [list, onSelect, selectedId]);

  return (
    <Box sx={{ overflow: "auto" }} className="flex-1">
      {list.length === 0 ? emptyList() : conversationList()}
    </Box>
  );
};

export default ConversationList;
