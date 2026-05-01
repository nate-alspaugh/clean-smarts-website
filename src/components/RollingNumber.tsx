import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'same';

function buildSequence(from: number, to: number, direction: Direction): number[] {
  if (direction === 'same' || from === to) return [to];
  if (direction === 'up') {
    if (to > from) {
      return Array.from({ length: to - from + 1 }, (_, i) => from + i);
    }
    return [
      ...Array.from({ length: 10 - from }, (_, i) => from + i),
      ...Array.from({ length: to + 1 }, (_, i) => i),
    ];
  }
  if (to < from) {
    return Array.from({ length: from - to + 1 }, (_, i) => from - i);
  }
  return [
    ...Array.from({ length: from + 1 }, (_, i) => from - i),
    ...Array.from({ length: 10 - to }, (_, i) => 9 - i),
  ];
}

const DURATION = 0.5;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface DigitColumnProps {
  sequence: number[];
  animKey: number;
}

function DigitColumn({ sequence, animKey }: DigitColumnProps) {
  const targetEm = -(sequence.length - 1);
  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        height: '1em',
        lineHeight: 1,
        verticalAlign: 'baseline',
      }}
    >
      <motion.span
        key={animKey}
        style={{ display: 'block' }}
        initial={{ y: '0em' }}
        animate={{ y: `${targetEm}em` }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        {sequence.map((d, j) => (
          <span
            key={j}
            style={{ display: 'block', height: '1em', lineHeight: 1 }}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface RollingNumberProps {
  value: number;
  className?: string;
}

export function RollingNumber({ value, className }: RollingNumberProps) {
  const [state, setState] = useState({ prev: value, current: value, animKey: 0 });

  useEffect(() => {
    if (value !== state.current) {
      setState((s) => ({ prev: s.current, current: value, animKey: s.animKey + 1 }));
    }
  }, [value, state.current]);

  const direction: Direction =
    state.current > state.prev ? 'up' : state.current < state.prev ? 'down' : 'same';

  const valStr = String(state.current);
  const prevStr = String(state.prev).padStart(valStr.length, '0');

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      <span>$</span>
      {valStr.split('').map((char, i) => {
        const newDigit = parseInt(char, 10);
        if (Number.isNaN(newDigit)) return <span key={`s${i}`}>{char}</span>;
        const oldDigit = parseInt(prevStr[i] ?? char, 10);
        const seq = buildSequence(oldDigit, newDigit, direction);
        return <DigitColumn key={i} sequence={seq} animKey={state.animKey} />;
      })}
    </span>
  );
}
