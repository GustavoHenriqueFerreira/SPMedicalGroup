using senai.SpMedGroup.webAPI.Contexts;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idConsulta, Consulta consultaAtualizada)
        {
            throw new NotImplementedException();
        }

        public Consulta BuscarPorId(int idConsulta)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Consulta novaConsulta)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idConsulta)
        {
            throw new NotImplementedException();
        }

        public List<Consulta> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
