import { useState, type FormEvent } from "react";
import type { Profile } from "@/types";
import { sendContactMessage } from "@/api/api";

interface ContactProps {
  profile: Profile;
  title: string;
  labels: Record<
    | "name"
    | "email"
    | "message"
    | "consent"
    | "privacyPrefix"
    | "privacyLink"
    | "sending"
    | "submit",
    string
  >;
}

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ profile, title, labels }: ContactProps) {
  const privacyPolicyPath = import.meta.env.PROD
    ? `${import.meta.env.BASE_URL}privacy-policy.html`
    : "/privacy-policy.html";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;

    setStatus("sending");
    const result = await sendContactMessage({ name, email, message });
    setStatus(result.success ? "sent" : "error");
    setStatusMessage(result.message);
    if (result.success) {
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
    }
  }

  return (
    <section id="contact" className="section border-t border-line">
      <p className="section-label mb-8">{title}</p>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div className="flex flex-col gap-3 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="text-ink hover:text-accent">
            {profile.email}
          </a>
          {profile.phone && (
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="text-ink hover:text-accent">
              {profile.phone}
            </a>
          )}
          {profile.telegram && (
            <a href={profile.telegram} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
              Telegram
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
              LinkedIn
            </a>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder={labels.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            required
            type="email"
            placeholder={labels.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <textarea
            required
            placeholder={labels.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <label className="flex gap-3 text-sm leading-relaxed text-muted">
            <input
              required
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-accent"
            />
            <span>
              {labels.consent} {labels.privacyPrefix}{" "}
              <a
                href={privacyPolicyPath}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {labels.privacyLink}
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start border border-ink bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent hover:border-accent disabled:opacity-50"
          >
            {status === "sending" ? labels.sending : labels.submit}
          </button>
          {(status === "sent" || status === "error") && (
            <p className={`text-sm ${status === "sent" ? "text-accent" : "text-muted"}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
