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
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository _medicoRepository { get; set; }

        public MedicosController()
        {
            _medicoRepository = new MedicoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_medicoRepository.Listar());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpGet("{idMedico}")]
        public IActionResult BuscarPorId(int idMedico)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorId(idMedico));
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        //[Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Medico novoMedico)
        {
            try
            {
                _medicoRepository.Cadastrar(novoMedico);

                return StatusCode(201);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPut("{idMedico}")]
        public IActionResult Atualizar(int idMedico, Medico medicoAtualizado)
        {
            try
            {
                _medicoRepository.Atualizar(idMedico, medicoAtualizado);

                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpDelete("{idMedico}")]
        public IActionResult Deletar(int idMedico)
        {
            try
            {
                _medicoRepository.Deletar(idMedico);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
