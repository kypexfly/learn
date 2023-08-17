import useCharacters from "./useCharacters"

type Character = {
  name: string
  gender: string
  image: string
}

export function CharacterList() {
  const { data, loading, error } = useCharacters()

  return (
    <div>
      {loading && "Loading..."}
      {error && <p> error </p>}

      {data && (
        <div className="flex flex-wrap items-center gap-3">
          {data.characters.results.map((character: Character) => (
            <div className="border p-3" key={character.name}>
              <img src={character.image} className="card-img-top h-24 w-24" alt={character.name} />
              <div className="info">
                <h2 className="h3"> {character.name}</h2>
                <p> Gender: {character.gender}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
