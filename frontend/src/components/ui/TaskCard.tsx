import { Box } from '@mui/material'

interface ITaskCard {
  title: string
}

const TaskCard: React.FC<ITaskCard> = ({ title }) => {
  return (
    <Box
      sx={{
        borderRadius: '2px',
        background: '#ffffff',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Box>{title}</Box>
    </Box>
  )
}

export default TaskCard
