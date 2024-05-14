# DS delivery

Aplicação fullstack (web e mobile) de delivery.

## Backend

Foi criado uma API usando Java com Spring Boot.

### Rotas

#### Product

| Verbo HTTP | URL | Descrição |
| ---------- | --- | --------- |
| GET | /products | Obtém uma lista de produtos |

#### Order

| Verbo HTTP | URL | Descrição |
| ---------- | --- | --------- |
| GET | /orders | Obtém a lista de pedidos |
| POST | /orders | Cria um pedido |
| PUT | /{id}/delivered | Atualiza um pedido |

## Frontend e Mobile

Foi utilizado React para o frontend e React Native para o mobile. Ambas as aplicações apresentam uma interface para os usuário interagirem e realizarem um deliver. Ambas aplicações
se comunicam com a API.
