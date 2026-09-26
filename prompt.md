 Prompt aprimorado — Thumbnail YouTube Playwright

Crie uma **página HTML completa, responsiva e visualmente sofisticada** para servir como base de uma **thumbnail de YouTube sobre Playwright**.

 O objetivo não é criar uma landing page, mas sim um **layout visual de thumbnail 16:9**, com alto impacto visual, leitura imediata em tamanho pequeno e estética editorial/tech premium.

 ## Formato e composição

 - Proporção principal: **16:9**, simulando uma thumbnail de YouTube.
- Criar uma área visual central com aproximadamente **1280 × 720 px**.
- O conteúdo deve continuar legível quando reduzido para aproximadamente 320 px de largura.
- Trabalhar com uma composição assimétrica, editorial e sofisticada.
- Evitar aparência de template genérico de tecnologia.
- Evitar excesso de elementos, gradientes exagerados, efeitos neon e estética "cyberpunk".
- Criar bastante contraste entre fundo, tipografia e elementos gráficos.
- Usar profundidade através de blocos, bordas, linhas, sobreposições sutis e áreas de cor, sem exagerar em sombras.
- A composição deve transmitir **automação, testes, código, precisão e confiabilidade**.

 ## Paleta de cores

 Use exclusivamente esta paleta como base:

 - **Verde profundo — `#0F3D2E`**
  - Cor principal.
  - Deve ser o verde dominante da composição.
  - Evitar o tratamento "verde neon sobre preto".
- **Verde-musgo — `#3F6F52`**
  - Cor secundária.
  - Usar em superfícies, linhas, cartões, elementos de apoio e variações do fundo.
- **Verde-sinal — `#8FE3B0`**
  - Usar com extrema moderação.
  - Deve funcionar visualmente como um **"PASS" de relatório de teste**.
  - Reservar para pequenos destaques, indicadores de sucesso, checkmarks, status ou detalhes importantes.
- **Dourado — `#C99A44`**
  - Contraponto sofisticado.
  - Usar pontualmente em pequenos detalhes, linhas, números, indicadores ou elementos de destaque.
- **Marfim — `#F3EFE6`**
  - Para áreas claras, texto principal em fundos escuros ou blocos de contraste.
- **Tinta — `#12201A`**
  - Para texto escuro, fundos claros e elementos de contraste.

 A paleta deve funcionar tanto em uma composição predominantemente escura quanto em blocos claros.

 ## Tipografia

 Utilize as seguintes fontes:

 ### Newsreader

 Usar **Newsreader Italic** para:

 - título principal;
- palavras de impacto;
- possíveis elementos editoriais/wordmark.

 A tipografia deve trazer uma sensação **humana, editorial e sofisticada**, fugindo da estética genérica de interfaces SaaS.

 ### JetBrains Mono

 Utilizar **JetBrains Mono real**, carregada de uma fonte externa confiável, para:

 - tags;
- status;
- pequenos textos técnicos;
- labels;
- indicadores;
- snippets de código;
- elementos que remetam a terminal/testes automatizados.

 Ela deve parecer realmente uma fonte de terminal, e não apenas uma fonte monoespaçada genérica.

 ### Manrope

 Utilizar **Manrope** para:

 - textos auxiliares;
- descrições;
- informações secundárias;
- pequenos elementos de interface.

 ## Tema

 O assunto da thumbnail é:

 **PLAYWRIGHT**

 A composição deve comunicar imediatamente que o conteúdo está relacionado a:

 - automação de testes;
- testes end-to-end;
- navegador;
- código;
- qualidade de software;
- execução de testes;
- Playwright.

 Não transforme a thumbnail em uma interface completa. Ela deve parecer uma **peça editorial sobre tecnologia**.

 ## Elementos obrigatórios

 ### 1\. Logo pessoal

 Criar uma área reservada para:

 `logo.png`

 O arquivo possui formato **circular/redondo**.

 O espaço deve:

 - preservar o formato circular;
- não distorcer a imagem;
- possuir uma moldura ou tratamento visual coerente com a identidade;
- funcionar tanto sobre fundo escuro quanto claro;
- ficar integrado à composição, sem parecer simplesmente uma imagem jogada na página.

 Use algo como:

