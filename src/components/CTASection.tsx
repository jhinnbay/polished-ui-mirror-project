import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="flex flex-col shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] overflow-hidden relative min-h-[413px] w-full font-[590] mt-4 pl-[33px] pr-20 py-[31px] max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/6dd85f3dc84ed58ef6f59b307018eb0b861ae93b?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="CTA background"
      />
      <div className="relative">
        <h2 className="text-[46px] leading-[57px] tracking-[-0.92px] bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white max-md:max-w-full max-md:text-[40px] max-md:leading-[56px]">
          Get involved and shape <br />
          Public Square's future.
        </h2>
        
        <p className="text-2xl leading-[34px] tracking-[-0.48px] bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white mt-[23px] max-md:max-w-full">
          The DAO is a key component of the ecosystem and it is the
          consensus mechanism for defining the resolutions of AA's
          Organization. Participate in the DAO and make your voice heard.
        </p>
        
        <div className="flex w-[392px] max-w-full items-stretch gap-5 text-base tracking-[-0.32px] justify-between mt-[69px] max-md:mt-10">
          <button className="self-stretch bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] gap-2.5 text-[rgba(123,129,214,1)] px-6 py-4 rounded-xl hover:opacity-80 transition-opacity max-md:px-5">
            JOIN OUR FORUM
          </button>
          
          <button className="justify-center items-center border-[color:var(--Tooth-Gray,#ECECFF)] flex gap-2.5 px-6 py-4 rounded-xl border-2 border-solid hover:bg-white hover:bg-opacity-10 transition-colors max-md:px-5">
            <span className="bg-clip-text bg-[linear-gradient(180deg,#ECECFF_0%,#E1E1FE_100%)] text-white self-stretch my-auto">
              READ OUR DOCS
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
