import React from 'react';

interface ForumCategoryProps {
  title: string;
}

export const ForumCategory: React.FC<ForumCategoryProps> = ({ title }) => {
  return (
    <header className="items-center border border-[color:var(--Neutral-500,#6B7280)] bg-[linear-gradient(90deg,#264EA4_8.58%,#4158ED_52.02%,#297FE8_73.74%,#2246BC_84.6%,#181862_95.46%)] flex w-full gap-2.5 text-base font-medium text-center leading-none px-8 py-2.5 border-solid max-md:max-w-full max-md:px-5">
      <h3 className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] self-stretch my-auto text-white">
        {title}
      </h3>
    </header>
  );
};
