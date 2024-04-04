import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Produtos } from "./src/model/Produtos";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Alimentos } from "./src/model/Alimentos";
import { Brinquedos } from "./src/model/Brinquedos";
import { Medicamentos } from "./src/model/Medicamentos";

export function main() {
  let opcao: number;
  let produtos: ProdutoController = new ProdutoController();
  let id: number;
  let nome: string;
  let tipo, preco: number;
  let alimentos, brinquedos, medicamentos: string;

  const tiposProdutos: string[] = ["Alimentos", "Brinquedos", "Medicamentos"];

  let p1 = new Alimentos(produtos.gerarId(), "Premier", 1, 99, "Racao");
  produtos.cadastrar(p1);
  let p2 = new Medicamentos(
    produtos.gerarId(),
    "Bravecto",
    3,
    150,
    "Antipulgas"
  );
  produtos.cadastrar(p2);
  let p3 = new Brinquedos(produtos.gerarId(), "Bola", 2, 150, "Bola");
  produtos.cadastrar(p3);

  while (true) {
    console.log(
      colors.fg.cyanstrong,
      "****************************************************",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "               PET SHOP DA JOY                      ",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "****************************************************",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "                                                    ",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          1 - Listar Todas os Produtos                          ",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          2 - Listar Produto pelo ID",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          3 - Cadastrar Produto              ",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          4 - Atualizar Produto              ",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          5 - Deletar Produto                        ",
      colors.reset
    );
    console.log(
      colors.fg.magentastrong,
      "          6 - Sair                                 ",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "                                                    ",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "****************************************************",
      colors.reset
    );
    console.log(
      colors.fg.cyanstrong,
      "                                                    ",
      colors.reset
    );

    console.log(
      colors.fg.yellowstrong,
      "Entre com a opcao desejada:                         ",
      colors.reset
    );
    opcao = readlinesync.questionInt("");

    if (opcao === 6) {
      console.log(colors.fg.magentastrong, "\nPet Shop da Joy!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(
          colors.fg.magentastrong,
          "\nLista dos Produtos: \n\n",
          colors.reset
        );
        produtos.listarTodas();

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.magentastrong,
          "\nLista Produto pelo ID: \n\n",
          colors.reset
        );
        id = readlinesync.questionInt("Id do Produto: ");
        produtos.procurarPorId(id);

        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.magentastrong,
          "\nCadastro de Produto: \n\n",
          colors.reset
        );
        nome = readlinesync.question("Digite o nome do Produto: ");
        tipo =
          readlinesync.keyInSelect(
            tiposProdutos,
            "Digite o tipo do Produto: ",
            { cancel: false }
          ) + 1;
        preco = readlinesync.questionFloat("Digite o Preço do Produto: ");

        switch (tipo) {
          case 1:
            alimentos = readlinesync.question("Digite o Alimento: ");
            produtos.cadastrar(
              new Alimentos(produtos.gerarId(), nome, tipo, preco, alimentos)
            );
            break;

          case 2:
            brinquedos = readlinesync.question("Digite o Brinquedo: ");
            produtos.cadastrar(
              new Brinquedos(produtos.gerarId(), nome, tipo, preco, brinquedos)
            );

            break;

          case 3:
            medicamentos = readlinesync.question("Digite o Medicamento: ");
            produtos.cadastrar(
              new Medicamentos(
                produtos.gerarId(),
                nome,
                tipo,
                preco,
                medicamentos
              )
            );
            break;
        }

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.magentastrong,
          "\nAtualize o Produto: \n\n",
          colors.reset
        );

        id = readlinesync.questionInt("Digite o ID do Produto: ", {
          limitMessage: "Número inválido!",
        });

        if (produtos.buscarNoArray(id) === null) {
          nome = readlinesync.question("Digite o nome do Produto: ");
          tipo =
            readlinesync.keyInSelect(
              tiposProdutos,
              "Digite o tipo do Produto: ",
              { cancel: false }
            ) + 1;
          preco = readlinesync.questionFloat("Digite o Preço do Produto: ");

          switch (tipo) {
            case 1:
              alimentos = readlinesync.question("Digite o Alimento: ");
              produtos.atualizar(
                new Alimentos(produtos.gerarId(), nome, tipo, preco, alimentos)
              );

              break;

            case 2:
              brinquedos = readlinesync.question("Digite o Brinquedo: ");
              produtos.atualizar(
                new Brinquedos(
                  produtos.gerarId(),
                  nome,
                  tipo,
                  preco,
                  brinquedos
                )
              );

              break;

            case 3:
              medicamentos = readlinesync.question("Digite o Medicamento: ");
              produtos.atualizar(
                new Medicamentos(
                  produtos.gerarId(),
                  nome,
                  tipo,
                  preco,
                  medicamentos
                )
              );

              break;
          }
        } else {
          console.log(
            `${colors.fg.redstrong}\nO id do produto: ${id} não foi encontrado!${colors.reset}`
          );
        }

        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.magentastrong,
          "\nQual produto você deseja deletar?: \n\n",
          colors.reset
        );
        id = readlinesync.questionInt(
          "Digite o id do produto que deseja deletar: "
        );
        produtos.deletar(id);

        keyPress();
        break;
      case 6:
        console.log(colors.fg.magentastrong, "\nAté Logo!\n\n", colors.reset);

        keyPress();
        break;

      default:
        console.log(
          colors.fg.magentastrong,
          "\nOpção Inválida!\n",
          colors.reset
        );

        keyPress();
        break;
    }
  }
}

export function sobre(): void {
  console.log("\n****************************************************");
  console.log(colors.fg.cyanstrong, "Projeto Desenvolvido por: ");
  console.log(
    colors.fg.cyanstrong,
    "Joyce Ramos                                            "
  );
  console.log(
    colors.fg.cyanstrong,
    "Bootcamp FullStack JS - Generation Brasil              "
  );
  console.log(colors.fg.cyanstrong, "github.com/joycervs");
  console.log(
    "*******************************************************",
    colors.reset
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
