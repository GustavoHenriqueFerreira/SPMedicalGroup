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
    public class ConsultaRepository : IConsultaRepository
    {
        SPMEDContext ctx = new SPMEDContext();

        public void Atualizar(int idConsulta, Consulta consultaAtualizada)
        {
            Consulta consultaBuscada = BuscarPorId(idConsulta);

            if (consultaAtualizada.IdPaciente != null)
            {
                consultaBuscada.IdPaciente = consultaAtualizada.IdPaciente;
            }

            if (consultaAtualizada.IdMedico != null)
            {
                consultaBuscada.IdMedico = consultaAtualizada.IdMedico;
            }

            if (consultaAtualizada.IdSituacao != null)
            {
                consultaBuscada.IdSituacao = consultaAtualizada.IdSituacao;
            }

            if (consultaAtualizada.DescricaoConsulta != null)
            {
                consultaBuscada.DescricaoConsulta = consultaAtualizada.DescricaoConsulta;
            }

            if (consultaAtualizada.DataHoraConsulta != null)
            {
                consultaBuscada.DataHoraConsulta = consultaAtualizada.DataHoraConsulta;
            }

            ctx.Consultas.Update(consultaBuscada);

            ctx.SaveChanges();
        }

        public Consulta BuscarPorId(int idConsulta)
        {
            return ctx.Consultas
            .Select(c => new Consulta()
            {
                IdConsulta = c.IdConsulta,
                DescricaoConsulta = c.DescricaoConsulta,
                DataHoraConsulta = c.DataHoraConsulta,

                IdPacienteNavigation = new Paciente()
                {
                    IdPaciente = c.IdPacienteNavigation.IdPaciente,
                    NomePaciente = c.IdPacienteNavigation.NomePaciente,
                    Rg = c.IdPacienteNavigation.Rg,
                    Cpf = c.IdPacienteNavigation.Cpf,
                    EnderecoPaciente = c.IdPacienteNavigation.EnderecoPaciente,
                    Nascimento = c.IdPacienteNavigation.Nascimento,
                    Telefone = c.IdPacienteNavigation.Telefone
                },

                IdMedicoNavigation = new Medico()
                {
                    IdMedico = c.IdMedicoNavigation.IdMedico,
                    NomeMedico = c.IdMedicoNavigation.NomeMedico,
                    Crm = c.IdMedicoNavigation.Crm,

                    IdEspecialidadeNavigation = new Especialidade()
                    {
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                        NomeEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.NomeEspecialidade,
                    }
                },

                IdSituacaoNavigation = new Situacao()
                {
                    IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                    DescricaoSituacao = c.IdSituacaoNavigation.DescricaoSituacao,
                }
            })
                .FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void Cadastrar(Consulta novaConsulta)
        {
            ctx.Consultas.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void Deletar(int idConsulta)
        {
            Consulta consultaBuscada = BuscarPorId(idConsulta);

            ctx.Consultas.Remove(consultaBuscada);

            ctx.SaveChanges();
        }

        public List<Consulta> Listar()
        {
            return ctx.Consultas
            .Select(c => new Consulta()
            {
                IdConsulta = c.IdConsulta,
                DescricaoConsulta = c.DescricaoConsulta,
                DataHoraConsulta = c.DataHoraConsulta,

                IdPacienteNavigation = new Paciente()
                {
                    IdPaciente = c.IdPacienteNavigation.IdPaciente,
                    NomePaciente = c.IdPacienteNavigation.NomePaciente,
                    Rg = c.IdPacienteNavigation.Rg,
                    Cpf = c.IdPacienteNavigation.Cpf,
                    EnderecoPaciente = c.IdPacienteNavigation.EnderecoPaciente,
                    Nascimento = c.IdPacienteNavigation.Nascimento,
                    Telefone = c.IdPacienteNavigation.Telefone,
                },

                IdMedicoNavigation = new Medico()
                {
                    IdMedico = c.IdMedicoNavigation.IdMedico,
                    NomeMedico = c.IdMedicoNavigation.NomeMedico,
                    Crm = c.IdMedicoNavigation.Crm,

                    IdEspecialidadeNavigation = new Especialidade()
                    {
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                        NomeEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.NomeEspecialidade,
                    }
                },

                IdSituacaoNavigation = new Situacao()
                {
                    IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                    DescricaoSituacao = c.IdSituacaoNavigation.DescricaoSituacao,
                }
            })
                .OrderBy(c => c.IdConsulta).ToList();
        }

        public Consulta BuscarSituacao(int idConsulta)
        {
            return ctx.Consultas.FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void AlterarSituacao(int idConsulta, string situacaoConsulta)
        {
            Consulta consultaBuscada = BuscarSituacao(idConsulta);

            switch (situacaoConsulta)
            {
                case "1":
                    consultaBuscada.IdSituacao = 1;
                    break;

                case "2":
                    consultaBuscada.IdSituacao = 2;
                    break;

                case "3":
                    consultaBuscada.IdSituacao = 3;
                    break;

                default:
                    consultaBuscada.IdSituacao = consultaBuscada.IdSituacao;
                    break;
            }

            ctx.Consultas.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public List<Consulta> ListarConsultasMedico(int idMedico)
        {
            return ctx.Consultas
            .Select(c => new Consulta()
            {
                IdConsulta = c.IdConsulta,
                DescricaoConsulta = c.DescricaoConsulta,
                DataHoraConsulta = c.DataHoraConsulta,

                IdPacienteNavigation = new Paciente()
                {
                    IdPaciente = c.IdPacienteNavigation.IdPaciente,
                    NomePaciente = c.IdPacienteNavigation.NomePaciente,
                    Rg = c.IdPacienteNavigation.Rg,
                    Cpf = c.IdPacienteNavigation.Cpf,
                    EnderecoPaciente = c.IdPacienteNavigation.EnderecoPaciente,
                    Nascimento = c.IdPacienteNavigation.Nascimento,
                    Telefone = c.IdPacienteNavigation.Telefone,

                    //IdUsuarioNavigation = new Usuario()
                    //{
                        //IdUsuario = c.IdMedicoNavigation.IdUsuarioNavigation.IdTipoUsuario,
                    //},
                },

                IdMedicoNavigation = new Medico()
                {
                    IdMedico = c.IdMedicoNavigation.IdMedico,
                    NomeMedico = c.IdMedicoNavigation.NomeMedico,
                    Crm = c.IdMedicoNavigation.Crm,

                    IdEspecialidadeNavigation = new Especialidade()
                    {
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                        NomeEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.NomeEspecialidade,
                    }
                },

                IdSituacaoNavigation = new Situacao()
                {
                    IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                    DescricaoSituacao = c.IdSituacaoNavigation.DescricaoSituacao,
                },
            })

            .Where(c => c.IdMedicoNavigation.IdMedico == idMedico)

            .OrderBy(c => c.IdConsulta)  
            .ToList();
        }

        public List<Consulta> ListarConsultasPaciente(int idPaciente)
        {
            return ctx.Consultas
            .Select(c => new Consulta()
            {
                IdConsulta = c.IdConsulta,
                DescricaoConsulta = c.DescricaoConsulta,
                DataHoraConsulta = c.DataHoraConsulta,

                IdPacienteNavigation = new Paciente()
                {
                    IdPaciente = c.IdPacienteNavigation.IdPaciente,
                    NomePaciente = c.IdPacienteNavigation.NomePaciente,
                    Rg = c.IdPacienteNavigation.Rg,
                    Cpf = c.IdPacienteNavigation.Cpf,
                    EnderecoPaciente = c.IdPacienteNavigation.EnderecoPaciente,
                    Nascimento = c.IdPacienteNavigation.Nascimento,
                    Telefone = c.IdPacienteNavigation.Telefone

                    //IdUsuarioNavigation = new Usuario()
                    //{
                    //IdUsuario = c.IdMedicoNavigation.IdUsuarioNavigation.IdTipoUsuario,
                    //},
                },

                IdMedicoNavigation = new Medico()
                {
                    IdMedico = c.IdMedicoNavigation.IdMedico,
                    NomeMedico = c.IdMedicoNavigation.NomeMedico,
                    Crm = c.IdMedicoNavigation.Crm,

                    IdEspecialidadeNavigation = new Especialidade()
                    {
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                        NomeEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.NomeEspecialidade,
                    }
                },

                IdSituacaoNavigation = new Situacao()
                {
                    IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                    DescricaoSituacao = c.IdSituacaoNavigation.DescricaoSituacao,
                }
            })

            .Where(c => c.IdPacienteNavigation.IdPaciente == idPaciente)

            .OrderBy(c => c.IdConsulta)
            .ToList();
        }

        public void InserirDescricao(int idConsulta, string descricao)
        {
            Consulta consultaBuscada = BuscarPorId(idConsulta);

            consultaBuscada.DescricaoConsulta = descricao;

            ctx.Consultas.Update(consultaBuscada);
            ctx.SaveChanges();
        }
    }
}
