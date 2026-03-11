import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";
import { components } from "@/data/pages";

const PageDetails = () => {
  const { id } = useParams();
  const component = components.find((c) => c.id == id);

  if (!component) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="container py-20 text-center flex-1">
          <h1 className="text-2xl font-bold">Page not found</h1>
          <Link to="/pages" className="text-primary hover:underline mt-4 inline-block">
            Back to pages
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-10 flex flex-col">
      <Navbar />
      <div className="container py-10 flex-1">
        <div className="flex justify-end mb-6">
          <Link
            to="/pages"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to pages
          </Link>
        </div>


        <div className="grid lg:grid-cols-1 gap-8">
          {/* Preview */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Preview</h2>
            <div className="   bg-white p-1 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <img src={component.image} alt="preview" />
              </div>
            </div>
          </div>

          {/* Code */}
          <div className="bg-black">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Code</h2>
            <CodeBlock code={component.code} />
          </div>
        </div>

        {/* Usage */}
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Example Usage</h2>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageDetails;
