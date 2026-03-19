export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-orange-500 px-6 py-3 rounded-full">
      {children}
    </button>
  );
}