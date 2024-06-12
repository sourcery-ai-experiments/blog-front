const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="max-w-screen-lg">{children}</div>
    </div>
  );
};

export default Layout;
