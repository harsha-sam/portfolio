import { Timeline } from "./ui/timeline";
import { CareerType } from "@/types";

interface TimelineTitleProps extends Pick<CareerType, 'title' | 'subtitle' | 'date'> {}
interface TimelineDescriptionProps extends Pick<CareerType, 'title' | 'subtitle' | 'description'>{ }

interface CustomTimelineProps {
  data: CareerType[];
  activeItem: number;
}

function TimelineTitle({ title, subtitle, date }: TimelineTitleProps): JSX.Element {
  return (
    <div>
      <p className="text-lg md:text-xl mb-1">
        {title}
      </p>
      <p className="mb-1 md:text-lg">
        {subtitle}
      </p>
      <p className="text-md md:text-lg text-muted-foreground">
        {date}
      </p>
    </div>
  )
}

function TimelineDescription({ title, subtitle, description }: TimelineDescriptionProps): JSX.Element {
  return <>
    {
      description.split('\n').map((line, index) => {
        return <p key={`${title + subtitle}-line-${index}`} className="text-sm md:text-lg">
          {line.trim()}
        </p>
      })
    }
  </>
}

export default function CustomTimeline({ data, activeItem }: CustomTimelineProps) {
  const items: {
    title: JSX.Element,
    description: JSX.Element
  }[] = data.map((element) => {
    return {
      title: <TimelineTitle {...element} />,
      description: <TimelineDescription {...element} />
    }
  })

  return <Timeline items={items} activeItem={activeItem}/>
  
}