import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem, Button, ButtonProps, Card } from "@nextui-org/react";

interface ActionCardProps {
  title: string,
  bg: string,
}
const ActionCard = ({ title, bg, ...rest }: ActionCardProps & ButtonProps) => {
  return (
    <Button className="primary p-5 flex-col justify-center text-white"
      style={{ height: 130, backgroundImage: `url(/${bg})`, backgroundPosition: "center", backgroundSize: "cover" }} {...rest}>
      <h4 className="text-1xl text-white font-bold tracking-tight dark:text-white">
        {title}
      </h4>
    </Button>
  )
}

export default function BlogPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto" style={{ maxWidth: 600, height: 200 }}>
        <section className="action-section items-center gap-2 py-8 flex justify-between">
          <ActionCard title="Criar Comentário" bg="26119320_7171426.jpg" color="primary" />
          <ActionCard title="Meus Comentários" bg="29018840_7529031.jpg" color="success" />
          <ActionCard title="Para sua Plataforma" bg="30350388_7629074.jpg" color="secondary" />
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
