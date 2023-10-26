import { Box } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'

interface ITaskCard {
  id: number
  index: number
  title: string
}

const TaskCard: React.FC<ITaskCard> = ({ title, id, index }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className=""
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
