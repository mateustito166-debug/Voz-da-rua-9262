import type { ReactNode } from "react";
import { ChevronUp, ChartPie, FileText, LogOut, UserRound } from "lucide-react";
import { Logo } from "./logo";

type MenuItemProps = {
  icon: ReactNode;
  label: string;
};

function MapaIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="6.2" />
      <circle cx="12" cy="7.6" r="1.9" />
      <path d="M8.6 12.6c.8-1.5 2-2.2 3.4-2.2s2.6.7 3.4 2.2" />
      <path d="M12 15.2v3.3" />
      <path d="M7.5 18.6h9a1.6 1.6 0 0 1 1.6 1.6v.6H5.9v-.6a1.6 1.6 0 0 1 1.6-1.6Z" />
    </svg>
  );
}

function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <div className="flex h-10 cursor-default select-none items-center pl-[47px] text-white">
      <span className="flex w-6 items-center justify-center">{icon}</span>
      <span className="ml-[9px] font-inter text-[14px] font-medium tracking-[0.005em]">{label}</span>
    </div>
  );
}

type SubItemProps = {
  label: string;
  active?: boolean;
};

function SubItem({ label, active = false }: SubItemProps) {
  return (
    <div
      className={[
        "flex h-8 cursor-default select-none items-center rounded-[7px] pl-[11px] font-inter text-[12px] font-medium text-white",
        active ? "bg-[#619AF7]" : "",
      ].join(" ")}
    >
      {label}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="flex h-full shrink-0">
      <div className="flex h-full w-[288px] flex-col bg-[#173772]">
        {/* Brand */}
        <div className="flex items-center pl-[46px] pt-[34px]">
          <Logo size={45} />
          <span className="ml-[8px] font-inter text-[27px] font-semibold leading-none tracking-[-0.01em] text-white">
            Voz da Rua
          </span>
        </div>

        <div className="mx-[21px] mt-[28px] h-[2px] bg-white/45" />

        {/* Navigation */}
        <nav className="mt-[44px]">
          <MenuItem icon={<FileText size={19} strokeWidth={1.8} />} label="Demandas" />

          <div className="mx-[34px] mt-[9px] flex h-[41px] cursor-default select-none items-center rounded-[8px] bg-[#619AF7] pl-[12px] pr-[12px] text-white shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
            <span className="flex w-6 items-center justify-center">
              <UserRound size={19} strokeWidth={1.8} />
            </span>
            <span className="ml-[10px] font-inter text-[14px] font-medium">Perfil</span>
            <ChevronUp size={16} strokeWidth={2.2} className="ml-auto mr-[2px]" />
          </div>

          <div className="relative ml-[58px] mr-[39px] mt-[13px] h-[106px]">
            <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[#3F70C9]" />
            <div className="ml-[15px] flex flex-col gap-[5px]">
              <SubItem label="Meus dados" />
              <SubItem label="Prefeitura" active />
              <SubItem label="Equipe" />
            </div>
          </div>

          <div className="mt-[11px]">
            <MenuItem icon={<MapaIcon />} label="Mapa" />
          </div>
          <div className="mt-[10px]">
            <MenuItem icon={<ChartPie size={19} strokeWidth={1.8} />} label="Dashboard" />
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto">
          <div className="mx-[21px] h-[2px] bg-white/45" />
          <div className="flex h-[58px] cursor-default select-none items-center pl-[21px] text-white">
            <span className="font-inter text-[17px] font-semibold">Sair</span>
            <LogOut size={17} strokeWidth={2} className="ml-[8px]" />
          </div>
        </div>
      </div>
      <div className="h-full w-[16px] bg-[#619AF7]" />
    </aside>
  );
}
