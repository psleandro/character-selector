import { ComponentProps } from 'react';

import { charactersList } from '~/consts/characters';
import { Character } from '~/types';

import { CharacterThumbnail } from './CharacterThumbnail';

interface CharactersListProps {
  selectedCharacter?: Character;
  onSelect: ComponentProps<typeof CharacterThumbnail>['onSelect'];
}

const CharactersList = ({
  selectedCharacter,
  onSelect,
}: CharactersListProps) => (
  <div className="flex flex-1 flex-col items-stretch gap-y-8">
    <h1 className="h2 border-b-2 border-blue-500 text-center text-xl font-bold uppercase tracking-widest">
      Selecione um Personagem
    </h1>
    <ul className="flex flex-wrap justify-center gap-8">
      {charactersList.map((character) => (
        <CharacterThumbnail
          key={character.name}
          isSelected={selectedCharacter?.name === character.name}
          character={character}
          onSelect={onSelect}
        />
      ))}
    </ul>
  </div>
);

export { CharactersList };
