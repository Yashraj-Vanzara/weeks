import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [menu, setMenu] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${id}`
        );

        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const text = await res.text();
        if (!text) throw new Error("Empty response");

        let parsed;
        try {
          parsed = JSON.parse(text);
        } catch {
          throw new Error("Invalid JSON response");
        }

        setMenu(parsed?.data ?? parsed);
      } catch (err: any) {
        console.error("fetchMenu error:", err);
        setError(err?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  if (!id) return <div>Invalid restaurant id</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!menu) return <div>No data</div>;

  // safer: find the restaurant card instead of assuming index 2
  const restaurantCard =
    menu?.cards?.find((c: any) => {
      const t = c?.card?.card?.["@type"] ?? "";
      return typeof t === "string" && t.toLowerCase().includes("restaurant");
    }) ?? menu?.cards?.[2];

  const info = restaurantCard?.card?.card?.info;
  if (!info) return <div>No restaurant info available</div>;

  const { name, cuisines, locality, city, avgRating } = info;

  return (
    <div>
      <h1>{name}</h1>
      <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines ?? "N/A"}</p>
      <p>{locality ?? city}</p>
      {typeof avgRating !== "undefined" && <p>Rating: {avgRating}</p>}
    </div>
  );
};

export default RestaurantMenu;