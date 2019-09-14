import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth.context'
import { ThemeProvider } from './contexts/theme.context.jsx'
import './index.css';
import App from './App';

ReactDOM.render(
    <ThemeProvider>
        <AuthProvider>
            <BrowserRouter>
                
                <App />
            </BrowserRouter>
        </AuthProvider>
    </ThemeProvider>
    , 
document.getElementById('root'));