import React , {useEffect , useState} from "react";
import { getUserEmails } from "@/connecting/connecting";

const Histo = () => {

  const [loading, setLoading] = useState(true);
  const [historyData, setHistoryData] = useState(true);

    useEffect(() => {

        const fetchDetails = async () => {
            setLoading(true);
            await getUserEmails()
                .then((response) => {
                    setHistoryData(response.emails);
                })
                .catch((error) => {})
                .finally(() => {
                    setLoading(false);
                });
        };
        fetchDetails();
    }, []);

  if(!loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--black)] text-[var(--white)] p-6">
      <div className="w-full max-w-4xl bg-[var(--darkgrey)] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center ">History</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-[var(--grey)] text-[var(--white)]">
            <thead className="bg-[var(--grey)]">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Your Problem</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((entry, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[var(--darkgrey)]" : "bg-[var(--grey)]"
                  }`}
                >
                  <td className="px-4 py-2">{entry.createdAt.slice(0,10)}</td>
                  <td className="px-4 py-2">{entry.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Histo;
