import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Card } from "flowbite-react";
import { ReactNode } from "react";


interface ActionCardProps {
  title: string
}

const ActionCard = ({ title }: ActionCardProps) => {
  return (
    <Card href="#" className="max-w-sm w-fit p-5">
      <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h6>
    </Card>
  )
}

interface FeatureAccordionProps {
  children: ReactNode
  title: string
}
const FeatureAccordion = ({ children, title }: FeatureAccordionProps) => {
  return [
    <AccordionTitle>{title}</AccordionTitle>,
    <AccordionContent>
      {children}
    </AccordionContent>,
  ]
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto" style={{ maxWidth: 600 }}>
        <section className="action-section items-center gap-4 py-8 md:py-10 flex justify-between">
          <ActionCard title="Criar Comentário" />
          <ActionCard title="Meus Comentários" />
          <ActionCard title="Para sua Plataforma" />
        </section>

        <section>
          <Accordion className="border-3">
            <AccordionPanel>
              <FeatureAccordion title="Tópico 1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
                </p>
              </FeatureAccordion>
              <FeatureAccordion title="Tópico 1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
                </p>
              </FeatureAccordion>
              <FeatureAccordion title="Tópico 1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
                </p>
              </FeatureAccordion>
            </AccordionPanel>
          </Accordion>
        </section>
      </div>
    </DefaultLayout >
  );
}


interface FeatureGroupeProps {
  children: ReactNode
}
const FeatureGroupe = ({ children }: FeatureGroupeProps) => {
  return (
    <Accordion className="border-3">
      <AccordionPanel>
        <FeatureAccordion title="Tópico 1">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
          </p>
        </FeatureAccordion>
        <FeatureAccordion title="Tópico 1">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
          </p>
        </FeatureAccordion>
        <FeatureAccordion title="Tópico 1">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, facere quasi, mollitia cum veritatis sit iusto minus provident quas minima voluptatem vitae itaque sequi ipsum, est quidem excepturi ratione.
          </p>
        </FeatureAccordion>
      </AccordionPanel>
    </Accordion>
  )
}

