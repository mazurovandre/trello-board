import Header from './components/layout/Header.tsx'
import Board from './components/layout/Board.tsx'
import { columnsData } from './mock/data.ts'

const App: React.FC = () => (
  <>
    <Header />
    <Board columnsData={columnsData} />
  </>
)

export default App
