// Definindo as variáveis
const titulo = "O Pequeno Príncipe";
const autor = "Antoine de Saint-Exupéry";
const paginas = 96;
const disponivel = true;

// Criando um objeto para armazenar as informações do livro
const livro = {
  titulo,
  autor,
  paginas,
  disponivel
};

// Exibindo as informações no console
console.log("Título:", titulo);
console.log("Autor:", autor);
console.log("Número de páginas:", paginas);
console.log("Disponível:", disponivel);
console.log("Livro:", livro);

// Verificando a disponibilidade do livro
if (livro.disponivel) {
  console.log(`O livro '${livro.titulo}' está disponível para empréstimo.`);
} else {
  console.log(`O livro '${livro.titulo}' não está disponível no momento.`);
}