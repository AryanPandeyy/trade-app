import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StockOverviewPage } from './pages/StockOverviewPage';
import './App.css';
import { StockDetailPage } from './pages/StockDetailPage';
import { WatchListContextProvider } from "./context/watchListContext"

function App() {
  return (
    <main className='container'>
      <WatchListContextProvider className="containter">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StockOverviewPage />} />
            <Route path='/detail/:symbol' element={<StockDetailPage />} />
          </Routes>
          <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
              <div className="col-3">
                <h5>Created by Aryan with ❤️</h5>
              </div>
            </div>
          </footer>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
