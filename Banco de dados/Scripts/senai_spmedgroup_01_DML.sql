USE SPMEDGROUP;
GO

INSERT INTO tipoUsuario(tituloTipoUsuario)
VALUES ('Administrador'),('Paciente'),('M�dico');
GO

INSERT INTO usuario(idTipoUsuario, email, senha)
VALUES (3,'ricardo.lemos@spmedicalgroup.com.br','321'), 
       (3,'roberto.possarle@spmedicalgroup.com.br','1234'), 
	   (3,'helena.souza@spmedicalgroup.com.br','12345'),
	   (2,'ligia@gmail.com','123456'), 
	   (2,'alexandre@gmail.com','1234567'), 
	   (2,'fernando@gmail.com','12345678'),
	   (2,'henrique@gmail.com','abc'), 
	   (2,'joao@hotmail.com','abcd'), 
	   (2,'bruno@gmail.com','abcde'), 
	   (2,'mariana@outlook.com','abcdef'),
	   (1, 'saulo@gmail.com', 'C# melhor que python');
GO

INSERT INTO clinica(nomeClinica, razaoSocial, enderecoClinica, cnpj, HorarioAberto, HorarioFechado)
VALUES ('Clinica Possarle', 'SP Medical Group', 'Av. Bar�o Limeira, 532, S�o Paulo, SP', '86.400.902/0001-30', '07:00:00', '23:00:00'),
       ('Clinica Portuguesa', 'Clinica Portugal', 'Av. Portugal, 1676, Santo Andr�, SP', '99.999.999/9999-99', '08:00:00', '22:00:00');
GO

INSERT INTO paciente(idUsuario, nomePaciente, rg, cpf, enderecoPaciente, nascimento, telefone)
VALUES (4, 'Ligia', '43522543-5', '94839859000', 'Rua Estado de Israel 240,�S�o Paulo, Estado de S�o Paulo', '10/12/1983', '11 3456-7654'),
       (5, 'Alexandre', '32654345-7', '73556944057', 'Av. Paulista, 1578 - Bela Vista, S�o Paulo - SP', '7/12/2001', '11 98765-6543'),
       (6, 'Fernando' , '54636525-3', '16839338002', 'Av. Ibirapuera - Indian�polis, 2927,  S�o Paulo - SP', '10/10/1978', '11 97208-4453'),
       (7,'Henrique','54366362-5', '14332654765', 'R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP', '10/12/1985','11 3456-6543'),
       (8,'Jo�o','53254444-1', '91305348010', 'R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeir�o Pires - SP', '8/9/1975', '11 7656-6377'),
       (9,'Bruno','54566266-7', '79799299004', 'Alameda dos Arapan�s, 945 - Indian�polis, S�o Paulo - SP', '3/11/1972', '11 95436-8769'),
       (10,'Mariana', '54566266-8', '13771913039', 'R Sao Antonio, 232 - Vila Universal, Barueri - SP', '3/5/2018','');
GO

INSERT INTO especialidade(nomeEspecialidade)
VALUES ('Acupuntura'),('Anestesiologia'),('Angiologia'),
	   ('Cardiologia'),('Cirurgia Cardiovascular'),('Cirurgia da M�o'),
	   ('Cirurgia do Aparelho Digestivo'),('Cirurgia Geral'),('Cirurgia Pedi�trica'),
       ('Cirurgia Pl�stica'),('Cirurgia Tor�cica'),('Cirurgia Vascular'),
	   ('Dermatologia'),('Radioterapia'),('Urologia'),
	   ('Pediatria'),('Psiquiatria');
GO

INSERT INTO medico(idUsuario, idClinica, idEspecialidade, nomeMedico, crm)
VALUES (1, 1, 2, 'Ricardo Lemos', '54356-SP'),
       (2, 1, 17, 'Roberto Possarle', '53452-SP'),
	   (3, 1, 16, 'Helena Strada', '65463-SP');
GO

INSERT INTO situacao(descricaoSituacao)
VALUES ('Realizada'),('Cancelada'), ('Agendada');
GO

INSERT INTO consulta(idPaciente, idMedico, idSituacao, descricaoConsulta, dataHoraConsulta)
VALUES (7, 3 , 1,'Deu tudo certo', '1/12/20 15:00'),
       (2, 2, 2, 'Deu tudo errado', '01/06/2020  10:00:00'),
	   (3, 2, 1, 'Deu tudo certo', '02/07/2020  11:00:00'),
	   (2, 2, 1, 'Deu tudo certo', '02/06/2018  10:00:00'),
	   (4, 1, 2, 'Deu tudo errado', '02/07/2019  11:00:00'),
	   (7, 3, 3, 'Paciente falou que pode faltar', '03/08/2020  15:00:00'),
	   (4, 1, 3, 'Paciente falou que pode faltar', '03/09/2020  11:00:00');
GO