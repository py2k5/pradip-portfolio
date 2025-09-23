import { useState } from "react";
import { Calculator, User, Weight, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // Convert cm to meters
    
    if (weightKg > 0 && heightM > 0) {
      const bmiValue = weightKg / (heightM * heightM);
      setBMI(parseFloat(bmiValue.toFixed(1)));
      
      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
  };

  const getBMIColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "bg-blue-500";
      case "Normal weight":
        return "bg-green-500";
      case "Overweight":
        return "bg-yellow-500";
      case "Obese":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
              BMI Calculator
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your Body Mass Index (BMI) and understand your health status
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Input */}
          <Card className="glass hover-glow animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Enter Your Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="weight" className="flex items-center gap-2">
                  <Weight className="w-4 h-4 text-primary" />
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight in kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-primary" />
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={calculateBMI}
                  disabled={!weight || !height}
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Calculate BMI
                </Button>
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  size="lg"
                  className="hover-glow"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass hover-glow animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Your BMI Result</CardTitle>
            </CardHeader>
            <CardContent>
              {bmi !== null ? (
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-6xl font-bold gradient-text">
                      {bmi}
                    </div>
                    <Badge 
                      className={`${getBMIColor(category)} text-white text-sm px-4 py-2`}
                    >
                      {category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <h3 className="font-semibold text-lg">BMI Categories:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 rounded glass">
                        <span>Underweight</span>
                        <span className="text-blue-400">Below 18.5</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded glass">
                        <span>Normal weight</span>
                        <span className="text-green-400">18.5 - 24.9</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded glass">
                        <span>Overweight</span>
                        <span className="text-yellow-400">25 - 29.9</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded glass">
                        <span>Obese</span>
                        <span className="text-red-400">30 and above</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your weight and height to calculate your BMI</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="glass mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Note:</strong> BMI is a useful screening tool but it doesn't diagnose body fatness or health. 
                Consult with a healthcare professional for comprehensive health assessment.
              </p>
              <p>
                This calculator is for adults aged 18 and older.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BMICalculator;