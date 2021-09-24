using senai.SpMedGroup.webAPI.Contexts;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Repositories
{
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizada)
        {
            throw new NotImplementedException();
        }

        public Especialidade BuscarPorId(int idEspecialidade)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Especialidade novaEspecialidade)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idEspecialidade)
        {
            throw new NotImplementedException();
        }

        public List<Especialidade> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
