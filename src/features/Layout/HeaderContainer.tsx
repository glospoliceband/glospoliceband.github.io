export const HeaderContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="relative z-20 container mx-auto max-w-7xl p-4">
    {children}
  </div>
);
