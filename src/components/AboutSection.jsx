import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Full Stack 
            </h3>

            <p className="text-muted-foreground">
              Apaixonado por tecnologia, crio aplicações web que unem funcionalidade,
              performance e uma boa experiência para o usuário, utilizando ferramentas modernas.
            </p>

            <p className="text-muted-foreground">
              Estou sempre buscando aprender novas ferramentas e aprimorar minhas habilidades
              para desenvolver soluções eficientes, escaláveis e com código limpo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entrar em Contato
              </a>

              <a
                href="/curriculo.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                    Construção de sites e aplicações web com foco em responsividade,
                    performance e boas práticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Integração de Sistemas</h4>
                  <p className="text-muted-foreground">
                    Integração entre front-end, back-end e banco de dados,
                    garantindo comunicação eficiente entre as partes da aplicação.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Full Stack</h4>
                  <p className="text-muted-foreground">
                    Experiência em projetos que envolvem tanto o desenvolvimento do lado
                    cliente quanto do servidor, utilizando tecnologias modernas e eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
