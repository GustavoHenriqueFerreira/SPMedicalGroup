using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo ConsultaRepository
    /// </summary>
    interface IConsultaRepository
    {
        /// <summary>
        /// Listar todas as consultas
        /// </summary>
        /// <returns>Lista de consultas</returns>
        List<Consulta> Listar();

        /// <summary>
        /// Buscar consulta pelo ID
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        Consulta BuscarPorId(int idConsulta);

        /// <summary>
        /// Buscar consulta pelo ID para situação
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        Consulta BuscarSituacao(int idConsulta);

        /// <summary>
        /// Cadastrar uma consulta
        /// </summary>
        /// <param name="novaConsulta">Objeto novaConsulta com as todas as informações</param>
        void Cadastrar(Consulta novaConsulta);

        /// <summary>
        /// Atualizar os dados de uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será atualizada</param>
        /// <param name="consultaAtualizada">Objeto consultaAtualizada com as novas informações</param>
        void Atualizar(int idConsulta, Consulta consultaAtualizada);

        /// <summary>
        /// Deleta uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será cancelada</param>
        void Deletar(int idConsulta);

        /// <summary>
        /// Alterar a situação de uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscado</param>
        /// <param name="situacaoConsulta">status da consulta</param>
        void AlterarSituacao(int idConsulta, string situacaoConsulta);

        /// <summary>
        /// Listar consulta relacionadas a um médico
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        List<Consulta> ListarConsultasMedico(int idMedico);

        /// <summary>
        /// Listar consulta relacionadas a um paciente
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        List<Consulta> ListarConsultasPaciente(int idPaciente);

        /// <summary>
        /// Inserir uma descrição para uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta</param>
        /// <param name="descricao">Descrição da consulta</param>
        void InserirDescricao(int idConsulta, string descricao);
    }
}
