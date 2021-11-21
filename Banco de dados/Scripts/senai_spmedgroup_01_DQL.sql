USE SENAI_SPMEDGROUP;
GO

-- Listar todas as entidades
SELECT  * FROM  tipoUsuario;
GO

SELECT  * FROM  usuario;
GO

SELECT  * FROM  clinica;
GO

SELECT  * FROM  paciente;
GO

SELECT  * FROM  especialidade;
GO

SELECT  * FROM  medico;
GO

SELECT  * FROM  situacao;
GO

SELECT  *  FROM  consulta;
GO

--Listar a quantidade de usuários
SELECT COUNT (*) AS 'Quantidade de Usuários' FROM usuario;
GO

--Listar de nascimento dos usuários no formato (mm-dd-yyyy)
SELECT CONVERT (VARCHAR,nascimento,101) AS 'Data de Nascimento' FROM paciente;
GO

--Calcular e listar a quantidade de médicos de uma determinada especialidade atráves de uma função
CREATE FUNCTION calculo_Medico_Especialidade(
	@NomeEspecialidade VARCHAR(50)
)
RETURNS INT
AS
BEGIN

DECLARE @qtndMedico AS INT
SET @qtndMedico = (SELECT COUNT(medico.nomeMedico) FROM medico

INNER JOIN especialidade
ON especialidade.IdEspecialidade = medico.IdEspecialidade
WHERE especialidade.nomeEspecialidade = @NomeEspecialidade)
RETURN @qtndMedico
END
GO
SELECT NumeroMedico = dbo.calculo_Medico_Especialidade ('Psiquiatria');
GO

--Calcular e listar a idade dos pacientes atráves de uma stored procedure
CREATE PROCEDURE cauculo_Idade
AS
BEGIN
SELECT nomePaciente 'Nome do Paciente', rg 'RG', cpf 'CPF', enderecoPaciente 'Endereço', telefone 'Telefone', DATEDIFF(year, (nascimento), getdate()) 'Idade' FROM paciente
END
GO

EXEC cauculo_Idade;
GO

--Listar todas as consultas, sem id e mostrando todos os dados relacionados a ela
SELECT nomePaciente 'Paciente', nomeMedico 'Médico', descricaoSituacao 'Situação', descricaoConsulta 'Descrição da Consulta', dataHoraConsulta 'Data da Consulta'

FROM consulta 
INNER JOIN paciente ON consulta.idPaciente = paciente.idPaciente
INNER JOIN medico ON consulta.idMedico = medico.idMedico
INNER JOIN situacao ON consulta.idSituacao = situacao.idSituacao 


--Listar todas as consultas de um determinado paciente
SELECT nomePaciente 'Paciente', nomeMedico 'Médico', descricaoSituacao 'Situação', descricaoConsulta 'Descrição da Consulta', dataHoraConsulta 'Data da Consulta'

FROM consulta
INNER JOIN paciente ON consulta.idPaciente = paciente.idPaciente
INNER JOIN medico ON consulta.idMedico = medico.idMedico
INNER JOIN situacao ON consulta.idSituacao = situacao.idSituacao
WHERE nomePaciente= 'Henrique'; 
--Pode ser procurado tanto por id ou pelo nome do paciente, usando WHERE consulta.idPaciente = 7;


--Listar todas as consultas de um determinado médico
SELECT nomeMedico 'Médico', nomePaciente 'Paciente', descricaoSituacao 'Situação', descricaoConsulta 'Descrição da Consulta', dataHoraConsulta 'Data da Consulta'

FROM consulta
INNER JOIN paciente ON consulta.idPaciente = paciente.idPaciente
INNER JOIN medico ON consulta.idMedico = medico.idMedico
INNER JOIN situacao ON consulta.idSituacao = situacao.idSituacao
WHERE nomeMedico = 'Roberto Possarle';
GO
--Pode ser procurado tanto por id ou pelo nome do médico, usando WHERE consulta.idMedico = 2;


--Procurar e listar um paciente atráves do seu email e senha
SELECT paciente.nomePaciente 'Nome do Paciente', usuario.email 'E-mail', usuario.senha 'Senha'

FROM usuario
JOIN paciente on usuario.idUsuario = paciente.idUsuario
WHERE email = 'alexandre@gmail.com'
AND senha = '1234567';
GO

--Procurar e listar um médico atráves do seu email e senha
SELECT nomeMedico 'Nome do Médico', email 'E-mail', senha 'Senha'

FROM usuario
JOIN medico on usuario.idUsuario = medico.idUsuario
WHERE email = 'roberto.possarle@spmedicalgroup.com.br'
AND senha = '1234';
GO