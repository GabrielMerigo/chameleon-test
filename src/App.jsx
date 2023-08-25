import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
