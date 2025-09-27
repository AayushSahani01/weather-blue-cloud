import React, { useEffect, useState } from "react";

const WeatherNews = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, ] = useState(1);
    const PAGE_LIMIT = 12; // Constant for number of items per page

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-09-25&to=2025-09-25&sortBy=popularity&pageSize=${PAGE_LIMIT}&page=${page}&apiKey=19e0d9a94cfd49dc9d68430fb5255840`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            setPosts(currentPosts => [...currentPosts, ...(data.articles || [])].slice(0, PAGE_LIMIT));
            setLoading(false);
        })
        .catch((error) => {
            setError("Failed to load blog posts: " + error.message);
            setLoading(false);
        });
    }, [page]);

    const handleLoadMore = () => {
      window.scrollTo({ top: 0,left: 0, behavior: 'smooth' });
        // setPage(prev => prev + 1);
    };

    if (loading) return <p className="text-center font-semibold mt-10 pt-[15rem]">Loading waiting ...</p>;
    if (error) return <p className="text-center text-red-500 mt-10 pt-[15rem] ">{error}</p>;

    return (
        <div className="max-w-5xl mx-auto py-10 pt-15">
            <h1 className="text-3xl font-bold mb-6">🌤 Weather News!</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {posts.slice(0, PAGE_LIMIT).map((post, i) => (
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
                            className="text-blue-500 font-medium mt-3 inline-block hover:text-blue-700 w-full"
                        >
                            Read More &rarr;
                        </a>
                    </div>
                ))}
            </div>

            {posts.length >= PAGE_LIMIT && (
                <div className="text-center mt-6">
                    <button 
                        onClick={handleLoadMore}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default WeatherNews;