import { Produtos } from "../model/Produtos";

export interface ProdutoRepository {
  // Métodos do CRUD ( Create, Read, Update, Delete)
  procurarPorId(id: number): void;
  listarTodas(): void;
  cadastrar(produto: Produtos): void;
  atualizar(produto: Produtos): void;
  deletar(id: number): void;
}
