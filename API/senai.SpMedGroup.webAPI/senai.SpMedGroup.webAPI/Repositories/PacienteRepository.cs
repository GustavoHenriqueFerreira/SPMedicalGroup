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

        public void Atualizar(int idPaciente, Medico pacienteAtualizado)
        {
            throw new NotImplementedException();
        }

        public Medico BuscarPorId(int idPaciente)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Medico novoPaciente)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idPaciente)
        {
            throw new NotImplementedException();
        }

        public List<Paciente> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
