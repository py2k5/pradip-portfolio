import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium tracking-wider text-sm uppercase">Welcome to my portfolio</p>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Hi, I'm{" "}
                  <span className="gradient-text">Pradip Kumar</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                  AWS-Certified Cloud Engineer & DevOps Specialist
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                AWS-certified Cloud Engineer specializing in cloud-native solutions, DevOps, SRE, and backend development. 
                I build secure, scalable, and high-performing systems using event-driven architecture and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="group hover-glow" asChild>
                  <a href="/pradip_resume_2025.pdf" download="Pradip_resume_2025.pdf">
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass hover-glow">
                <img 
                  src={heroPortrait} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;