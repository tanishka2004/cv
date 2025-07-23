import type { Skill } from '@/types';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Badge
      variant="secondary"
      className="flex items-center justify-start gap-2 p-2 sm:p-3 text-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent/20 hover:shadow-md transform hover:-translate-y-0.5 w-full h-full"
    >
      <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
      <span className="truncate text-left flex-grow">{skill.name}</span>
    </Badge>
  );
}
