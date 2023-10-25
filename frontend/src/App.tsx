import Header from './components/layout/Header.tsx'
import Board from './components/layout/Board.tsx'
import { IBoardData } from './../types/types.ts'

const boardData: IBoardData[] = [
  {
    title: 'Запланировано',
    items: ['Item 1', 'Item 2'],
  },
  {
    title: 'В работе',
    items: ['Item 3'],
  },
  {
    title: 'На проверке',
    items: ['Item 4'],
  },
  {
    title: 'Выполнено',
    items: [],
  },
]

const App: React.FC = () => (
  <>
    <Header />
    <Board data={boardData} />
  </>
)

export default App
