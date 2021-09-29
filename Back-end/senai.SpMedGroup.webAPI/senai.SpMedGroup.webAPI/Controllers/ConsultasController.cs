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

        [Authorize]
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

        [Authorize(Roles = "1, 2")]
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
        public IActionResult Cancelar(int idConsulta)
        {
            try
            {
                _consultaRepository.Cancelar(idConsulta);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize]
        [HttpGet("{listMed}")]
        public IActionResult ListarConsultaMedico()
        {
            try
            {
                int listMed = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_consultaRepository.ListarConsultasMedico(listMed));
            }

            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [Authorize]
        [HttpGet("{listPac}")]
        public IActionResult ListarConsultasPaciente()
        {
            try
            {
                int listPac = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_consultaRepository.ListarConsultasPaciente(listPac));
            }

            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
