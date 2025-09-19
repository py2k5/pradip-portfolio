import { Github, Linkedin, Twitter, Mail, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/py2k5"
    description: "View my automation scripts and infrastructure code",
    followers: "DevOps Projects",
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/pradip-kumar-aws",
    description: "Connect with me professionally and view my AWS journey",
    followers: "Cloud Community",
    color: "hover:text-blue-400"
  },
  {
    name: "AWS Profile",
    icon: Globe,
    url: "https://aws.amazon.com/certification/",
    description: "View my AWS certifications and cloud expertise",
    followers: "6 AWS Certs",
    color: "hover:text-orange-400"
  },
  {
    name: "Terraform Registry",
    icon: FileText,
    url: "https://registry.terraform.io/",
    description: "Explore my Infrastructure as Code modules",
    followers: "IaC Expert",
    color: "hover:text-purple-400"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:pradip.kumar@example.com",
    description: "Reach out for cloud consulting and DevOps opportunities",
    followers: "Available 24/7",
    color: "hover:text-red-400"
  },
  {
    name: "Resume/CV",
    icon: FileText,
    url: "#",
    description: "Download my detailed resume with project achievements",
    followers: "Always updated",
    color: "hover:text-green-400"
  }
];

const SocialLinks = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Find me on these platforms or drop me a message
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <Card 
              key={social.name}
              className="group bg-card border-card-border hover-glow animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(social.url, '_blank')}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-6 group-hover:scale-110 transition-all duration-300 ${social.color}`}>
                  <social.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-3">
                  {social.followers}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {social.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Prefer a direct conversation?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              onClick={() => window.open('mailto:pradip.kumar@example.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;