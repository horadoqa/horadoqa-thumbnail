# Commit Semântico (Semantic Commit)

Commit Semântico é uma convenção para escrever mensagens de commit no Git de forma padronizada, clara e descritiva. Seu objetivo é facilitar a compreensão das alterações realizadas no código, melhorar a comunicação entre desenvolvedores e automatizar processos, como a geração de versões e changelogs.

Essa convenção é conhecida como Conventional Commits.

## 1. Como funciona?

A mensagem de um commit semântico segue uma estrutura padrão:

text
```
tipo(escopo): descrição da alteração
```

- tipo: indica a natureza da alteração realizada.
- escopo (opcional): identifica o módulo, componente ou parte do sistema afetada.
- descrição: resume a mudança de forma objetiva.

Por exemplo:

text
```
feat(auth): adiciona autenticação com Google
```

Nesse caso:

- `feat`: indica a criação de uma nova funcionalidade.
- `auth`: identifica o módulo de autenticação.
- `adiciona autenticação com Google`: descreve a alteração realizada.

## 2. Principais tipos de commits

| Tipo | Significado | Quando utilizar |
| --- | --- | --- |
| `feat` | Feature | Adicionar uma nova funcionalidade. |
| `fix` | Fix | Corrigir um bug ou defeito. |
| `docs` | Documentation | Alterar ou adicionar documentação. |
| `style` | Style | Alterações de formatação sem mudar a lógica do código. |
| `refactor` | Refactoring | Melhorar a estrutura do código sem alterar seu comportamento externo. |
| `test` | Tests | Adicionar ou modificar testes. |
| `perf` | Performance | Melhorar o desempenho da aplicação. |
| `build` | Build | Alterar ferramentas de build ou dependências relacionadas à compilação. |
| `ci` | Continuous Integration | Modificar configurações de integração contínua. |
| `chore` | Tarefa geral | Realizar tarefas de manutenção que não se encaixam nos outros tipos. |
| `revert` | Reversão | Reverter um commit anterior. |

## 3. Exemplos práticos

Veja como aplicar a convenção em situações do dia a dia.


| Tipo      | Exemplo  | Descrição           |
|-----------|----------|---------------------|
Nova funcionalidade: | `feat(usuario): adiciona cadastro de usuários` | Uma nova funcionalidade foi implementada.
Correção: | `fix(login): corrige validação de senha` | Um problema existente foi corrigido.
Documentação: | `docs(readme): atualiza instruções de instalação` | A documentação do projeto foi atualizada.
Refatoração: | `refactor(api): simplifica tratamento de erros` | O código foi reorganizado sem alterar seu comportamento externo.
Testes: | `test(pagamento): adiciona testes de reembolso` | Foram adicionados testes para validar o comportamento do sistema.

## 4. Commit semântico com descrição detalhada

Quando uma alteração exige mais contexto, é possível adicionar um corpo e um rodapé à mensagem.


```text
feat(pagamento): adiciona suporte a Pix

Implementa a criação de cobranças via Pix
e permite consultar o status do pagamento.

Closes #123
```

Nesse exemplo:

- A primeira linha resume a alteração.
- O corpo explica os detalhes da implementação.
- O rodapé referencia uma tarefa ou issue relacionada.

Também é possível indicar uma alteração incompatível com versões anteriores (breaking change):


```text
feat(api)!: altera formato da resposta de usuários
```

O caractere `!` indica uma mudança incompatível. Outra forma é utilizar `BREAKING CHANGE:` no rodapé da mensagem.

## 5. Qual é a relação com versionamento semântico?

Os commits semânticos podem ser usados para automatizar o versionamento seguindo o padrão Semantic Versioning (SemVer), cuja versão tem o formato:

`MAJOR.MINOR.PATCH`

- MAJOR: mudanças incompatíveis com versões anteriores.
- MINOR: novas funcionalidades compatíveis com versões anteriores.
- PATCH: correções compatíveis com versões anteriores.

Em fluxos convencionais, a relação costuma ser:

| Commit | Impacto típico na versão |
| --- | --- |
| `fix` | PATCH |
| `feat` | MINOR |
| `BREAKING CHANGE` | MAJOR |

Essa relação depende das ferramentas e das regras de versionamento configuradas no projeto. Nem todo commit gera automaticamente uma nova versão.

## 6. Boas práticas

Para escrever bons commits semânticos:

- Utilize verbos que descrevam claramente a alteração.
- Seja objetivo e evite mensagens genéricas como `ajustes`, `alterações` ou `correções diversas`.
- Faça commits pequenos, com alterações relacionadas entre si.
- Use o escopo quando ele ajudar a identificar a parte do sistema modificada.
- Mantenha um padrão consistente na equipe.
- Descreva o que foi alterado, e não apenas que o código foi modificado.

## 7. Como criar um commit semântico no Git?

O processo é igual ao de um commit comum: o que muda é o padrão da mensagem.

bash
```
git add .
git commit -m "feat(produto): adiciona filtro por categoria"
```

Para corrigir um problema:

bash
```
git commit -m "fix(carrinho): corrige cálculo do frete"
```

Para atualizar a documentação:

bash
```
git commit -m "docs(api): documenta endpoint de produtos"
```

## Conclusão

O Commit Semântico é uma prática importante para manter o histórico do Git organizado e compreensível. Ele ajuda desenvolvedores a identificar rapidamente o propósito de cada alteração, facilita revisões de código e permite automatizar tarefas de versionamento e documentação.

Em projetos individuais, melhora a organização. Em equipes, contribui para a padronização do desenvolvimento e para a manutenção do software ao longo do tempo.