import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Database,
    skills: ["AWS", "Lambda", "S3", "ECS Fargate", "CloudFormation", "Event Bridge"],
    color: "text-blue-400"
  },
  {
    title: "DevOps & SRE", 
    icon: Server,
    skills: ["Terraform", "GitHub Actions", "CI/CD", "Docker", "Ansible", "Monitoring"],
    color: "text-green-400"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "TypeScript", "Node.js", "Bash", "Perl", "Django"],
    color: "text-purple-400"
  },
  {
    title: "Event-Driven Architecture",
    icon: Globe,
    skills: ["Step Functions", "API Gateway", "SQS", "MSK", "Kafka", "Microservices"],
    color: "text-orange-400"
  },
  {
    title: "Infrastructure as Code",
    icon: Palette,
    skills: ["Terraform", "CloudFormation", "CDK", "Azure DevOps", "IAM", "Secrets Manager"],
    color: "text-cyan-400"
  },
  {
    title: "Monitoring & Observability",
    icon: Smartphone,
    skills: ["Grafana", "Prometheus", "New Relic", "Splunk", "ELK Stack", "Zabbix"],
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