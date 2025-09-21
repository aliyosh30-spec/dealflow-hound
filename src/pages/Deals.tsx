import { TrendingUp, DollarSign, Percent, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const dealData = [
    {
      address: "1234 Oak Street, Austin, TX",
      price: 320000,
      roi: 12.5,
      capRate: 8.2,
      type: "Single Family",
      status: "Hot Deal"
    },
    {
      address: "5678 Pine Avenue, Dallas, TX",
      price: 485000,
      roi: 15.3,
      capRate: 9.1,
      type: "Duplex",
      status: "Best ROI"
    },
    {
      address: "9012 Cedar Lane, Houston, TX",
      price: 275000,
      roi: 11.8,
      capRate: 7.9,
      type: "Condo",
      status: "Value Play"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Investment Deals</h1>
        <p className="text-muted-foreground">
          Curated list of high-ROI properties with detailed investment metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg ROI</p>
                <p className="text-2xl font-bold text-primary">13.2%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Cap Rate</p>
                <p className="text-2xl font-bold text-primary">8.4%</p>
              </div>
              <Percent className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Price</p>
                <p className="text-2xl font-bold text-primary">$360K</p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Deals</p>
                <p className="text-2xl font-bold text-primary">247</p>
              </div>
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deals List */}
      <div className="space-y-6">
        {dealData.map((deal, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{deal.address}</CardTitle>
                  <p className="text-2xl font-bold text-primary mt-2">
                    ${deal.price.toLocaleString()}
                  </p>
                </div>
                <Badge 
                  className={`${
                    deal.status === 'Hot Deal' ? 'bg-gradient-brand text-white' :
                    deal.status === 'Best ROI' ? 'bg-green-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}
                >
                  {deal.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Property Type</p>
                  <p className="text-lg font-semibold">{deal.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ROI</p>
                  <p className="text-lg font-semibold text-green-600">{deal.roi}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cap Rate</p>
                  <p className="text-lg font-semibold text-blue-600">{deal.capRate}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
                  <p className="text-lg font-semibold">${Math.round(deal.price * deal.capRate / 1200).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Deals;