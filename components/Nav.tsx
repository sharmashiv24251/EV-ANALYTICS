"use client";
import { ChartScatter, Columns3, Grid3x3, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const ICON_SIZE = 40;
  const ICON_COLOR = "#4b4da6";

  const links = [
    { href: "/", icon: <House size={ICON_SIZE} color={ICON_COLOR} /> },
    {
      href: "/chart/scatter",
      icon: <ChartScatter size={ICON_SIZE} color={ICON_COLOR} />,
    },
    {
      href: "/chart/parallel",
      icon: <Columns3 size={ICON_SIZE} color={ICON_COLOR} />,
    },
    {
      href: "/chart/heatmap",
      icon: <Grid3x3 size={ICON_SIZE} color={ICON_COLOR} />,
    },
  ];

  return (
    <nav className="flex flex-col items-center justify-between h-screen w-32 border-[#1f1f31] bg-[#151120] max-sm:fixed bottom-0 max-sm:h-14 max-sm:w-screen max-sm:border-t-2 max-sm:bg-[#151120]/20 max-sm:backdrop-blur-2xl">
      <div className="sm:pt-10">
        <Link href="/" className="max-sm:hidden">
          <Image src="/logo.svg" alt="logo" height={70} width={70} />
        </Link>
        <ul className="flex items-center gap-12 sm:flex-col sm:mt-32 mt-[5px]">
          {links.map(({ href, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center justify-center max-sm:scale-[80%] ${
                  pathname !== href ? "opacity-50" : ""
                }`}
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
