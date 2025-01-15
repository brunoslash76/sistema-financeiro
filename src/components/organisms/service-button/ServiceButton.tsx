import Image from "next/image";
import Link from "next/link";

export type ServiceButtonProps = {
  link: string;
  text: string;
  imageLink: string;
};

export default function ServiceButton({
  link,
  text,
  imageLink,
}: ServiceButtonProps) {
  return (
    <Link href={link}>
      <div className="bg-white w-[173px] h-[145px] lg:w-[192px] lg:h-[167px] rounded-lg flexbox place-content-center place-items-center">
        <Image
          src={imageLink}
          alt=""
          width={60}
          height={60}
          className="mb-4 -mt-6"
        />
        <p className="text-p font-bold">{text}</p>
      </div>
    </Link>
  );
}
