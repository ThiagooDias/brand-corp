const Footer = () => {
  const fullYear: number = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-800 p-4 mt-16 text-sm text-center">
      &copy; Copyright {fullYear} – Brand Corporation Digital LTDA | Todos os direitos
      reservados
    </footer>
  );
};

export default Footer;
