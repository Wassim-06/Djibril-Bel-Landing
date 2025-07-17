import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card" // CardFooter ajouté
import {
  CheckCircle,
  Linkedin,
  PenTool,
  TrendingUp,
  Sparkles,
  Handshake,
  FileText,
  MessageCircle,
  Edit3,
  UserCheck,
  Quote,
  Calendar,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

export default function GBelLandingPage() {
  const linkedInProfileUrl = "https://www.linkedin.com/in/g-bel-9489ab356/"
  const calendlyUrl = "https://calendly.com/-gbel"

  return (
    <div className="flex flex-col min-h-dvh bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold text-lg">
              GB
            </div>
            <span className="font-bold text-xl text-foreground">G.Bel</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Services
            </Link>
            <Link href="#free-test" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Test Gratuit
            </Link>
            <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" passHref>
              <Button size="sm">
                Me contacter sur LinkedIn <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-accent font-semibold mb-2">VOTRE PLUME STRATÉGIQUE SUR LINKEDIN</p>
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
                Transformez Votre Expertise en <span className="text-accent">Influence</span>.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                J’aide les entrepreneurs à briller sur LinkedIn. Fini le manque de temps ou d'inspiration. Je conçois pour vous des contenus qui créent des relations, renforcent votre crédibilité et génèrent des revenus.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button size="lg" className="w-full sm:w-auto">
                    Prendre rendez-vous <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Voir mon profil LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Vous avez l'expertise. <br /> Je fournis la plume.
                </h2>
                <p className="text-muted-foreground text-lg">
                  Chaque jour, des professionnels passionnés passent à côté de leur audience. La raison ? Manque de temps, syndrome de la page blanche, ou difficulté à traduire des idées complexes en mots simples.
                </p>
                <p className="text-foreground font-semibold text-lg">
                  Mon rôle est de travailler dans l’ombre pour mettre en lumière ce qui le mérite : vos idées, vos projets, votre différence.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong className="text-foreground">Une plume fidèle à votre vision :</strong> Claire, structurée et authentique.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong className="text-foreground">Une approche gagnant-gagnant :</strong> Vous restez concentré sur votre cœur de métier, je m’occupe du reste.</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/djibril-bel-photo-1.jpg"
                  alt="Entrepreneur travaillant sur son ordinateur"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Plus que des Likes. Des <span className="text-accent">Résultats</span>. 📈
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Mon objectif : des contenus qui travaillent pour vous et rapportent bien plus que de la vanité. Visez la visibilité, la crédibilité et la croissance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-10 w-10 text-accent" />,
                  title: "Visibilité Accrue",
                  description: "Atteignez votre audience cible, étendez votre réseau et devenez une voix reconnue dans votre secteur.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-accent" />,
                  title: "Crédibilité Renforcée",
                  description: "Positionnez-vous comme l'expert de référence grâce à des contenus à forte valeur ajoutée qui inspirent confiance.",
                },
                {
                  icon: <Handshake className="h-10 w-10 text-accent" />,
                  title: "Opportunités Multipliées",
                  description: "Transformez votre présence en ligne en prospects qualifiés, partenariats stratégiques et nouvelles sources de revenus.",
                },
              ].map((benefit) => (
                <Card key={benefit.title} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow text-center pt-6">
                  <CardHeader className="items-center">
                    {benefit.icon}
                    <CardTitle className="mt-4 text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION OFFRES MISE À JOUR (STYLE SAAS) */}
        <section id="offers" className="w-full py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl flex items-center justify-center gap-3">
                <Briefcase className="h-10 w-10 text-accent" /> Trois offres selon votre ambition
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {/* Offre Éco */}
              <Card className="flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-bold text-green-500">🟢 Offre Éco</CardTitle>
                  <CardDescription>Pour garder une présence régulière sans pression.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>2 posts</strong> par semaine</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" passHref className="w-full">
                    <Button variant="outline" className="w-full">
                      Prendre RDV
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Offre Standard (Mise en avant) */}
              <Card className="flex flex-col h-full border-2 border-primary shadow-2xl relative transform scale-105">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">Le plus populaire</div>
                </div>
                <CardHeader className="flex-grow pt-8">
                  <CardTitle className="text-2xl font-bold text-primary">🟠 Offre Standard</CardTitle>
                  <CardDescription>Pour structurer votre visibilité et attirer vos premiers leads.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>3 posts</strong> par semaine</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Conseils de prospection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Suivi stratégique personnalisé</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" passHref className="w-full">
                    <Button className="w-full">
                      Prendre RDV
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Offre Premium */}
              <Card className="flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-bold text-blue-500">🔵 Offre Premium</CardTitle>
                  <CardDescription>Pour faire de LinkedIn un vrai levier de croissance.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>3 à 4 posts</strong> par semaine</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>2 carrousels</strong> par mois</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Accompagnement complet</strong></span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" passHref className="w-full">
                    <Button variant="outline" className="w-full">
                      Prendre RDV
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Free Test Offer Section */}
        <section id="free-test" className="w-full py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Convaincu ? Testez la Différence.
            </h2>
            <p className="mt-4 md:text-lg max-w-2xl mx-auto text-primary-foreground/80">
              L'efficacité d'un contenu se prouve par les faits. Je vous offre un premier aperçu de notre future collaboration, sans engagement.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Edit3 className="h-8 w-8" />, text: "Rédaction d'un post LinkedIn ✍️" },
                { icon: <FileText className="h-8 w-8" />, text: "Audit de votre bio 📄" },
                { icon: <UserCheck className="h-8 w-8" />, text: "Analyse de votre profil 📸" },
              ].map((item) => (
                <div key={item.text} className="p-6 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-4">
                  {item.icon}
                  <p className="font-semibold text-center">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-primary-foreground/80">Contenu, image, stratégie — chaque détail compte pour votre succès.</p>
            <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" passHref>
              <Button size="lg" variant="secondary" className="mt-8">
                Je Réclame mon Test Gratuit !
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold mb-2">MES SOLUTIONS</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Un Service Complet, Éthique et Sur Mesure
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { s: "Rédaction de contenu LinkedIn", d: "Des posts engageants et réguliers pour construire votre audience et asseoir votre expertise.", i: <PenTool /> },
                { s: "Prête-plume (Ghostwriting)", d: "Je deviens votre voix. Personne ne saura que ce n'est pas vous qui écrivez.", i: <Quote /> },
                { s: "Stratégie de contenu", d: "Un plan d'action clair pour définir vos piliers de contenu, votre calendrier et vos objectifs.", i: <Sparkles /> },
              ].map((service) => (
                <Card key={service.s} className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <span className="text-accent">{service.i}</span>
                      {service.s}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.d}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-12 text-center text-muted-foreground font-semibold">
              Et aussi : Rédaction publicitaire (Copywriting) | Rédaction technique | Articles
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Image
              src="/djibril-bel-photo.jpg"
              alt="Photo de G.Bel, stratège de contenu LinkedIn"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-6 shadow-lg ring-4 ring-accent/50"
            />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Analyse fine, stratégie claire, résultats concrets            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-xl mx-auto">
              Discutons de vos ambitions. Le meilleur moment pour commencer, c'était hier. Le deuxième meilleur, c'est maintenant.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" className="text-lg px-8 py-6">
                  <Calendar className="mr-3 h-6 w-6" /> Prendre rendez-vous
                </Button>
              </Link>
              <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <MessageCircle className="mr-3 h-6 w-6" /> DM sur LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} G.Bel. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}