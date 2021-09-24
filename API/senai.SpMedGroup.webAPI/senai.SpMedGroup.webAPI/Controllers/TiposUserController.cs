using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using senai.SpMedGroup.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TiposUserController : ControllerBase
    {
        private ITipoUserRepository _tipoUserRepository { get; set; }

        public TiposUserController()
        {
            _tipoUserRepository = new TipoUserRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_tipoUserRepository.Listar());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpGet("{idTipoUsuario}")]
        public IActionResult BuscarPorId(int idTipoUsuario)
        {
            try
            {
                return Ok(_tipoUserRepository.BuscarPorId(idTipoUsuario));
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(TipoUsuario novoUsuario)
        {
            try
            {
                _tipoUserRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPut("{idTipoUsuario}")]
        public IActionResult Atualizar(int idTipoUsuario, TipoUsuario tipoUserAtualizado)
        {
            try
            {
                _tipoUserRepository.Atualizar(idTipoUsuario, tipoUserAtualizado);

                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpDelete("{idTipoUsuario}")]
        public IActionResult Deletar(int idTipoUsuario)
        {
            try
            {
                _tipoUserRepository.Deletar(idTipoUsuario);

                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
