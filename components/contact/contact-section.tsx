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
		<section id="contact" className="relative w-full border-t border-white/10 py-24 sm:py-32">
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-16 border-b border-white/10 pb-10 sm:mb-20">
					<p className="eyebrow mb-6">
						<span>05</span>Contact
					</p>
					<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<h2 className="font-display text-5xl font-bold text-white sm:text-6xl">
								Let's work together.
							</h2>
						</div>
						<p className="max-w-md text-base leading-relaxed text-white/50">
							Whether you have a project in mind or just want to chat about tech, AI, or building cool things — I'd love to hear from you.
						</p>
					</div>
				</div>

				<div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
					{/* Left Column: Info & Links */}
					<div className="flex flex-col gap-12">
						{/* Availability badge */}
						<div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-linear-to-r from-primary/15 to-primary/5 px-4 py-2.5 backdrop-blur-sm">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-primary opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
							</span>
							<span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary/90">
								Open to work
							</span>
						</div>

						<p className="max-w-sm text-base leading-relaxed text-white/55">
							I'm available for full-time roles, contract work, and interesting AI/tech collaborations. Excited about fintech, AI engineering, and scalable systems.
						</p>

						{/* Contact Links */}
						<div className="space-y-2">
							<p className="mb-4 font-mono text-[9px] font-semibold uppercase tracking-widest text-white/40">
								✦ Get in touch
							</p>

							{CONTACT_LINKS.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/8 hover:shadow-lg hover:shadow-primary/10"
								>
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-primary/80 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/12">
										<item.icon className="h-5 w-5" strokeWidth={1.5} />
									</div>
									<div className="flex-1">
										<p className="mb-0.5 font-mono text-[9px] uppercase tracking-widest text-white/40">
											{item.label}
										</p>
										<p className="text-sm font-semibold text-white transition-colors group-hover:text-primary">
											{item.value}
										</p>
									</div>
									<ArrowRight className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-primary" />
								</Link>
							))}
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className="overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/7 to-white/2 shadow-xl backdrop-blur-sm">
						{/* Form header bar */}
						<div className="flex items-center justify-between border-b border-white/10 bg-white/3 px-6 py-4">
							<div className="flex gap-2">
								<div className="h-2.5 w-2.5 rounded-full bg-white/15" />
								<div className="h-2.5 w-2.5 rounded-full bg-white/15" />
								<div className="h-2.5 w-2.5 rounded-full bg-white/15" />
							</div>
							<span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
								Send a message
							</span>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="flex flex-col gap-7 p-6 sm:p-8">
							<label className="block">
								<span className="mb-3 block font-mono text-[9px] font-semibold uppercase tracking-widest text-white/50">
									Your Name <span className="text-primary">*</span>
								</span>
								<input
									required
									name="name"
									type="text"
									placeholder="John Doe"
									className="w-full border-b border-white/15 bg-transparent pb-3 text-base text-white placeholder:text-white/25 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<label className="block">
								<span className="mb-3 block font-mono text-[9px] font-semibold uppercase tracking-widest text-white/50">
									Email Address <span className="text-primary">*</span>
								</span>
								<input
									required
									name="email"
									type="email"
									placeholder="you@example.com"
									className="w-full border-b border-white/15 bg-transparent pb-3 text-base text-white placeholder:text-white/25 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<label className="block">
								<span className="mb-3 block font-mono text-[9px] font-semibold uppercase tracking-widest text-white/50">
									Your Message <span className="text-primary">*</span>
								</span>
								<textarea
									required
									name="message"
									rows={4}
									placeholder="Tell me about your project, idea, or question..."
									className="w-full resize-none border-b border-white/15 bg-transparent pb-3 text-base text-white placeholder:text-white/25 focus:border-primary focus:outline-none transition-colors"
								/>
							</label>

							<div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
								<p className="font-mono text-[9px] tracking-widest text-white/35">
									I typically reply within 24–48 hours.
								</p>
								<button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50">
									{loading ? "Sending..." : "Send Message"}
									<Send className={`h-4 w-4 ${loading ? "animate-pulse" : ""}`} />
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
