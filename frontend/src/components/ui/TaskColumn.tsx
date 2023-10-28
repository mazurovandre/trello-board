import { Box, Stack } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import { taskData } from '../../mock/data'

interface ITaskColumn {
  id: number
  title: string
  itemIDs: number[]
}

const TaskColumn: React.FC<ITaskColumn> = ({ title, id, itemIDs }) => {
  return (
    <Droppable droppableId={id.toString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
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
                textAlign: 'center',
              }}
              spacing={1}
            >
              {itemIDs.map((itemID, index) => (
                <TaskCard
                  key={Math.random()}
                  id={itemID}
                  index={index}
                  title={taskData[itemID.toString()].title}
                />
              ))}
            </Stack>
          </Box>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TaskColumn
