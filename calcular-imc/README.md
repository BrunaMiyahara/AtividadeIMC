Criação de um componente (CalculoIMC.jsx) e uma página de estilização específica para ele (CalculoIMC.css), dentro da pasta components em src.
Adição de imagens na pasta assets.
Modificação dos arquivos: App.jsx, App.css, index.html(somente para alteração do idioma da página) e index.css(exclusão para que não houvesse conflito entre estilizações). 

CalculoIMC.jsx:
Componente de função CalculoIMC exportação padrão(export default CalculoIMC)/importado no App.jsx utilizando módulos.
Estados: altura, peso, resultado e classificação controlados pelo useState.
Função anônima com evento sintético como parâmetro, para evitar que a página recarregue, atribuída a uma contante handleSubmit.
Dentro do return: 
vários divs a fim de estilização, e uma estrutura de formulário.
form com manipular de evento, o handleSubmit, atribuído ao evento onSubmit. 
inputs com valor padrão = estado (altura/peso); evento onChange, acionando em resposta um arrow function com evento sintético como parâmetro que chama a função (setAltura/setPeso) com o propósito de atualizar o valor do estado para o valor do Elemento DOM que disparou o evento; placeholder, "dica do que preencher no campo"; tipo de input number com o número mínimo e máximo aceitáveis, e step="any", "sem restrição no número de casas decimais".
button s, um para que quando clicado (onClick) realizasse um arrow function que iniciasse uma constante imc, que guarda o valor da conta imc, e atualiza o estado resultado (setResultado) e classificação (setClassificacao) com base nessa variável
p s para renderizar o resultado, classificação.
Por fim um img.

input onChange={() => {setAltura(e.target.value ? +e.target.value : "")}} 
(+) converte o valor da entrada, que é sempre uma string, em um número e se o campo estiver vazio( ? : ""), será mantido como uma string vazia, evita que 0 seja automaticamente colocado no input.

p {resultado ? resultado.toFixed(2) : 0} 
Verifica usando um operador ternário se resultado é verdadeiro, se for arredonda duas casas decimais e retorna o resultado como uma string, senão p 0 /p.


App.jsx
Importar o CalculoIMC utilizando módulo.

App.css
background-image: url("uma das imagens dentro da pasta assets").

CalculoIMC.css
Propriedades: valores; uso do flexbox.