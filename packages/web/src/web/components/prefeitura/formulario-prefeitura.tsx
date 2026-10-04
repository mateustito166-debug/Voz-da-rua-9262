import { useState, type ChangeEvent } from "react";

type CampoId =
  | "nome"
  | "email"
  | "cnpj"
  | "endereco"
  | "ibge"
  | "municipio"
  | "telefone"
  | "uf";

type Campo = {
  id: CampoId;
  label: string;
  labelSize?: "sm" | "md";
  underline?: boolean;
};

const CAMPOS: ReadonlyArray<Campo> = [
  { id: "nome", label: "Nome oficial da prefeitura", labelSize: "sm" },
  { id: "email", label: "E-mail institucional" },
  { id: "cnpj", label: "CNPJ" },
  { id: "endereco", label: "Endereço (rua, número, bairro, CEP)" },
  { id: "ibge", label: "Código IBGE do município" },
  { id: "municipio", label: "Município/Cidade (nome)" },
  { id: "telefone", label: "Telefone institucional", underline: true },
  { id: "uf", label: "UF" },
];

const VALORES_INICIAIS: Record<CampoId, string> = {
  nome: "Prefeitura Municipal de Belo Horizonte",
  email: "confocobh@pbh.gov.br",
  cnpj: "18.715.383/0001-40",
  endereco: "Avenida Afonso Pena, 1212, 30130-003",
  ibge: "3106200",
  municipio: "Belo Horizonte",
  telefone: "(31) 3429-8750",
  uf: "MG",
};

type CampoTextoProps = {
  campo: Campo;
  value: string;
  onChange: (id: CampoId, value: string) => void;
};

function CampoTexto({ campo, value, onChange }: CampoTextoProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(campo.id, e.target.value);

  return (
    <div className="flex flex-col">
      <label
        htmlFor={campo.id}
        className={[
          "flex h-[20px] items-center font-poppins text-[#111111]",
          campo.labelSize === "sm" ? "text-[13.5px]" : "text-[15px]",
        ].join(" ")}
      >
        {campo.label}
      </label>
      <input
        id={campo.id}
        name={campo.id}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        aria-label={campo.label}
        autoComplete="off"
        spellCheck={false}
        className={[
          "mt-[16px] h-[49px] w-[384px] rounded-[6px] bg-[#F6F6F6] px-[18px] font-poppins text-[15px] tracking-[0.005em] text-[#A3A3A3] outline-none",
          "shadow-[0_3px_4px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.08)]",
          campo.underline ? "underline decoration-[#AEAEAE] underline-offset-[3px]" : "",
        ].join(" ")}
      />
    </div>
  );
}

export function FormularioPrefeitura() {
  const [valores, setValores] = useState<Record<CampoId, string>>(VALORES_INICIAIS);

  const handleChange = (id: CampoId, value: string) => {
    setValores((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()}
      className="pl-[31px] pt-[31px]"
    >
      <h2 className="font-poppins text-[19px] font-medium leading-[24px] text-[#141414]">Informações</h2>

      <div className="mt-[24px] grid w-max grid-cols-[384px_384px] gap-x-[43px] gap-y-[31px]">
        {CAMPOS.map((campo) => (
          <CampoTexto
            key={campo.id}
            campo={campo}
            value={valores[campo.id]}
            onChange={handleChange}
          />
        ))}
      </div>
    </form>
  );
}
