import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

interface ActionCardProps {
  title: string
}
const ActionCard = ({ title }: ActionCardProps) => {
  return (
    <Button className="primary max-w-sm w-fit p-5 flex-col justify-center" style={{ height: 130 }}>
      <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h6>
    </Button>
  )
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto" style={{ maxWidth: 600, height: 200 }}>
        <section className="action-section items-center gap-2 py-8 flex justify-between">
          <ActionCard title="Criar Comentário" />
          <ActionCard title="Meus Comentários" />
          <ActionCard title="Para sua Plataforma" />
        </section>

        <section>
          <div className="rounded-md border-2 ">
            <Accordion isCompact selectionMode="multiple">
              <AccordionItem key="1" aria-label="Tópico 1" title="Tópico 1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Tópico 2" title="Tópico 2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="rounded-md border-2 ">
            <Accordion isCompact selectionMode="multiple">
              <AccordionItem key="1" aria-label="Tópico 1" title="Tópico 1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Tópico 2" title="Tópico 2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="rounded-md border-2 ">
            <Accordion isCompact selectionMode="multiple">
              <AccordionItem key="1" aria-label="Tópico 1" title="Tópico 1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Tópico 2" title="Tópico 2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati natus velit eligendi ipsa eius perferendis ut nisi voluptatum, rerum saepe id cupiditate? Iusto voluptas id deleniti maxime voluptates ratione.
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
