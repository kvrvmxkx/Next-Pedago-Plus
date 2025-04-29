// import { AppSidebar } from "@/components/chat/sidebar"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
//     <div className="app-container relative">
// <SidebarProvider>
//         <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//     </div>
<div>
    {children}
</div>
  )
}