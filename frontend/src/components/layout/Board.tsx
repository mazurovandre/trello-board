import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { IColumnData } from '../../../types/types'
import TaskColumn from '../ui/TaskColumn'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useState } from 'react'

interface IBoard {
  columnsData: IColumnData[]
}

const Board: React.FC<IBoard> = ({ columnsData }) => {
  const [columns, setColumns] = useState(columnsData)

  const columnItems = columns.map((column, _, arr) => {
    return (
      <Grid key={column.id} xs={12 / arr.length}>
        <TaskColumn
          id={column.id}
          title={column.title}
          itemIDs={column.itemIDs}
        />
      </Grid>
    )
  })

  const onDragStart = () => {}

  const onDragUpdate = () => {}

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    console.log(result)
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    let targetItemsID: number | null = null
    const deletedColumn: IColumnData = columns
      .filter((column) => column.id === +source.droppableId)
      .map((column) => {
        targetItemsID = column.itemIDs[source.index]
        return {
          ...column,
          itemIDs: [
            ...column.itemIDs.slice(0, source.index),
            ...column.itemIDs.slice(source.index + 1),
          ],
        }
      })[0]

    const updatedColumn: IColumnData = columns
      .filter((column) => column.id === +destination.droppableId)
      .map((column) => {
        return {
          ...column,
          itemIDs: [
            ...column.itemIDs.slice(0, destination.index),
            targetItemsID ?? 0,
            ...column.itemIDs.slice(destination.index),
          ],
        }
      })[0]

    setColumns(
      columns.map((column) => {
        if (column.id === +source.droppableId) {
          return deletedColumn
        }
        if (column.id === +destination.droppableId) {
          return updatedColumn
        }
        return column
      })
    )
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Box
        maxWidth="xl"
        sx={{
          padding: '0 24px',
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: '100%',
          }}
        >
          {columnItems}
        </Grid>
      </Box>
    </DragDropContext>
  )
}

export default Board
