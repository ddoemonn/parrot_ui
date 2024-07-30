import { useEffect, useRef } from 'react';

import Layout from '@/layout';

export default function Home() {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const LEAF_COLORS = ['#e6e47566', '#e0dd52', '#b3b14233'];
    const PARROT_COLORS = ['#f05869', '#f37e5b', '#f6a34d', '#f9c940', '#72e675'];

    const COLORS = [...LEAF_COLORS, ...PARROT_COLORS];

    const UNIT = 40;
    const TILES_PER_COLUMN = 22;
    const TILES_PER_ROW = 32;

    const HEIGHT = TILES_PER_COLUMN * UNIT;
    const WIDTH = TILES_PER_ROW * UNIT;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('height', String(HEIGHT));
    svg.setAttribute('width', String(WIDTH));

    const styles = document.createElement('style');
    styles.innerText = COLORS.map((color, i) => `.c${i}{fill:${color}}`).join('');
    svg.appendChild(styles);

    const randomNumber = (range: number) => Math.floor(Math.random() * range);
    const randomLeafColor = () => `c${randomNumber(LEAF_COLORS.length)}`;
    const randomParrotColors = (): [string, string] => {
      const index1 = randomNumber(PARROT_COLORS.length) + LEAF_COLORS.length;
      let index2 = randomNumber(PARROT_COLORS.length) + LEAF_COLORS.length;
      while (index1 === index2) {
        index2 = randomNumber(PARROT_COLORS.length) + LEAF_COLORS.length;
      }
      return [`c${index1}`, `c${index2}`];
    };

    const add = (tag: string, attributes: { [key: string]: string }) => {
      const newElem = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.keys(attributes).forEach(key => newElem.setAttribute(key, attributes[key]));
      svg.appendChild(newElem);
    };

    const renderDrawing = () => {
      if (svgContainerRef.current) {
        svgContainerRef.current.innerHTML = '';
        svgContainerRef.current.appendChild(svg);
      }
    };

    /* HELPERS */
    const drawRectangle = (x: number, y: number, color: string) => {
      add('rect', { width: String(UNIT), height: String(UNIT), x: String(x), y: String(y), class: color });
    };

    const drawTopLeftQuadrant = (x: number, y: number, color: string) => {
      y += UNIT;
      const d = `M ${x},${y} a ${UNIT},${UNIT} 0 0 1 ${UNIT},-${UNIT} l 0,${UNIT} z`;
      add('path', { d, class: color });
    };

    const drawTopRightQuadrant = (x: number, y: number, color: string) => {
      const d = `M ${x},${y} a ${UNIT},${UNIT} 0 0 1 ${UNIT},${UNIT} l -${UNIT},0 z`;
      add('path', { d, class: color });
    };

    const drawBottomRightQuadrant = (x: number, y: number, color: string) => {
      x += UNIT;
      const d = `M ${x},${y} a ${UNIT},${UNIT} 0 0 1 -${UNIT},${UNIT} l 0,-${UNIT} z`;
      add('path', { d, class: color });
    };

    const drawBottomLeftQuadrant = (x: number, y: number, color: string) => {
      x += UNIT;
      y += UNIT;
      const d = `M ${x},${y} a ${UNIT},${UNIT} 0 0 1 -${UNIT},-${UNIT} l ${UNIT},0 z`;
      add('path', { d, class: color });
    };

    const DRAW_FUNCS = [drawRectangle, drawTopLeftQuadrant, drawTopRightQuadrant, drawBottomRightQuadrant, drawBottomLeftQuadrant];
    const drawRandomElement = (...args: [number, number, string]) => DRAW_FUNCS[randomNumber(DRAW_FUNCS.length)](...args);

    /* PARROTS */
    const drawLeftEye = (x: number, y: number, color: string) => {
      add('circle', { cx: String(x + 12), cy: String(y + 20), r: '4', class: color });
    };

    const drawRightEye = (x: number, y: number, color: string) => {
      add('circle', { cx: String(x + 28), cy: String(y + 20), r: '4', class: color });
    };

    const parrot1 = (x: number, y: number, color: string, beakColor: string) => {
      drawTopLeftQuadrant(x, y, beakColor);
      drawTopRightQuadrant(x + UNIT, y, color);
      drawLeftEye(x + UNIT, y, beakColor);
      drawBottomLeftQuadrant(x + UNIT, y + UNIT, color);
    };

    const parrot2 = (x: number, y: number, color: string, beakColor: string) => {
      drawTopLeftQuadrant(x, y, beakColor);
      drawTopRightQuadrant(x + UNIT, y, color);
      drawLeftEye(x + UNIT, y, beakColor);
      drawRectangle(x + UNIT, y + UNIT, color);
      drawBottomRightQuadrant(x + UNIT, y + 2 * UNIT, color);
    };

    const parrot3 = (x: number, y: number, color: string, beakColor: string) => {
      drawTopLeftQuadrant(x, y, beakColor);
      drawTopRightQuadrant(x + UNIT, y, color);
      drawLeftEye(x + UNIT, y, beakColor);
      drawBottomRightQuadrant(x + UNIT, y + UNIT, color);
    };

    const parrot4 = (x: number, y: number, color: string, beakColor: string) => {
      drawTopLeftQuadrant(x + UNIT, y, color);
      drawRightEye(x + UNIT, y, beakColor);
      drawTopRightQuadrant(x + 2 * UNIT, y, beakColor);
      drawRectangle(x + UNIT, y + UNIT, color);
      drawBottomRightQuadrant(x + UNIT, y + 2 * UNIT, color);
      drawBottomLeftQuadrant(x, y + 2 * UNIT, color);
    };

    const parrot5 = (x: number, y: number, color: string, beakColor: string) => {
      drawTopLeftQuadrant(x, y, color);
      drawRightEye(x, y, beakColor);
      drawTopRightQuadrant(x + UNIT, y, beakColor);
      drawBottomLeftQuadrant(x, y + UNIT, color);
      drawTopRightQuadrant(x + UNIT, y + UNIT, color);
      drawBottomRightQuadrant(x + UNIT, y + 2 * UNIT, color);
    };

    /* DRAW LEAVES */
    for (let x = 0; x < TILES_PER_ROW; x++) {
      for (let y = 0; y < TILES_PER_COLUMN; y++) {
        drawRandomElement(x * UNIT, y * UNIT, randomLeafColor());
      }
    }

    /* DRAW PARROTS */
    for (let i = 0; i < 12; i++) {
      parrot1(randomNumber(TILES_PER_ROW) * UNIT, randomNumber(TILES_PER_COLUMN) * UNIT, ...randomParrotColors());
      parrot2(randomNumber(TILES_PER_ROW) * UNIT, randomNumber(TILES_PER_COLUMN) * UNIT, ...randomParrotColors());
      parrot3(randomNumber(TILES_PER_ROW) * UNIT, randomNumber(TILES_PER_COLUMN) * UNIT, ...randomParrotColors());
      parrot4(randomNumber(TILES_PER_ROW) * UNIT, randomNumber(TILES_PER_COLUMN) * UNIT, ...randomParrotColors());
      parrot5(randomNumber(TILES_PER_ROW) * UNIT, randomNumber(TILES_PER_COLUMN) * UNIT, ...randomParrotColors());
    }

    renderDrawing();
  }, []);

  return (
    <Layout>
      <>
        <div
          ref={svgContainerRef}
          className="absolute overflow-hidden w-full max-h-svh opacity-20 z-0"
        />

        <div className="text-center flex flex-col items-center mt-40 px-6 py-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 z-10">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 via-green-500 to-yellow-500 text-transparent bg-clip-text">ParrotUI 🦜</span>
          </h1>
          <p className="text-2xl text-gray-800 z-10">
            ParrotUI makes UI development a breeze! With our <span className="text-blue-500 font-semibold">no CLI</span> approach, you can{' '}
            <span className="text-green-500 font-semibold">copy and paste components</span> directly into your project. We use Tailwind and TSX, ensuring
            components are <span className="text-indigo-500 font-semibold">easy to understand</span> and integrate. Get started quickly with ParrotUI’s simple
            and intuitive design!
          </p>
        </div>
      </>
    </Layout>
  );
}
