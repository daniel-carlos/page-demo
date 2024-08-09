import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen w-screen mb-5">
      <Navbar />
      <main className="w-full flex-grow">
        {children}
      </main>
    </div>
  );
}
