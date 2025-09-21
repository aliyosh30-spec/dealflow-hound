import { BarChart3, TrendingUp, Building, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Market Analytics</h1>
        <p className="text-muted-foreground">
          Real-time market insights and investment analytics powered by comprehensive data
        </p>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Market Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-brand-subtle rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Market trend charts coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              ROI Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-brand-subtle rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">ROI distribution charts coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary" />
              Property Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-brand-subtle rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Property type analysis coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Investment Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-brand-subtle rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Opportunity mapping coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Sources */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Data Sources & Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Licensed MLS Feeds</h4>
              <p className="text-sm text-muted-foreground">
                Real-time property data from licensed Multiple Listing Service partnerships
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Public Records</h4>
              <p className="text-sm text-muted-foreground">
                County assessor data, deed records, and property tax information
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Verified Broker Feeds</h4>
              <p className="text-sm text-muted-foreground">
                Direct partnerships with licensed real estate brokers and agents
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;