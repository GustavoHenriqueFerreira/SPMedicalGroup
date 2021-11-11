using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.SpMedGroup.webAPI.Interfaces;
using senai.SpMedGroup.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Controllers
{
    
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public PerfilController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost("imagem/bd")]
        public IActionResult postBD(IFormFile arquivo)
        {
            try
            {
                if (arquivo.Length > 500000000)
                    return BadRequest(new { mensagem = "O tamanho máximo da imagem foi atingido." });

                string extensao = arquivo.FileName.Split('.').Last();

                if (extensao != "png")
                    return BadRequest(new { mensagem = "Apenas arquivos .png são obrigatórios." });

                int id_Usuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                _usuarioRepository.SalvarPerfilBD(arquivo, id_Usuario);

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /*[Authorize(Roles = "1,2")]*/
        [HttpGet("imagem/bd")]
        public IActionResult getBD()
        {
            try
            {
                int id_Usuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                string base64 = _usuarioRepository.ConsultarPerfilBD(id_Usuario);

                return Ok(base64);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("imagem/dir")]
        public IActionResult postDir(IFormFile arquivo)
        {
            try
            {
                if (arquivo.Length > 150000)
                    return BadRequest(new { mensagem = "O tamanho máximo da imagem foi atingido." });

                string extensao = arquivo.FileName.Split('.').Last();


                if (extensao != "png")
                    return BadRequest(new { mensagem = "Apenas arquivos .png são obrigatórios." });

                int id_Usuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                _usuarioRepository.SalvarPerfilDir(arquivo, id_Usuario);

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("imagem/dir")]
        public IActionResult getDIR()
        {
            try
            {
                int id_Usuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                string base64 = _usuarioRepository.ConsultarPerfilDir(id_Usuario);

                return Ok(base64);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
