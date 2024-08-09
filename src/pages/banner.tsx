import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";

export default function BannerPage() {
  return (
    <DefaultLayout>
      <section className="w-full">
        <div className="bg-blue-50 w-full flex flex-col justify-center items-start p-10" style={{
          height: 500, backgroundImage: "url(/4882066.jpg)", backgroundPosition: "center", backgroundSize: "cover"
        }}>
          <Button className="p-10 my-auto" variant="bordered">
            <div className="text-white text-lg">Perguntas Frequentes</div>
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
