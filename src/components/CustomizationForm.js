import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, Switch, FormControlLabel } from '@mui/material';
import { downloadHtmlFile, generateHtmlContent } from './htmlGeneration';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, typingDelay = 1000, startDelay = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
          setDisplayedText((prev) => prev + text[i]);
          i++;
          if (i >= text?.length) clearInterval(typingInterval);
        }, typingDelay);
      }, startDelay);

      return () => clearTimeout(timer);
    }, [text, typingDelay, startDelay]);

    return <Typography style={{color: 'black', textAlign: 'center', width: '100%', display: 'block', fontSize: '24px'}}>{displayedText}</Typography>;
};

export default function CustomizationForm() {
    const [formData, setFormData] = useState({
        senderNickname: '',
        customerNickname: '',
        giftValue: '',
        emailURL: '',
        secureURLAndKey: '',
        headerImage: '',
        // specialImage: '',
        primaryColor: '#000000',
        secondaryColor: '#7e222d',
        backgroundColor: '#e7e7e7',
        emailBackgroundColor: '#ffffff',
        includeSocialIcons: false,
        facebookLink: '',
        instagramLink: '',
        twitterLink: '',
        includeHeaderImage: true, // For the header image toggle
        footerFontColor: '#ffffff', // For footer font color
        giftCardNickname: '',
        fontFamily: 'Arial',
        accentColor: '#ffcc00',
        buttonColor: '#00ff00',
        merchantName: '',
        buttonText: ''
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const finalValue = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: finalValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const htmlContent = generateHtmlContent(formData);
        downloadHtmlFile(htmlContent, "customized-template.html");
    }

    return (
        <Container data-aos="fade-in" component="main" maxWidth="md" style={{marginBottom: '4rem'}}>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, background: 'transparent' }}>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .4, ease: "easeInOut" }}
                >
                    <Grid sx={{background: 'white', paddingRight: '16px', paddingTop: '16px', boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .15)', borderRadius: '16px'}} container spacing={2}>
                <TypingEffect startDelay={100} text={'Customize Your Template'} typingDelay={50}/>
                    {textFieldData.concat([
                        { id: 'giftCardNickname', label: 'Gift Card Naming Convention', xs: 12 },
                        { id: 'fontFamily', label: 'Font Family', xs: 12 },
                        { id: 'accentColor', label: 'Accent Color', xs: 12, sm: 6, type: 'color' },
                        { id: 'buttonColor', label: 'Button Color', xs: 12, sm: 6, type: 'color' },
                        { id: 'buttonText', label: 'Button Text', xs: 12 },
                        { id: 'emailBackgroundColor', label: 'Email Background Color', xs: 12, type: 'color' },
                        { id: 'footerFontColor', label: 'Footer Font Color', xs: 12, type: 'color' }, // Footer font color picker
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
                                sx={{color: 'white', background: 'transparent', borderRadius: '8px'}}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                    <p style={{color: 'black', fontFamily: 'sans-serif'}}>Header Image?</p>
                        <FormControlLabel
                            control={<Switch checked={formData.includeHeaderImage} onChange={handleChange} name="includeHeaderImage" />}
                            // label="Include Header Image?"
                        />
                        {formData.includeHeaderImage && (
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="headerImage"
                                label="Header Image URL"
                                name="headerImage"
                                autoComplete="headerImage"
                                onChange={handleChange}
                                value={formData.headerImage}
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                    )}
                      <p style={{color: 'black', fontFamily: 'sans-serif'}}>Social Icons?</p>
                        <FormControlLabel
                            control={<Switch checked={formData.includeSocialIcons} onChange={handleChange} name="includeSocialIcons" />}
                            label="Include Social Icons"
                        />
                        {formData.includeSocialIcons && (
                            <>
                                <TextField
                                    fullWidth
                                    id="facebookLink"
                                    label="Facebook Link"
                                    name="facebookLink"
                                    autoComplete="facebookLink"
                                    onChange={handleChange}
                                    value={formData.facebookLink}
                                    sx={{ mt: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    id="instagramLink"
                                    label="Instagram Link"
                                    name="instagramLink"
                                    autoComplete="instagramLink"
                                    onChange={handleChange}
                                    value={formData.instagramLink}
                                    sx={{ mt: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    id="twitterLink"
                                    label="Twitter Link"
                                    name="twitterLink"
                                    autoComplete="twitterLink"
                                    onChange={handleChange}
                                    value={formData.twitterLink}
                                    sx={{ mt: 2, mb: 2 }}
                                />
                            </>
                        )}
                    </Grid>
                    <Button disabled={!formData.merchantName.length > 0 || (formData.includeHeaderImage && !formData.headerImage.length > 0) || !formData.buttonText.length > 0 || !formData.giftCardNickname.length > 0} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 2 }}>
                        Generate HTML
                    </Button>
                    </Grid>
                    </motion.div>
                </Box>
            </Box>
        </Container>
    );
}

const textFieldData = [
    // Note: Removed 'headerImage' from here since it's handled separately now.
    {id: 'merchantName', label: 'Merchant Name', xs: 12},
    { id: 'primaryColor', label: 'Primary Text Color', xs: 12, sm: 4, type: 'color' },
    { id: 'secondaryColor', label: 'Secondary Color', xs: 12, sm: 4, type: 'color' },
    { id: 'backgroundColor', label: 'Background Color', xs: 12, sm: 4, type: 'color' },
];
