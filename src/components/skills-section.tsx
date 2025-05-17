
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
          <Card className="group bg-card hover:bg-accent/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 pt-4 px-4">
              <CardTitle className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                {skill.name}
              </CardTitle>
              <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent className="px-4 pb-4">
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
          {/* Removed introductory paragraph as per previous request structure */}
        </div>
        <div className="space-y-10 sm:space-y-12">
          {skillsCategorizedData.map((category: SkillCategory) => (
            <Card key={category.categoryName} className="bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader className="p-4 sm:p-6 bg-primary/5">
                <CardTitle className="text-xl sm:text-2xl font-semibold gradient-text text-center md:text-left">{category.categoryName}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
