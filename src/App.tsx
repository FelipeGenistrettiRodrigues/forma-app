import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageHome } from './Pages/PageHome'
import { LayoutMain } from './Pages/LayoutMain'
import { DateProvider } from './context/DateContext';

function App() {
  return (
    <DateProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index element={<PageHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DateProvider>
  )
}

export default App