import { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import api from "../utils/interceptor";

const SubmitPaper = () => {
  const [authors, setAuthors] = useState([{ name: "", email: "", affiliation: "" }]);
  const [keywords, setKeywords] = useState([""]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");

  const addAuthor = () => {
    setAuthors([...authors, { name: "", email: "", affiliation: "" }]);
  };

  const removeAuthor = (index: number) => {
    if (authors.length > 1) {
      setAuthors(authors.filter((_, i) => i !== index));
    }
  };

  const addKeyword = () => {
    setKeywords([...keywords, ""]);
  };

  const removeKeyword = (index: number) => {
    if (keywords.length > 1) {
      setKeywords(keywords.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("abstract", abstract);
    if (file) formData.append("file", file);
    try {
      await api.post("/upload/thesis", formData, { headers: { "Content-Type": "multipart/form-data" } });
      // handle success
    } catch (err) {
      // handle error
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Paper</h1>
            <p className="text-gray-600">Share your research with the global academic community</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide the basic details about your paper</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Paper Title *</Label>
                  <Input id="title" placeholder="Enter your paper title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="abstract">Abstract *</Label>
                  <Textarea 
                    id="abstract" 
                    placeholder="Provide a brief summary of your research..."
                    rows={6}
                    value={abstract}
                    onChange={e => setAbstract(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subcategory">Subcategory</Label>
                    <Input id="subcategory" placeholder="e.g., Machine Learning" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Authors */}
            <Card>
              <CardHeader>
                <CardTitle>Authors</CardTitle>
                <CardDescription>Add all authors who contributed to this research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {authors.map((author, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Author {index + 1}</h4>
                      {authors.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAuthor(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Full Name *</Label>
                        <Input placeholder="Dr. John Smith" />
                      </div>
                      <div>
                        <Label>Email *</Label>
                        <Input placeholder="john.smith@university.edu" />
                      </div>
                      <div>
                        <Label>Affiliation *</Label>
                        <Input placeholder="Stanford University" />
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button type="button" variant="outline" onClick={addAuthor} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Author
                </Button>
              </CardContent>
            </Card>

            {/* Keywords */}
            <Card>
              <CardHeader>
                <CardTitle>Keywords</CardTitle>
                <CardDescription>Add relevant keywords to help others discover your research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {keywords.map((keyword, index) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      placeholder="Enter keyword" 
                      value={keyword}
                      onChange={(e) => {
                        const newKeywords = [...keywords];
                        newKeywords[index] = e.target.value;
                        setKeywords(newKeywords);
                      }}
                    />
                    {keywords.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeKeyword(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                
                <Button type="button" variant="outline" onClick={addKeyword}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Keyword
                </Button>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
                <CardDescription>Upload your paper and any supplementary materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Paper PDF *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PDF files up to 50MB</p>
                    <Input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
                  </div>
                </div>

                <div>
                  <Label>Supplementary Materials (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload additional files</p>
                    <p className="text-sm text-gray-500">ZIP, PDF, or other formats up to 100MB</p>
                    <Button variant="outline" className="mt-4">Choose Files</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Submit for Review
              </Button>
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPaper;
