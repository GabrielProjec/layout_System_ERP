import React from 'react'
import TitlePages from '../components/TitlePages'
import { BsFillTrashFill, BsPencilFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const UsersType = [
  {id: 1 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 2 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 3 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 4 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 6 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 7 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 8 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 9 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},
  {id: 10 ,nome: "Gabriel" , celular: "629999-9999", acesso: "admin", status: "Ativo"},

]

const Users = () => {
  return (
    <div>
     <TitlePages titleName="Usuários" />


     <div className=" mt-10 w-[100%] border-none bg-white dark:bg-[#292929] shadow-lg rounded-lg p-4">
        <div className="flex justify-between flex-col md:flex-row w-[100%] p-2">
          <h1 className="text-xl mb-3 md:mb-0 dark:text-white">Usuários</h1>
          <div className="flex items-center justify-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
               className="border-b dark:text-white rounded-md border-gray-300 p-2 pl-10 focus:border-[rgb(32,45,105)] focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:focus:border-blue-400 w-[80%] md:w-[100%]"
              />
              <BsSearch className="absolute top-3 left-2 text-gray-500 dark:text-gray-300" />
            </div>
            <button
             className="border flex justify-center items-center rounded-lg shadow-md py-2 px-1 md:px-2 font-semibold dark:bg-blue-400 bg-[rgb(32,45,105)] text-white"
            >
               <p className="flex gap-0 md:gap-1"><span className="hidden md:flex">+</span> NOVO</p>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 w-auto m-auto">
          <table className="min-w-full divide-y divide-gray-200 mt-3">
            <thead className="bg-[rgb(32,45,105)] dark:bg-blue-400">
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                ID
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Celular
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Perfil
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Ações
              </th>
            </thead>
            <tbody className="bg-white dark:bg-[#333] divide-y divide-gray-200 dark:divide-gray-400 w-full">
            {UsersType.length > 0 ? (
                UsersType.map((usuario) => {
                  return (
                    <tr key={usuario.id}>
                      <td className="px-6 py-1 whitespace-nowrap dark:text-white">
                        {usuario.id}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap dark:text-white">
                        {usuario.nome}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap dark:text-white">
                        {(usuario.celular)}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap dark:text-white">
                        {usuario.acesso}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap dark:text-white">
                        {usuario.status}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap flex text-right text-sm font-medium">
                        <Link
                  
                          className="text-indigo-600 p-1 hover:text-indigo-900"
                        >
                          <BsPencilFill className="w-5 h-5 dark:text-green-400" />
                        </Link>
                        <Link
                          
                          className="text-red-600 p-1 hover:text-red-900"
                        >
                          <BsFillTrashFill className="w-5 h-5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p className="text-center dark:text-white">Sem Dados</p>
              )}
            </tbody>
          </table>
        
        </div>
      </div>
    
    </div>
  )
}

export default Users
