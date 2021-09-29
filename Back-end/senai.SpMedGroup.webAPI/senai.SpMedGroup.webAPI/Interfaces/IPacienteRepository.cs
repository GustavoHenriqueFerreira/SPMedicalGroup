using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo PacienteRepository
    /// </summary>
    interface IPacienteRepository
    {
        /// <summary>
        /// Listar todos os pacientes
        /// </summary>
        /// <returns>Lista de pacientes</returns>
        List<Paciente> Listar();

        /// <summary>
        /// Buscar paciente pelo ID
        /// </summary>
        /// <param name="idPaciente">ID do paciente que será buscado</param>
        /// <returns>Medico encontrado</returns>
        Paciente BuscarPorId(int idPaciente);

        /// <summary>
        /// Cadastrar uma paciente
        /// </summary>
        /// <param name="novoPaciente">Objeto novoPaciente com as todas as informações</param>
        void Cadastrar(Paciente novoPaciente);

        /// <summary>
        /// Atualizar os dados de um paciente
        /// </summary>
        /// <param name="idPaciente">ID do paciente que será atualizada</param>
        /// <param name="pacienteAtualizado">Objeto pacienteAtualizado com as novas informações</param>
        void Atualizar(int idPaciente, Paciente pacienteAtualizado);

        /// <summary>
        /// Deletar um paciente
        /// </summary>
        /// <param name="idPaciente">ID do paciente que será deletado</param>
        void Deletar(int idPaciente);
    }
}
