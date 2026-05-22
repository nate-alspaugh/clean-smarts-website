import { GridRow, GridCol } from './Grid';

type FeatureRowProps = {
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
};

export const FeatureRow = ({
  category,
  description,
  image,
  imageAlt,
  reversed = false,
}: FeatureRowProps) => {
  const textStart = reversed ? 8 : 2;
  const imageStart = reversed ? 1 : 7;

  return (
    <GridRow className="items-center [grid-auto-flow:dense]">
      <GridCol start={textStart} span={4} mobileStart={1} mobileSpan={6}>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          {category}
        </h3>
        <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed">
          {description}
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 px-5 py-2.5 rounded-md transition-colors font-medium text-sm"
          >
            Learn more
          </a>
        </div>
      </GridCol>
      <GridCol start={imageStart} span={6} mobileStart={1} mobileSpan={6}>
        <img src={image} alt={imageAlt} className="block w-full h-auto" />
      </GridCol>
    </GridRow>
  );
};
