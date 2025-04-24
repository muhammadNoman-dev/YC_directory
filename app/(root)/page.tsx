import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = searchParams;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Noman" },
      _id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "https://images.unsplash.com/photo-1677631234567",
      category: "Tech",
      title: "Lorem ipsum dolor",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
