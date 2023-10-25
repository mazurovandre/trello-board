import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { IBoardData } from '../../../types/types'
import TaskCard from '../ui/TaskCard'

interface IBoard {
  data: IBoardData[]
}

const Board: React.FC<IBoard> = ({ data }) => {
  const columnItems = data.map((column, index, arr) => {
    const items = column.items.map((item) => <TaskCard title={item} />)
    return (
      <Grid key={column.title + index} xs={12 / arr.length}>
        <Box
          sx={{
            marginBottom: 1,
            textAlign: 'center',
          }}
        >
          {column.title}
        </Box>
        <Stack
          sx={{
            // backgroundColor: 'rgba(244, 244, 244, 1)',
            textAlign: 'center',
          }}
          spacing={3}
        >
          {items}
        </Stack>
      </Grid>
    )
  })
  return (
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
  )
}

export default Board
