import PublicRoutes from "./routes";
import { BasketProvider } from "./contexts/Basket";

export default function App() {
  return (
    <BasketProvider>
      <PublicRoutes />
    </BasketProvider>
  );
}
