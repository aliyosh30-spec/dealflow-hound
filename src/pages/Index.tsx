import { motion } from "framer-motion";
import { TrendingUp, Search, BarChart3, DollarSign, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-real-estate.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Property Search",
      description: "AI-powered search engine that filters properties based on investment criteria and ROI potential."
    },
    {
      icon: TrendingUp,
      title: "Investment Analytics",
      description: "Real-time ROI calculations, cap rate analysis, and market comparisons for informed decisions."
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      description: "Comprehensive market trends, price predictions, and neighborhood analysis tools."
    },
    {
      icon: DollarSign,
      title: "Deal Scoring",
      description: "Proprietary algorithm scores properties based on investment potential and market conditions."
    }
  ];

  const stats = [
    { label: "Properties Analyzed", value: "50K+", icon: Building2 },
    { label: "Active Investors", value: "2.5K+", icon: Users },
    { label: "Average ROI", value: "13.2%", icon: TrendingUp },
    { label: "Deals Closed", value: "$125M+", icon: DollarSign }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Investment Goldmine
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              AI-powered real estate platform that identifies undervalued properties, 
              calculates ROI potential, and connects you with high-yield investment opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                <Link to="/search">
                  <Search className="w-5 h-5 mr-2" />
                  Start Property Search
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Link to="/deals">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Best Deals
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-brand-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Powered by Advanced Real Estate Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform aggregates data from licensed MLS feeds, public records, and verified broker partnerships 
              to deliver comprehensive investment insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Ready to Find Your Next Investment Property?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of successful real estate investors who trust PropertyEdge 
              to identify profitable opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/search">
                  Get Started Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
