export type PokedexResponse = Pokemon[]

export interface Pokemon {
  id: number
  name: PkmName
  type: string[]
  base: Stat
}

export interface PkmName {
  english: string
  japanese: string
  chinese: string
  french: string
}

export interface Stat {
  HP: number
  Attack: number
  Defense: number
  "Sp. Attack": number
  "Sp. Defense": number
  Speed: number
}
