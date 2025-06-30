import { useState } from "react";
import { Search, Plus, Filter, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PaperCard from "@/components/PaperCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPapers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Natural Language Processing in Academic Research",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Emily Watson"],
      abstract: "This paper presents novel deep learning methodologies for processing academic literature, with applications in automated review systems and citation analysis.",
      category: "Computer Science",
      publishedDate: "2024-06-01",
      citations: 45,
      downloads: 1203,
      status: "published"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions for Urban Development: A Comprehensive Analysis",
      authors: ["Dr. James Park", "Dr. Lisa Anderson"],
      abstract: "An in-depth analysis of renewable energy integration in urban planning, focusing on smart grid technologies and environmental impact assessment.",
      category: "Environmental Science",
      publishedDate: "2024-05-28",
      citations: 23,
      downloads: 847,
      status: "published"
    },
    {
      id: 3,
      title: "Machine Learning in Medical Diagnosis: Challenges and Opportunities",
      authors: ["Prof. Maria Gonzalez", "Dr. David Kim", "Dr. Rachel Thompson"],
      abstract: "This study explores the application of machine learning algorithms in medical diagnosis, addressing current limitations and future research directions.",
      category: "Medicine",
      publishedDate: "2024-05-25",
      citations: 67,
      downloads: 1456,
      status: "published"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 animate-fade-in">
            Advance Research.
            <span className="text-blue-600"> Share Knowledge.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join thousands of researchers worldwide in publishing, reviewing, and discovering groundbreaking academic papers.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search papers, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl"
              />
              <Link to="/browse">
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
                <Plus className="mr-2 h-5 w-5" />
                Submit Paper
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-500 px-8 py-3 rounded-xl">
                Browse Papers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              icon={BookOpen}
              title="Papers Published"
              value="12,847"
              description="Across all disciplines"
              color="blue"
            />
            <StatsCard
              icon={Users}
              title="Active Researchers"
              value="8,392"
              description="From 95 countries"
              color="green"
            />
            <StatsCard
              icon={Award}
              title="Peer Reviews"
              value="45,671"
              description="Completed this year"
              color="purple"
            />
            <StatsCard
              icon={TrendingUp}
              title="Citations"
              value="287,543"
              description="Total citations"
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Featured Papers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Featured Papers</h2>
            <Link to="/browse">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredPapers.map((paper) => (
              <Link to={`/paper/${paper.id}`} key={paper.id} className="block">
                <PaperCard paper={paper} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/browse">
              <Button variant="outline" size="lg" className="px-8">
                View All Papers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Computer Science",
              "Medicine",
              "Physics",
              "Biology",
              "Chemistry",
              "Mathematics",
              "Psychology",
              "Economics",
              "Engineering",
              "Environmental Science",
              "Social Sciences",
              "Philosophy"
            ].map((category) => (
              <Link to={`/browse?category=${category.toLowerCase().replace(" ", "-")}`} key={category}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer hover-scale">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-slate-700">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
