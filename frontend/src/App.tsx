import Header from './components/layout/Header.tsx'
import Board from './components/layout/Board.tsx'
import { IColumnData } from './../types/types.ts'

const columnsData: IColumnData[] = [
  {
    id: 1,
    title: 'Запланировано',
    itemIDs: [2, 3],
  },
  {
    id: 2,
    title: 'В работе',
    itemIDs: [1],
  },
  {
    id: 3,
    title: 'На проверке',
    itemIDs: [4],
  },
  {
    id: 4,
    title: 'Выполнено',
    itemIDs: [],
  },
]

const App: React.FC = () => (
  <>
    <Header />
    <Board columnsData={columnsData} />
  </>
)

export default App
