import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Send,
    // Twitch,
    // Twitter,
    // Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Mensagem enviada!",
                description: "Obrigado pela sua mensagem. Em breve entrarei em contato.",
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Entre em <span className="text-primary">Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tem um projeto em mente ou quer colaborar? Sinta-se à vontade para entrar em contato.
                    Estou sempre aberto a discutir novas oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Informações de Contato
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:hello@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        jpn.gomesilva@gmail.com

                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                    Meu perfil no LinkedIn
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Localização</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Brasília, DF, Brasil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Conecte-se comigo</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-nunes-gomes-da-silva-82367724a/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Seu Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="João pedro..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Sua Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Olá, gostaria de conversar sobre..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
