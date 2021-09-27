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
    public class MedicoRepository : IMedicoRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idMedico, Medico medicoAtualizado)
        {
            Medico medicoBuscado = BuscarPorId(idMedico);

            if (medicoAtualizado.NomeMedico != null)
            {
                medicoBuscado.NomeMedico = medicoAtualizado.NomeMedico;
            }

            if (medicoAtualizado.Crm != null)
            {
                medicoBuscado.Crm = medicoAtualizado.Crm;
            }

            if (medicoAtualizado.IdUsuario != null)
            {
                medicoBuscado.IdUsuario = medicoAtualizado.IdUsuario;
            }

            if (medicoAtualizado.IdClinica != null)
            {
                medicoBuscado.IdClinica = medicoAtualizado.IdClinica;
            }

            if (medicoAtualizado.IdEspecialidade != null)
            {
                medicoBuscado.IdEspecialidade = medicoAtualizado.IdEspecialidade;
            }

            ctx.Medicos.Update(medicoBuscado);

            ctx.SaveChanges();
        }

        public Medico BuscarPorId(int idMedico)
        {
            return ctx.Medicos.FirstOrDefault(m => m.IdMedico == idMedico);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public void Deletar(int idMedico)
        {
            Medico medicoBuscado = BuscarPorId(idMedico);

            ctx.Medicos.Remove(medicoBuscado);

            ctx.SaveChanges();
        }

        public List<Medico> Listar()
        {
            return ctx.Medicos.Include(m => m.IdClinicaNavigation)
            .Include(m => m.IdEspecialidadeNavigation)
            .Include(m => m.IdUsuarioNavigation)
            .OrderBy(m => m.IdMedico).ToList();
        }
    }
}
