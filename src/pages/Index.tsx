import React from 'react';
import { Navbar } from '../components/Navbar';
import { AnnouncementBanner } from '../components/AnnouncementBanner';
import { QuickActions } from '../components/QuickActions';
import { InviteSection } from '../components/InviteSection';
import { ForumSection } from '../components/ForumSection';
import { ChatRoomSidebar } from '../components/ChatRoomSidebar';
import { CTASection } from '../components/CTASection';
const Index: React.FC = () => {
  return <main className="flex flex-col overflow-hidden relative min-h-screen bg-black pb-[23px] px-[62px] max-md:px-5">
      <img className="absolute h-full w-full object-cover inset-0 opacity-80" alt="Background" src="/lovable-uploads/0bee6bff-4e7a-44f7-83d4-1bb452d36d73.png" />
      
      <Navbar />
      
      <div className="bg-centergap-2.5 flex-wrap mt-[9px] p-2.5 my-0bg-centergap-2.5 flex-wrap mt-[9px] p-2.5 my-0">
        <div className="self-stretch flex min-w-60 flex-col items-stretch w-[852px] my-auto px-[18px] py-4 rounded-[17px] max-md:max-w-full">
          <nav className="flex w-full items-center gap-2.5 text-2xl font-[590] text-center leading-none max-md:max-w-full" aria-label="Breadcrumb">
            <div className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] self-stretch my-auto text-white">
              Public.Square &gt; Home
            </div>
          </nav>
          
          <AnnouncementBanner />
          
          <h1 className="text-center text-2xl font-[590] leading-none bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white mt-4">
            Community Home
          </h1>
          
          <QuickActions />
          
          <InviteSection />
          
          <div className="flex w-full gap-[40px_100px] text-base font-medium whitespace-nowrap text-center leading-none justify-between flex-wrap mt-4 max-md:max-w-full">
            <div className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white">
              Forum
            </div>
            <div className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white">
              Threads
            </div>
            <div className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white">
              Posts
            </div>
          </div>
          
          <ForumSection />
          
          <CTASection />
        </div>
        
        <ChatRoomSidebar />
      </div>
    </main>;
};
export default Index;