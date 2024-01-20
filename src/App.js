import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'

import FileShow from './components/FileShow'
import FileUpload from './components/FileUpload'
import TextInput from './components/TextInput'
import TextShow from './components/TextShow'

function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='/files' element={<FileShow />} />
            <Route path='/upload' element={<FileUpload />} />
            <Route path='/addtext' element={<TextInput />} />
            <Route path='/texts' element={<TextShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Files /> */}
      {/* <Texts /> */}
    </div>
  )
}

export default App
