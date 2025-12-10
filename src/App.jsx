import { useState, useEffect } from 'react';

function App() {
  // ----------------------------------------------------
  // 1. CONFIGURACIÓN DE DATOS
  // ----------------------------------------------------
  const datos = {
    nombreDifunto: "María Pérez García",
    mensaje: "A un mes de su partida, agradecemos a Dios por su vida e invitamos a la misa de honras para orar por su eterno descanso.",
    fecha: "Domingo, 15 de Diciembre",
    hora: "6:00 PM",
    lugar: "Basílica Catedral de Lima",
    direccion: "Plaza de Armas de Lima, Jirón Carabaya, Lima 15001",
    mapaUrl: "https://maps.app.goo.gl/X77E7uXdKmkZoXDH8",
    whatsapp: "51922809482",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop", 
    citaBiblica: "Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. (Juan 11:25)"
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    // IMPORTANTE: Definimos las fuentes aquí mismo para no tocar el HTML
    <div className="min-h-screen bg-black text-slate-200 overflow-x-hidden relative font-sans selection:bg-amber-900 selection:text-white">
      
      {/* Importamos las fuentes de Google: Great Vibes (Cursiva) y Cinzel (Romana) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Great+Vibes&family=Montserrat:wght@300;400&display=swap');
      `}</style>

      {/* --- FONDO DEGRADADO NOCTURNO --- */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black z-0"></div>

      {/* --- PARTÍCULAS DORADAS (Efecto Polvo de Oro) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute bottom-0 left-1/4 w-0.5 h-0.5 bg-amber-200/40 rounded-full animate-[ping_5s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-amber-500/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-10 right-10 w-0.5 h-0.5 bg-white/30 rounded-full animate-[ping_8s_linear_infinite]"></div>
      </div>

      {/* Contenedor Principal */}
      <div className={`
        relative z-10 max-w-md mx-auto min-h-screen flex flex-col
        transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>

        {/* --- FOTO SUPERIOR (Marco Sutil) --- */}
        <div className="relative h-[45vh] w-full group">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img
            src={datos.fotoUrl}
            alt="Foto"
            className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[10s] ease-in-out scale-100 group-hover:scale-105"
            onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop'}}
          />
          {/* Degradado inferior para integrar con el negro */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="relative -mt-32 px-8 pb-12 flex-1 flex flex-col items-center text-center space-y-8 z-30">

          {/* Icono Cruz Fina */}
          <div className="text-amber-500/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M7 8h10"/></svg>
          </div>

          {/* Títulos */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-500/70 font-[Cinzel]">Misa de Honras</p>
            
            {/* NOMBRE: Fuente Cursiva 'Great Vibes' */}
            <h1 className="text-6xl text-white font-['Great_Vibes'] drop-shadow-lg py-2 bg-gradient-to-br from-amber-100 via-amber-400 to-amber-700 bg-clip-text text-transparent">
              {datos.nombreDifunto}
            </h1>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-px bg-amber-900/50"></div>
            <p className="text-slate-300 font-['Montserrat'] font-light italic leading-relaxed text-sm max-w-xs mx-auto">
              "{datos.mensaje}"
            </p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-px bg-amber-900/50"></div>
          </div>

          {/* --- TARJETA DE DETALLES (Bordes Dorados Finos) --- */}
          <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ring-1 ring-white/5 relative overflow-hidden group">
             <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[100%]"></div>
             {/* Esquinas doradas decorativas */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/60 rounded-tl-sm"></div>
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/60 rounded-tr-sm"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/60 rounded-bl-sm"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/60 rounded-br-sm"></div>

             <div className="space-y-4">
               <div>
                  <p className="text-amber-500 text-sm font-[Cinzel] font-semibold uppercase tracking-wider">Fecha & Hora</p>
                  <p className="text-2xl text-white font-['Montserrat'] font-light">{datos.fecha}</p>
                  <p className="text-xl text-white font-['Montserrat'] font-light">{datos.hora}</p>
               </div>
               <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
               <div>
                  <p className="text-amber-500 text-sm font-[Cinzel] font-semibold uppercase tracking-wider">Lugar</p>
                  <p className="text-white font-['Montserrat']">{datos.lugar}</p>
                  <p className="text-xs text-slate-500 font-['Montserrat']">{datos.direccion}</p>
               </div>
             </div>
          </div>

          {/* --- BOTONES ELEGANTES (Rectangulares y Dorados) --- */}
          <div className="w-full space-y-4 pt-2">
            
            {/* Botón Mapa */}
            <a 
              href={datos.mapaUrl}
              target="_blank" 
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-transparent border border-amber-600/30 rounded-lg hover:border-amber-500 hover:bg-amber-950/30 transition-all duration-500 active:scale-[0.98]"
            >
              <span className="text-amber-500">📍</span>
              <span className="text-xs font-[Cinzel] font-bold tracking-widest text-amber-100 uppercase group-hover:text-white transition-colors">
                Ver Ubicación
              </span>
            </a>

            {/* Botón WhatsApp (Estilo Premium Gold) */}
            <a 
              href={`https://wa.me/${datos.whatsapp}?text=Hola, confirmo mi asistencia.`} 
              target="_blank" 
              rel="noreferrer"
              className="relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-amber-700 to-amber-900 rounded-lg shadow-[0_4px_20px_rgba(180,83,9,0.2)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.3)] hover:to-amber-800 transition-all duration-500 active:scale-[0.98] border border-amber-500/20"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-100"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.83 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.97 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15Z"/></svg>
              <span className="text-xs font-[Cinzel] font-bold tracking-widest text-white uppercase">
                Confirmar Asistencia
              </span>
            </a>

          </div>

          <p className="text-[10px] text-slate-500 italic mt-8 font-serif opacity-50 pb-8">
            {datos.citaBiblica}
          </p>

        </div>
      </div>
    </div>
  )
}

export default App