import React, { useState, useEffect } from "react";
import {
  H2,
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableCell,
  TableRow,
} from "@adminjs/design-system";
import { ApiClient } from "adminjs";

export default function Dashboard() {
  const [resources, setResources] = useState<{ [key: string]: number }>();
  const api = new ApiClient();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const res = await api.getDashboard();
    setResources(res.data);
  }

  return (
    <>
      <section style={{ padding: "1.5rem" }}>
        <H2>Resumo</H2>
        <section style={{ padding: "1.5rem" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recursos</TableCell>
                <TableCell>Registros</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources ? (
                Object.entries(resources).map(([resource, count]) => (
                  <>
                    <TableRow key={resource}>
                      <TableCell>{resource}</TableCell>
                      <TableCell>{count}</TableCell>
                    </TableRow>
                  </>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </section>
      </section>
    </>
  );
}
