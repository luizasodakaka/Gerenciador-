import React, { useEffect, useState } from 'react'
import axios from '../../api'
import { FaCheckCircle, FaEdit, FaExclamation, FaExclamationTriangle, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'


const ClienteList = () => {

    const [clientes, setClientes] = useState([])
    const [clienteSelecionado, setClienteSelecionado] = useState(null)
    const [modalAberto, setModalAberto] = useState(false)
    const [modalSucessoAberto, setModalSucessoAberto] = useState(false)
    const [showInfo, setShowInfo] = useState(false)


    const toggleInfo = () => {
        setShowInfo(prevState => !prevState)

    useEffect(() => {
        axios.get("/clientes")
        .then(response => setClientes(response.data))
        .catch(error => console.error("Erro ao carregar cliente: ", error))
    }, [])

    const abrirModal = (cliente) => {
        setClienteSelecionado(cliente)
        setModalAberto(true)
    }

    const fecharModal = () => {
        setModalAberto(false)
        setClienteSelecionado(null)
    }

    const abrirModalSucesso = () => {
        setModalSucessoAberto(true) 
        setTimeout(() => setModalSucessoAberto(false), 2000)
    }

    const removerCliente = () => {
        axios.delete(`/clientes/${clienteSelecionado.id}`)
        .then(() => {
            setCliente(prevCliente => prevClientes.filter(cliente => cliente.id !== clienteSelecionado.id))
            fecharModal()
            abrirModalSucesso()
        })
    }

  return (
    <div className="container mt-5">
        <h2 className="mb-4" style={{ position: 'relative' }}>Lista de Clientes</h2>

        <Link to="/add-clientes" className="btn btn-primary mb-2"> <FaPlus className="icon" /> Adicionar Cliente</Link>

        <table className="table">
            <thead>
                <th>Nome:</th>
                <th>CPF:</th>
                <th>Email:</th>
                <th>Ações:</th>
            </thead>
            <tbody>
                {
                    clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.email}</td>


                            
                            <td>
                                <Link to={`/edit-clientes/${cliente.id}`} className="btn btn-sm btn-warning"><FaEdit className="icon icon-btn" /> Editar</Link>
                                <button onClick={() => abrirModal(cliente)} className="btn btn-sm btn-danger">
                                   <FaTrash className="icon icon-btn" /> Excluir
                                </button>
                                <button onClick={toggleInfo}>
                                <Link to={`clientes/${cliente.id}`} className=' btn-primary'> <FaPlus className='icon'/> Informações</Link>
                                </button>
                               
                                    

                            </td>

                        
                                
                            
                        </tr>
                    ))
                }  

            </tbody>
            

        </table>

        <Modal
            isOpen={modalAberto}
            onRequestClose={fecharModal}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modalContent">
                <FaExclamationTriangle className="icon" />
                <h2>Confirmar Exclusão</h2>
                <p>Tem certeza que deseja excluir o clienter <br/>{clienteSelecionado && clienteSelecionado.nome}?
                </p>
                <div className="modalButtons">
                    <button onClick={fecharModal} className="btn btn-secondary">Cancelar</button>
                    <button onClick={removerCliente} className="btn btn-danger">Excluir</button>
                </div>

            </div>

        </Modal>


        <Modal
            isOpen={modalSucessoAberto}
            onRequestClose={() => setModalSucessoAberto(false)}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modalContent">
                <FaCheckCircle className="icon successIcon" />
                <h2>CLiente excluído com sucesso!</h2>
            </div>

        </Modal>

    </div>
  )
}
}

export default ClienteList