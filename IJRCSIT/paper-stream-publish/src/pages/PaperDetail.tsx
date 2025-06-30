
import { useState } from "react";
import { ArrowLeft, Download, Quote, Eye, Calendar, Users, Tag, ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const PaperDetail = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const paper = {
    id: 1,
    title: "Deep Learning Approaches for Natural Language Processing in Academic Research: A Comprehensive Survey and Future Directions",
    authors: [
      { name: "Dr. Sarah Chen", affiliation: "Stanford University", email: "sarah.chen@stanford.edu" },
      { name: "Prof. Michael Rodriguez", affiliation: "MIT", email: "m.rodriguez@mit.edu" },
      { name: "Dr. Emily Watson", affiliation: "Harvard University", email: "e.watson@harvard.edu" }
    ],
    abstract: "This comprehensive survey examines the current state and future directions of deep learning applications in natural language processing for academic research. We analyze over 200 recent publications, identifying key trends, methodological advances, and emerging challenges in the field. Our findings reveal significant progress in automated literature review, citation analysis, and research paper generation, while highlighting critical gaps in interpretability and domain adaptation. We propose a novel framework for evaluating NLP systems in academic contexts and discuss implications for future research directions.",
    fullAbstract: "Natural Language Processing (NLP) has undergone a revolutionary transformation with the advent of deep learning methodologies. This survey provides a comprehensive analysis of deep learning approaches specifically tailored for academic research applications. We systematically review 237 papers published between 2020-2024, covering key areas including automated literature review, research paper classification, citation analysis, knowledge extraction, and academic writing assistance. Our methodology involves both quantitative analysis of performance metrics and qualitative assessment of practical applicability. Key findings include: (1) Transformer-based models achieve state-of-the-art performance across most academic NLP tasks, (2) Domain-specific pre-training significantly improves performance on specialized academic corpora, (3) Multi-modal approaches combining text and citation networks show promising results for paper recommendation systems, and (4) Current models still struggle with interdisciplinary research and emerging field detection. We identify critical challenges including data bias, reproducibility issues, and the need for better evaluation frameworks. The survey concludes with a roadmap for future research, emphasizing the importance of developing more interpretable, fair, and robust NLP systems for academic applications.",
    category: "Computer Science",
    subcategory: "Natural Language Processing",
    keywords: ["Deep Learning", "Natural Language Processing", "Academic Research", "Literature Review", "Citation Analysis", "Transformer Models"],
    publishedDate: "2024-06-01",
    journal: "Journal of Artificial Intelligence Research",
    volume: "78",
    pages: "245-289",
    doi: "10.1613/jair.1.12345",
    citations: 45,
    downloads: 1203,
    views: 3457,
    status: "published",
    pdfUrl: "#",
    supplementaryUrl: "#"
  };

  const relatedPapers = [
    {
      id: 2,
      title: "Transformer Networks in Scientific Literature Mining",
      authors: ["Dr. James Park"],
      year: "2024",
      citations: 23
    },
    {
      id: 3,
      title: "Automated Research Paper Classification Using BERT",
      authors: ["Prof. Lisa Wang", "Dr. Alex Chen"],
      year: "2023",
      citations: 67
    },
    {
      id: 4,
      title: "Citation Analysis with Graph Neural Networks",
      authors: ["Dr. Maria Gonzalez"],
      year: "2023",
      citations: 34
    }
  ];

  const metrics = [
    { label: "Views", value: paper.views.toLocaleString(), icon: Eye },
    { label: "Downloads", value: paper.downloads.toLocaleString(), icon: Download },
    { label: "Citations", value: paper.citations.toString(), icon: Quote },
    { label: "Likes", value: "89", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Papers
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-blue-100 text-blue-800" variant="secondary">
                      {paper.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(paper.publishedDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl lg:text-3xl leading-tight">
                    {paper.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {paper.authors.map(author => author.name).join(", ")}
                    </div>
                  </div>

                  <CardDescription className="text-base mt-4">
                    Published in {paper.journal}, Vol. {paper.volume}, pp. {paper.pages}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="abstract" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="abstract">Abstract</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="metrics">Metrics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="abstract">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Abstract</h3>
                          <p className="text-gray-700 leading-relaxed">
                            {paper.fullAbstract}
                          </p>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-lg font-semibold mb-3">Keywords</h3>
                          <div className="flex flex-wrap gap-2">
                            {paper.keywords.map((keyword, index) => (
                              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                                <Tag className="h-3 w-3 mr-1" />
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="details">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Authors</h3>
                          <div className="space-y-3">
                            {paper.authors.map((author, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium">{author.name}</p>
                                  <p className="text-sm text-gray-600">{author.affiliation}</p>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Publication Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">DOI:</span>
                              <span className="ml-2 text-blue-600">{paper.doi}</span>
                            </div>
                            <div>
                              <span className="font-medium">Volume:</span>
                              <span className="ml-2">{paper.volume}</span>
                            </div>
                            <div>
                              <span className="font-medium">Pages:</span>
                              <span className="ml-2">{paper.pages}</span>
                            </div>
                            <div>
                              <span className="font-medium">Category:</span>
                              <span className="ml-2">{paper.subcategory}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="metrics">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((metric, index) => (
                          <Card key={index}>
                            <CardContent className="p-4 text-center">
                              <metric.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                              <div className="text-2xl font-bold">{metric.value}</div>
                              <div className="text-sm text-gray-600">{metric.label}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Action Buttons */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Supplementary
                  </Button>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      Like
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Quote className="h-4 w-4 mr-2" />
                    Cite Paper
                  </Button>
                </CardContent>
              </Card>

              {/* Related Papers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {relatedPapers.map((relatedPaper) => (
                      <div key={relatedPaper.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <h4 className="font-medium text-sm mb-1 line-clamp-2">
                          {relatedPaper.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1">
                          {relatedPaper.authors.join(", ")}
                        </p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{relatedPaper.year}</span>
                          <span>{relatedPaper.citations} citations</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperDetail;
