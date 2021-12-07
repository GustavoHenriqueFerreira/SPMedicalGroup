using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Medico
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Médico
        /// </summary>
        public Medico()
        {
            Consultas = new HashSet<Consulta>();
        }

        public int IdMedico { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdClinica { get; set; }
        public int? IdEspecialidade { get; set; }

        [Required(ErrorMessage = "Por favor informe o nome do médico.")]
        public string NomeMedico { get; set; }

        [Required(ErrorMessage = "Por favor informe o CRM.")]
        public string Crm { get; set; }

        public virtual Clinica IdClinicaNavigation { get; set; }
        public virtual Especialidade IdEspecialidadeNavigation { get; set; }
        public virtual TipoUsuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consulta> Consultas { get; set; }
    }
}
