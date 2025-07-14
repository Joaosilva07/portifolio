import { ArrowRight, ExternalLink, Github, ImageOff } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Front-end Energy",
        description:
            "Responsável pelo front-end do projeto EnergyMaster para a faculdade, utilizando React, TypeScript e Tailwind CSS.",
        image: "/projects/project1.png",
        tags: ["React", "TypeScript", "TailwindCSS", "Supabase"],
        githubUrl: "https://github.com/Joaosilva07/energy-front", 
    },
    {
        id: 2,
        title: "Slot777 (Android Studio)",
        description:
            "Sistema simples em Java para Android, simulando um jogo estilo caça-níquel.",
        image: "/projects/project2.png",
        tags: ["Android Studio", "JavaScript"],
        githubUrl: "https://github.com/Joaosilva07/Ceubet", 
    },
    {
        id: 3,
        title: "Sistema Loja (Back-end em Go)",
        description:
            "Projeto pessoal focado no desenvolvimento do back-end de um sistema de loja utilizando Go.",
        image: "/projects/project3.png",
        tags: ["React", "Go"],
        githubUrl: "https://github.com/Joaosilva07/Lojax", 
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Projetos <span className="text-primary">Recentes</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui estão alguns dos meus projetos recentes. Cada projeto foi cuidadosamente desenvolvido com atenção aos detalhes, desempenho e experiência do usuário.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden flex items-center justify-center bg-secondary">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={e => { e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback-icon').style.display = 'flex'; }}
                                    />
                                ) : (
                                    <span className="fallback-icon flex items-center justify-center w-full h-full">
                                        <ImageOff size={48} className="text-muted-foreground" />
                                    </span>
                                )}
                                {/* Fallback icon for broken image */}
                                <span className="fallback-icon hidden items-center justify-center w-full h-full">
                                    <ImageOff size={48} className="text-muted-foreground" />
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Joaosilva07"
                    >
                        Veja meu Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};