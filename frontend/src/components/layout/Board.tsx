import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { IColumnData } from '../../../types/types'
import TaskColumn from '../ui/TaskColumn'
import { DragDropContext } from 'react-beautiful-dnd'

interface IBoard {
  columnsData: IColumnData[]
}

const Board: React.FC<IBoard> = ({ columnsData }) => {
  const columnItems = columnsData.map((column, _, arr) => {
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

  const onDragEnd = () => {}

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
