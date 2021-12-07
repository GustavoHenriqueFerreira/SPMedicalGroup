using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Paciente
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Paciente
        /// </summary>
        public Paciente()
        {
            Consultas = new HashSet<Consulta>();
        }

        public int IdPaciente { get; set; }
        public int? IdUsuario { get; set; }

        [Required(ErrorMessage = "Por favor informe o nome do paciente.")]
        public string NomePaciente { get; set; }

        [Required(ErrorMessage = "Por favor informe o RG.")]
        public string Rg { get; set; }

        [Required(ErrorMessage = "Por favor informe o CPF.")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Por favor informe o endereço.")]
        public string EnderecoPaciente { get; set; }

        [Required(ErrorMessage = "Por favor informe o nascimento.")]
        public DateTime Nascimento { get; set; }
        public string Telefone { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consulta> Consultas { get; set; }
    }
}
