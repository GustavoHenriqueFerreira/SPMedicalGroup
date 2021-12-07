using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Usuario
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Usuario
        /// </summary>
        public Usuario()
        {
            Pacientes = new HashSet<Paciente>();
        }

        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Por favor informe o E-mail.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Por favor informe o Senha.")]
        public string Senha { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ImagemUsuario ImagemUsuario { get; set; }
        public virtual ICollection<Paciente> Pacientes { get; set; }
    }
}
