import { Produtos } from "../model/Produtos";
import { ProdutoRepository } from "../repository/ProdutosRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produtos> = new Array<Produtos>();
  public id: number = 0;

  procurarPorId(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if (buscaProduto !== null) buscaProduto.visualizar();
    else console.log("\nProduto não foi encontrado!");
  }

  listarTodas(): void {
    this.listaProdutos.forEach((produto) => {
      produto.visualizar();
    });
  }
  cadastrar(produto: Produtos): void {
    this.listaProdutos.push(produto);
    console.log("O Produto foi adicionado!");
  }
  atualizar(produto: Produtos): void {
    let buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
      console.log(`A produto número ${produto.id} foi Atualizado com êxito!`);
    } else console.log("\nO Produto não foi Encontrado!");
  }
  deletar(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if (buscaProduto !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log(`O Produto com Id ${id} foi Excluído com êxito!`);
    } else console.log("\nProduto não foi Encontrado!");
  }

  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(id: number): Produtos | null {
    for (let produtos of this.listaProdutos) {
      if (produtos.id === id) return produtos;
    }
    return null;
  }
}
