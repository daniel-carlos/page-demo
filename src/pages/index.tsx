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
          <Accordion collapseAll className="border-3">
            <AccordionPanel>
              <AccordionTitle>What is Flowbite?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Is there a Figma file available?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <Accordion collapseAll className="border-3">
            <AccordionPanel>
              <AccordionTitle>What is Flowbite?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Is there a Figma file available?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <Accordion collapseAll className="border-3">
            <AccordionPanel>
              <AccordionTitle>What is Flowbite?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Is there a Figma file available?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </AccordionContent>
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
    <Accordion collapseAll className="border-3">
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

