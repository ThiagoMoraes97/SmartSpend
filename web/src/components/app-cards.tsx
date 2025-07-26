import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AppCardProps {  
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function AppCards({ title, content, icon: Icon }: AppCardProps) {
  return(
    <Card className="w-full h-full bg-card hover:bg-card-hover transition-colors">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
        {Icon && <Icon className="w-6 h-6 text-primary" />}
      </CardHeader>
      <CardContent className="text-3xl font-medium text-foreground">
        <strong>{content}</strong>
      </CardContent>
    </Card>
  )
}