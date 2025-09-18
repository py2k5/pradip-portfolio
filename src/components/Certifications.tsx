import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "AWS DevOps Engineer - Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-DOP-PRO-2024",
    description: "Advanced certification validating expertise in DevOps practices, CI/CD, and automation on AWS",
    verifyUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    logo: "🏆"
  },
  {
    title: "AWS Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023",
    description: "Validates technical expertise in designing and deploying scalable AWS systems",
    verifyUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    logo: "☁️"
  },
  {
    title: "AWS Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DVA-2023",
    description: "Demonstrates proficiency in developing and maintaining AWS applications",
    verifyUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
    logo: "⚛️"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "AWS-CLF-2022",
    description: "Foundation-level certification covering AWS cloud concepts and services",
    verifyUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    logo: "🌟"
  },
  {
    title: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-AIP-2024",
    description: "Validates knowledge of AI/ML services and best practices on AWS platform",
    verifyUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    logo: "🤖"
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialId: "HCP-TF-2023",
    description: "Validates skills in Infrastructure as Code using Terraform for cloud provisioning",
    verifyUrl: "https://www.hashicorp.com/certification/terraform-associate",
    logo: "🏗️"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group bg-card border-card-border hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn hover:bg-primary/10"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <Award className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Verify Credential
                  <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">
              {certifications.length} Professional Certifications Earned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;