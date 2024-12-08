import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="hidden md:flex size-14 items-center justify-center flex-col"
    >
      <div className="relative size-9">
        <Image src="assets/img/logo.svg" alt="logo" fill priority />
      </div>
      <span className="text-primary text-[12px] mt-1 leading-none font-medium">
        ZIRI POS
      </span>
    </Link>
  );
};

export default Logo;
