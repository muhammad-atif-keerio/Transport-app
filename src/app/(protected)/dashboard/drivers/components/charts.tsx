"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  statusData: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  vehicleChartData: Array<{
    type: string;
    count: number;
  }>;
}

interface ChartsProps {
  chartData: ChartData;
}

export function Charts({ chartData }: ChartsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Status Distribution Pie Chart */}
      <Card className="bg-card border shadow-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground">
            Driver Status Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData.statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Vehicle Type Distribution Bar Chart */}
      <Card className="bg-card border shadow-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground">
            Vehicle Type Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.vehicleChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
