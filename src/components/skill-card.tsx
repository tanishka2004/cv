
import type { Skill } from '@/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="secondary"
            className="flex items-center justify-start gap-2 p-2 sm:p-3 text-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent/20 hover:shadow-md transform hover:-translate-y-0.5 w-full h-full"
          >
            <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="truncate text-left flex-grow">{skill.name}</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs bg-popover text-popover-foreground p-3 rounded-md shadow-lg z-50">
          <p className="font-semibold text-sm mb-1">{skill.name}{skill.level ? ` (${skill.level})` : ''}</p>
          <p className="text-xs">{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
