# Quais são os métodos HTTP e o que cada um faz ?

Os **métodos HTTP** indicam qual ação o cliente quer realizar sobre um recurso de uma API ou servidor.

 | Método | O que faz | Exemplo |
| --- | --- | --- |
| **GET** | Busca/consulta dados | Buscar um usuário |
| **POST** | Cria um novo recurso ou envia dados para processamento | Criar um usuário |
| **PUT** | Substitui completamente um recurso existente | Atualizar todos os dados de um usuário |
| **PATCH** | Atualiza parcialmente um recurso | Alterar apenas o e-mail |
| **DELETE** | Remove um recurso | Excluir um usuário |
| **HEAD** | Igual ao GET, mas retorna apenas os cabeçalhos, sem o corpo | Verificar se um recurso existe |
| **OPTIONS** | Informa quais métodos/opções são suportados | Verificar métodos permitidos pela API |
| **TRACE** | Retorna a requisição recebida para diagnóstico | Depuração de conexões HTTP |
| **CONNECT** | Estabelece um túnel para comunicação através de um proxy | HTTPS através de proxy |

### Os 5 mais importantes em APIs

 Imagine uma API de usuários:

```
GET /usuarios
```

 → Lista usuários.

```
GET /usuarios/10
```

 → Busca o usuário `10`.

```
POST /usuarios
```

 → Cria um novo usuário.

```
PUT /usuarios/10
```

 → Substitui os dados do usuário `10`.

```
PATCH /usuarios/10
```

 → Altera apenas parte dos dados do usuário `10`.

```
DELETE /usuarios/10
```

 → Exclui o usuário `10`.

 ### PUT x PATCH

 Essa é uma diferença que costuma gerar confusão:

 **PUT** normalmente representa uma **substituição completa**:

```
{
  "nome": "João",
  "email": "joao@email.com",
  "idade": 25
}
```

 **PATCH** representa uma **alteração parcial**:

```
{
  "email": "novo@email.com"
}
```

 Ou seja, se você só quer mudar o e-mail, `PATCH` é semanticamente mais adequado.

 Uma forma fácil de memorizar:

 > **GET = pegar**\
>  **POST = criar/enviar**\
>  **PUT = substituir**\
>  **PATCH = alterar parcialmente**\
>  **DELETE = apagar**