interface FooterProps {
  text: string;
}

const PRIVACY_POLICY_URL = "https://nikruto-1.github.io/portfolio/privacy-policy.html";

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-line py-8">
      <div className="section mx-auto flex max-w-5xl flex-col gap-3 px-6 py-0 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} · {text}</p>
        <a
          href={PRIVACY_POLICY_URL}
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
