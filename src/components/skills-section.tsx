
import { skillsCategorizedData } from '@/data/skills';
import type { Skill, SkillCategory } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="group bg-card hover:bg-accent/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-base font-medium group-hover:text-primary transition-colors">
                {skill.name}
              </CardTitle>
              <skill.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent>
              {skill.level && <Badge variant="outline" className="text-xs group-hover:border-primary/50 group-hover:text-primary transition-colors">{skill.level}</Badge>}
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2 group-hover:opacity-0 transition-opacity duration-200 min-h-[2.5em]">
                {skill.description.substring(0, 60)}{skill.description.length > 60 ? '...' : ''}
              </p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs bg-popover text-popover-foreground p-3 rounded-md shadow-lg z-50">
          <p className="font-semibold text-sm mb-1">{skill.name}{skill.level ? ` (${skill.level})` : ''}</p>
          <p className="text-xs">{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My <span className="gradient-text">Skills</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a breakdown of the technologies and concepts I work with, categorized for clarity.
          </p>
        </div>
        <div className="space-y-12">
          {skillsCategorizedData.map((category: SkillCategory) => (
            <div key={category.categoryName}>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left gradient-text">{category.categoryName}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
