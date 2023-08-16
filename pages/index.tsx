import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { NextPage } from "next"

const HomePage: NextPage = () => {
  return (
    <>
      {/* <Typography variant="h1" color='primary'>Hola Mundo</Typography> */}
      <Layout title='Home - Open Jira'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title='Pendientes' />
              <CardContent>
                {/* Agregar una nueva entradda */}
                {/* Listado de las entradas */}
                <NewEntry />
                <EntryList status='pending' />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title='En Progreso' />
              <CardContent>
                {/* Agregar una nueva entradda */}
                {/* Listado de las entradas */}
                <EntryList status='in-progress' />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title='Completadas' />
              <CardContent>
                {/* Agregar una nueva entradda */}
                {/* Listado de las entradas */}
                <EntryList status='finished' />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}


export default HomePage;