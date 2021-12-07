using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class TipoUsuario
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) TipoUsuario
        /// </summary>
        public TipoUsuario()
        {
            Medicos = new HashSet<Medico>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Por favor informe o título do tipo de usuário.")]
        public string TituloTipoUsuario { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
