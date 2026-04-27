"use client";

import SocialButtons from "@/components/ui/social-buttons";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
	{
		label: "Email",
		value: "tamiratake@gmail.com",
		href: "mailto:tamiratake@gmail.com",
		icon: Mail,
	},
	{
		label: "Phone",
		value: "+251 954234576",
		href: "tel:+251954234576",
		icon: Phone,
	},
	{
		label: "Location",
		value: "Addis Ababa, Ethiopia",
		icon: MapPin,
	},
];

const ContactSection = () => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const form = event.currentTarget;
		const formData = new FormData(form);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			company: formData.get("company"),
			message: formData.get("message"),
		};
		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (response.ok || response.status === 200) {
				toast.success("Email sent successfully!", {
					description: "Thank you for reaching out. I'll get back to you soon.",
				});
				form.reset();
			} else {
				const result = await response.json();
				toast.error(result.message || "Failed to send email");
			}
		} catch {
			toast.error("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

			{/* ── Info panel ──────────────────────────────────────── */}
			<div className="section-card space-y-8 px-8 py-10">
				<div>
					<p className="accent-line">Say hello</p>
					<h3
						className="mt-5 max-w-md text-balance text-white"
						style={{
							fontFamily: "'Space Grotesk', sans-serif",
							fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
							fontWeight: 700,
							lineHeight: 0.96,
							letterSpacing: "-0.015em",
						}}
					>
						Let&apos;s build something
						<span className="gradient-text block">extraordinary.</span>
					</h3>
					<p className="mt-5 max-w-md text-base leading-[1.8] text-white/55">
						If you have a product idea, a design challenge, or a platform that
						needs stronger execution, send me a note.
					</p>
				</div>

				{/* Socials */}
				<SocialButtons
					size="md"
					className="gap-4"
					github="https://github.com/ake144"
					twitter="https://x.com/AkeTamirat94397"
					linkedin="https://www.linkedin.com/in/akeja/"
				/>

				{/* Contact detail cards */}
				<div className="space-y-3">
					{contactDetails.map((item) => (
						<div
							key={item.label}
							className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition hover:border-white/[0.14]"
						>
							<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-red-500/10 text-red-400">
								<item.icon className="h-4 w-4" />
							</span>
							<div className="min-w-0">
								<p className="text-[9px] uppercase tracking-[0.3em] text-white/30">{item.label}</p>
								{item.href ? (
									<Link
										href={item.href}
										className="mt-0.5 block truncate text-sm text-white/65 transition hover:text-white"
									>
										{item.value}
									</Link>
								) : (
									<p className="mt-0.5 truncate text-sm text-white/65">{item.value}</p>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Response time note */}
				<div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm leading-[1.7] text-white/40">
					I usually respond with a direct next step, a short scope note, or a
					concrete recommendation so the conversation can move quickly.
				</div>
			</div>

			{/* ── Form panel ──────────────────────────────────────── */}
			<div className="section-card px-8 py-10">
				<p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
					Send a message
				</p>
				<p className="mt-3 max-w-xl text-sm leading-[1.8] text-white/50">
					Use the form below to talk about a project, collaboration, or a role.
				</p>

				<form onSubmit={handleSubmit} className="mt-8 space-y-5">
					{/* Row 1 */}
					<div className="grid gap-4 sm:grid-cols-2">
						{[
							{ name: "name", type: "text", label: "Your name", placeholder: "John Doe", required: true },
							{ name: "email", type: "email", label: "Email address", placeholder: "john@example.com", required: true },
						].map((f) => (
							<label key={f.name} className="block space-y-2">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{f.label}</span>
								<input
									required={f.required}
									name={f.name}
									type={f.type}
									placeholder={f.placeholder}
									className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-red-500/50 focus:bg-white/[0.06]"
								/>
							</label>
						))}
					</div>

					{/* Row 2 */}
					<div className="grid gap-4 sm:grid-cols-2">
						{[
							{ name: "phone", type: "tel", label: "Phone (optional)", placeholder: "+1 (555) 000-0000", required: false },
							{ name: "company", type: "text", label: "Company / website", placeholder: "Acme Inc.", required: false },
						].map((f) => (
							<label key={f.name} className="block space-y-2">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{f.label}</span>
								<input
									required={f.required}
									name={f.name}
									type={f.type}
									placeholder={f.placeholder}
									className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-red-500/50 focus:bg-white/[0.06]"
								/>
							</label>
						))}
					</div>

					{/* Message */}
					<label className="block space-y-2">
						<span className="text-[10px] uppercase tracking-[0.3em] text-white/40">How can I help?</span>
						<textarea
							required
							name="message"
							rows={5}
							placeholder="Tell me about your project goals..."
							className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition focus:border-red-500/50 focus:bg-white/[0.06]"
						/>
					</label>

					{/* Submit */}
					<div className="flex flex-wrap items-center gap-4 pt-1">
						<button
							type="submit"
							disabled={loading}
							className="glow-btn disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading ? "Sending…" : "Send message"}
							<ArrowRight className="h-3.5 w-3.5" />
						</button>
						<p className="text-[10px] uppercase tracking-[0.28em] text-white/25">
							Usually replies within 24 h
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactSection;
