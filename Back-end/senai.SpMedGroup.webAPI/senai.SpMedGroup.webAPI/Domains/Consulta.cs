using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Consulta
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Consulta
        /// </summary>
        public int IdConsulta { get; set; }
        public int? IdPaciente { get; set; }
        public int? IdMedico { get; set; }
        public int? IdSituacao { get; set; }

        public string DescricaoConsulta { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.DateTime, ErrorMessage = "Por favor informe uma data válida.")]
        public DateTime DataHoraConsulta { get; set; }
        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
