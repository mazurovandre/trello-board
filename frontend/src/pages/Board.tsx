import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

const Board:React.FC = () => (
	<Container maxWidth="xl">
		<Grid container spacing={0}>
			<Grid xs={3}>
				1
			</Grid>
			<Grid xs={3}>
				2
			</Grid>
			<Grid xs={3}>
				3
			</Grid>
			<Grid xs={3}>
				4
			</Grid>
		</Grid>
	</Container>
);

export default Board;
