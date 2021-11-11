using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using senai.SpMedGroup.webAPI.Contexts;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace senai.SpMedGroup.webAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idUsuario, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = BuscarPorId(idUsuario);

            if (usuarioAtualizado.IdTipoUsuario != null)
            {
                usuarioBuscado.IdTipoUsuario = usuarioAtualizado.IdTipoUsuario;
            }

            if (usuarioAtualizado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }

            if (usuarioAtualizado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            ctx.Usuarios.Update(usuarioBuscado);

            ctx.SaveChanges();
        }

        public Usuario BuscarPorId(int idUsuario)
        {
            return ctx.Usuarios
            .Include(u => u.Pacientes).Include(u => u.IdTipoUsuarioNavigation)
            .FirstOrDefault(u => u.IdUsuario == idUsuario);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int idUsuario)
        {
            Usuario usuarioBuscado = BuscarPorId(idUsuario);

            ctx.Usuarios.Remove(usuarioBuscado);

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios
            .Include(u => u.Pacientes).Include(u => u.IdTipoUsuarioNavigation)
            .OrderBy(u => u.IdUsuario).ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.Include(tu => tu.IdTipoUsuarioNavigation).FirstOrDefault(tu => tu.Email == email && tu.Senha == senha);
        }

        public string ConsultarPerfilBD(int idUsuario)
        {
            ImagemUsuario imagemUsuario = new ImagemUsuario();

            imagemUsuario = ctx.ImagemUsuarios.FirstOrDefault(i => i.IdUsuario == idUsuario);

            if (imagemUsuario != null)
            {
                return Convert.ToBase64String(imagemUsuario.Binario);
            }

            return null;
        }

        public string ConsultarPerfilDir(int idUsuario)
        {
            string novoNome = idUsuario.ToString() + ".png";
            string caminho = Path.Combine("Perfil", novoNome);

            if (File.Exists(caminho))
            {
                byte[] bytesArquivo = File.ReadAllBytes(caminho);
                return Convert.ToBase64String(bytesArquivo);
            }
            return null;
        }

        public void SalvarPerfilBD(IFormFile foto, int idUsuario)
        {
            ImagemUsuario imagemUsuario = new ImagemUsuario();

            using (var ms = new MemoryStream())
            {
                foto.CopyTo(ms);

                imagemUsuario.Binario = ms.ToArray();

                imagemUsuario.NomeArquivo = foto.FileName;

                imagemUsuario.MimeType = foto.FileName.Split('.').Last();

                imagemUsuario.IdUsuario = idUsuario;

                imagemUsuario.IdUsuario = idUsuario;
            }

            ImagemUsuario fotoexistente = new ImagemUsuario();
            fotoexistente = ctx.ImagemUsuarios.FirstOrDefault(i => i.IdUsuario == idUsuario);

            if (fotoexistente != null)
            {
                fotoexistente.Binario = imagemUsuario.Binario;
                fotoexistente.NomeArquivo = imagemUsuario.NomeArquivo;
                fotoexistente.MimeType = imagemUsuario.MimeType;
                fotoexistente.IdUsuario = idUsuario;

                ctx.ImagemUsuarios.Update(fotoexistente);
            }
            else
            {
                ctx.ImagemUsuarios.Add(imagemUsuario);
            }

            ctx.SaveChanges();
        }

        public void SalvarPerfilDir(IFormFile foto, int idUsuario)
        {
            string nome_novo = idUsuario.ToString() + ".png";

            using (var stream = new FileStream(Path.Combine("perfil", nome_novo), FileMode.Create))
            {
                foto.CopyTo(stream);
            }
        }
    }
}
