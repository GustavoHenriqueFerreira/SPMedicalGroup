using MongoDB.Driver;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Repositories
{
    /// <summary>
    /// Classe responsável pelo repositório das localizações
    /// </summary>
    public class LocalizacaoRepository : ILocalizacaoRepository
    {
        private readonly IMongoCollection<Localizacao> _localizacoes;

        public LocalizacaoRepository()
        {
            var client = new MongoClient("mongodb://127.0.0.1:27017");
            var database = client.GetDatabase("SpMedGroup");
            _localizacoes = database.GetCollection<Localizacao>("mapas");
        }

        public void Cadastrar(Localizacao novaLocalizacao)
        {
            _localizacoes.InsertOne(novaLocalizacao);
        }

        public List<Localizacao> ListarTodas()
        {
            return _localizacoes.Find(localizacao => true).ToList();
        }
    }
}
