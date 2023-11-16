# Projeto Trybesmith
## Este repositório contém o desenvolvimento do meu 23º projeto na Trybe

Neste projeto desenvolvi uma API usando _Typescript_ e _Sequelize_. O objetivo foi criar uma loja de itens medievais e endpoints para realizar operações de criação, leitura e atualização de informações.
Aqui precisei desenvolver as camadas de _Service_ e _Controllers_ da aplicação em seu código, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. 

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

**1 - Crie um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível no caminho (`/products`);
> Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
> O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
```

</p>
</details>

---

**2 - Crie um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível no caminho (`/products`);
> Os testes devem garantir no mínimo 50% de cobertura do código das camadas `Service` e `Controller`.

</p>
</details>

---

**3 - Crie um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível no caminho (`/orders`).
> Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.
> Os testes devem garantir no mínimo 60% de cobertura do código das camadas `Service` e `Controller`.
> De olho na dica 👀:** Todos os produtos são itens artesanais, portanto, únicos. Por isso são os produtos que contêm os `id`s dos pedidos.

</p>
</details>

---

**4 - Crie um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível no caminho (`/login`).

> A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

> Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

> O endpoint deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "password": "string"
}
```

> Os testes devem garantir no mínimo 70% de cobertura do código das camadas `Service` e `Controller`.

</p>
</details>

---

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.