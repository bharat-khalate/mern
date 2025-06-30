import { useEffect, useState } from "react";
import { User, Mail, MapPin, Calendar, FileText, Award, Edit3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import api from "../utils/interceptor";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get("/profile").then(res => setProfile(res.data)).catch(console.error);
  }, []);

  const userStats = profile?.stats || [];
  const publications = profile?.publications || [];
  const achievements = profile?.achievements || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    {profile?.initials || "SC"}
                  </div>
                  <CardTitle className="text-2xl">{profile?.name || "Dr. Sarah Chen"}</CardTitle>
                  <CardDescription>{profile?.title || "Professor of Computer Science"}</CardDescription>
                  <div className="flex justify-center mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      <Edit3 className="h-4 w-4 mr-1" />
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {profile?.email || "sarah.chen@stanford.edu"}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {profile?.affiliation || "Stanford University, CA"}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {profile?.memberSince || "Member since 2020"}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Research Interests</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">Climate Science</Badge>
                      <Badge variant="secondary">AI Ethics</Badge>
                      <Badge variant="secondary">Data Mining</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Research Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {userStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle>Biography</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <div className="space-y-4">
                          <Textarea 
                            placeholder="Write your biography here..."
                            rows={6}
                            defaultValue="Dr. Sarah Chen is a Professor of Computer Science at Stanford University, specializing in machine learning applications for climate science. Her research focuses on developing AI-driven solutions for environmental monitoring and sustainable agriculture. She has published over 50 peer-reviewed papers and serves on the editorial boards of several leading journals."
                          />
                          <div className="flex gap-2">
                            <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          Dr. Sarah Chen is a Professor of Computer Science at Stanford University, specializing in machine learning applications for climate science. Her research focuses on developing AI-driven solutions for environmental monitoring and sustainable agriculture. She has published over 50 peer-reviewed papers and serves on the editorial boards of several leading journals.
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="text-sm">Published "Machine Learning Applications in Climate Science"</p>
                            <p className="text-xs text-gray-500">2 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm">Completed review for "Sustainable Energy Systems"</p>
                            <p className="text-xs text-gray-500">1 week ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <User className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="text-sm">Updated research interests</p>
                            <p className="text-xs text-gray-500">2 weeks ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="publications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Publications</CardTitle>
                      <CardDescription>Your published and submitted papers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {publications.map((paper) => (
                          <div key={paper.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-lg">{paper.title}</h3>
                              <Badge 
                                variant="secondary" 
                                className={paper.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                              >
                                {paper.status.replace("-", " ")}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-2">{paper.journal} • {paper.year}</p>
                            {paper.citations > 0 && (
                              <p className="text-sm text-gray-500">Citations: {paper.citations}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>Awards & Recognition</CardTitle>
                      <CardDescription>Your academic achievements and honors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                            <Award className="h-8 w-8 text-yellow-600" />
                            <div>
                              <h3 className="font-medium">{achievement.title}</h3>
                              <p className="text-sm text-gray-600">{achievement.organization} • {achievement.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="Sarah" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Chen" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="sarah.chen@stanford.edu" />
                      </div>
                      
                      <div>
                        <Label htmlFor="affiliation">Affiliation</Label>
                        <Input id="affiliation" defaultValue="Stanford University" />
                      </div>
                      
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="https://your-website.com" />
                      </div>
                      
                      <Button className="w-full md:w-auto">Save Changes</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
