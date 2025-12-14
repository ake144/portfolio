'use client';

import GridPattern from "@/components/grid-layout";
import SocialButtons from "@/components/ui/social-buttons";
import CopyButton from "@/components/ui/copy-button";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner"


const contactDetails = [
	{
		label: "Email",
		value: "tamiratake@gmail.com",
		href: "mailto:tamiratake@gmail.com",
	},
	{
		label: "Phone",
		value: "+251 954234576`",
		href: "tel:+251954234576",
	},
	{
		label: "Location",
		value: "Addis Ababa, Ethiopia",
	},
];

const ContactPage = () => {
   const [emailSubmitted, setEmailSubmitted] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);


    
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
	  event.preventDefault();
	  setLoading(true);
	  setError(null);
	  
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

		 console.log("Response status:", response.ok);
		 
		 if (response.ok || response.status === 200) {
			toast("Email sent successfully!",{
				description: "Thank you for reaching out. I'll get back to you soon.",
			});
			setEmailSubmitted(true);
			form.reset();
		 } else {
			const result = await response.json();
			setError(result.message || "Failed to send email");
		 }
	  } catch (err) {
		 setError("An unexpected error occurred");
	  } finally {
		 setLoading(false);
	  }
   }


	return (
		<section className="relative min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
			<GridPattern
				width={160}
				height={160}
				x={-1}
				y={-1}
				className="pointer-events-none mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
				strokeDasharray="4 4"
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12">
				<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
						<h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight text-white">
							Let's collaborate on ambitious ideas.
						</h1>
						<p className="mt-4 text-lg text-slate-300 max-w-2xl">
							Have a product idea, need help with an existing platform, or want to
							brainstorm something bold? Reach out—I'm available for freelance work,
							product collaborations, and mentorship conversations.
						</p>

						<div className="mt-10 grid sm:grid-cols-2 gap-5">
							{contactDetails.map((item) => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
								>
									<p className="text-xs uppercase tracking-[0.25em] text-slate-400">
										{item.label}
									</p>
									<div className="mt-2 flex items-center justify-between gap-2">
										{item.href ? (
											<Link
												href={item.href}
												className="text-lg font-medium text-white hover:text-sky-400"
											>
												{item.value}
											</Link>
										) : (
											<span className="text-lg font-medium text-white">{item.value}</span>
										)}
										{item.href && <CopyButton value={item.value} />}
									</div>
								</div>
							))}
						</div>

						<div className="mt-10">
							<SocialButtons
								size="lg"
								className="justify-start gap-6"
								github="https://github.com/ake144"
								twitter="https://twitter.com/your-handle"
								linkedin="https://www.linkedin.com/in/your-profile"
							/>
						</div>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
						<h2 className="text-2xl font-semibold text-white">Send a message</h2>
						<p className="mt-2 text-sm text-slate-300">
							Tell me a little bit about your project, timeline, and goals.
						</p>

						<form className="mt-8 space-y-5" onSubmit={handleSubmit}>
							<div>
								<label className="text-sm text-slate-300">Full name</label>
								<input
									required
									name="name"
									type="text"
									placeholder="Jane Doe"
									className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white outline-none focus:border-sky-100"
								/>
							</div>
							<div className="grid sm:grid-cols-2 gap-4">
								<div>
									<label className="text-sm text-slate-300">Email address</label>
									<input
										required
										name="email"
										type="email"
										placeholder="you@example.com"
										className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white outline-none focus:border-sky-500"
									/>
								</div>
								<div>
									<label className="text-sm text-slate-300">Company</label>
									<input
										name="company"
										type="text"
										placeholder="Your organization"
										className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white outline-none focus:border-sky-500"
									/>
								</div>
							</div>

							<div>
								<label className="text-sm text-slate-300">How can I help?</label>
								<textarea
									required
									name="message"
									rows={5}
									placeholder="Tell me about your project, brief, or problem you need help with."
									className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white outline-none focus:border-sky-500"
								/>
							</div>

							<div className="flex flex-wrap items-center gap-4">
								<button 
									type="submit"
									className="inline-flex items-center justify-center rounded-2xl  hover:cursor-pointer px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.01]"
								>
								{loading ? "Sending..." : "Send message"}
								</button>
								<p className="text-xs text-slate-400">
									By sending, you agree to receive a reply via email.
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
