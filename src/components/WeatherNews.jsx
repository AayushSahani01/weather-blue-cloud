import React, { useEffect } from "react";
import { useState } from "react";

const WeatherNews = () => {
    const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2025-09-25&to=2025-09-25&sortBy=popularity&apiKey=19e0d9a94cfd49dc9d68430fb5255840", {
      limit: 10,
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load blog posts", error.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather News & Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
          >
            {post.urlToImage && (
              <img
                src={post.urlToImage}
                alt={post.title}
                className="rounded-xl mb-3"
              />
            )}
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mt-2">
              {post.description || "No description available"}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium mt-3 inline-block
              hover:text-blue-700 w-full"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherNews;
