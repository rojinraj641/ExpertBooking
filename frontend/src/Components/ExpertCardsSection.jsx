import ExpertCard from "./ExpertCard";

const ExpertCardsSection = () => {

  // temporary dummy data (replace with API later)
  const experts = [
    {
      id: 1,
      name: "Rajkumar",
      category: "Web Development",
      rating: 4.5,
      experience: 2,
    },
    {
      id: 2,
      name: "Anita Sharma",
      category: "Career Guidance",
      rating: 4.8,
      experience: 5,
    },
    {
      id: 3,
      name: "Vikram Menon",
      category: "Data Science",
      rating: 4.6,
      experience: 4,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Find Your Expert
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Book sessions with top industry professionals
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

export default ExpertCardsSection;