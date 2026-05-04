import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        const data = await fetchUsers(controller.signal); // pass signal
        setUsers(data);
      } catch (err) {
        // ignore abort errors (important)
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    loadUsers();

    return () => controller.abort(); // cleanup
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="container">
      {users.map((user, index) => (
        <UserCard key={user.login?.uuid || index} user={user} />
      ))}
    </div>
  );
};

export default Home;