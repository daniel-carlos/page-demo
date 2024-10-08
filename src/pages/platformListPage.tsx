import { PlatformList } from "@/components/platformItem";
import DefaultLayout from "@/layouts/default";

export default function RankingPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 container mx-auto">
        <header>
          <h2 className="text-2xl text-center">Ranking das Plataformas</h2>
          <p>com base na média das avaliações dos jogadores</p>
        </header>
        <main className="">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <PlatformList title="Melhores Plataformas" platforms={[
              { platformName: "Plataforma Boa 1", platformRank: 4.98, avatar: "https://i.pravatar.cc/40?u=a042581f4e29026024d" },
              { platformName: "Plataforma Boa 2", platformRank: 4.56, avatar: "https://i.pravatar.cc/40?u=a04258a2462d826712d" },
              { platformName: "Plataforma Boa 3", platformRank: 4.16, avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d" },
              { platformName: "Plataforma Boa 4", platformRank: 4.01, avatar: "https://i.pravatar.cc/40?u=a04258114e29026302d" },
              { platformName: "Plataforma Boa 5", platformRank: 4.00, avatar: "https://i.pravatar.cc/40?u=a04258114e29026702d" },
            ]} />
            <PlatformList title="Piores Plataformas" platforms={[
              { platformName: "Plataforma Ruim 1", platformRank: 2.98, avatar: "https://i.pravatar.cc/40?u=a04258114e290267021" },
              { platformName: "Plataforma Ruim 2", platformRank: 2.56, avatar: "https://i.pravatar.cc/40?u=a04258114e290267022" },
              { platformName: "Plataforma Ruim 3", platformRank: 1.16, avatar: "https://i.pravatar.cc/40?u=a04258114e29026d023" },
              { platformName: "Plataforma Ruim 4", platformRank: 1.01, avatar: "https://i.pravatar.cc/40?u=a04258114e290267024" },
              { platformName: "Plataforma Ruim 5", platformRank: 0.30, avatar: "https://i.pravatar.cc/40?u=a04258114e290267025" },
            ]} />
          </div>
        </main>
      </section>
    </DefaultLayout>
  );
}
