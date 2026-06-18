"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");

    const subject = encodeURIComponent("Callback request from website");
    const body = encodeURIComponent(
      `Please call me back.\n\nName: ${name || "Not provided"}\nPhone: ${phone}${note ? `\n\nNote: ${note}` : ""}`,
    );

    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-background p-8">
      <h3 className="text-lg font-semibold text-white">Request a Callback</h3>
      <p className="mt-3 text-sm font-medium text-accent">
        For emergencies, call — don&apos;t wait for a callback.
      </p>
      <a
        href={BUSINESS.phoneHref}
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
      >
        <PhoneIcon className="h-4 w-4" />
        {BUSINESS.phone}
      </a>
      <p className="mt-4 text-sm text-muted">
        For non-urgent requests, leave your number and we&apos;ll call you back.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="callback-name" className="block text-sm font-medium text-muted">
            Name <span className="text-muted/60">(optional)</span>
          </label>
          <input
            id="callback-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="callback-phone" className="block text-sm font-medium text-muted">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="callback-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError("");
            }}
            className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="(406) 555-1234"
          />
          {error && (
            <p className="mt-2 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="callback-note" className="block text-sm font-medium text-muted">
            What do you need? <span className="text-muted/60">(optional)</span>
          </label>
          <textarea
            id="callback-note"
            name="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tow, roadside assistance, vehicle location..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent-dark"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}
