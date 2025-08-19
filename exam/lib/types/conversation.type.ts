export type ConversationItem = {
  id: string;
  title: string;
  messages: number;
  timestamp: string;
  status: string;
  category?: string;
  assignedTo?: string;
};
export type ConversationItems = ConversationItem[];
