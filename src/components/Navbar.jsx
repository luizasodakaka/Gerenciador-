import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div>
      <h1 className='centralizado' style={{position: "center"}}> GERENCIADOR </h1>
      <h2  className='menu' style={{position: "relative"}}>
         <Link to="/ClienteList">Lista de Clientes</Link>  <br></br>
         <Link to="/FornecedorList">Lista de Fornecedores</Link> <br></br>
         <Link to= '/FornecedorForm'> Adicionar Fornecedor</Link>
         <Link to="/ProdutoList">Lista de Produtos</Link>
         
      </h2>
    </div>
  )
}

export default Navbar