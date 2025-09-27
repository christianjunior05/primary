import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

type typage = {
  id: number;
  title: string;
  sub_title: string;
  slug: string;
  body: string;
  status: "published" | "draft";
  cover_photo_path: string;
  photo_alt_text: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
  categories: {
    id: number;
    name: string;
    slug: string;
    pivot: {
      post_id: number;
      category_id: number;
    };
  }[];
};

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState<typage | null>(null);

  const handleArticle = async () => {
    const response = await axios.get("https://blogingapp.roomcodetraining.com/api/posts");
    const allArticles: typage[] = response.data.data;

    // Cherche directement l’article
    const found = allArticles.find(
      (blog) => blog.id === parseInt(id || "0", 10)
    );

    if (found) {
      setArticle(found);
    }
  };

  useEffect(() => {
    handleArticle();
  }, [id]); // ⚡ dépend de l’id pour recharger si l’URL change

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-slate-900">
      <article className="prose prose-lg mx-auto mt-20">
        {article ? (
          <>
            <h1 className="text-center text-3xl font-bold mb-20">
              {article.title}
            </h1>
            <p>{article.body}</p>
          </>
        ) : (
          <p className="text-center text-gray-500">Chargement de l’article...</p>
        )}
      </article>
    </main>
  );
}
