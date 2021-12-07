using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Clinica
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Clinica
        /// </summary>
        public Clinica()
        {
            Medicos = new HashSet<Medico>();
        }

        public int IdClinica { get; set; }

        [Required(ErrorMessage = "Por favor informe o nome da clínica.")]
        public string NomeClinica { get; set; }

        [Required(ErrorMessage = "Por favor informe a razão social.")]
        public string RazaoSocial { get; set; }

        [Required(ErrorMessage = "Por favor informe o endereço.")]
        public string EnderecoClinica { get; set; }

        [Required(ErrorMessage = "Por favor informe o CNPJ.")]
        public string Cnpj { get; set; }

        [Required(ErrorMessage = "Por favor informe o horário que a clínica abre.")]
        public TimeSpan HorarioAberto { get; set; }

        [Required(ErrorMessage = "Por favor informe o horário que a clínica fecha.")]
        public TimeSpan HorarioFechado { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
