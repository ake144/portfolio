'use client';

import SocialButtons from "@/components/ui/social-buttons";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
	{
		label: "Email",
		value: "tamiratake@gmail.com",
		href: "mailto:tamiratake@gmail.com",
		icon: Mail
	},
	{
		label: "Phone",
		value: "+251 954234576",
		href: "tel:+251954234576",
		icon: Phone
	},
	{
		label: "Location",
		value: "Addis Ababa, Ethiopia",
		icon: MapPin
	},
];

const ContactPage = () => {
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
				headers: {
					"Content-Type": "application/json",
				},
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
	}

	return (
		<main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
			<div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
					<p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
						Contact
					</p>
					<h1 className="max-w-2xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
						Let&apos;s build something extraordinary.
					</h1>
					<p className="max-w-xl text-base leading-7 text-white/68 sm:text-lg">
						If you have a product idea, a design challenge, or a platform that needs stronger execution, send me a note and I&apos;ll reply as soon as I can.
					</p>

					<div className="flex flex-wrap gap-3">
						<SocialButtons
							size="md"
							className="gap-4"
							github="https://github.com/ake144"
							twitter="https://x.com/AkeTamirat94397"
							linkedin="https://www.linkedin.com/in/akeja/"
						/>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{contactDetails.map((item) => (
							<div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-black/40 p-4">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</span>
								{item.href ? (
									<Link href={item.href} className="mt-3 block truncate text-sm text-white/75 transition hover:text-white sm:text-base">
										{item.value}
									</Link>
								) : (
									<p className="mt-3 truncate text-sm text-white/75 sm:text-base">{item.value}</p>
								)}
							</div>
						))}
					</div>

					<div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5 text-sm leading-7 text-white/60">
						I usually respond with a direct next step, a short scope note, or a concrete recommendation so the conversation can move quickly.
					</div>
				</div>

				<div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
					<div className="mb-8">
						<p className="text-xs uppercase tracking-[0.35em] text-white/45">
							Send a message
						</p>
						<p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
							Use the form below if you want to talk about a project, collaboration, or a role.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="space-y-2 text-sm text-white/70">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Your name</span>
								<input
									required
									name="name"
									type="text"
									placeholder="John Doe"
									className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-red-500/60 focus:outline-none"
								/>
							</label>

							<label className="space-y-2 text-sm text-white/70">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Email address</span>
								<input
									required
									name="email"
									type="email"
									placeholder="john@example.com"
									className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-red-500/60 focus:outline-none"
								/>
							</label>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							<label className="space-y-2 text-sm text-white/70">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Phone optional</span>
								<input
									name="phone"
									type="tel"
									placeholder="+1 (555) 000-0000"
									className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-red-500/60 focus:outline-none"
								/>
							</label>
							<label className="space-y-2 text-sm text-white/70">
								<span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Company website</span>
								<input
									name="website"
									type="url"
									placeholder="https://example.com"
									className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-red-500/60 focus:outline-none"
								/>
							</label>
						</div>

						<label className="block space-y-2 text-sm text-white/70">
							<span className="text-[10px] uppercase tracking-[0.3em] text-white/45">How can I help?</span>
							<textarea
								required
								name="message"
								rows={6}
								placeholder="Tell me about your project goals..."
								className="w-full resize-none border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-red-500/60 focus:outline-none"
							/>
						</label>

						<div className="flex flex-wrap items-center gap-3 pt-2">
							<button
								type="submit"
								disabled={loading}
								className="inline-flex items-center justify-center gap-2 border border-red-500/70 bg-red-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
							>
								{loading ? "Sending..." : "Send message"}
								<ArrowRight className="h-4 w-4" />
							</button>
							<p className="text-xs uppercase tracking-[0.3em] text-white/35">
								Usually replies within 24 hours
							</p>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
