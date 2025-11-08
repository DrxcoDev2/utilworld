'use client';
import { useEffect } from 'react';

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) =>
          console.log('Service Worker registrado:', registration)
        )
        .catch((err) => console.error('SW error:', err));
    }
  }, []);

  return null; // No renderiza nada
}
