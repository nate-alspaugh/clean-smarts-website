import wellsFargo from '../assets/logos/wells-fargo.png';
import ymca from '../assets/logos/ymca.png';
import verizon from '../assets/logos/verizon.png';
import toyota from '../assets/logos/toyota.png';
import kroger from '../assets/logos/kroger.png';
import cocaCola from '../assets/logos/coca-cola.png';
import davita from '../assets/logos/davita.png';

const logos = [
  { src: wellsFargo, alt: 'Wells Fargo' },
  { src: ymca, alt: 'YMCA' },
  { src: verizon, alt: 'Verizon' },
  { src: toyota, alt: 'Toyota' },
  { src: kroger, alt: 'Kroger' },
  { src: cocaCola, alt: 'Coca-Cola' },
  { src: davita, alt: 'DaVita' },
];

export const LogoMarquee = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className="flex w-max items-center gap-16 motion-reduce:animate-none"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            aria-hidden={i >= logos.length ? 'true' : undefined}
            className="h-12 w-auto shrink-0 opacity-70 grayscale"
          />
        ))}
      </div>
    </div>
  );
};
