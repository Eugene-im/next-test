import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useStateContext } from "@/context/context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export const Chart = () => {
  const { transactions } = useStateContext();
  const labels = transactions.map((transaction) => transaction.date);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(
          (el, index) =>
            !(Number(el.slice(-1)) % 2) &&
            Math.abs(Number(transactions[index].amount))
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(
          (el, index) =>
            Number(el.slice(-1)) % 2 &&
            Math.abs(Number(transactions[index].amount))
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
