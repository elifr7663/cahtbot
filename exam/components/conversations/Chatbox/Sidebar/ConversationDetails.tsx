import { Copy, MessageSquare, User } from "lucide-react";
import { ConversationItem } from "@/lib/types/conversation.type";
import { Button } from "@/components/ui/button";

interface ConversationDeailProps {
  conversation: ConversationItem;
}

export function ConversationDeail({ conversation }: ConversationDeailProps) {
  return (
    <>
      <div className="mt-6">
        <h3 className="text-m font-semibold mb-2">Conversation Details</h3>
        <div className="">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">ID:</span>
            <div className="flex items-center ">
              <span className="text-xs font-mono text-gray-900">
                {conversation.id}
              </span>
              <button className="text-[#2563eb] hover:text-[#2563eb]/80">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="flex items-center ">
            <span className="text-xs text-gray-500">Category:</span>
            <span className="text-xs text-gray-900">
              {conversation.category || "No category"}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500">Started at:</span>
            <span className="text-xs text-gray-900">
              {conversation.timestamp}  
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium ">Status:</h3>
        <div className="bg-[#2563eb]/10 p-4 rounded-lg  border-0 h-10 flex items-center justify-center gap-2">
          <div className="flex items-center">
            <User className="w-4 h-4 text-[#2563eb]" />
            <div>
              <p className="text-sm font-medium text-[#2563eb]">
                Assigned to you
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium ">Action:</h3>
        <Button
          variant="outline"
          className="w-full bg-green-50 hover:bg-green-100 text-green-600 border-0 h-10 flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Resolve Conversation
        </Button>
      </div>
    </>
  );
}