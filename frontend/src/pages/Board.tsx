import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import BoardColumn from '../components/BoardColumn.tsx';

const Board:React.FC = () => {
	return (
		<Box maxW={1280} m={'auto'} h={'100vh'}>
			<Grid templateColumns='repeat(4, 1fr)' gap={2} h={'100%'} >
				<GridItem w='100%' h='100%' bg='blue.500'>
					<BoardColumn />
				</GridItem>
				<GridItem w='100%' h='100%' bg='blue.500'>
					<BoardColumn />
				</GridItem>
				<GridItem w='100%' h='100%' bg='blue.500'>
					<BoardColumn />
				</GridItem>
				<GridItem w='100%' h='100%' bg='blue.500'>
					<BoardColumn />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Board;