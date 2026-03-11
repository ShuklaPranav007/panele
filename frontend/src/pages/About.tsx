import { Navbar } from '@/components/Navbar'
import React from 'react'

 
const stats = [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Years of Experience', value: '6+' },
]

const values = [
    {
        title: 'Innovation',
        description:
            'We build modern digital experiences with a strong focus on usability, speed, and scalable architecture.',
    },
    {
        title: 'Quality',
        description:
            'Every product is crafted with clean code, thoughtful design, and attention to detail.',
    },
    {
        title: 'Collaboration',
        description:
            'We work closely with clients and teams to turn ideas into reliable and impactful solutions.',
    },
]

const About = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Navbar />
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-purple-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                                About Us
                            </span>
                            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                We create digital products that feel modern and perform beautifully.
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                                UI Forge is focused on building clean, fast, and user-friendly interfaces.
                                Our goal is to transform ideas into engaging web experiences with strong
                                design systems and reliable frontend engineering.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                                    Get Started
                                </button>
                                <button className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                                    >
                                        <h3 className="text-3xl font-bold text-cyan-300">{item.value}</h3>
                                        <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                            Our Story
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Designing with purpose, building with precision.
                        </h2>
                        <p className="mt-6 text-slate-300 leading-7">
                            We believe great products are created at the intersection of design,
                            technology, and human-centered thinking. From landing pages to complex web
                            applications, we deliver interfaces that are visually polished and easy to use.
                        </p>
                        <p className="mt-4 text-slate-300 leading-7">
                            Our team combines creative design, frontend expertise, and product thinking
                            to build experiences that help businesses grow and stand out.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                                <p className="mt-3 text-slate-300 leading-7">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 text-center sm:p-12">
                    <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something impactful.</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Whether you need a polished marketing page or a scalable frontend application,
                        we are ready to help bring your vision to life.
                    </p>
                    <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    )
}

export default About