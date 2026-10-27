# FecaVagas

Portal acadêmico de oportunidades de estágio com foco em estudantes e iniciantes na área de tecnologia.

## Como executar
Abra `index.html` no navegador. Para editar, utilize seu editor de código favorito.

## Arquivos principais
- `index.html`: página inicial e cards de oportunidades.
- `login.html`: tela de login.
- `css/style.css`: identidade visual global, cabeçalho, botões e rodapé.
- `css/home.css`: estilos da página inicial.
- `css/login.css`: estilos da tela de login.
- `js/busca.js`: pesquisa e filtro das vagas na página inicial.

## Melhorias visuais desta versão
- Paleta visual unificada com azul-marinho, azul de ação e verde.
- Tipografia Inter, hierarquia de títulos e espaçamento mais consistente.
- Busca de vagas em destaque.
- Cards com bordas, sombras sutis e estados de hover.
- Ajustes responsivos para telas menores.
- Estados de foco visíveis para navegação por teclado.
- Metadados de idioma definidos como `pt-BR`.
- Conteúdo de exemplo das vagas mais direcionado a desenvolvimento e tecnologia.

## Funcionalidade implementada: busca de vagas
- Pesquise pelo cargo, nome da empresa ou requisitos técnicos.
- Filtre por modalidade: remoto, presencial ou híbrido.
- Combine o texto digitado com a modalidade selecionada.
- Veja a quantidade de resultados ou uma mensagem quando não houver correspondências.

### Como funciona
1. O HTML fornece o campo de busca, o seletor de modalidade e os cards das vagas.
2. O JavaScript lê o texto e a modalidade escolhida.
3. Cada card é comparado com os filtros. A propriedade `hidden` esconde os que não combinam.
4. A página atualiza a mensagem com a quantidade de vagas encontradas.

Observação: a busca funciona sobre as três vagas de exemplo já presentes no HTML. Login, cadastro e candidaturas continuam demonstrativos e não usam servidor ou banco de dados.
