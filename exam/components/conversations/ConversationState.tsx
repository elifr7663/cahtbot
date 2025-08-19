import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const ConversationState = () => {
  const { activeConversations, newConversations, resolvedConversations } =
    useSelector((state: RootState) => state.conversations);

  const Badge = ({ count, label }: { count: number; label: string }) => (
    <div className={cn(
      "inline-flex items-center h-6 px-2",
      "bg-secondary/80 dark:bg-secondary/20 rounded-full",
      "text-xs text-foreground"
    )}>
      <span className="font-medium">{count}</span>
      <span className="ml-1">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 mb-3">
      <Badge count={newConversations} label="New" />
      <Badge count={activeConversations} label="Active" />
      <Badge count={resolvedConversations} label="Resolved" />
    </div>
  );
};

export default ConversationState;
