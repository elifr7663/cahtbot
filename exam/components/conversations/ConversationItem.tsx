import { ConversationItem as IConversationItem } from "@/lib/types/conversation.type";
import { Avatar, Badge } from "@mui/material";
import { cn } from "@/lib/utils";

interface ConversationItemProps {
  conversation: IConversationItem;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationItem = ({ conversation, isSelected, onClick }: ConversationItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'active':
        return 'bg-green-500';
      case 'resolved':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={cn(
        "flex items-center p-4 border-b border-border cursor-pointer",
        isSelected 
          ? "bg-primary/5 dark:bg-primary/10" 
          : "hover:bg-secondary/50 dark:hover:bg-secondary/20"
      )}
      onClick={onClick}
    >
      <Avatar 
        sx={{ 
          width: 40, 
          height: 40, 
          marginRight: 1.5,
          bgcolor: 'rgb(219 234 254)',
          color: 'rgb(37 99 235)'
        }}
      >
        {conversation.title.charAt(0).toUpperCase()}
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium truncate text-foreground">
            {conversation.title}
          </h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
            {conversation.timestamp}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge 
            className={cn(
              "px-1.5 py-0.5 text-xs text-white rounded-full",
              getStatusColor(conversation.status)
            )}
          >
            {conversation.status}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {conversation.messages} messages
          </span>
          {conversation.category && (
            <span className="text-xs text-muted-foreground">
              · {conversation.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;