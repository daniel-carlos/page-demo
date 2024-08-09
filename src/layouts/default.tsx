import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen mb-5">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-5">
        {children}
      </main>
    </div>
  );
}
