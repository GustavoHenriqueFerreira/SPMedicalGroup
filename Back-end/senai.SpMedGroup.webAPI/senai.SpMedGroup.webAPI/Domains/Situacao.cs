using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class Situacao
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) Situacao
        /// </summary>
        public Situacao()
        {
            Consultas = new HashSet<Consulta>();
        }

        public int IdSituacao { get; set; }

        [Required(ErrorMessage = "Por favor informe a descrição da situação.")]
        public string DescricaoSituacao { get; set; }

        public virtual ICollection<Consulta> Consultas { get; set; }
    }
}
