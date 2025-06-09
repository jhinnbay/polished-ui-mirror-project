import React, { useState } from 'react';
import { AIPluginCard } from './AIPluginCard';
export const ChatRoomSidebar: React.FC = () => {
  const [roomName, setRoomName] = useState('');
  const handleCreateRoom = () => {
    if (roomName.trim()) {
      console.log('Creating room:', roomName);
      // Handle room creation logic here
      setRoomName('');
    }
  };
  const handleJoinRoom = () => {
    console.log('Joining existing room');
    // Handle join room logic here
  };
  return <aside className="items-stretch border-[color:var(--Wave-Zero,#44DFE9)] bg-[#1A2428] self-stretch flex min-w-60 flex-col w-[569px] my-auto pb-[38px] rounded-[17px] border-[5px] border-solid max-md:max-w-full">
      <div className="flex w-full flex-col items-center text-white max-md:max-w-full">
        <header className="items-center border-b-[color:var(--Yammy,#ABABF9)] flex min-h-[150px] max-w-full w-[569px] overflow-hidden text-center border-b border-solid mx-0 py-[12px] my-[3px] items-center px-[123px]">
          <div className="self-stretch min-w-60 w-[427px] my-auto">
            <h2 className="flex w-full max-w-[427px] items-center gap-3 text-4xl font-bold leading-none max-md:max-w-full">
              Create Chat Room
            </h2>
            <p className="flex w-full max-w-[427px] items-center gap-3 text-base font-[590] leading-[22px] mt-5 max-md:max-w-full">
              Your Chat Room is where you and your friends collaborate. Make yours and start talking
            </p>
          </div>
        </header>
        
        <div className="justify-center border-[color:var(--Yammy,#ABABF9)] bg-[rgba(255,255,255,0.11)] flex min-h-[100px] w-[524px] max-w-full flex-col text-2xl font-[510] mt-[18px] p-4 rounded-2xl border-2 border-solid">
          <button className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={handleCreateRoom}>
            <img src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/44249b1395a83d759e1614049fa435929d69dd4c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[68px] self-stretch shrink-0 my-auto" alt="Create room icon" />
            <span className="self-stretch my-auto">Create My Own</span>
          </button>
        </div>
        
        <div className="w-[524px] max-w-full text-2xl font-[510] mt-[18px]">
          <h3 className="text-neutral-200 text-xl font-bold mb-2.5">
            Add AI Plugins To Your Chatbox
          </h3>
          
          <AIPluginCard title="Welcome AI Agent" iconSrc="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/bdbfcafa08ae36bc887736bfa7deee6945813dbc?placeholderIfAbsent=true" onClick={() => console.log('Welcome AI Agent selected')} />
          
          <AIPluginCard title="Trivia AI Plugin" iconSrc="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/8cb73ddf3f6e760ccb0e7436e9e81936d9531af2?placeholderIfAbsent=true" onClick={() => console.log('Trivia AI Plugin selected')} />
          
          <AIPluginCard title="Faucet AI Agent Plugin" iconSrc="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/50642975c151b0f85f10cf07ba4b421979a2880b?placeholderIfAbsent=true" onClick={() => console.log('Faucet AI Agent Plugin selected')} />
        </div>
      </div>
      
      <footer className="self-center flex w-[474px] max-w-full flex-col items-center font-bold text-center mt-[182px] max-md:mt-10">
        <h3 className="flex w-[427px] max-w-full items-center gap-3 text-[26px] text-white leading-none mb-[31px]">
          Got an invite already?
        </h3>
        
        <button className="border-[color:var(--Yammy,#ABABF9)] bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] w-full overflow-hidden text-2xl text-black leading-none px-[70px] py-[29px] rounded-lg border-2 border-solid hover:opacity-80 transition-opacity max-md:px-5" onClick={handleJoinRoom}>
          Join a Chat Room
        </button>
      </footer>
    </aside>;
};