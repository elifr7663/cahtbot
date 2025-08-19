import { Input } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Grid, Star, User, CheckCircle, Eye, EyeOff, Search } from "lucide-react";

interface IConversationFilter {
  filter: string;
  setFilter: (filter: string) => void;
  hideResolved: boolean;
  setHideResolved: (hide: boolean) => void;
}

const ConversationFilter = ({ 
  filter, 
  setFilter,
  hideResolved,
  setHideResolved
}: IConversationFilter) => {
  return (
   <div>
        <Input
          placeholder="Search conversations..."
          className="w-full pl-10 pr-3 py-2"
        />
    
      <div>
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          <Grid className="h-4 w-5" />
          All
        </Button>

        <Button
          variant={filter === "new" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("new")}
        >
          <Star className="h-4 w-5" />
          New
        </Button>

        <Button
          variant={filter === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("active")}
        >
          <User className="h-4 w-5" />
          Assigned
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setHideResolved(!hideResolved)}
        >
          {hideResolved ? (
            <EyeOff className="h-4 w-4 mr-2" />
          ) : (
            <Eye className="h-4 w-5ز" />
          )}
          {hideResolved ? "Show Resolved" : "Hide Resolved"}
        </Button>
      </div>
    </div>
  );
};

export default ConversationFilter;