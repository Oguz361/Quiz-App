import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import {Routes } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import TopicSelection from './components/TopicSelection'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/topics" element={<TopicSelection />} />
        <Route path="/quiz/:topicId" element={<QuizScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/coming-soon" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
