using senai.SpMedGroup.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo LocalizacaoRepository
    /// </summary>
    interface ILocalizacaoRepository
    {
        /// <summary>
        /// Listar todas as localizações
        /// </summary>
        /// <returns>Lista de localizações</returns>
        List<Localizacao> ListarTodas();

        /// <summary>
        /// Cadastrar uma localização
        /// </summary>
        /// <param name="novaLocalizacao">Objeto novaLocalizacao com as todas as informações</param>
        void Cadastrar(Localizacao novaLocalizacao);
    }
}
