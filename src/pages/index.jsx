import { Grid, Typography, Card, CardHeader, CardContent } from "@mui/material";

import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";

const Home = () => {
  return (
    <Layout
      title="Home - OpenJira"
      description="Administrador de proyectos OpenJira"
      keywords="OpenJira, Jira, Administrador de proyectos, tarea, proyecto"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home;
