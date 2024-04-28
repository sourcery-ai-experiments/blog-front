export const Footer = () => {
  return (
    <div className="text-sm text-gray-500 dark:text-gray-400 mt-20">
      © <time>2024.</time> freejak55520. All rights reserved.
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto py-20 px-4">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
