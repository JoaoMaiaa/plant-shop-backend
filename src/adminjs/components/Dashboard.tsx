import React, { useState, useEffect } from "react";
import { H1 } from "@adminjs/design-system";
import { ApiClient } from "adminjs";

export default function Dashboard() {
  const [data, setData] = useState<{ [key: string]: number }>();
  const api = new ApiClient();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const res = await api.getDashboard();
    setData(res.data);
    console.log(data);
  }

  return (
    <>
      <section style={{ padding: "1.5rem" }}>
        <H1>Seja bem-vindo!</H1>
      </section>
    </>
  );
}
