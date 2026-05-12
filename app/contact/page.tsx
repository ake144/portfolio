'use client';

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail } from "lucide-react";

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
				toast.success("Transmission successful", {
					description: "Valid sequence received. Expect contact shortly.",
				});
				form.reset();
			} else {
				const result = await response.json();
				toast.error(result.message || "Transmission failed");
			}
		} catch {
			toast.error("An unexpected error occurred during transmission");
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="relative w-full min-h-screen bg-[#0c0c0c] text-[#e0e0e0] font-mono flex items-center pt-24 pb-12">
			{/* Grid Background */}
			<div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
			
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
				<div className="grid gap-16 lg:grid-cols-2 items-start">
					
					{/* Left Column: Info */}
					<div className="flex flex-col">
						<div className="mb-8">
							<span className="inline-block border border-[#333] bg-[#111] px-4 py-2 text-[10px] text-[#a8e036] font-bold tracking-widest uppercase">
								STATUS: LISTENING
							</span>
						</div>
						
						<h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tighter leading-[0.9] mb-8 uppercase">
							INITIATE <br /> CONNECTION
						</h1>
						
						<p className="max-w-sm text-gray-400 font-mono text-sm leading-relaxed mb-12">
							Deploy communications protocol. Awaiting valid input sequence to establish direct channel.
						</p>

						<div className="space-y-4 max-w-md">
							<Link href="https://github.com/ake144" target="_blank" className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] transition-colors p-5 group">
								<span className="text-xs text-gray-300 font-bold tracking-widest">DIR /social/github</span>
								<ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
							</Link>
							<Link href="https://www.linkedin.com/in/akeja/" target="_blank" className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] transition-colors p-5 group">
								<span className="text-xs text-gray-300 font-bold tracking-widest">DIR /social/linkedin</span>
								<ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
							</Link>
							<Link href="mailto:tamiratake@gmail.com" className="flex items-center justify-between border border-[#222] bg-[#0c0c0c] hover:bg-[#111] transition-colors p-5 group">
								<span className="text-xs text-gray-300 font-bold tracking-widest">LNK mailto:tamiratake@gmail.com</span>
								<Mail className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
							</Link>
						</div>
					</div>

					{/* Right Column: Form Terminal */}
					<div className="border border-[#222] bg-[#0c0c0c] shadow-2xl flex flex-col">
						{/* Window Header */}
						<div className="flex justify-between items-center px-4 py-3 border-b border-[#222] bg-[#0a0a0a]">
							<div className="flex gap-2">
								<div className="w-2.5 h-2.5 bg-transparent border border-[#444]"></div>
								<div className="w-2.5 h-2.5 bg-transparent border border-[#444]"></div>
								<div className="w-2.5 h-2.5 bg-transparent border border-[#444]"></div>
							</div>
							<div className="text-[10px] text-gray-500 font-bold tracking-widest">
								transmission_client.exe
							</div>
						</div>

						{/* Form Content */}
						<div className="p-8">
							<form onSubmit={handleSubmit} className="flex flex-col h-full">
								<div className="space-y-10">
									<label className="block">
										<span className="block text-xs font-bold tracking-widest text-[#e0e0e0] mb-4 uppercase">
											&gt; IDENTIFIER [STRING]
										</span>
										<input
											required
											name="name"
											type="text"
											placeholder="Enter designations..."
											className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-300 placeholder:text-gray-700 focus:outline-none focus:border-[#666] transition-colors"
										/>
									</label>

									<label className="block">
										<span className="block text-xs font-bold tracking-widest text-[#e0e0e0] mb-4 uppercase">
											&gt; RETURN_ADDRESS [EMAIL]
										</span>
										<input
											required
											name="email"
											type="email"
											placeholder="user@domain.net..."
											className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-300 placeholder:text-gray-700 focus:outline-none focus:border-[#666] transition-colors"
										/>
									</label>

									<label className="block">
										<span className="block text-xs font-bold tracking-widest text-[#e0e0e0] mb-4 uppercase">
											&gt; PAYLOAD [TEXT]
										</span>
										<textarea
											required
											name="message"
											rows={5}
											placeholder="Type your message..."
											className="w-full bg-transparent border-b border-[#333] pb-3 text-sm text-gray-300 placeholder:text-gray-700 focus:outline-none focus:border-[#666] transition-colors resize-none"
										/>
									</label>
								</div>

								<div className="mt-14 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
									<div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest space-y-1">
										<p>0x00A1: ACK_WAITING</p>
										<p>0x00A2: BUFFER_CLEAR</p>
									</div>
									<button
										type="submit"
										disabled={loading}
										className="border border-[#e0e0e0] text-[#e0e0e0] hover:bg-[#e0e0e0] hover:text-black transition-colors px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
									>
										{loading ? "TRANSMITTING..." : "EXECUTE_TRANSMISSION"}
										<span className="text-xs">{(loading ? "..." : "▻")}</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
