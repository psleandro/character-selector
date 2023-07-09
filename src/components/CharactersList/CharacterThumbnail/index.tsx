import Image from 'next/image';

import { type Character } from '~/types';

interface CharacterThumbnailProps {
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterThumbnail = ({
  character,
  onSelect,
}: CharacterThumbnailProps) => (
  <li
    key={character.name}
    onMouseOver={() => onSelect(character)}
    className="flex h-[190px] w-[120px] shrink-0 flex-col items-stretch gap-4 transition-all hover:scale-105 hover:cursor-pointer hover:shadow-[0px_0px_24px_5px] hover:shadow-blue-500"
  >
    <div className="relative flex flex-1">
      <Image src={character.thumbnailUrl} alt={character.imageAlt} fill />
    </div>
  </li>
);

export { CharacterThumbnail };
