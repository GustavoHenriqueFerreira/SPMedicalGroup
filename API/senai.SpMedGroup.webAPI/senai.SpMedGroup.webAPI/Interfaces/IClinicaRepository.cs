using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo ClinicaRepository
    /// </summary>
    interface IClinicaRepository
    {
        /// <summary>
        /// Listar todas as clinicas
        /// </summary>
        /// <returns>Lista de clinicas</returns>
        List<Clinica> Listar();

        /// <summary>
        /// Buscar clinica pelo ID
        /// </summary>
        /// <param name="idClinica">ID da clinica que será buscado</param>
        /// <returns>Clinica encontrada</returns>
        Clinica BuscarPorId(int idClinica);

        /// <summary>
        /// Cadastrar uma clinica
        /// </summary>
        /// <param name="novaClinica">Objeto novaClinica com as todas as informações</param>
        void Cadastrar(Clinica novaClinica);

        /// <summary>
        /// Atualizar os dados de uma clinica
        /// </summary>
        /// <param name="idClinica">ID da clinica que será atualizada</param>
        /// <param name="clinicaAtualizada">Objeto clinicaAtualizada com as novas informações</param>
        void Atualizar(int idClinica, Clinica clinicaAtualizada);

        /// <summary>
        /// Deletar uma clinica
        /// </summary>
        /// <param name="idClinica">ID da clinica que será deletada</param>
        void Deletar(int idClinica);
    }
}
