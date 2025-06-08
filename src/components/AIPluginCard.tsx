import React from 'react';

interface AIPluginCardProps {
  title: string;
  iconSrc: string;
  onClick?: () => void;
}

export const AIPluginCard: React.FC<AIPluginCardProps> = ({ title, iconSrc, onClick }) => {
  return (
    <button 
      className="justify-center border-[color:var(--Yammy,#ABABF9)] bg-[rgba(255,255,255,0.11)] flex min-h-[100px] w-full max-w-[524px] flex-col mt-2.5 px-4 py-[15px] rounded-2xl border-2 border-solid hover:bg-[rgba(255,255,255,0.15)] transition-colors max-md:max-w-full"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <img
          src={iconSrc}
          className="aspect-[1] object-contain w-[70px] self-stretch shrink-0 my-auto"
          alt={`${title} icon`}
        />
        <span className="self-stretch my-auto text-white text-2xl font-[510]">
          {title}
        </span>
      </div>
    </button>
  );
};
