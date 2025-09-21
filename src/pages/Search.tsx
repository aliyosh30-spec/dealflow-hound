import { Search as SearchIcon, MapPin, Filter, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Search = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Property Search</h1>
        <p className="text-muted-foreground">
          Find investment properties with our advanced search and filtering tools
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Enter city, ZIP code, or address..."
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-brand hover:opacity-90">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search Properties
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <SortDesc className="w-4 h-4 mr-2" />
              Sort by ROI
            </Button>
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-48 bg-gradient-brand-subtle rounded-lg mb-4"></div>
              <CardTitle className="text-lg">Search Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Advanced property search with ROI calculations, cap rate analysis, and market comparisons will be available here.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;