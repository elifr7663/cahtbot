import { ConversationItem } from "@/lib/types/conversation.type";
import CustomerInfo from "./CustomerInfo";
import { ConversationDeail } from "./ConversationDetails";
import { Notes } from "./Notes";

export interface CustomerInfoSidebarProps {
  conversation: ConversationItem;
}

const CustomerInfoSidebar = ({ conversation }: CustomerInfoSidebarProps) => {
  return (
    <div className=" border-l border-gray-200 flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-6">
        <CustomerInfo />
        <div className="mt-6">
          <ConversationDeail conversation={conversation} />
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfoSidebar;
