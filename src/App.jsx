import { useState, useEffect } from 'react';

function App() {
  // ----------------------------------------------------
  // 1. CONFIGURACIÓN DE DATOS
  // ----------------------------------------------------
  const datos = {
    nombreDifunto: "María Pérez García", 
    mensaje: "A un mes de su partida, agradecemos a Dios por su vida e invitamos a la misa de honras para orar por su eterno descanso.",
    fecha: "Sábado, 14 de Diciembre",
    hora: "6:00 PM",
    lugar: "Parroquia San Francisco de Asís",
    direccion: "Av. Principal 123, Lima",
    // Busca la iglesia en Google Maps y pega el link aquí
    mapaUrl: "https://goo.gl/maps/ejemplo", 
    // Tu número con código 51
    whatsapp: "51999999999", 
    // Foto de ejemplo (Reemplázala por la real)
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop", 
    citaBiblica: "Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. (Juan 11:25)"
  };

  // ----------------------------------------------------
  // 2. ANIMACIONES
  // ----------------------------------------------------
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Activa la animación al cargar
  }, []);

  return (
    // FONDO OSCURO ELEGANTE (Slate-950 es un negro suave, no agresivo)
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden">
      
      {/* Contenedor Principal (Efecto Móvil) */}
      <div className={`
        max-w-md mx-auto min-h-screen flex flex-col relative
        transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        
        {/* --- SECCIÓN FOTO --- */}
        <div className="relative h-[55vh] w-full">
           {/* Imagen con filtro blanco y negro (grayscale) */}
          <img 
            src={datos.fotoUrl} 
            alt="Foto" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          {/* Degradado Mágico: Hace que la foto se funda con el fondo negro */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"></div>
        </div>

        {/* --- SECCIÓN CONTENIDO (Superpuesto) --- */}
        <div className="relative -mt-32 px-8 pb-12 flex-1 flex flex-col items-center text-center space-y-6">
          
          {/* Cruz con brillo dorado tenue */}
          <div className="text-amber-500/80 animate-pulse">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M7 8h10"/></svg>
          </div>

          {/* Títulos */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-400 font-medium">Misa de Honras</p>
            <h1 className="text-4xl font-serif text-white font-medium drop-shadow-2xl">
              {datos.nombreDifunto}
            </h1>
          </div>

          {/* Línea divisora elegante */}
          <div className="w-12 h-px bg-slate-800"></div>

          {/* Mensaje */}
          <p className="text-slate-400 font-light leading-relaxed text-sm max-w-xs mx-auto">
            {datos.mensaje}
          </p>

          {/* --- TARJETA DE FECHA (Cristal Frosted) --- */}
          <div className="w-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/60 p-6 rounded-xl space-y-4 hover:border-amber-900/30 transition-colors duration-500 shadow-2xl">
             <div className="flex flex-col gap-1">
                <span className="text-amber-500/90 text-lg font-medium">📅 {datos.fecha}</span>
                <span className="text-3xl font-light text-white tracking-tight">{datos.hora}</span>
             </div>
             {/* Separador punteado */}
             <div className="border-t border-dashed border-slate-800 w-full my-2"></div>
             <div>
                <p className="font-medium text-slate-200">{datos.lugar}</p>
                <p className="text-xs text-slate-500 mt-1">{datos.direccion}</p>
             </div>
          </div>

          {/* --- BOTONES DE ACCIÓN --- */}
          <div className="w-full space-y-3 pt-4">
            
            {/* Botón Mapa (Estilo Outline/Borde) */}
            <a 
              href={datos.mapaUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all active:scale-95"
            >
              <span>📍</span>
              <span className="text-xs font-bold tracking-widest uppercase">Ver Ubicación</span>
            </a>

            {/* Botón WhatsApp (Estilo Sólido Resaltado) */}
            <a 
              href={`https://wa.me/${datos.whatsapp}?text=Hola, confirmo mi asistencia a la misa de honras.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-lg bg-slate-100 text-slate-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95 duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-700"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.97 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15Z"/></svg>
              <span className="text-xs font-bold tracking-widest uppercase">Confirmar Asistencia</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-600 italic mt-8 font-serif opacity-50">
            {datos.citaBiblica}
          </p>

        </div>
      </div>
    </div>
  )
}

export default App