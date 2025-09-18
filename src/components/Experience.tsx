import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.",
    achievements: [
      "Increased application performance by 40% through optimization",
      "Led a team of 5 developers in agile environment",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
    achievements: [
      "Delivered 15+ successful client projects",
      "Reduced bug reports by 50% through comprehensive testing",
      "Implemented new features that increased user engagement by 35%"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupLab",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built responsive web applications and mobile interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
    achievements: [
      "Created reusable component library used across 10+ projects",
      "Improved website loading speed by 45%",
      "Mentored 3 junior developers in React best practices"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Remote",
    period: "2018 - 2019",
    description: "Started career building websites for small businesses. Gained experience with HTML, CSS, JavaScript, and basic backend technologies.",
    achievements: [
      "Completed 25+ website projects for local businesses",
      "Achieved 98% client satisfaction rate",
      "Self-taught React and modern development practices"
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