"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

interface Metric {
  day: string;
  impressions: number;
  clicks: number;
  ctr?: number;
}

const AnalyticsPage = () => {
  const [data, setData] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);
      const { data: metrics, error } = await supabase
        .from("campaign_metrics")
        .select("day, impressions, clicks, ctr")
        .order("day", { ascending: true });

      if (error) {
        console.error("Error fetching metrics:", error.message);
      } else {
        setData(metrics || []);
      }

      setLoading(false);
    };

    fetchMetrics();
  }, [supabase]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Analytics Overview</h1>
      <p className="text-muted-foreground">
        Track your campaign performance — impressions, clicks, and engagement trends.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p className="text-3xl font-semibold">
                  {data.reduce((sum, d) => sum + (d.impressions || 0), 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total across all days</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p className="text-3xl font-semibold">
                  {data.reduce((sum, d) => sum + (d.clicks || 0), 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total user interactions</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average CTR</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p className="text-3xl font-semibold">
                  {(
                    data.reduce((sum, d) => sum + (d.ctr || 0), 0) / (data.length || 1)
                  ).toFixed(2)}
                  %
                </p>
                <p className="text-sm text-muted-foreground">Click-through rate</p>
              </>
            )}
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="impressions" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Clicks Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Click Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#22c55e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
