
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import "highlight.js/styles/github.css"; // thème de coloration

const inputHTML = `
  <h1>Introduction</h1>
      <p>Rehype est un outil JavaScript très pratique pour manipuler du HTML dans vos applications. 
      Il permet de transformer, nettoyer et enrichir le contenu HTML avant de l’afficher. 
      C’est idéal pour les blogs, les documents ou les plateformes où le contenu est dynamique.</p>

      <h2>Les avantages</h2>
      <p>Avec rehype, vous pouvez automatiquement ajouter des ID aux titres, rendre les titres cliquables, 
      optimiser le HTML, ou encore améliorer l’accessibilité. Cela rend vos articles plus lisibles 
      et interactifs pour vos utilisateurs.</p>

      <h2>Conclusion</h2>
      <p>En résumé, rehype est un outil flexible et puissant pour tout développeur React ou JavaScript 
      qui souhaite gérer du contenu HTML de manière dynamique et propre. Vous pouvez l’utiliser 
      pour vos blogs, documentation ou projets web avancés.
      </p>
`;

export default function RehypeDemo() {
  const file = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug) // ajoute des id
    .use(rehypeAutolinkHeadings, { behavior: "wrap" }) // ajoute liens sur titres
    .use(rehypeHighlight) // coloration syntaxique
    .use(rehypeStringify) // reconvertit en string HTML
    .processSync(inputHTML);

  return (
    <div
      className="prose max-w-none p-4 mt-20"
      dangerouslySetInnerHTML={{ __html: String(file) }}
    />
  );
}
