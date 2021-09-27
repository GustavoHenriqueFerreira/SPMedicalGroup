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
    public class PacienteRepository : IPacienteRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idPaciente, Paciente pacienteAtualizado)
        {
            Paciente pacienteBuscado = BuscarPorId(idPaciente);

            if (pacienteAtualizado.IdUsuario != null)
            {
                pacienteBuscado.IdUsuario = pacienteAtualizado.IdUsuario;
            }

            if (pacienteAtualizado.NomePaciente != null)
            {
                pacienteBuscado.NomePaciente = pacienteAtualizado.NomePaciente;
            }

            if (pacienteAtualizado.Rg != null)
            {
                pacienteBuscado.Rg = pacienteAtualizado.Rg;
            }

            if (pacienteAtualizado.Cpf != null)
            {
                pacienteBuscado.Cpf = pacienteAtualizado.Cpf;
            }

            if (pacienteAtualizado.EnderecoPaciente != null)
            {
                pacienteBuscado.EnderecoPaciente = pacienteAtualizado.EnderecoPaciente;
            }

            if (pacienteAtualizado.Nascimento != null)
            {
                pacienteBuscado.Nascimento = pacienteAtualizado.Nascimento;
            }

            if (pacienteAtualizado.Telefone != null)
            {
                pacienteBuscado.Telefone = pacienteAtualizado.Telefone;
            }

            ctx.Pacientes.Update(pacienteBuscado);

            ctx.SaveChanges();
        }

        public Paciente BuscarPorId(int idPaciente)
        {
            return ctx.Pacientes.FirstOrDefault(m => m.IdPaciente == idPaciente);
        }

        public void Cadastrar(Paciente novoPaciente)
        {
            ctx.Pacientes.Add(novoPaciente);

            ctx.SaveChanges();
        }

        public void Deletar(int idPaciente)
        {
            Paciente pacienteBuscado = BuscarPorId(idPaciente);

            ctx.Pacientes.Remove(pacienteBuscado);

            ctx.SaveChanges();
        }

        public List<Paciente> Listar()
        {
            return ctx.Pacientes.Include(p => p.IdUsuarioNavigation)
            .OrderBy(p => p.IdPaciente)
            .ToList();
        }
    }
}
