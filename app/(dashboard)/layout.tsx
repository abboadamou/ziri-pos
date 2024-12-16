import Sidebar from "@/components/sidebar";
import Basket from "@/components/basket";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased relative">
      <div className="flex max-w-[1920px] mx-auto flex-col md:flex-row overflow-y-scroll">
        <Sidebar />
        <div className="bg-gray-100/60 h-svh flex flex-col lg:pb-5 flex-1 overflow-y-scroll hide-scrollbar">
          <Header />
          {children}
        </div>
        <Basket />
      </div>
    </div>
  );
}
