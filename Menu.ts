import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";

export function main() {
  let opcao: number;

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
      console.log(colors.fg.magentastrong, "\nPet Shop da Joyce!");
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

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.magentastrong,
          "\nLista Produto pelo ID: \n\n",
          colors.reset
        );

        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.magentastrong,
          "\nQual o nome do Produto?: \n\n",
          colors.reset
        );

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.magentastrong,
          "\nAtualize o Produto: \n\n",
          colors.reset
        );

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.magentastrong,
          "\nQual produto você deseja deletar?: \n\n",
          colors.reset
        );

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
