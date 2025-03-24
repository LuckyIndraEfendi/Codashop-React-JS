import { RouterProvider } from "react-router-dom";
import router from "./routes/root";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/utils";
import RootContextProvider from "./contexts/RootContextProvider";
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RootContextProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </RootContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
