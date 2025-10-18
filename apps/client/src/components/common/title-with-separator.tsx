import { Separator } from '@/components/ui/separator'

export interface TitleWithSeparatorProps {
  title: string
}
export const TitleWithSeparator = ({ title }: TitleWithSeparatorProps) => {
  return (
    <div className="mb-20">
      <h1 className="gradient-text w-fit text-5xl font-black mx-auto leading-relaxed text-center">
        {title}
      </h1>
      <Separator className="mx-auto data-[orientation=horizontal]:h-[4px] max-w-20 gradient-background" />
    </div>
  )
}
