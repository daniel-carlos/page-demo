import { Card, Image } from "@nextui-org/react"
import { FaRegStar } from "react-icons/fa"

export interface PlatformRank {
    platformName: string,
    platformRank: number,
    avatar?: string,
}
export interface PlatformItemProps {
    platformRank: PlatformRank
}
export const PlatformItem = ({ platformRank }: PlatformItemProps) => {
    return (
        <li className="py-1">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <Image
                        alt="Thomas image"
                        height="40"
                        width="40"
                        src={platformRank.avatar || "https://placehold.co/120x120"}
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

interface PlatformListProps {
    title: string;
    platforms: PlatformRank[]
}
export const PlatformList = ({ title, platforms }: PlatformListProps) => {
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