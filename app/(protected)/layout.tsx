import Navbar from "./_components/Navbar";

interface ProtectedlayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedlayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
