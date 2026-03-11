import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Layers, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { templates } from "@/data/templates";

const TemplateDetailPage = () => {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);

  if (!template) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-20 text-center flex-1">
          <h1 className="text-2xl font-bold">Template not found</h1>
          <Link to="/templates" className="text-primary hover:underline mt-4 inline-block">
            Back to templates
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-10 flex-1">
        <Link to="/templates" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to templates
        </Link>

        {/* Hero preview */}
        <div className={`rounded-xl bg-gradient-to-br ${template.color} p-12 md:p-20 flex items-center justify-center mb-8`}>
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">{template.name}</h1>
            <p className="mt-3 text-white/80 max-w-md">{template.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Pages Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {template.pages.map((page) => (
                  <div key={page} className="rounded-lg border p-4 bg-secondary/30">
                    <span className="font-medium text-sm">{page}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" /> Components Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {template.componentsUsed.map((comp) => (
                  <span key={comp} className="rounded-full border px-3 py-1 text-xs font-medium">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions sidebar */}
          <div className="space-y-4">
            <button className="w-full rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition flex items-center justify-center gap-2">
              <Download className="h-4 w-4" /> Download Template
            </button>
            <button className="w-full rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition">
              View Source Code
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateDetailPage;
