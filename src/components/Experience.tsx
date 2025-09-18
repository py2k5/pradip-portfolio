import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Rackspace Australia",
    location: "Australia",
    period: "April 2025 - Present",
    description: "Leading Content Services application modernization, designing serverless event-driven solutions for AWS migration using Lambda, Step Functions, and CloudFormation.",
    achievements: [
      "Designed and built serverless event-driven architecture",
      "Created generic file ingestion solution with S3, Lambda, and Step Functions",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Integrated observability with Grafana/Prometheus"
    ]
  },
  {
    title: "Senior Cloud Consultant",
    company: "Cevo Australia (AWS Consulting Firm)",
    location: "Australia",
    period: "January 2022 - March 2025",
    description: "Led multiple cloud transformation projects including GitHub self-hosted runners, FinOps cost optimization, and large-scale cloud migrations.",
    achievements: [
      "Achieved $700K monthly AWS cost savings through automation",
      "Built scalable GitHub self-hosted runner system using ECS Fargate",
      "Migrated legacy MSATS system to AWS with >85% test coverage",
      "Implemented Infrastructure-as-Code using Terraform"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Firstwave Cloud Solutions",
    location: "Australia",
    period: "June 2019 - January 2022",
    description: "SRE-focused automatic deployment of cloud security products with emphasis on monitoring, alerting, and incident response automation.",
    achievements: [
      "Developed backend APIs and integrations",
      "Built CI/CD pipelines for automated deployment",
      "Implemented comprehensive monitoring and alerting systems",
      "Enhanced system reliability through SRE practices"
    ]
  },
  {
    title: "Network (Python) Developer",
    company: "Macquarie Group",
    location: "Australia",
    period: "August 2018 - May 2019",
    description: "Developed web-based portal for network infrastructure management and automated day-to-day network operations.",
    achievements: [
      "Built end-to-end self-service systems for DNS and load balancing",
      "Automated routine network device management tasks",
      "Integrated portal with legacy network systems",
      "Provided network health visualization dashboard"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, learning, and delivering exceptional results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary hidden lg:block" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block" />
                  
                  <Card className="lg:ml-20 bg-card border-card-border hover-glow">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-primary mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end text-muted-foreground text-sm">
                          <div className="flex items-center mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;