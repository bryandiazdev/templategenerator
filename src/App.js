import React from 'react';
import CustomizationForm from './components/CustomizationForm';
import { useTheme } from './ThemeContext'; // Adjust the import path as necessary
import Switch from '@mui/material/Switch';
import SpaceParticles from './components/SpaceParticles';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      name="theme"
      inputProps={{ 'aria-label': 'theme switch' }}
    />
  );
}

function App() {
  return (
    <div>
      <div style={{zIndex: '2'}}><ThemeToggle/></div>
      <SpaceParticles/>
      <CustomizationForm />
    </div>
  );
}

export default App;
