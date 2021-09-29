using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo SituacaoRepository
    /// </summary>
    interface ISituacaoRepository
    {
        /// <summary>
        /// Listar todas as situações
        /// </summary>
        /// <returns>Lista de situações</returns>
        List<Situacao> Listar();

        /// <summary>
        /// Buscar situação pelo ID
        /// </summary>
        /// <param name="idSituacao">ID da situação que será buscado</param>
        /// <returns>Situação encontrada</returns>
        Situacao BuscarPorId(int idSituacao);

        /// <summary>
        /// Cadastrar uma situação
        /// </summary>
        /// <param name="novaSituacao">Objeto novaSituacao com as todas as informações</param>
        void Cadastrar(Situacao novaSituacao);

        /// <summary>
        /// Atualizar os dados de uma situação
        /// </summary>
        /// <param name="idSituacao">ID da situação que será atualizada</param>
        /// <param name="situacaoAtualizada">Objeto situacaoAtualizada com as novas informações</param>
        void Atualizar(int idSituacao, Situacao situacaoAtualizada);

        /// <summary>
        /// Deletar uma situação
        /// </summary>
        /// <param name="idSituacao">ID da situação que será deletada</param>
        void Deletar(int idSituacao);
    }
}
