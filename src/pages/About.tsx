import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Globe,
  Award, Code2,
  Building2, GraduationCap, MessageCircle, Phone, ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vaibhav Petkar",
  "jobTitle": ["Software Developer", "Tech CEO", "Frappe Developer", "ERPNext Developer", "Programming Instructor"],
  "url": "https://vaibhavpetkar.online",
  "image": "https://vaibhavpetkar.online/vaibhav-avatar.png",
  "email": "mailto:vaibhavprakashpetkar@gmail.com",
  "telephone": "+91-9922565938",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolhapur",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/in/vaibhav-petkar-8370b424a",
    "https://github.com/VaibhavPetkar",
    "https://github.com/vaibhav10x",
    "https://vaibhavpetkar.online"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "V10x Technologies Pvt Ltd"
  },
  "knowsAbout": [
    "Frappe Framework", "ERPNext", "Python", "JavaScript",
    "React", "TypeScript", "Web Development", "Full Stack Development",
    "Android Development", "Flutter", "Cybersecurity", "Linux"
  ]
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  useEffect(() => {
    document.title = "About Vaibhav Petkar | Tech CEO, Full-Stack Developer & Mentor";
  }, []);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="min-h-screen bg-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">

          {/* Back link */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-16"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

              <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
                {/* Photo */}
                <div className="md:col-span-1 flex justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-44 h-44 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                      <img
                        src="/vaibhav-avatar.png"
                        alt="Vaibhav Petkar - Tech CEO and Full-Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background border border-border px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">
                      Born: 28th July 1999
                    </div>
                  </motion.div>
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new opportunities & Mentorship
                  </div>

                  <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-2 leading-tight">
                    Vaibhav <span className="text-gradient">Petkar</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4 font-medium">
                    Tech CEO · Full-Stack Developer · Frappe & ERPNext Specialist · Programming Instructor
                  </p>

                  <div className="flex flex-col gap-2 mb-6 text-sm text-muted-foreground">
                    <span>📍 Kolhapur, Maharashtra, India</span>
                    <span>🏢 V10x Technologies Pvt Ltd — Software Developer</span>
                    <span>🎓 MCA — YCMOU | B.Sc — Shivaji University</span>
                    <span>📞 +91 9922565938</span>
                    <span>📧 vaibhavprakashpetkar@gmail.com</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm" className="rounded-full gap-2 shadow-md" asChild>
                      <a href="https://www.linkedin.com/in/vaibhav-petkar-8370b424a" target="_blank" rel="noreferrer">
                        <Linkedin size={15} /> LinkedIn
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full gap-2" asChild>
                      <a href="https://github.com/VaibhavPetkar" target="_blank" rel="noreferrer">
                        <Github size={15} /> GitHub
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full gap-2" asChild>
                      <a href="mailto:vaibhavprakashpetkar@gmail.com">
                        <Mail size={15} /> Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full gap-2 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30" asChild>
                      <a href="https://wa.me/919922565938" target="_blank" rel="noreferrer">
                        <MessageCircle size={15} /> WhatsApp
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full gap-2" asChild>
                      <a href="https://vaibhavpetkar.online" target="_blank" rel="noreferrer">
                        <Globe size={15} /> Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Backend Development",
                  icon: <Code2 size={20} />,
                  skills: ["Python", "Frappe", "ERPNext", "Node.js", "SQL", "API Design", "PHP"]
                },
                {
                  title: "Frontend Development",
                  icon: <Globe size={20} />,
                  skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS", "Bootstrap", "Next.js"]
                },
                {
                  title: "Mobile & Tools",
                  icon: <Phone size={20} />,
                  skills: ["Flutter", "Android (Java)", "Git", "Docker", "CI/CD", "REST APIs", "WebSockets"]
                },
                {
                  title: "Specializations",
                  icon: <Award size={20} />,
                  skills: ["ERP Systems", "Custom Modules", "Biometric Integration", "AI Calling", "Linux Admin", "Cybersecurity"]
                }
              ].map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-card/80">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base font-bold">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {cat.icon}
                        </div>
                        {cat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              Experience
            </h2>

            <div className="space-y-5">
              {[
                {
                  role: "Software Developer",
                  company: "V10x Technologies Pvt Ltd",
                  location: "Pune",
                  date: "2025 – Present",
                  badge: "Current",
                  desc: "Developed a multi-tenant Face Checking System and custom AI Calling System using Frappe. Integrated biometric machines and social media APIs. Managed system administration and server maintenance."
                },
                {
                  role: "Junior IT Executive",
                  company: "Laxmi Civil Engineering Service Pvt. Ltd.",
                  location: "Kolhapur",
                  date: "2023 – 2025",
                  badge: null,
                  desc: "Managed company servers and provided live production backend support. Developed in-house websites for PMC & EMD government tenders. Handled government IoT projects and set up internal self-hosted services."
                },
                {
                  role: "Programming Instructor",
                  company: "Disha Computer Institute",
                  location: "Kolhapur",
                  date: "Sep 2022 – Present",
                  badge: "Ongoing",
                  desc: "Teaching programming languages and computer fundamentals. Guiding students in practical programming, system architecture, and project implementations."
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-border/50 hover:border-primary/50 transition-colors bg-card/80">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <div>
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <p className="text-primary text-sm font-medium">{exp.company} · {exp.location}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">{exp.date}</span>
                          {exp.badge && <Badge className="text-xs">{exp.badge}</Badge>}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education & Certs Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              Education & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <Card className="border-border/50 bg-card/80">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Academic Degrees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { degree: "M.C.A", inst: "YCMOU", year: "2025" },
                    { degree: "PGDCA", inst: "E-Max", year: "2022" },
                    { degree: "B.Sc", inst: "Shivaji University", year: "2021" },
                  ].map(edu => (
                    <div key={edu.degree} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                      <div>
                        <p className="font-bold text-sm">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground">{edu.inst}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{edu.year}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Certified Cyber Warrior – HackingFlix",
                      "Complete Cyber Security – STATIONX",
                      "NCC – National Level (Nagpur)",
                      "National Level Athlete",
                      "Full Stack Development",
                      "ERPNext Expertise",
                    ].map(cert => (
                      <Badge key={cert} variant="secondary" className="text-xs">{cert}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
}
