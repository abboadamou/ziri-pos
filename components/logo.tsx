import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="size-14 flex items-center justify-center flex-col bg-primary rounded-lg"
    >
      <div className="relative size-5">
        <Image src="assets/img/logo.svg" alt="logo" fill />
      </div>
      <span className="text-white text-[10px] mt-1 leading-none">Ziri-POS</span>
    </Link>
  );
};

export default Logo;
