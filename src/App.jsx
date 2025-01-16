import React from 'react'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClienteList from './pages/Cliente/ClienteList'
import ProdutoList from './pages/Produto/ProdutoList'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'

const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/ClienteList' element={<ClienteList/>} /> 
         <Route path='/FornecedorList' element={<FornecedorList/>}/> 
         <Route path= '/ProdutoList' element={<ProdutoList/>}/> 
         <Route path='/FornecedorForm' element={<FornecedorForm/>}/>
      </Routes>
      <Link/>
     </BrowserRouter>
      
  
  )
}

export default App