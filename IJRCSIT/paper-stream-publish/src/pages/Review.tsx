
import { useState } from "react";
import { Calendar, Clock, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const Review = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingReviews = [
    {
      id: 1,
      title: "Machine Learning Applications in Climate Modeling",
      authors: ["Dr. Sarah Johnson", "Prof. Mike Chen"],
      category: "Environmental Science",
      assignedDate: "2024-05-28",
      dueDate: "2024-06-28",
      status: "pending",
      urgency: "medium"
    },
    {
      id: 2,
      title: "Quantum Computing Algorithms for Optimization Problems",
      authors: ["Dr. Alex Rodriguez"],
      category: "Computer Science",
      assignedDate: "2024-05-25",
      dueDate: "2024-06-25",
      status: "pending",
      urgency: "high"
    }
  ];

  const completedReviews = [
    {
      id: 3,
      title: "Deep Learning in Medical Image Analysis",
      authors: ["Prof. Lisa Wang", "Dr. James Park"],
      category: "Medicine",
      completedDate: "2024-05-20",
      decision: "accepted",
      status: "completed"
    },
    {
      id: 4,
      title: "Sustainable Urban Planning Strategies",
      authors: ["Dr. Emily Davis"],
      category: "Urban Studies",
      completedDate: "2024-05-15",
      decision: "revision-required",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-green-100 text-green-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Dashboard</h1>
            <p className="text-gray-600">Manage your peer review assignments</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Reviews</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Overdue</p>
                    <p className="text-2xl font-bold text-red-600">0</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Review Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
              <TabsTrigger value="completed">Completed Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="mt-6">
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{review.title}</CardTitle>
                          <CardDescription>
                            By {review.authors.join(", ")} • {review.category}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(review.status)} variant="secondary">
                            {review.status}
                          </Badge>
                          <Badge className={getUrgencyColor(review.urgency)} variant="secondary">
                            {review.urgency} priority
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Assigned: {review.assignedDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Due: {review.dueDate}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View Paper
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Start Review
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="space-y-4">
                {completedReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{review.title}</CardTitle>
                          <CardDescription>
                            By {review.authors.join(", ")} • {review.category}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(review.status)} variant="secondary">
                            {review.status}
                          </Badge>
                          <Badge 
                            className={review.decision === "accepted" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"} 
                            variant="secondary"
                          >
                            {review.decision.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            Completed: {review.completedDate}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View Review
                          </Button>
                          <Button variant="outline" size="sm">
                            View Paper
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Review;
