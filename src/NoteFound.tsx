import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex text-jauneOr flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oups ! La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="bg-blue-600  text-blue font-dmserif px-4 py-2 rounded hover:bg-blue-700 transition">
        Retour à l'accueil
      </Link>
    </div>
  );
}
