'use client';

import GridPattern from "@/components/grid-layout";
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
		<section className="relative min-h-screen w-full bg-neutral-950 text-slate-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-mono">

			{/* Background Grid Pattern - Subtle */}
			<div className="absolute inset-0 z-0">
				<GridPattern
					width={50}
					height={50}
					x={-1}
					y={-1}
					className="opacity-20 text-neutral-800 fill-neutral-900 stroke-neutral-800"
					strokeDasharray="0"
				/>
			</div>

			<div className="relative z-10 w-full max-w-6xl border border-neutral-800 bg-neutral-950">
				<div className="grid lg:grid-cols-[1fr_1.2fr] divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">

					{/* Left Column */}
					<div className="divide-y divide-neutral-800">

						{/* Header Section */}
						<div className="p-8 sm:p-12 lg:p-16">
							<h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
								Let&apos;s build something extraordinary.
							</h1>
							<p className="text-lg text-neutral-400 leading-relaxed">
								Whether you have a groundbreaking idea or need to scale your existing platform, I&apos;m ready to help you achieve your goals.
							</p>

							<div className="mt-10">
								<SocialButtons
									size="md"
									className="gap-4"
									github="https://github.com/ake144"
									twitter="https://twitter.com/your-handle"
									linkedin="https://www.linkedin.com/in/your-profile"
								/>
							</div>
						</div>

						{/* Stats Section */}
						<div className="grid grid-cols-2 divide-x divide-neutral-800">
							<div className="p-8 sm:p-10">
								<p className="text-4xl font-bold text-white mb-2">100%</p>
								<p className="text-sm text-neutral-500 uppercase tracking-wider">Client Satisfaction</p>
							</div>
							<div className="p-8 sm:p-10">
								<p className="text-4xl font-bold text-white mb-2">24/7</p>
								<p className="text-sm text-neutral-500 uppercase tracking-wider">Support</p>
							</div>
						</div>

						{/* Quote Section */}
						<div className="p-8 sm:p-12">
							<blockquote className="space-y-4">
								<p className="text-lg text-neutral-300 italic">
									&quot;Great design is not just what it looks like and feels like. Design is how it works.&quot;
								</p>
								<footer className="text-sm text-neutral-500 font-medium">
									— Steve Jobs
								</footer>
							</blockquote>
						</div>
					</div>

					{/* Right Column - Form */}
					<div className="p-8 sm:p-12 lg:p-16 bg-neutral-950">
						<div className="mb-10">
							<h2 className="text-xl font-semibold text-white mb-2">Get in touch</h2>
							<p className="text-neutral-500">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-8">
							<div className="space-y-6">
								<div className="group">
									<label className="block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Your Name</label>
									<input
										required
										name="name"
										type="text"
										placeholder="John Doe"
										className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors rounded-none"
									/>
								</div>

								<div className="group">
									<label className="block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Email Address</label>
									<input
										required
										name="email"
										type="email"
										placeholder="john@example.com"
										className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors rounded-none"
									/>
								</div>

								<div className="grid sm:grid-cols-2 gap-8">
									<div className="group">
										<label className="block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Phone (Optional)</label>
										<input
											name="phone"
											type="tel"
											placeholder="+1 (555) 000-0000"
											className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors rounded-none"
										/>
									</div>
									<div className="group">
										<label className="block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Company Website</label>
										<input
											name="website"
											type="url"
											placeholder="https://example.com"
											className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors rounded-none"
										/>
									</div>
								</div>

								<div className="group">
									<label className="block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2 group-focus-within:text-white transition-colors">How can I help?</label>
									<textarea
										required
										name="message"
										rows={4}
										placeholder="Tell me about your project goals..."
										className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors resize-none rounded-none"
									/>
								</div>
							</div>

							<div className="pt-4">
								<button
									type="submit"
									disabled={loading}
									className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{loading ? (
										"Sending..."
									) : (
										<>
											Send Message
											<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
										</>
									)}
								</button>
							</div>
						</form>

						<div className="mt-16 pt-10 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-8">
							{contactDetails.map((item) => (
								<div key={item.label} className="flex flex-col gap-2">
									<span className="text-xs text-neutral-500 uppercase tracking-wider">{item.label}</span>
									{item.href ? (
										<Link href={item.href} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors truncate">
											{item.value}
										</Link>
									) : (
										<span className="text-sm font-medium text-neutral-300 truncate">{item.value}</span>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
