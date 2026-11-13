import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function Legal({ title }) {
  return <main className="legal-page"><a className="brand" href="/"><span className="brand-mark">C</span> cityscape</a><p className="eyebrow">CITYSCAPE / LEGAL</p><h1>{title}</h1><p>This page is a starter template. Add Cityscape’s approved {title.toLowerCase()} content before publishing.</p><a className="text-link" href="/">Back to home ↗</a></main>
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><Routes><Route path="/" element={<App />} /><Route path="/privacy" element={<Legal title="Privacy policy" />} /><Route path="/terms" element={<Legal title="Terms of use" />} /></Routes></BrowserRouter></React.StrictMode>
)
