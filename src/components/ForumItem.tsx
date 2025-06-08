import React from 'react';

interface ForumItemProps {
  title: string;
  description: string;
  requirement: string;
  requirementType?: 'nft' | 'token' | 'auction';
}

export const ForumItem: React.FC<ForumItemProps> = ({ 
  title, 
  description, 
  requirement, 
  requirementType = 'token' 
}) => {
  const getRequirementTextColor = () => {
    switch (requirementType) {
      case 'nft':
        return 'text-gray-900';
      case 'auction':
        return 'text-gray-50';
      default:
        return 'text-gray-900';
    }
  };

  return (
    <article className="flex flex-col justify-between items-center overflow-hidden relative min-h-[88px] w-full px-8 py-3 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/52920f6cb20e3226d5ee5784d2db0feb5b9d0f86?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Forum item background"
      />
      <div className="relative self-stretch flex min-w-60 items-center gap-2.5 flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch w-[50px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/2bf59bd5282dc0ccca495ee7fa07ff8603d5349b?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[50px]"
            alt="Forum icon"
          />
        </div>
        <div className="self-stretch flex min-w-60 flex-col items-stretch text-sm font-medium justify-center w-[654px] my-auto max-md:max-w-full">
          <h4 className="text-center leading-none bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white">
            {title}
          </h4>
          <p className="text-gray-500 leading-[18px] mt-2.5 max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col relative justify-center items-center overflow-hidden self-stretch aspect-[4.125] min-h-10 w-[165px] text-[10px] font-black text-center my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/f173b1c323c5d2674acad93647f9b2796d467f8f?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Requirement badge background"
        />
        <div className={`relative self-stretch w-full gap-2.5 ${getRequirementTextColor()}`}>
          {requirement}
        </div>
      </div>
    </article>
  );
};
