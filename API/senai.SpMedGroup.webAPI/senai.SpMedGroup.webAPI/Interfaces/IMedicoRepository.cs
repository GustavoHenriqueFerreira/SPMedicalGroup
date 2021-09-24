using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo MedicoRepository
    /// </summary>
    interface IMedicoRepository
    {
        /// <summary>
        /// Listar todos os médicos
        /// </summary>
        /// <returns>Lista de médicos</returns>
        List<Medico> Listar();

        /// <summary>
        /// Buscar médico pelo ID
        /// </summary>
        /// <param name="idMedico">ID do médico que será buscado</param>
        /// <returns>Médico encontrado</returns>
        Medico BuscarPorId(int idMedico);

        /// <summary>
        /// Cadastrar um médico
        /// </summary>
        /// <param name="novoMedico">Objeto novoMedico com as todas as informações</param>
        void Cadastrar(Medico novoMedico);

        /// <summary>
        /// Atualizar os dados de um médico
        /// </summary>
        /// <param name="idMedico">ID do médico que será atualizada</param>
        /// <param name="medicoAtualizado">Objeto medicoAtualizado com as novas informações</param>
        void Atualizar(int idMedico, Medico medicoAtualizado);

        /// <summary>
        /// Deletar um médico
        /// </summary>
        /// <param name="idMedico">ID do médico que será deletado</param>
        void Deletar(int idMedico);
    }
}
