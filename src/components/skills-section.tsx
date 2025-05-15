import { skillsData } from '@/data/skills';
import type { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="group bg-card hover:bg-accent/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-base font-medium group-hover:text-primary transition-colors">
                {skill.name}
              </CardTitle>
              <skill.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent>
              {skill.level && <Badge variant="outline" className="text-xs group-hover:border-primary/50 group-hover:text-primary transition-colors">{skill.level}</Badge>}
              <p className="text-xs text-muted-foreground mt-2 hidden sm:block group-hover:opacity-0 transition-opacity duration-200">{skill.description.substring(0,50)}...</p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs bg-popover text-popover-foreground p-3 rounded-md shadow-lg">
          <p className="font-semibold text-sm mb-1">{skill.name} ({skill.level})</p>
          <p className="text-xs">{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function SkillsSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About <span className="gradient-text">Me & My Skills</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate Full-Stack Developer with a keen eye for UI/UX and a love for building efficient, scalable, and beautiful web applications. My expertise spans across the MERN stack, Next.js, and cloud technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
