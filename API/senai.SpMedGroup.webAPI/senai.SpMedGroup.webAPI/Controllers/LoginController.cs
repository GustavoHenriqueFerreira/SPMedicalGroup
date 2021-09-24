using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using senai.SpMedGroup.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(Usuario login)
        {
            Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmailSenha(login.Email, login.Senha);

            if (usuarioBuscado != null)
            {
                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuarioNavigation.TituloTipoUsuario.ToString()),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("spmedgroup-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken(
                        issuer: "SpMedGroup.webAPI",
                        audience: "SpMedGroup.webAPI",
                        claims: minhasClaims,
                        expires: DateTime.Now.AddHours(8),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                });
            }

            return NotFound("Email ou senha inválido");
        }
    }
}
