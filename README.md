# Filtro de Lista

Projeto desenvolvido para o estudo dos conceitos básicos do Angular, como parte do curso **Angular: O Guia Definitivo** na Udemy.

## Sobre o Projeto

Aplicação que exibe uma lista de usuários com a possibilidade de filtrá-los por nome, status (ativo/inativo) e intervalo de datas. Os dados dos usuários são gerados com a biblioteca [Faker.js](https://fakerjs.dev/).

## Conceitos Praticados

- **Components** — criação e organização de componentes reutilizáveis (`UsersList`, `UserDetails`, `Filter`)
- **@Input / @Output** — comunicação entre componentes pai e filho
- **Pipes customizados** — transformação de dados na view:
  - `address` — formata o endereço completo
  - `phone` — formata número de telefone (10 ou 11 dígitos)
  - `status` — converte boolean em "Ativo" / "Inativo"
  - `dashIfEmpty` — exibe traço quando o valor está vazio
- **Angular Material** — componentes de UI (inputs, selects, tabela)
- **Módulos** — organização com `ComponentsModule` e `PipeModule`
- **Interfaces TypeScript** — tipagem com `IUser`, `IAddress` e `IFilterOptions`

## Tecnologias

- Angular 16
- Angular Material 16
- TypeScript 5
- date-fns
- Faker.js

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200` no navegador.

## Estrutura do Projeto

```
src/app/
├── components/
│   ├── filter/          # Componente de filtros (nome, status, datas)
│   ├── user-details/    # Exibe os detalhes de um usuário
│   └── users-list/      # Lista todos os usuários
├── interfaces/          # Tipagens (IUser, IAddress, IFilterOptions)
├── pipes/               # Pipes customizados
├── data/                # Dados mockados com Faker.js
└── utils/               # Funções utilitárias
```
