
'use client'
// The sidebar will have 3 sections - User, Menu  and Settings

// customization of shadcn ui   

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile"
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications"
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs"
        }
      ]
    }
  ]

  return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
    <div>
      <UserItem />
    </div>
    <div className="grow">
      <Command style={{ overflow: 'visible' }}>
        <CommandList style={{ overflow: 'visible' }}>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option: any, optionKey: number) =>
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                  {option.icon}
                  {option.text}
                </CommandItem>
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>

    </div>
    <div>Settings / Notifications</div>
  </div>;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////using shadcn ui command without customization/////////////////////////////////////////


// import UserItem from "./UserItem"
// import {
//   Calculator,
//   Calendar,
//   CreditCard,
//   Settings,
//   Smile,
//   User,
// } from "lucide-react"

// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command"



// const Sidebar = () => {
//   return (
//     <div className="flex flex-col gap-4  w-[300px] min-w-[300px] border-r min-h-screen p-4">
//         <div>
//             <UserItem />
//         </div>
//         <div className="grow">
            
  
//   <Command className="rounded-lg border shadow-md font-extrabold">
//       <CommandInput placeholder="Type a command or search..." />
//       <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup heading="General">
//           <CommandItem>
//             <Calendar className="mr-2 h-4 w-4" />
//             <span>Calendar</span>
//           </CommandItem>
//           <CommandItem>
//             <Smile className="mr-2 h-4 w-4" />
//             <span>Search Emoji</span>
//           </CommandItem>
//           <CommandItem>
//             <Calculator className="mr-2 h-4 w-4" />
//             <span>Calculator</span>
//           </CommandItem>
//         </CommandGroup>
//         <CommandSeparator />
//         <CommandGroup heading="Settings">
//           <CommandItem>
//             <User className="mr-2 h-4 w-4 " />
//             <span>Profile</span>
//             <CommandShortcut>⌘P</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <CreditCard className="mr-2 h-4 w-4" />
//             <span>Billing</span>
//             <CommandShortcut>⌘B</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <CommandShortcut>⌘S</CommandShortcut>
//           </CommandItem>
//         </CommandGroup>
//       </CommandList>
//     </Command>

            
//             </div>
//         <div>Settings</div>
        
//     </div>
//   )
// }

// export default Sidebar