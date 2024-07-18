import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">RAG Boilerplate</h1>
      <p className="text-xl mb-6">
        Retrieval-Augmented Generation (RAG) is a powerful technique that combines the strengths of large language models with external knowledge retrieval. It enhances the accuracy and relevance of generated responses by incorporating information from a curated knowledge base.
      </p>
      <Button onClick={() => navigate("/generate")} size="lg">
        Try RAG Generation
      </Button>
    </div>
  );
};

export default Index;