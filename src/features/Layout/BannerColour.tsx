export const BannerColour = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="border-t border-gray-200 shadow p-6 bg-botgc text-gray-100">
    {children}
  </div>
);
