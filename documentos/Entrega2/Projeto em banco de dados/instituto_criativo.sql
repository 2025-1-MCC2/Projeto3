create database instituto_criativo;
use instituto_criativo;

create table membro(
id int primary key auto_increment,
nome varchar(255) not null,
email varchar(255) not null,
senha varchar(255)not null
);
CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  data_evento DATE NOT NULL,
  participante INT DEFAULT 0,
  colaborador INT DEFAULT 0,
  foto_url VARCHAR(500),
  local_evento VARCHAR(255)
);

create table participacao(
  data_participacao date,
  id_evento int,
  id_membro int,
  primary key (id_membro, id_evento),
  constraint `fk_id_evento` foreign key (id_evento) references eventos(id),
  constraint `fk_id_membro` foreign key (id_membro) references membro(id)
);

create table relatorio(
id int primary key auto_increment,
data_relatorio date,
objetivo varchar(5000),
progresso float,
observacao varchar(5000),
id_evento int,
constraint `fk_id_evento` foreign key (id_evento) references eventos(id)
);

create table kpi(
id int primary key auto_increment,
data_limite date,
descricao varchar(5000),
valor float
);

/* CREATE TABLE mede (
id_relatorio int,
id_kpi int,
progresso float,
primary key (id_relatorio, id_kpi),
constraint `fk_id_relatorio`foreign key (id_relatorio) references relatorio(id),
constraint `fk_id_kpi` foreign key (id_kpi) references kpi(id)
); *
