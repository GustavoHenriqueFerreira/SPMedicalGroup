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
    public class ClinicaRepository : IClinicaRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idClinica, Clinica clinicaAtualizada)
        {
            Clinica clinicaBuscada = BuscarPorId(idClinica);

            if (clinicaAtualizada.NomeClinica != null)
            {
                clinicaBuscada.NomeClinica = clinicaAtualizada.NomeClinica;
            }

            if (clinicaAtualizada.RazaoSocial != null)
            {
                clinicaBuscada.RazaoSocial = clinicaAtualizada.RazaoSocial;
            }

            if (clinicaAtualizada.EnderecoClinica != null)
            {
                clinicaBuscada.EnderecoClinica = clinicaAtualizada.EnderecoClinica;
            }

            if (clinicaAtualizada.Cnpj != null)
            {
                clinicaBuscada.Cnpj = clinicaAtualizada.Cnpj;
            }

            if (clinicaAtualizada.HorarioAberto != null)
            {
                clinicaBuscada.HorarioAberto = clinicaAtualizada.HorarioAberto;
            }

            if (clinicaAtualizada.HorarioFechado != null)
            {
                clinicaBuscada.HorarioFechado = clinicaAtualizada.HorarioFechado;
            }

            ctx.Clinicas.Update(clinicaBuscada);

            ctx.SaveChanges();
        }

        public Clinica BuscarPorId(int idClinica)
        {
            return ctx.Clinicas.Include(m => m.Medicos).FirstOrDefault(c => c.IdClinica == idClinica);
        }

        public void Cadastrar(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);

            ctx.SaveChanges();
        }

        public void Deletar(int idClinica)
        {
            Clinica clinicaBuscada = BuscarPorId(idClinica);

            ctx.Clinicas.Remove(clinicaBuscada);

            ctx.SaveChanges();
        }

        public List<Clinica> Listar()
        {
            return ctx.Clinicas.Include(c => c.Medicos).OrderBy(c => c.IdClinica).ToList();
        }
    }
}
