"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";

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
		<section id="contact" className="relative w-full bg-[#0c0c0c] text-[#e0e0e0] font-mono flex items-center py-24 border-t border-[#222]">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

				{/* Section Header */}
				<div className="mb-16 border-b border-[#222] pb-10">
					<p className="text-[10px] text-[#a8e036] font-bold tracking-[0.3em] uppercase mb-4">
						— SECTION_05 / CONTACT
					</p>
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.9] uppercase">
							Get In<br />
							<span className="italic text-gray-500">Touch.</span>
						</h2>
						<p className="max-w-xs text-gray-400 text-sm leading-relaxed">
							Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
						</p>
					</div>
				</div>

				<div className="grid gap-16 lg:grid-cols-2 items-start">

					{/* Left Column: Info & Links */}
					<div className="flex flex-col gap-10">

						{/* Availability badge */}
						<div className="inline-flex items-center gap-3 border border-[#a8e036]/30 bg-[#a8e036]/5 px-4 py-3 w-fit">
							<span className="w-2 h-2 rounded-full bg-[#a8e036] animate-pulse"></span>
							<span className="text-xs text-[#a8e036] font-bold tracking-widest uppercase">Available for new projects</span>
						</div>

						<div>
							<p className="text-gray-400 text-sm leading-relaxed max-w-sm">
								I&apos;m open to freelance work, full-time opportunities, and interesting collaborations — especially in AI engineering, full-stack development, and LLM-powered products.
							</p>
						</div>

						{/* Contact Links */}
						<div className="space-y-3">
							<p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-5">
								Reach me directly
							</p>

							<Link
								href="mailto:tamiratake@gmail.com"
								className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] hover:border-[#444] transition-all p-5 group"
							>
								<div className="flex items-center gap-4">
									<Mail className="w-4 h-4 text-[#a8e036]" />
									<div>
										<p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Email</p>
										<p className="text-sm text-white font-bold">tamiratake@gmail.com</p>
									</div>
								</div>
								<ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
							</Link>

							<Link
								href="https://www.linkedin.com/in/akeja/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] hover:border-[#444] transition-all p-5 group"
							>
								<div className="flex items-center gap-4">
									<Linkedin className="w-4 h-4 text-[#a8e036]" />
									<div>
										<p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">LinkedIn</p>
										<p className="text-sm text-white font-bold">linkedin.com/in/akeja</p>
									</div>
								</div>
								<ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
							</Link>

							<Link
								href="https://github.com/ake144"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] hover:border-[#444] transition-all p-5 group"
							>
								<div className="flex items-center gap-4">
									<Github className="w-4 h-4 text-[#a8e036]" />
									<div>
										<p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">GitHub</p>
										<p className="text-sm text-white font-bold">github.com/ake144</p>
									</div>
								</div>
								<ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
							</Link>
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className="border border-[#222] bg-[#0a0a0a]">
						{/* Form header bar */}
						<div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
							<div className="flex gap-2">
								<div className="w-2.5 h-2.5 border border-[#444]"></div>
								<div className="w-2.5 h-2.5 border border-[#444]"></div>
								<div className="w-2.5 h-2.5 border border-[#444]"></div>
							</div>
							<span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Send me a message</span>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="p-8 flex flex-col gap-8">

							<label className="block">
								<span className="block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
									Your Name <span className="text-[#a8e036]">*</span>
								</span>
								<input
									required
									name="name"
									type="text"
									placeholder="e.g. Jane Smith"
									className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-200 placeholder:text-gray-700 focus:outline-none focus:border-[#a8e036] transition-colors"
								/>
							</label>

							<label className="block">
								<span className="block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
									Email Address <span className="text-[#a8e036]">*</span>
								</span>
								<input
									required
									name="email"
									type="email"
									placeholder="you@example.com"
									className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-200 placeholder:text-gray-700 focus:outline-none focus:border-[#a8e036] transition-colors"
								/>
							</label>

							<label className="block">
								<span className="block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
									Your Message <span className="text-[#a8e036]">*</span>
								</span>
								<textarea
									required
									name="message"
									rows={5}
									placeholder="Tell me about your project, idea, or question..."
									className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-200 placeholder:text-gray-700 focus:outline-none focus:border-[#a8e036] transition-colors resize-none"
								/>
							</label>

							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
								<p className="text-[10px] text-gray-600 tracking-widest">
									I typically reply within 24–48 hours.
								</p>
								<button
									type="submit"
									disabled={loading}
									className="flex items-center gap-3 bg-[#9366ff] hover:bg-[#7e52eb] disabled:opacity-50 disabled:cursor-not-allowed text-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none"
								>
									{loading ? "Sending..." : "Send Message"}
									<Send className={`w-3.5 h-3.5 ${loading ? "animate-pulse" : ""}`} />
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
