using senai.SpMedGroup.webAPI.Contexts;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Repositories
{
    public class SituacaoRepository : ISituacaoRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idSituacao, Situacao situacaoAtualizada)
        {
            throw new NotImplementedException();
        }

        public Situacao BuscarPorId(int idSituacao)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Situacao novaSituacao)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idSituacao)
        {
            throw new NotImplementedException();
        }

        public List<Situacao> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
