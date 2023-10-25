import { Box } from '@mui/material'

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        height: 0,
        borderBottomColor: 'gray',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        marginBottom: '15px',
      }}
    />
  )
}

export default Header
