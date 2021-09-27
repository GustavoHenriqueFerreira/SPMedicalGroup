using Microsoft.EntityFrameworkCore;
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
            Situacao situacaoBuscada = BuscarPorId(idSituacao);

            if (situacaoAtualizada.DescricaoSituacao != null)
            {
                situacaoBuscada.DescricaoSituacao = situacaoAtualizada.DescricaoSituacao;
            }

            ctx.Situacoes.Update(situacaoBuscada);

            ctx.SaveChanges();
        }

        public Situacao BuscarPorId(int idSituacao)
        {
            return ctx.Situacoes.FirstOrDefault(m => m.IdSituacao == idSituacao);
        }

        public void Cadastrar(Situacao novaSituacao)
        {
            ctx.Situacoes.Add(novaSituacao);

            ctx.SaveChanges();
        }

        public void Deletar(int idSituacao)
        {
            Situacao situacaoBuscada = BuscarPorId(idSituacao);

            ctx.Situacoes.Remove(situacaoBuscada);

            ctx.SaveChanges();
        }

        public List<Situacao> Listar()
        {
            return ctx.Situacoes.OrderBy(s => s.IdSituacao).ToList();
        }
    }
}
