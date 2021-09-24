using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo EspecialidadeRepository
    /// </summary>
    interface IEspecialidadeRepository
    {
        /// <summary>
        /// Listar todas as especialidades
        /// </summary>
        /// <returns>Lista de especialidades</returns>
        List<Especialidade> Listar();

        /// <summary>
        /// Buscar especialidade pelo ID
        /// </summary>
        /// <param name="idEspecialidade">ID da especialidade que será buscado</param>
        /// <returns>Especialidade encontrada</returns>
        Especialidade BuscarPorId(int idEspecialidade);

        /// <summary>
        /// Cadastrar uma especialidade
        /// </summary>
        /// <param name="novaEspecialidade">Objeto novaEspecialidade com as todas as informações</param>
        void Cadastrar(Especialidade novaEspecialidade);

        /// <summary>
        /// Atualizar os dados de uma especialidade
        /// </summary>
        /// <param name="idEspecialidade">ID da especialidade que será atualizada</param>
        /// <param name="especialidadeAtualizada">Objeto consultaEspecialidade com as novas informações</param>
        void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizada);

        /// <summary>
        /// Deletar uma especialidade
        /// </summary>
        /// <param name="idEspecialidade">ID da especialidade que será deletada</param>
        void Deletar(int idEspecialidade);
    }
}
