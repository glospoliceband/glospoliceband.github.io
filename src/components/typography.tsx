import * as React from 'react';

export const WrappedH1: React.FC = (props: any) => (
    <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-slate-900" {...props} />
);

export const WrappedH2: React.FC = (props: any) => (
    <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-900" {...props} />
);

export const WrappedH3: React.FC = (props: any) => (
    <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-slate-900" {...props} />
);

export const WrappedH4: React.FC = (props: any) => (
    <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-slate-900" {...props} />
);

export const WrappedH5: React.FC = (props: any) => (
    <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-slate-900"  {...props} />
);

export const WrappedH6: React.FC = (props: any) => (
    <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-slate-900" {...props} />
);

export const WrappedP: React.FC = (props: any) => (
    <p className="text-base font-light leading-relaxed mt-0 mb-4 text-slate-900" {...props} />
);

export const WrappedA: React.FC = (props: any) => (
    <a className="text-base font-light leading-relaxed mt-0 mb-4 text-blue-700" {...props} />
);

export const WrappedLi: React.FC = (props: any) => (
    <li>
        <WrappedP {...props} />
    </li>
);

export const WrappedUl: React.FC = (props: any) => (
    <ul className="list-disc" {...props} />
);

export const shortcodes = {
    h1: WrappedH1,
    h2: WrappedH2,
    h3: WrappedH3,
    h4: WrappedH4,
    h5: WrappedH5,
    h6: WrappedH6,
    p: WrappedP,
    a: WrappedA,
    li: WrappedLi,
    ul: WrappedUl,
};

export interface TypographyProps {
    variant: 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'li' | 'ul';
};

export const Typography: React.FC = ({ variant, ...props }: TypographyProps) => {
    switch (variant) {
        case 'body': return (<WrappedP {...props} />);
        case 'p': return (<WrappedP />);
        case 'h1': return (<WrappedH1 {...props} />);
        case 'h1': return (<WrappedH1 />);
        case 'h2': return (<WrappedH2 />);
        case 'h3': return (<WrappedH3 />);
        case 'h4': return (<WrappedH4 />);
        case 'h5': return (<WrappedH5 />);
        case 'h6': return (<WrappedH6 />);
        case 'a': return (<WrappedA />);
        case 'li': return (< WrappedLi />);
        case 'ul': return (<WrappedUl />);
        default: return (<WrappedP color='red' {...props} />);
    }
};