'use client';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <body style={{ padding: 0, margin: 0 }}>
            {children}
         </body>
      </html>
   );
}