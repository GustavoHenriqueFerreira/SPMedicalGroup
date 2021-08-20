USE SPMEDGROUP;
GO

-- Listar todas as entidades
SELECT  * FROM  tipoUsuario;
GO

SELECT  * FROM  usuario;
GO

SELECT  * FROM  clinica;
GO

SELECT  * FROM  paciente;
GO

SELECT  * FROM  especialidade;
GO

SELECT  * FROM  medico;
GO

SELECT  * FROM  situacao;
GO

SELECT  * FROM  consulta;
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
SELECT P.nomePaciente 'Nome do Paciente', U.email 'E-mail', U.senha 'Senha'

FROM usuario U
JOIN paciente P on U.idUsuario = P.idUsuario
WHERE email = 'alexandre@gmail.com'
AND senha = '1234567'


--Procurar e listar um médico atráves do seu email e senha
SELECT nomeMedico 'Nome do Médico', email 'E-mail', senha 'Senha'

FROM usuario
JOIN medico on usuario.idUsuario = medico.idUsuario
WHERE email = 'roberto.possarle@spmedicalgroup.com.br'
AND senha = '1234'