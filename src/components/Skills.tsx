import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
    color: "text-blue-400"
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"],
    color: "text-green-400"
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
    color: "text-purple-400"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
    color: "text-orange-400"
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["AWS", "Docker", "Kubernetes", "Redis", "GraphQL", "Supabase"],
    color: "text-cyan-400"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["REST APIs", "WebSocket", "OAuth", "CI/CD", "Git", "Testing"],
    color: "text-pink-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-card border-card-border hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted/50 rounded-full hover:bg-primary/20 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;