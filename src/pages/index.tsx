import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto" style={{ maxWidth: 600, height: 200 }}>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="/blog"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Blog</span>
        </Link>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="/ranking"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Ranking</span>
        </Link>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="/banner"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Banenr</span>
        </Link>
      </div>
    </DefaultLayout>
  );
}
