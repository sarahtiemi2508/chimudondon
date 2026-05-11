-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

--------------------------------
-- CONFIGURANDO BANCO DE DADOS--
--------------------------------
USE projindiv;
SHOW TABLES;

--------------------
-- CRIANDO TABELAS--
--------------------

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(60),
cpf CHAR(11),
grupoTaiko VARCHAR(100),
senha VARCHAR(50)
);

CREATE TABLE testePersonalidade(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
dtTentativa DATETIME,
resultado VARCHAR(50)
);

CREATE TABLE usuarioTP(
fkTP INT,
fkUsuario INT,
CONSTRAINT ctFkTP
FOREIGN KEY (fkTP)
REFERENCES testePersonalidade (id),
CONSTRAINT ctFkUsuarioTP
FOREIGN KEY (fkUsuario)
REFERENCES usuario(id)
);

CREATE TABLE quiz(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
dtTentativa DATETIME,
pontos INT
);

CREATE TABLE usuarioQuiz(
fkQuiz INT,
fkUsuario INT,
CONSTRAINT ctFkQuiz
FOREIGN KEY (fkQuiz)
REFERENCES quiz(id),
CONSTRAINT ctFkUsuarioQuiz
FOREIGN KEY (fkUsuario)
REFERENCES usuario(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

