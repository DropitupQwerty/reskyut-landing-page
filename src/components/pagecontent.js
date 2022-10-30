import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import React from 'react';

export default function PageContent() {
  const styles = {
    card: {
      padding: '20px',
      width: '100%',
    },
  };

  return (
    <div className="page-content-container">
      <div>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card sx={styles.card}></Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={styles.card}></Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
