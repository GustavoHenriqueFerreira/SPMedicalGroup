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
            throw new NotImplementedException();
        }

        public Medico BuscarPorId(int idMedico)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Medico novoMedico)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idMedico)
        {
            throw new NotImplementedException();
        }

        public List<Medico> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
