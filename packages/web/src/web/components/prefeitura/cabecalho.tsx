type BotaoProps = {
  label: string;
  variant: "danger" | "primary";
  width: number;
};

function Botao({ label, variant, width }: BotaoProps) {
  return (
    <button
      type="button"
      tabIndex={-1}
      style={{ width }}
      className={[
        "flex h-[41px] cursor-default items-center justify-center rounded-[6px] font-poppins text-[15.5px] font-light tracking-[0.03em] text-white",
        variant === "danger" ? "bg-[#F42725]" : "bg-[#5580F7]",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export function Cabecalho() {
  return (
    <header>
      <div className="flex items-start justify-between pr-[33px]">
        <h1 className="mt-[16px] font-inter text-[32px] font-extrabold leading-[36px] tracking-[-0.03em] text-[#173772]">
          Prefeitura
        </h1>
        <div className="mt-[12px] flex gap-[16px]">
          <Botao label="Excluir conta" variant="danger" width={148} />
          <Botao label="Editar" variant="primary" width={90} />
        </div>
      </div>
      <div
        className="mr-[33px] mt-[17px] h-[2px]"
        style={{
          backgroundImage: "linear-gradient(to right, #5A73A3 0 10px, transparent 10px 18px)",
          backgroundSize: "18px 2px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </header>
  );
}
