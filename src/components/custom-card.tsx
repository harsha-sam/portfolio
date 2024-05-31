import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CustomCardProps{
  title: string;
  description: string;
  footer?: JSX.Element;
  className?: string;
}
export default function CustomCard({ title, description, footer, className }: CustomCardProps) {
  return (
    <section className={cn("flex flex-col gap-2 md:gap-4 justify-center", className)}>
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {
              description.split('\n').map((line: string, index: number) => {
                return <p key={`${title}-line-${index}`} className="text-sm md:text-lg">
                  {line.trim()}
                </p>
              })
            }
          </CardDescription>
        </CardContent>
        {
          footer &&
          <CardFooter>
            { footer }
          </CardFooter>
        }
      </Card>
    </section>);
}