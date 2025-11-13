"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";
import { useState } from "react";

const AnalyticsPage = () => {
  // Sample analytics data (replace with API data from Supabase later)
  const [data] = useState([
    { name: "Mon", impressions: 4000, clicks: 2400 },
    { name: "Tue", impressions: 3000, clicks: 1398 },
    { name: "Wed", impressions: 2000, clicks: 9800 },
    { name: "Thu", impressions: 2780, clicks: 3908 },
    { name: "Fri", impressions: 1890, clicks: 4800 },
    { name: "Sat", impressions: 2390, clicks: 3800 },
    { name: "Sun", impressions: 3490, clicks: 4300 },
  ]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Analytics Overview</h1>
      <p className="text-muted-foreground">
        Gain insights into your campaigns’ performance across platforms. Track impressions, clicks, and engagement trends.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">24.3K</p>
            <p className="text-sm text-muted-foreground">↑ 12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">8.9K</p>
            <p className="text-sm text-muted-foreground">↑ 5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CTR (Click-through Rate)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">3.2%</p>
            <p className="text-sm text-muted-foreground">↓ 1% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Impressions Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Impressions</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impressions" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Clicks Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Click Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clicks" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
