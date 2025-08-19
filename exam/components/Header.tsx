
import ThemeToggle from "./theme/ThemeToggle";
import { MessageSquare } from "lucide-react";
import OnlineToggle from "./OnlineToggle";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean; 
}

export default function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onMenuClick();
  };

  return (
    <header className="h-16 border-b flex items-center justify-between px-4 bg-card">
      <div className="flex items-center gap-2">
        <button
          id="menu-toggle-button"
          className={`p-2 rounded-md transition-colors ${
            isSidebarOpen ? "bg-accent text-primary" : "hover:bg-accent/50"
          }`}
          onClick={handleMenuClick}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-1 text-primary font-medium">
          <MessageSquare className="h-5 w-5" />
          <span>NexbotLite</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <OnlineToggle agentId="current-user" />
        <ThemeToggle />
      </div>
    </header>
  );
}