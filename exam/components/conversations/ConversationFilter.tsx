import { cn } from "@/lib/utils";
import { Search, Grid, Star, Users, CheckCircle } from "lucide-react";

interface ConversationFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  hideResolved: boolean;
  setHideResolved: (hide: boolean) => void;
}

const ConversationFilter = ({
  filter,
  setFilter,
 
}: ConversationFilterProps) => {
  const FilterButton = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => (
    <button
      onClick={() => setFilter(value)}
      className={cn(
        "flex items-center h-8 px-3 text-xs font-medium",
        "transition-colors duration-200",
        filter === value
          ? "text-foreground bg-secondary"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      )}
    >
      <Icon className="h-3.5 w-3.5 mr-1.5" />
      {label}
    </button>
  );

  return (
    <div className="space-y-3">
      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search conversations..."
          className={cn(
            "w-full h-9 pl-8 pr-3 text-sm ",
            "bg-background text-foreground",
            "border border-input rounded",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "transition-colors duration-200"
          )}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex border-b border-border">
        <FilterButton value="all" label="ALL" icon={Grid} />
        <FilterButton value="new" label="NEW" icon={Star} />
        <FilterButton value="active" label="ACTIVE" icon={Users} />
        <FilterButton value="resolved" label="RESOLVED" icon={CheckCircle} />
      </div>
    </div>
  );
};

export default ConversationFilter; 