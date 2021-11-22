using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.SpMedGroup.webAPI.Domains;
using senai.SpMedGroup.webAPI.Interfaces;
using senai.SpMedGroup.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace senai.SpMedGroup.webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository _consultaRepository { get; set; }

        public ConsultasController()
        {
            _consultaRepository = new ConsultaRepository();
        }

        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_consultaRepository.Listar());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize]
        [HttpGet("{idConsulta}")]
        public IActionResult BuscarPorId(int idConsulta)
        {
            try
            {
                return Ok(_consultaRepository.BuscarPorId(idConsulta));
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Consulta novaConsulta)
        {
            try
            {
                _consultaRepository.Cadastrar(novaConsulta);

                return StatusCode(201);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "3")]
        [HttpPut("{idConsulta}")]
        public IActionResult Atualizar(int idConsulta, Consulta consultaAtualizada)
        {
            try
            {
                _consultaRepository.Atualizar(idConsulta, consultaAtualizada);

                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "1")]
        [HttpDelete("{idConsulta}")]
        public IActionResult Deletar(int idConsulta)
        {
            try
            {
                _consultaRepository.Deletar(idConsulta);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "1")]
        [HttpPatch("situacao/{idConsulta}")]
        public IActionResult AlterarSituacao(int idConsulta, Consulta situacaoConsulta)
        {
            try
            {
                _consultaRepository.AlterarSituacao(idConsulta, situacaoConsulta.IdSituacao.ToString());

                return Ok();
            }

            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "3")]
        [HttpGet("listaMed")]
        public IActionResult ListarConsultaMedico()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_consultaRepository.ListarConsultasMedico(idUsuario));
            }

            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "2")]
        [HttpGet("listaPac")]
        public IActionResult ListarConsultasPaciente()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_consultaRepository.ListarConsultasPaciente(idUsuario));
            }

            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize(Roles = "3")]
        [HttpPatch("descricao/{idConsulta}")]
        public IActionResult InserirDescricao(int idConsulta, Consulta consulta)
        {
            try
            {
                _consultaRepository.InserirDescricao(idConsulta, consulta.DescricaoConsulta);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
