create database instituto_criativo;
use instituto_criativo;

create table membro(
--cpf int primary key not null,
nome varchar(500) not null,
senha varchar(500) not null
);

create table iniciativa(
codigo int primary key auto_increment not null,
nome varchar(500),
situação varchar(500),
data_inciativa date
);

create table participacao(
  data_participacao date,
  codigo_iniciativa int,
  cpf_membro int,
  primary key (cpf_membro, codigo_inciativa),
  constraint `fk_codigo_iniciativa` foreign key (codigo_iniciativa) references iniciativa(codigo),
  constraint `fk_cpf_membro` foreign key (cpf_membro) references membro(cpf)
);

create table relatorio(
id int primary key auto_increment,
data_relatorio date,
parametro varchar(5000),
codigo_iniciativa int,
constraint `fk_codigo_iniciativa1` foreign key (codigo_iniciativa) references iniciativa(codigo)
);

create table kpi(
id int primary key auto_increment,
data_limite date,
descricao varchar(5000),
valor float
);

CREATE TABLE mede (
id_relatorio int,
id_kpi int,
primary key (id_relatorio, id_kpi),
constraint `fk_id_relatorio`foreign key (id_relatorio) references relatorio(id),
constraint `fk_id_kpi` foreign key (id_kpi) references kpi(id)
);
