export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-accent-foreground text-muted-foreground py-4 flex items-center justify-center bottom-0 sticky">
      <p>&copy;{year} Copyright. TechHub.</p>
    </footer>
  );
}
