using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace senai.SpMedGroup.webAPI.Domains
{
    public class Localizacao
    {
        /// <summary>
        /// Classe que representa a collection Localizacao
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("latitude")]
        [BsonRequired]
        public string Latitude { get; set; }

        [BsonElement("longitude")]
        [BsonRequired]
        public string Longitude { get; set; }
    }
}
