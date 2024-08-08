import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="action-section flex items-center justify-center gap-4 py-8 md:py-10">
        <div className="action-card">Criar Comentário</div>
        <div className="action-card">Meus Comentários</div>
        <div className="action-card">Para sua Plataforma</div>
      </section>
      <section>
        
      </section>
    </DefaultLayout >
  );
}
