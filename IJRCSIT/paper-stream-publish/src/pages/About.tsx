
import { Award, Users, Globe, BookOpen, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Open Access Publishing",
      description: "We believe research should be freely accessible to everyone, everywhere."
    },
    {
      icon: Shield,
      title: "Rigorous Peer Review",
      description: "Our expert reviewers ensure the highest quality standards for all publications."
    },
    {
      icon: Zap,
      title: "Fast Track Review",
      description: "Get your research published quickly with our streamlined review process."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with researchers from around the world in our diverse academic network."
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Tools for collaboration, discussion, and knowledge sharing among peers."
    },
    {
      icon: Award,
      title: "Quality Recognition",
      description: "Recognize and celebrate outstanding research contributions in all fields."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Research Papers" },
    { number: "25,000+", label: "Active Researchers" },
    { number: "150+", label: "Countries" },
    { number: "98%", label: "Author Satisfaction" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Editor",
      bio: "Former Harvard professor with 20+ years in academic publishing"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Head of Peer Review",
      bio: "Leading expert in peer review systems and academic quality assurance"
    },
    {
      name: "Dr. Emily Watson",
      role: "Director of Technology",
      bio: "Pioneer in digital publishing platforms and academic technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advancing Research Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              ResearchHub is a leading academic publishing platform dedicated to making 
              high-quality research accessible to everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're on a mission to democratize access to scientific knowledge and 
                  accelerate research discovery by providing a platform where researchers 
                  can share their findings with the global community.
                </p>
                <p className="text-lg text-gray-600">
                  Founded in 2020, ResearchHub has grown to become one of the most trusted 
                  platforms for academic publishing, serving researchers across all disciplines 
                  and career stages.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ResearchHub?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide the tools, community, and support you need to share your research 
                and make a meaningful impact in your field.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the experts behind ResearchHub's mission
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about publishing with us? We're here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-gray-600">info@researchhub.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Editorial Support</h3>
                <p className="text-gray-600">editorial@researchhub.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600">support@researchhub.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
