import { mergeProps, splitProps } from "solid-js"
import { cn } from "@/lib/utils"

export type TimelinePropsItem = Omit<
  TimelineItemProps,
  "isActive" | "isActiveBullet" | "bulletSize" | "lineSize"
> & {
  bulletSize?: number
}

export type TimelineProps = {
  items: TimelinePropsItem[]
  activeItem: number
  bulletSize?: number
  lineSize?: number
}

/*
  No bullet or line is active when activeItem is -1
  First bullet is active only if activeItem is 0 or more
  First line is active only if activeItem is 1 or more
*/

const Timeline: React.FC<TimelineProps> = (rawProps) => {
  const props = mergeProps({ bulletSize: 16, lineSize: 2 }, rawProps)

  return (
    <ul
      style={{
        "paddingLeft": `${props.bulletSize / 2}px`
      }}
    >
      {
        props.items.map((item, index) => (
          <TimelineItem
            key={item.title + `timeline-item` + index}
            title={item.title}
            description={item.description}
            bullet={item.bullet}
            isLast={index === props.items.length - 1}
            isActive={props.activeItem === -1 ? false : props.activeItem >= index + 1}
            isActiveBullet={props.activeItem === -1 ? false : props.activeItem >= index}
            bulletSize={props.bulletSize}
            lineSize={props.lineSize}
          />
        ))
      }
    </ul>
  )
}

export type TimelineItemProps = {
  title: React.ReactNode
  description?: React.ReactNode
  bullet?: React.ReactNode
  isLast?: boolean
  isActive: boolean
  isActiveBullet: boolean
  class?: string
  bulletSize: number
  lineSize: number
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const [local, others] = splitProps(props, [
    "class",
    "bullet",
    "description",
    "title",
    "isLast",
    "isActive",
    "isActiveBullet",
    "bulletSize",
    "lineSize"
  ])
  return (
    <li
      className={cn(
        "relative border-l pb-8 pl-8",
        local.isLast && "border-l-transparent pb-0",
        local.isActive && !local.isLast && "border-l-primary",
        local.class
      )}
      style={{
        "borderLeftWidth": `${local.lineSize}px`
      }}
      {...others}
    >
      <TimelineItemBullet
        lineSize={local.lineSize}
        bulletSize={local.bulletSize}
        isActive={local.isActiveBullet}
      >
        {local.bullet}
      </TimelineItemBullet>
      <TimelineItemTitle>
        {local.title}
      </TimelineItemTitle>
      <TimelineItemDescription>
        {local.description}
      </TimelineItemDescription>
    </li>
  )
}

export type TimelineItemBulletProps = {
  children?: React.ReactNode
  isActive?: boolean
  bulletSize: number
  lineSize: number
}

const TimelineItemBullet: React.FC<TimelineItemBulletProps> = (props) => {
  return (
    <div
      className={cn(
        `absolute top-0 flex items-center justify-center rounded-full border bg-background`,
        props.isActive && "border-primary"
      )}
      style={{
        width: `${props.bulletSize}px`,
        height: `${props.bulletSize}px`,
        left: `${-props.bulletSize / 2 - props.lineSize / 2}px`,
        borderWidth: `${props.lineSize}px`
      }}
      aria-hidden="true"
    >
      {props.children}
    </div>
  )
}

const TimelineItemTitle: React.FC<React.PropsWithChildren> = (props) => {
  return <div className="mb-1 text-base font-semibold leading-none">
    {props.children}
  </div>
}

const TimelineItemDescription: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className="text-sm text-muted-foreground">
      {props.children}
    </div>
  )
}

export { Timeline }
