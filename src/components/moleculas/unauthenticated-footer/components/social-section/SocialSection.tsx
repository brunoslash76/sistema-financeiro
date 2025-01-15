import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LogoWhite } from "@/components/icons/LogoWhite";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { YTIconst } from "@/components/icons/YTIconst";

export function SocialSection() {
  return (
    <ul className="text-white text-[1rem]">
      <li className="mb-4">
        <p className="font-semibold text-base">Desenvolvido por GPF</p>
      </li>
      <li className="mb-4">
        <div className=" mx-auto">
          <LogoWhite />
        </div>
      </li>
      <li className="flex items-center gap-12">
        <InstagramIcon />
        <WhatsappIcon />
        <YTIconst />
      </li>
    </ul>
  )
}
