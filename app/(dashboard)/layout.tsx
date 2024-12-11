import Sidebar from "@/components/sidebar";
import Basket from "@/components/basket";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased flex flex-col md:flex-row max-w-[1920px] mx-auto min-h-screen">
      <Sidebar />
      <div className="bg-gray-100/60 flex-1 px-4 py-5">
        <Header />
        {children}
      </div>
      <Basket />
    </div>
  );
}
