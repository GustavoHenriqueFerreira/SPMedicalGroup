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
    public class TipoUserRepository : ITipoUserRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int IdTipoUsuario, TipoUsuario tipoUserAtualizado)
        {
            TipoUsuario tipoUserBuscado = BuscarPorId(IdTipoUsuario);

            if (tipoUserAtualizado.TituloTipoUsuario != null)
            {
                tipoUserBuscado.TituloTipoUsuario = tipoUserAtualizado.TituloTipoUsuario;
            }

            ctx.TipoUsuarios.Update(tipoUserBuscado);

            ctx.SaveChanges();
        }

        public TipoUsuario BuscarPorId(int IdTipoUsuario)
        {
            return ctx.TipoUsuarios.Include(tu => tu.Usuarios).FirstOrDefault(tu => tu.IdTipoUsuario == IdTipoUsuario);
        }

        public void Cadastrar(TipoUsuario novoTipoUser)
        {
            ctx.TipoUsuarios.Add(novoTipoUser);

            ctx.SaveChanges();
        }

        public void Deletar(int IdTipoUsuario)
        {
            TipoUsuario tipoUserBuscado = BuscarPorId(IdTipoUsuario);

            ctx.TipoUsuarios.Remove(tipoUserBuscado);

            ctx.SaveChanges();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios.Include(tu => tu.Usuarios).OrderBy(tu => tu.IdTipoUsuario).ToList();
        }
    }
}
