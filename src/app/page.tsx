import { CharactersList } from '~/components/CharactersList';

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-between transition-all md:-mt-[120px]">
      <CharactersList />
    </div>
  );
}
