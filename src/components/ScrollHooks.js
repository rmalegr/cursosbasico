import React, { useState, useEffect } from 'react';
//Se puede tener tantos effecs como se necesiten

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('moviendo el Scroll');
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', detectarScroll);
    return () => {
      window.removeEventListener('scroll', detectarScroll);
      console.log('fase de desmontaje');
    };
  }, [scrollY]);

  useEffect(() => {
    console.log('fase de montaje');
  }, []); // --> se ejecuta una vez

  useEffect(() => {
    console.log(' Fase de  actualizacion');
  });

  return (
    <>
      <h2>Scroll Hoolks y useo del usoEffect </h2>
      <p> {scrollY} </p>
    </>
  );
}
