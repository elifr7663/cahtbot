import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, BookOpen, BarChart, Users } from 'lucide-react';
import { ConversationItem } from "@/lib/types/conversation.type";

interface SidebarProps {
  conversation: ConversationItem;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function Sidebar({ conversation }: SidebarProps) {
  const pathname = usePathname();
  
  const navItems: NavItem[] = [
    {
      label: 'Conversations',
      href: '/conversations',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      label: 'Knowledge Base',
      href: '/knowledge-base',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      label: 'Analytics',
      href: '/analytics',
      icon: <BarChart className="h-5 w-5" />
    },
    {
      label: 'Agents',
      href: '/agents',
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <aside className="w-[240px] border-r border-border bg-background">
      <nav className="py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.includes(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} 
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors
                    ${isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent/50 text-foreground'}
                  `}
                >
                  {item.icon}
                  {item.label}
                  {isActive && (
                    <span className="ml-auto">
                      <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}