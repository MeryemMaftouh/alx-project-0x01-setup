import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

type PostsPageProps = { posts: PostProps[] };

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addedPost, setAddedPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    setAddedPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        {/* Show the newly added post (if any) at the top */}
        {addedPost && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <PostCard
              title={addedPost.title}
              body={addedPost.body}
              userId={addedPost.userId}
              id={addedPost.id ?? 0}
              key={"new"}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }: PostProps) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
