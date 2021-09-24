using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo TiposUserRepository
    /// </summary>
    interface ITipoUserRepository
    {
        /// <summary>
        /// Listar de todos tipos de usuários
        /// </summary>
        /// <returns>Lista de tipos de usuários</returns>
        List<TipoUsuario> Listar();

        /// <summary>
        /// Buscar tipo de usuário pelo ID
        /// </summary>
        /// <param name="IdTipoUsuario">ID do tipo de usuário que será buscado</param>
        /// <returns>Tipo de usuário encontrado</returns>
        TipoUsuario BuscarPorId(int IdTipoUsuario);

        /// <summary>
        /// Cadastrar um tipo de usuário
        /// </summary>
        /// <param name="novoTipoUser">Objeto novoTipoUser com as todas as informações</param>
        void Cadastrar(TipoUsuario novoTipoUser);

        /// <summary>
        /// Atualizar os dados de um tipo de usuário 
        /// </summary>
        /// <param name="IdTipoUsuario">ID do tipo de usuário que será atualizado</param>
        /// <param name="tipoUserAtualizado">Objeto tipoUserAtualizado com as novas informações</param>
        void Atualizar(int IdTipoUsuario, TipoUsuario tipoUserAtualizado);

        /// <summary>
        /// Deletar um tipo de usuário
        /// </summary>
        /// <param name="IdTipoUsuario">ID do tipo de usuário que será deletado</param>
        void Deletar(int IdTipoUsuario);
    }
}
