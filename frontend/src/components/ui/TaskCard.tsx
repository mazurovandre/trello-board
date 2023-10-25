import { Box } from '@mui/material'

interface ITaskCard {
  title: string
}

const TaskCard: React.FC<ITaskCard> = ({ title }) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        background: '#dddddd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>{title}</Box>
    </Box>
  )
}

export default TaskCard
