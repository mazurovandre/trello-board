import { Box, Stack } from '@mui/material'

interface ITaskColumn {
  title: string
  children?: React.ReactNode
}

const TaskColumn: React.FC<ITaskColumn> = ({ title, children }) => {
  return (
    <Box
      sx={{
        background: '#E0E4EC',
        padding: '8px',
        borderRadius: '2px',
      }}
    >
      <Box
        sx={{
          marginBottom: '16px',
          fontWeight: 700,
        }}
      >
        {title}
      </Box>

      <Stack
        sx={{
          // backgroundColor: 'rgba(244, 244, 244, 1)',
          textAlign: 'center',
        }}
        spacing={1}
      >
        {children}
      </Stack>
    </Box>
  )
}

export default TaskColumn
