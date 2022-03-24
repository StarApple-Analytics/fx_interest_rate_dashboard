import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { QueryClientProvider, QueryClient } from "react-query";
import browserHistory from "Common/history";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: 60000 },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter history={browserHistory} client={queryClient}>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
