export interface IColumnData {
  id: number
  title: string
  itemIDs: number[]
}

export interface ITaskData {
  id: number
  columnID: number
  title: string
}
