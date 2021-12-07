using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.SpMedGroup.webAPI.Domains
{
    public partial class ImagemUsuario
    {
        /// <summary>
        /// Classe que representa a entidade (tabela) ImagemUsuario
        /// </summary>
        public int Id { get; set; }
        public int IdUsuario { get; set; }

        [Required(ErrorMessage = "Por favor informe o valor do binário.")]
        public byte[] Binario { get; set; }

        [Required(ErrorMessage = "Por favor informe o mimeType.")]
        public string MimeType { get; set; }

        [Required(ErrorMessage = "Por favor informe o nome do arquivo.")]
        public string NomeArquivo { get; set; }

        [Required(ErrorMessage = "Por favor informe a data de inclusão da foto.")]
        public DateTime? DataInclusao { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
