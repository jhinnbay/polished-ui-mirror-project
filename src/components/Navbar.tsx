import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="relative justify-between items-center border-r-[color:var(--Wave-Zero,#44DFE9)] border-b-[color:var(--Wave-Zero,#44DFE9)] border-l-[color:var(--Wave-Zero,#44DFE9)] bg-[linear-gradient(90deg,#264EA4_8.58%,#4158ED_52.02%,#297FE8_73.74%,#2246BC_84.6%,#181862_95.46%)] flex min-h-[100px] w-full gap-[40px_75px] flex-wrap ml-2.5 px-8 py-[21px] rounded-[0px_0px_24px_24px] border-r border-solid border-b border-l max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 min-h-[37px] items-center justify-between w-[405px] my-auto">
        <div className="self-stretch flex min-w-60 w-[342px] items-center gap-[40px_42px] my-auto pr-1">
          <h1 className="text-[32px] font-bold leading-none self-stretch my-auto text-white">
            Public.Square
          </h1>
          <div className="self-stretch flex items-center gap-[13px] my-auto">
            <button 
              className="justify-center items-center border shadow-[0px_1px_10.4px_0px_rgba(46,44,166,0.40)] bg-[#FF26DC] self-stretch flex min-h-[37px] gap-2.5 w-[37px] h-[37px] my-auto pl-[9px] pr-2 rounded-xl border-solid border-[#E3E3E3] hover:opacity-80 transition-opacity"
              aria-label="Social platform 1"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/79f4eb6f2229d4ed9f3b86057c7dbd478f415704?placeholderIfAbsent=true"
                className="aspect-[1.05] object-contain w-5 self-stretch gap-[-14px] my-auto"
                alt="Social icon"
              />
            </button>
            <button 
              className="justify-center items-center border shadow-[0px_1px_10.4px_0px_rgba(46,44,166,0.40)] bg-[#27BBFB] self-stretch flex min-h-[37px] gap-2.5 w-[37px] h-[37px] my-auto pl-[9px] pr-2 rounded-xl border-solid border-[#E3E3E3] hover:opacity-80 transition-opacity"
              aria-label="Social platform 2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/84087222e8f64b5216c479f2ce2eb50178422388?placeholderIfAbsent=true"
                className="aspect-[1.05] object-contain w-5 self-stretch my-auto"
                alt="Social icon"
              />
            </button>
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex gap-1.5 text-base text-gray-50 font-normal uppercase my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/91eb81b11f25078b619425fcf7c540c7b1d0c23b?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Language"
        />
        <span>ENGLISH ↗</span>
      </div>
      
      <div className="flex items-center gap-4 my-auto">
        <button aria-label="Menu option 1" className="hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/327e2a84387cf5c94eb58eba5f09db19e73db898?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            alt="Menu icon"
          />
        </button>
        <button aria-label="Menu option 2" className="hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/61d0de42dfa572aad03af79c59c93e99c749af33?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            alt="Menu icon"
          />
        </button>
        <button aria-label="Menu option 3" className="hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/5a4cc4f1992efe968fac8950779ccadf6bc6b17e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            alt="Menu icon"
          />
        </button>
        <button aria-label="Menu option 4" className="hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/da9670eb480a16f23f7898e0109b58dd84ff7784?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            alt="Menu icon"
          />
        </button>
        <button aria-label="Menu option 5" className="hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/a1a482f29560acb881f137a9d4e83585c18ec9a5?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0"
            alt="Menu icon"
          />
        </button>
      </div>
      
      <button className="flex flex-col self-stretch relative shadow-[0px_4px_0px_0px_#000] overflow-hidden aspect-[3.362] min-h-[58px] w-[195px] gap-2 text-lg text-white font-medium leading-none my-auto px-8 py-[17px] hover:transform hover:translate-y-1 hover:shadow-[0px_2px_0px_0px_#000] transition-all max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6f2aebc9bb734d979c603aa774a20c1a/c9aa25baa2bedfbf25d42ddf260cc9315599c83a?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Connect wallet background"
        />
        <span className="relative">Connect Wallet</span>
      </button>
    </nav>
  );
};
