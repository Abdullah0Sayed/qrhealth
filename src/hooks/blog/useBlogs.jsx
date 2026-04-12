import { useCallback, useEffect, useState } from "react";
import { blogService } from "../../services/blog/blogService";
import { useSelector } from "react-redux";

export default function useBlogs() {
  /** Blog Posts */
  const [posts, setPosts] = useState([]);

  const lang = useSelector((state) => state.webLanguage);

  /** Loading & Error */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await blogService.getPosts();
      console.log(data?.data);
      setPosts(data?.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    blogs: posts,
    loading,
    error,
    refetchPosts: fetchPosts,
  };
}
