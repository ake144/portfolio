"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";

const CONTACT_LINKS = [
	{
		label: "Email",
		value: "tamiratake@gmail.com",
		href: "mailto:tamiratake@gmail.com",
		icon: Mail,
		external: false,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/akeja",
		href: "https://www.linkedin.com/in/akeja/",
		icon: Linkedin,
		external: true,
	},
	{
		label: "GitHub",
		value: "github.com/ake144",
		href: "https://github.com/ake144",
		icon: Github,
		external: true,
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
				toast.success("Message sent!", {
					description: "Thanks for reaching out — I'll get back to you soon.",
				});
				form.reset();
			} else {
				const result = await response.json();
				toast.error(result.message || "Something went wrong. Please try again.");
			}
		} catch {
			toast.error("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="contact" className="relative w-full border-t border-border py-24 sm:py-32">
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-16 border-b border-border pb-10 sm:mb-20">
					<p className="eyebrow mb-6">
						<span>04</span>Contact
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<h2 className="section-heading">
							Get in touch.
						</h2>
						<p className="max-w-xs text-sm leading-relaxed text-white/45">
							Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
						</p>
					</div>
				</div>

				<div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
					{/* Left Column: Info & Links */}
					<div className="flex flex-col gap-10">
						{/* Availability badge */}
						<div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/25 bg-primary/7 px-4 py-2.5">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
							</span>
							<span className="font-mono text-xs font-bold uppercase tracking-widest text-primary/90">
								Available for new projects
							</span>
						</div>

						<p className="max-w-sm text-sm leading-relaxed text-white/45">
							I&apos;m open to freelance work, full-time opportunities, and interesting collaborations —
							especially in AI engineering, full-stack development, and LLM-powered products.
						</p>

						{/* Contact Links */}
						<div className="space-y-3">
							<p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
								Reach me directly
							</p>

							{CONTACT_LINKS.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className="card-interactive group flex items-center justify-between p-5"
								>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-white/3 text-primary/80">
											<item.icon className="h-4 w-4" strokeWidth={1.75} />
										</div>
										<div>
											<p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-white/35">
												{item.label}
											</p>
											<p className="text-sm font-bold text-white">{item.value}</p>
										</div>
									</div>
									<ArrowRight className="h-4 w-4 shrink-0 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-primary" />
								</Link>
							))}
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className="section-card">
						{/* Form header bar */}
						<div className="flex items-center justify-between border-b border-border px-6 py-4">
							<div className="flex gap-1.5">
								<div className="h-2.5 w-2.5 rounded-full bg-white/10" />
								<div className="h-2.5 w-2.5 rounded-full bg-white/10" />
								<div className="h-2.5 w-2.5 rounded-full bg-white/10" />
							</div>
							<span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/35">
								Send me a message
							</span>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="flex flex-col gap-7 p-6 sm:p-8">
							<label className="block">
								<span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
									Your Name <span className="text-primary">*</span>
								</span>
								<input
									required
									name="name"
									type="text"
									placeholder="e.g. Jane Smith"
									className="w-full border-b border-border bg-transparent pb-3 text-sm text-white/85 placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<label className="block">
								<span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
									Email Address <span className="text-primary">*</span>
								</span>
								<input
									required
									name="email"
									type="email"
									placeholder="you@example.com"
									className="w-full border-b border-border bg-transparent pb-3 text-sm text-white/85 placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<label className="block">
								<span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
									Your Message <span className="text-primary">*</span>
								</span>
								<textarea
									required
									name="message"
									rows={4}
									placeholder="Tell me about your project, idea, or question..."
									className="w-full resize-none border-b border-border bg-transparent pb-3 text-sm text-white/85 placeholder:text-white/20 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
								<p className="font-mono text-[10px] tracking-widest text-white/30">
									I typically reply within 24–48 hours.
								</p>
								<button type="submit" disabled={loading} className="glow-btn disabled:cursor-not-allowed disabled:opacity-50">
									{loading ? "Sending..." : "Send Message"}
									<Send className={`h-3.5 w-3.5 ${loading ? "animate-pulse" : ""}`} />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
