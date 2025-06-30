
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color: "blue" | "green" | "purple" | "orange";
}

const StatsCard = ({ icon: Icon, title, value, description, color }: StatsCardProps) => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow hover-scale">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${getColorClasses(color)}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
          <p className="text-sm font-medium text-slate-700 mb-1">{title}</p>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
