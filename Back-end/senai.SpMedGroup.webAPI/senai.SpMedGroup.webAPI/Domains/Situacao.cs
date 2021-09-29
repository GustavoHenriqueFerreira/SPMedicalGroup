using System;
using System.Collections.Generic;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Consultas = new HashSet<Consulta>();
        }

        public int IdSituacao { get; set; }
        public string DescricaoSituacao { get; set; }

        public virtual ICollection<Consulta> Consultas { get; set; }
    }
}
