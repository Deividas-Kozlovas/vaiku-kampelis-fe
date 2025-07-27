export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-purple-600 bg-purple-100">
      &copy; {year} vaikukampelis.lt. Visos teisės saugomos.
    </footer>
  );
}
