
import { skillsCategorizedData } from '@/data/skills';
import type { SkillCategory } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillCard from './skill-card';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>
        <div className="space-y-10 sm:space-y-12">
          {skillsCategorizedData.map((category: SkillCategory, categoryIndex: number) => (
            <Card 
              key={category.categoryName} 
              className="bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${0.3 + categoryIndex * 0.2}s` }}
            >
              <CardHeader className="p-4 sm:p-6 bg-primary/5">
                <CardTitle className="text-xl sm:text-2xl font-semibold gradient-text text-center md:text-left">{category.categoryName}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="animate-fade-in-up" 
                      style={{ animationDelay: `${0.4 + categoryIndex * 0.2 + skillIndex * 0.05}s` }}
                    >
                      <SkillCard skill={skill} />
                    </div>
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
