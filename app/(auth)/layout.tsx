const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mt-16 flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4 py-8">
      {children}
    </div>
  );
};

export default AuthLayout;
