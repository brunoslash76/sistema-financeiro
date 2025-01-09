import { EyeIcon } from "@/components/icons/EyeIcon";

export type BalanceProps = {
  username: string;
}

export function Balance({username} : BalanceProps) {
  return (
    <div
      id="balance"
      className="bg-primary-400
                        flex 
                        w-full
                        rounded-lg
                        py-6
                        px-6
                        h-[400px]
                        w-[690PX]
                        text-white
                        relative
                        -z-20"
    >
      <img src='/Pixels1.png' alt='' width={180} height={178} className="absolute bottom-0 left-0 -z-10"/>    
      <img src='/Pixels2.png' alt='' width={180} height={178} className="absolute top-0 right-0 -z-10"/>
      <div className="w-1/2 h-full">
        <h1 className="text-h1 font-bold mb-6">{`Olá, ${username} :)`}</h1>
        Quinta feira, 09/09/2024
      </div>
      <div className="w-1/2 py-8 px-8 h-full flex-col flex items-center justify-center">
        <div
          id="eye"
          className="w-full flex items-center border-b-2 border-tertiary-400 pb-[16px]"
        >
          <span className="text-h2 font-bold mr-6">Saldo</span>
          <EyeIcon />
        </div>
        <div id="conta" className="pt-[16px] self-start">
          Conta corrente
        </div>
        <div id="valor" className="pt-[8px] text-[31px] self-start">
          R$ 2.500,00
        </div>
      </div>
    </div>
  );
}