```
<img src="logo.png" alt="Logo">
```

 ### 2\. Imagem do Playwright

 Criar uma área específica e visualmente importante para uma imagem da ferramenta **Playwright**.

 Usar, por exemplo:

```
<img src="playwright.png" alt="Playwright">
```

 Caso a imagem não exista, o layout deve continuar funcionando perfeitamente com um **placeholder elegante**, claramente indicando onde inserir a imagem posteriormente.

 A área da imagem pode ter:

 - moldura;
- recorte editorial;
- sobreposição sutil;
- bordas;
- linhas técnicas;
- pequenos indicadores de teste.

 Evitar colocar a imagem dentro de um simples card branco genérico.

 ## Linguagem visual

 Criar uma estética que combine:

 **editorial + engenharia de software + terminal + relatório de testes**

 Imagine uma publicação técnica sofisticada, e não uma dashboard corporativa.

 Elementos visuais possíveis:

 - pequenos labels em JetBrains Mono;
- linhas finas;
- pequenos marcadores;
- números de teste;
- indicadores `PASS`;
- checkmarks;
- pequenos trechos de código;
- coordenadas ou metadados fictícios;
- divisórias editoriais;
- pequenos elementos dourados;
- áreas de respiro.

 O verde-sinal `#8FE3B0` deve aparecer pouco, justamente para que tenha impacto quando utilizado.

 ## Hierarquia textual

 Criar uma hierarquia clara para o título.

 O texto principal pode ser:

 **PLAYWRIGHT**

 E pode existir um subtítulo técnico menor, por exemplo:

 `END-TO-END TESTING`

 ou

 `TEST AUTOMATION`

 ou

 `BROWSER AUTOMATION`

 O título deve ser o elemento mais importante da composição.

 Não adicionar textos longos.

 A thumbnail precisa ser compreendida em **1–2 segundos**.

 ## Elementos técnicos

 Adicionar pequenos detalhes visuais inspirados em relatórios de execução de testes, por exemplo:

```
TEST RUN
PASS  24/24
E2E
BROWSER
AUTOMATION
```

 Esses elementos devem ser discretos e servir principalmente à composição visual.

 Não criar uma interface funcional de testes. São elementos **decorativos/editoriais**.

 ## Fundo

 O fundo deve possuir profundidade, mas permanecer limpo.

 Pode utilizar:

 - grandes blocos de `#0F3D2E`;
- variações com `#3F6F52`;
- áreas em `#F3EFE6`;
- linhas muito discretas;
- grids quase imperceptíveis;
- recortes geométricos;
- pequenos detalhes dourados.

 Não utilizar:

 - fundo preto puro;
- neon;
- excesso de glow;
- excesso de gradientes;
- estética gamer;
- excesso de elementos tecnológicos genéricos.

 ## Implementação

 Entregue **um único arquivo HTML completo**, contendo:

 - HTML;
- CSS;
- JavaScript apenas se realmente necessário;
- Google Fonts ou outra forma confiável de carregar:
  - Newsreader;
  - JetBrains Mono;
  - Manrope.

 O layout deve funcionar sem frameworks.

 Utilizar CSS moderno, preferencialmente:

 - CSS Grid;
- Flexbox;
- `aspect-ratio`;
- variáveis CSS para a paleta;
- `object-fit`;
- `clamp()` quando apropriado.

 Criar variáveis como:

```
:root {
  --deep-green: #0F3D2E;
  --moss: #3F6F52;
  --signal: #8FE3B0;
  --gold: #C99A44;
  --ivory: #F3EFE6;
  --ink: #12201A;
}
```

 ## Responsividade

 A composição principal deve preservar a proporção **16:9**.

 Em telas menores:

 - reduzir tipografia;
- manter a hierarquia;
- preservar o espaço do logo;
- preservar o espaço da imagem do Playwright;
- evitar que os elementos se sobreponham de maneira acidental.

 ## Resultado esperado

 O resultado final deve parecer uma **thumbnail profissional de um canal de tecnologia/engenharia de software**, com identidade visual forte e reconhecível.

 A sensação desejada é:

 > **"Um relatório de testes transformado em uma peça editorial."**

 O resultado deve ser elegante, técnico, humano e sofisticado — sem parecer uma interface SaaS genérica.

 Priorize **impacto visual, legibilidade e hierarquia**, e não quantidade de elementos.