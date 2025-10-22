const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">Hidraliso</p>
          <p>© 2025 Hidraliso. Todos os direitos reservados.</p>
          <p className="text-xs">
            Este site contém links de afiliados. Podemos receber comissão por compras realizadas através destes links.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4 text-xs">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
