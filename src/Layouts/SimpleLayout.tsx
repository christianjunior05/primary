import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <main>
      <Outlet /> {/* Ici s'affichent seulement les pages enfants */}
    </main>
  );
}
