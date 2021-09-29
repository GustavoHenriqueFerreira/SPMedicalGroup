using System;
using System.Collections.Generic;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Medicos = new HashSet<Medico>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string TituloTipoUsuario { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
