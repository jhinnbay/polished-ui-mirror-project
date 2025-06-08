import React from 'react';
import { ForumCategory } from './ForumCategory';
import { ForumItem } from './ForumItem';

export const ForumSection: React.FC = () => {
  return (
    <section className="w-full mt-4 max-md:max-w-full" aria-label="Forum categories">
      <div className="space-y-0">
        <ForumCategory title="Digital Cat Headquarters" />
        
        <ForumItem
          title="Latest Proposals & Discussions"
          description="Discuss ongoing proposals and public goods, contribute to the ethos and conversation by sharing your valuable insight with the ecosystem."
          requirement="NFT Required"
          requirementType="nft"
        />
        
        <ForumItem
          title="Project Preparation"
          description="Best practices for organizing your proposals and pitches."
          requirement="500 $APECOIN Required"
          requirementType="token"
        />
        
        <ForumCategory title="General Discussion" />
        
        <ForumItem
          title="General Discussion"
          description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
          requirement="4,500 $SOUL Tokens"
          requirementType="token"
        />
        
        <ForumItem
          title="Artwork & NFTs"
          description="Discuss artwork and art galleries."
          requirement="Auctions"
          requirementType="auction"
        />
        
        <ForumItem
          title="Hobby & Skills"
          description="What are you creative or interested in?"
          requirement="4,500 $SOUL Tokens"
          requirementType="token"
        />
        
        <ForumItem
          title="Business & Jobs"
          description="Engage in discussions about current initiatives and future opportunities, share insights from previous events, coordinate community efforts, and brainstorm strategies."
          requirement="4,500 $SOUL Tokens"
          requirementType="token"
        />
      </div>
    </section>
  );
};
