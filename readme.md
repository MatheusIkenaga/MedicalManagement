# Documentação API do MedicalManagement

**Instalação**:

Para instalar o projeto:

```powershell
npm install
```

Após isso:

```powershell
npx sequelize-cli db:migrate
```

E para executar o projeto:

```powershell
yarn dev
```

A aplicação irá funcionar na porta 3333 (http://localhost:3333)

**Especialidades**:

**Index**

Criei uma API para caso algum desenvolvedor queira saber qual os IDs das especialidades dos médicos

Endpoint: [http://localhost:3333/especialidades](http://localhost:3333/especialidades)

Exemplo:

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled.png)

**Medicos**:

**Index**

Para listar todos os médicos:

Método: GET

Endpoint: [http://localhost:3333/medicos](http://localhost:3333/medicos)

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%201.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%201.png)

**ConsultarPorEspecialidade**

Para consultar os médicos por Especialidade

Método GET

Endpoint [http://localhost:3333/medicosespecialistas/](http://localhost:3333/medicosespecialistas/CIRURGIA_CABE%C3%87A_E_PESCO%C3%87O) + <ESPECIALIDADE> (com palavras separadas por _)

Exemplo: [http://localhost:3333/medicosespecialistas/CIRURGIA_CABEÇA_E_PESCOÇO](http://localhost:3333/medicosespecialistas/CIRURGIA_CABE%C3%87A_E_PESCO%C3%87O)

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%202.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%202.png)

**ConsultarMedico**

Esse método é para pesquisar os médicos por qualquer campo como nome, crm, celular, etc (Com exceção das especialidades)

Método: GET
Endpoint [http://localhost:3333/medicos/](http://localhost:3333/medicos/Doutor_tal3) +< CONTEUDO A SER PESQUISADO >(com palavras separadas por _)

Exemplo: [http://localhost:3333/medicos/Doutor_tal3](http://localhost:3333/medicos/Doutor_tal3)

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%203.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%203.png)

**DeletarMedico**

Para exclusão de Médicos da base de dados

Método: POST

Endpoint: [http://localhost:3333/deletarMedico](http://localhost:3333/deletarMedico)

Deve ser enviado no body o ID do médico:

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%204.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%204.png)

**InsertMedico**

Para criação de um novo médico na base de dados:

Método: POST

Endpoint: [http://localhost:3333/medicos](http://localhost:3333/medicos)

No corpo da requisição deve ser enviado os seguintes campos:

```json
{
	"nome": string[120],
	"crm": int[8],
	"tel_fixo": int[11],
	"tel_celular": int[11],
	"cep": int[8],
	"logradouro": string,
	"numero": int,
	"complemento": string,
	"bairro": string,
	"cidade": string,
	"uf": string[2],
	"especId1": int, (Vide Especialidades/Index)
	"especId2": int
}
```

Exemplo:

![Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%205.png](Documentac%CC%A7a%CC%83o%20API%20do%20MedicalManagement%20963ad5a1937c43da83b51a57dc311720/Untitled%205.png)

AtualizMedico

Para atualização do Médico na base de dados:

Método: PUT

Endpoint: [http://localhost:3333/atualizamedico](http://localhost:3333/atualizamedico)

No corpo da requisição deve ser enviado o id do médico a ser atualizado e todas as novas informações referente a ele:

```json
{

	"id": int
	"nome": string[120],
	"crm": int[8],
	"tel_fixo": int[11],
	"tel_celular": int[11],
	"cep": int[8],
	"logradouro": string,
	"numero": int,
	"complemento": string,
	"bairro": string,
	"cidade": string,
	"uf": string[2],
	"especId1": int, (Vide Especialidades/Index)
	"especId2": int

}
```