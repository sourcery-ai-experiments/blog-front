export const Footer = () => {
  return (
    <div className="mt-20 text-sm text-gray-500 dark:text-gray-400">
      © <time>2024.</time> freejak5520. All rights reserved.
    </div>
  );
};

const Header = () => {
  return <div></div>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 py-20">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
