
import { Calendar, Download, Quote, Eye, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Paper {
  id: number;
  title: string;
  authors: string[];
  abstract: string;
  category: string;
  publishedDate: string;
  citations: number;
  downloads: number;
  status: string;
}

interface PaperCardProps {
  paper: Paper;
}

const PaperCard = ({ paper }: PaperCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Computer Science": "bg-blue-100 text-blue-800",
      "Environmental Science": "bg-green-100 text-green-800",
      "Medicine": "bg-red-100 text-red-800",
      "Physics": "bg-purple-100 text-purple-800",
      "Biology": "bg-emerald-100 text-emerald-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer group h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(paper.category)} variant="secondary">
            {paper.category}
          </Badge>
          <div className="flex items-center text-sm text-slate-500">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(paper.publishedDate)}
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
          {paper.title}
        </CardTitle>
        
        <div className="flex items-center text-sm text-slate-600">
          <User className="h-4 w-4 mr-1" />
          {paper.authors.slice(0, 2).join(", ")}
          {paper.authors.length > 2 && ` +${paper.authors.length - 2} more`}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-slate-600 mb-4 line-clamp-3">
          {paper.abstract}
        </CardDescription>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Quote className="h-4 w-4 mr-1" />
              {paper.citations}
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              {paper.downloads.toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/paper/${paper.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </Link>
          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaperCard;
