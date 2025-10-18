import ReactLenis, { type LenisRef } from "lenis/react";
import "./App.css";
import { WelcomeSection } from "./sections/welcome";
import { useEffect, useRef } from "react";
import { DefaultColorSection } from "./sections/default";
import { ColorSection } from "./sections/color";
import { EndColorSection } from "./sections/end";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          // syncTouchLerp: 1,
          lerp: 0.19,
          duration: 4.6,
          easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          orientation: "horizontal",
          gestureOrientation: "both",
          syncTouch: true,
          // wheelMultiplier: 1.5,
          // touchMultiplier: 3.7,
          infinite: true,
        }}
        ref={lenisRef}
      />
      <main className="main-container">
        <WelcomeSection />
        <DefaultColorSection
          title="O que é Lorem Ipsum?"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />
        <DefaultColorSection
          title="De onde ele vem?"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />
        <DefaultColorSection
          title="Porque nós o usamos?"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />
        <DefaultColorSection
          title="Onde posso conseguí-lo?"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />
        <EndColorSection
          title="Cores"
          description="Aqui irá aparecer as cores para fazer uma transição maneira"
        />
        <ColorSection />
      </main>
    </>
  );
}

export default App;
