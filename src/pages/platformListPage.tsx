import DefaultLayout from "@/layouts/default";
import { Card } from "@nextui-org/react";
import { FaRegStar } from "react-icons/fa";


export default function RankingPage() {

  interface PlatformItemProps {
    platformRank: PlatformRank
  }
  const PlatformItem = ({ platformRank }: PlatformItemProps) => {
    return (
      <li className="py-1">
        <div className="flex items-center space-x-4 items-center">
          <div className="shrink-0">
            <img
              alt="Thomas image"
              height="40"
              width="40"
              src="https://placehold.co/120x120"
              className="rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{platformRank.platformName}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <FaRegStar />
            {platformRank.platformRank.toFixed(2)}
          </div>
        </div>
      </li>
    )
  }

  interface PlatformRank {
    platformName: string,
    platformRank: number,
  }
  interface PlatformListProps {
    title: string;
    platforms: PlatformRank[]
  }
  const PlatformList = ({ title, platforms }: PlatformListProps) => {
    return (
      <Card className="p-5">
        <div className="mb-4 flex justify-between ">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Mostrar todos
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {platforms.map((p, i) => <PlatformItem key={i} platformRank={p} />)}
          </ul>
        </div>
      </Card>
    )
  }


  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 container mx-auto">
        <header>
          <h2 className="text-2xl text-center">Ranking das Plataformas</h2>
          <p>com base na média das avaliações dos jogadores</p>
        </header>
        <main className="w-full">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <PlatformList title="Melhores Plataformas" platforms={[
              { platformName: "Plataforma Boa 1", platformRank: 4.98 },
              { platformName: "Plataforma Boa 2", platformRank: 4.56 },
              { platformName: "Plataforma Boa 3", platformRank: 4.16 },
              { platformName: "Plataforma Boa 4", platformRank: 4.01 },
              { platformName: "Plataforma Boa 5", platformRank: 4.00 },
            ]} />
            <PlatformList title="Piores Plataformas" platforms={[
              { platformName: "Plataforma Ruim 1", platformRank: 2.98 },
              { platformName: "Plataforma Ruim 2", platformRank: 2.56 },
              { platformName: "Plataforma Ruim 3", platformRank: 1.16 },
              { platformName: "Plataforma Ruim 4", platformRank: 1.01 },
              { platformName: "Plataforma Ruim 5", platformRank: 0.30 },
            ]} />
          </div>
        </main>
      </section>
    </DefaultLayout>
  );
}
