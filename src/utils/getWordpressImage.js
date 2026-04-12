export const getFeaturedImage = async (post) => {
  try {
    if (!post.featured_media) return null;
    console.log(post.featured_media);
    const res = await fetch(
      `https://qrhealth.sa/wp-json/wp/v2/media/${post.featured_media}`,
    );
    const data = await res.json();
    console.log(data);
    return data?.source_url || null;
  } catch (err) {
    console.error("Error fetching featured image:", err);
    return null;
  }
};
