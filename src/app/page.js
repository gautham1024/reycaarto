'use client';

import MainPage from "./components/MainPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './globals.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      offset:100
    });
  }, []);

  return <MainPage />;
}
