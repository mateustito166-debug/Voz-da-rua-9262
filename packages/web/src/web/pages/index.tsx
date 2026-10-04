import { Sidebar } from "../components/prefeitura/sidebar";
import { Cabecalho } from "../components/prefeitura/cabecalho";
import { FormularioPrefeitura } from "../components/prefeitura/formulario-prefeitura";

function Index() {
  return (
    <div className="flex h-screen min-h-[772px] w-full min-w-[1322px] overflow-hidden bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-white pl-[24px]">
        <Cabecalho />
        <FormularioPrefeitura />
      </main>
    </div>
  );
}

export default Index;
