import Sidebar from "@/components/sidebar";
import Basket from "@/components/basket";
import Header from "@/components/header";
import Filter from "@/components/filter";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased relative flex flex-col md:flex-row max-w-[1920px] mx-auto min-h-screen">
      <Sidebar />
      <div className="bg-gray-100/60 flex-1 px-5 py-5 md:ml-20 lg:mr-96">
        <Header />
        <Filter />
        {children}
      </div>
      <Basket />
    </div>
  );
}
