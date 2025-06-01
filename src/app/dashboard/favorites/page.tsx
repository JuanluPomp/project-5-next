import PokemonsGrid from "@/features/pokemons/components/pokemons-grid";

export const metadata = {
  title: "Favorite Pokemons",
  description: "here are all pokemons",
};

export default async function PokemonsPage() {
  return (
    <PokemonsGrid/>
  );
}
