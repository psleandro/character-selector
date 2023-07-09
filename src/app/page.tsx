'use client';
import { type ReactNode, useState } from 'react';

import { CharacterSelected } from '~/components/CharacterSelected';
import { CharactersList } from '~/components/CharactersList';
import type { Character } from '~/types';

const ContentWrapper = ({ children }: { children: ReactNode }) => (
  <span className="flex flex-1 self-stretch justify-center transition-all lg:self-auto xl:max-w-[40%]">
    {children}
  </span>
);

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-12 transition-all 2xl:-mt-[120px] lg:flex-row">
      <ContentWrapper>
        <CharactersList
          selectedCharacter={selectedCharacter}
          onSelect={setSelectedCharacter}
        />
      </ContentWrapper>
      <ContentWrapper>
        <CharacterSelected character={selectedCharacter} />
      </ContentWrapper>
    </div>
  );
}
