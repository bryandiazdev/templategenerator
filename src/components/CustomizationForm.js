import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { downloadHtmlFile, generateHtmlContent } from './htmlGeneration'; // Ensure these utility functions are correctly imported

export default function CustomizationForm() {
  const [formData, setFormData] = useState({
    senderNickname: '',
    customerNickname: '',
    giftValue: '',
    customerText: '',
    emailURL: '',
    secureURLAndKey: '',
    headerImage: '',
    specialImage: '',
    primaryColor: '#000000',
    secondaryColor: '#7e222d',
    backgroundColor: '#ffffff',
    giftCardNickname: '',
    fontFamily: 'Arial', // Default font family
    accentColor: '#ffcc00', // Example accent color
    buttonColor: '#00ff00', // Example button color
    merchantName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const htmlContent = generateHtmlContent(formData);
    downloadHtmlFile(htmlContent, "customized-template.html");
  };

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Customize Your Template</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {textFieldData.concat([
              { id: 'giftCardNickname', label: 'Gift Card Nickname', xs: 12 },
              { id: 'fontFamily', label: 'Font Family', xs: 12 },
              { id: 'accentColor', label: 'Accent Color', xs: 12, sm: 6, type: 'color' },
              { id: 'buttonColor', label: 'Button Color', xs: 12, sm: 6, type: 'color' }
            ]).map(field => (
              <Grid item xs={field.xs} sm={field.sm} key={field.id}>
                <TextField
                  required
                  fullWidth
                  id={field.id}
                  label={field.label}
                  name={field.id}
                  autoComplete={field.id}
                  onChange={handleChange}
                  value={formData[field.id]}
                  multiline={!!field.multiline}
                  rows={field.rows || 1}
                  type={field.type || 'text'}
                  InputLabelProps={field.type === 'color' ? { shrink: true } : undefined}
                />
              </Grid>
            ))}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 2 }}>
              Generate HTML
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

const textFieldData = [
    {id: 'merchantName', label: 'Merchant Name', xs: 12},
  { id: 'headerImage', label: 'Header Image URL', xs: 12 },
  { id: 'specialImage', label: 'Gift Card Image URL', xs: 12 },
  { id: 'customerText', label: 'Customer Text', xs: 12, multiline: true, rows: 4 },
  { id: 'primaryColor', label: 'Primary Color', xs: 12, sm: 4, type: 'color' },
  { id: 'secondaryColor', label: 'Secondary Color', xs: 12, sm: 4, type: 'color' },
  { id: 'backgroundColor', label: 'Background Color', xs: 12, sm: 4, type: 'color' },
];
