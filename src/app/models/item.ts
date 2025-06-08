export type ItemsResponse = Item[]

export interface Item {
  name: ItemName
  id: number
}

export interface ItemName {
  japanese?: string
  english: string
  chinese?: string
}
