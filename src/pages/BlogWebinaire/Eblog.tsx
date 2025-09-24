import  { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

// Simulation d'articles
const simulateArticles = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  titre: `Article ${i + 1}`,
  contenu: `# Contenu Markdown de l'article ${i + 1}\n\nCeci est un **exemple**.`,
  likes: Math.floor(Math.random() * 10),
  categories: ["Tech", "Science", "Lifestyle"].slice(0, Math.floor(Math.random() * 3) + 1),
}));

type Article = {
  id: number;
  titre: string;
  contenu: string;
  likes: number;
  categories: string[];
};

export default function BlogTest() {
  // --- Markdown editor ---
  const [contenu, setContenu] = useState("");

  const handlePublish = () => {
    alert("Article publié en frontend (simulation) !");
    console.log({ contenu });
    setContenu("");
  };

  // --- Pagination infinie ---
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const newArticles = simulateArticles.slice((page - 1) * perPage, page * perPage);
    setArticles(prev => [...prev, ...newArticles]);
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      if (page * perPage < simulateArticles.length) {
        setPage(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  // --- Likes simulation ---
  const handleLike = (id: number) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, likes: a.likes + 1 } : a));
  };

  return (
    <div className="mt-32" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Éditeur Markdown</h2>
      <textarea
        value={contenu}
        onChange={(e) => setContenu(e.target.value)}
        rows={10}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handlePublish}>Publier</button>

      <h2 style={{ marginTop: "40px" }}>Articles</h2>
      {articles.map(article => (
        <div key={article.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{article.titre}</h3>
          <ReactMarkdown>{article.contenu}</ReactMarkdown>
          <p>Categories: {article.categories.join(", ")}</p>
          <button onClick={() => handleLike(article.id)}>👍 {article.likes}</button>
        </div>
      ))}
    </div>
  );
}
