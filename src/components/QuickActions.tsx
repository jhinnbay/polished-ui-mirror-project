import React from 'react';

export const QuickActions: React.FC = () => {
  return (
    <section 
      className="flex gap-3 text-base text-[#111] font-medium text-center leading-none flex-wrap mt-4 max-md:max-w-full"
      aria-label="Quick actions"
    >
      <button className="self-stretch border border-[color:var(--Yammy,#ABABF9)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] gap-2 overflow-hidden px-5 py-3.5 rounded-lg border-solid hover:opacity-80 transition-opacity">
        My Profile
      </button>
      
      <button className="justify-center items-center border border-[color:var(--Yammy,#ABABF9)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] flex gap-2 overflow-hidden px-5 py-3.5 rounded-lg border-solid hover:opacity-80 transition-opacity">
        <span className="self-stretch my-auto">Token Swap</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/d6f0e3261eb24c1fbe8e1e34a623230622518eac?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Swap icon"
        />
      </button>
      
      <button className="justify-center items-center border border-[color:var(--Yammy,#ABABF9)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] flex gap-2 overflow-hidden whitespace-nowrap px-5 py-3.5 rounded-lg border-solid hover:opacity-80 transition-opacity">
        <span className="self-stretch my-auto">Leaderboard</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/0f45dcf77fe5b7986e4ff4034a6424e9af0bf258?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Leaderboard icon"
        />
      </button>
      
      <button className="justify-center items-center border border-[color:var(--Yammy,#ABABF9)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] flex gap-2 overflow-hidden px-5 py-3.5 rounded-lg border-solid hover:opacity-80 transition-opacity">
        <span className="self-stretch my-auto">Chat Stats</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/3f40f42a1c660648d132fd5098f6a4fdfb7d2f95?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Stats icon"
        />
      </button>
    </section>
  );
};
