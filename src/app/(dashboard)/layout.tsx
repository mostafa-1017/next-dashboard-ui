import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
  }: Readonly<{
    children:React.ReactNode;
}>) {
    return (
    <div className ="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:w-[8%] xl:w-[14%] bg-red-200 p-4">
          <Link 
          href="/"
           className="flex items-center justify-center gap-2"
           >
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="hidden lg:block">Scholario</span>
          </Link>
          <Menu/>
        </div>
        {/* right */}       
        <div className="w-[86%] md:w-[92%] xl:w-[86%] bg-blue-200">
          right
          {children}
        </div>   
    </div>  
    );
  }
