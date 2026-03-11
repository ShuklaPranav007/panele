import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/TemplateCard";
import { templates } from "@/data/templates";

const TemplatesPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="container py-10 flex-1">
      <h1 className="text-3xl font-bold mb-2">Website Templates</h1>
      <p className="text-muted-foreground mb-8">Full website templates built with React and Tailwind CSS. Preview and use in your projects.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <TemplateCard key={t.id} template={t} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default TemplatesPage;
