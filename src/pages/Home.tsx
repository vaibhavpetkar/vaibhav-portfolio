import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, delay = 50, className }: { text: string, delay?: number, className?: string }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let i = 0;
    const type = () => {
      setCurrentText(text.substring(0, i + 1));
      i++;
      if (i < text.length) {
        timeout = setTimeout(type, delay);
      }
    };
    timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{currentText}<span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle"></span></span>;
};
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateMessage } from "@/hooks/use-messages";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import {
  ArrowRight, Github, Linkedin, Mail, ExternalLink,
  Terminal, Database, Layout, ServerCog, MessageCircle,
  Code, Code2, Smartphone, GraduationCap, Building2
} from "lucide-react";
import type { z } from "zod";

const formSchema = api.messages.create.input;

export default function Home() {
  const { mutate: createMessage, isPending } = useCreateMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      serviceType: "Freelance",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createMessage(values, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-mesh selection:bg-primary/30 selection:text-primary">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="max-w-4xl"
        >
          <motion.div variants={fadeIn} className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <motion.div
              className="relative shrink-0 order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10 bg-card max-w-[400px] w-full">
                <img src="/vaibhav-avatar.png" alt="Vaibhav Petkar CEO" className="w-full h-auto object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background border border-border px-5 py-2 rounded-full text-sm font-bold text-primary shadow-xl z-20"
                whileHover={{ scale: 1.05 }}
              >
                Born: 28th July 1999
              </motion.div>
              <div className="absolute inset-0 bg-primary/20 blur-3xl z-0 scale-105" />
            </motion.div>

            <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 mx-auto lg:mx-0 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities & Mentorship
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.1] mb-6">
                Hi, I'm <span className="text-gradient">Vaibhav Petkar.</span>
              </motion.h1>

              <motion.div variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground font-medium mb-4 max-w-2xl mx-auto lg:mx-0 h-16 sm:h-8 flex items-center justify-center lg:justify-start">
                <Typewriter text="Full-Stack Developer | Tech CEO | Mentor" delay={60} />
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I help startups and businesses build scalable web, ERP, and mobile solutions
                with clean architecture and modern technologies.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all z-20" asChild>
                  <a href="#contact">Hire Me <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-2 hover:bg-secondary transition-all z-20" asChild>
                  <a href="#courses">View Courses</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="About Me"
            subtitle="Bridging the gap between complex business logic and elegant user interfaces."
          />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="prose prose-lg dark:prose-invert max-w-3xl text-muted-foreground"
          >
            <p>
              Highly motivated IT professional with strong experience in computer operations, system administration, teaching, and software development fundamentals. I am currently pursuing my <strong>MCA (Master of Computer Applications)</strong> with a strong interest in full-stack development, cybersecurity, and scalable software systems.
            </p>
            <p>
              With extensive experience in <strong>Python, React, Java, and Frappe</strong>, I specialize in architecting systems that are both robust under the hood and intuitive on the surface.
            </p>
            <p>
              From managing company servers and live production backend support to developing custom <strong>ERP systems</strong> and AI Calling applications, I ensure the codebase is maintainable and the product delivers real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Programming",
              icon: <Code className="w-6 h-6 text-primary" />,
              skills: ["C, C++", "Java, Adv. Java", "C#, .NET", "Python", "Bash", "R, Ruby on Rails"]
            },
            {
              title: "Web Technologies",
              icon: <Layout className="w-6 h-6 text-primary" />,
              skills: ["HTML, CSS, Bootstrap", "JavaScript, PHP", "Node.js, Angular", "React, Next.js"]
            },
            {
              title: "Databases",
              icon: <Database className="w-6 h-6 text-primary" />,
              skills: ["MySQL", "MongoDB", "PL/SQL", "PostgreSQL"]
            },
            {
              title: "Mobile Dev",
              icon: <Smartphone className="w-6 h-6 text-primary" />,
              skills: ["Android (Java)", "Flutter"]
            },
            {
              title: "Game Dev",
              icon: <Terminal className="w-6 h-6 text-primary" />,
              skills: ["Unity", "Godot"]
            },
            {
              title: "OS & Tools",
              icon: <ServerCog className="w-6 h-6 text-primary" />,
              skills: ["Linux, RedHat, macOS", "Windows Server 2016/2021", "Git, GitHub", "Google Workspace"]
            }
          ].map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="h-full bg-card shadow-lg border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.skills.map(skill => (
                        <li key={skill} className="flex items-center text-muted-foreground group">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:scale-150 transition-transform" />
                          <span className="group-hover:text-foreground transition-colors">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey in software development and IT operations."
        />

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {[
            {
              role: "Software Developer",
              company: "v10x Technologies Pvt. Ltd.",
              location: "Pune",
              date: "2025 - Present",
              description: "Developed a multi-tenant Face Checking System and custom AI Calling System using Frappe. Integrated biometric machines and social media APIs. Managed system administration and server maintenance."
            },
            {
              role: "Junior IT Executive",
              company: "Laxmi Civil Engineering Service Pvt. Ltd.",
              location: "Kolhapur",
              date: "2023 - 2025",
              description: "Managed company servers and provided live production backend support. Developed in-house websites for PMC & EMD government tenders. Handled government IoT projects and set up internal self-hosted services like Element X."
            },
            {
              role: "Instructor",
              company: "Disha Computer Institute",
              location: "Kolhapur",
              date: "Sep 2022 - Present",
              description: "Teaching programming languages and computer fundamentals. Guiding students in practical programming, system architecture, and project implementations."
            }
          ].map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary z-10">
                <Building2 size={18} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
              >
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:border-primary/50 transition-colors h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    <span className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full whitespace-nowrap">{exp.date}</span>
                  </div>
                  <div className="text-primary text-sm font-medium mb-4">{exp.company} • {exp.location}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card/40 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Featured Work"
            subtitle="A selection of recent projects that showcase my capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web-Based Management Systems",
                desc: "Dynamic web applications with secure CRUD operations, complex role-based access control, and user authentication.",
                tech: ["HTML/CSS/JS", "PHP", "MySQL"],
                icon: <Layout className="w-5 h-5" />
              },
              {
                title: "Android Applications",
                desc: "Feature-rich mobile apps with robust database integration, focusing on seamless UI responsiveness and user experience.",
                tech: ["Java", "Flutter", "Firebase"],
                icon: <Smartphone className="w-5 h-5" />
              },
              {
                title: "Game Development Projects",
                desc: "Immersive 2D and 3D games implementing custom game logic, accurate physics rendering, and dynamic UI elements.",
                tech: ["Unity", "Godot", "C#"],
                icon: <Terminal className="w-5 h-5" />
              },
              {
                title: "Cybersecurity Practice Labs",
                desc: "Hands-on projects focused on practical ethical hacking concepts, system security hardening, and vulnerability analysis.",
                tech: ["Bash", "Linux", "Networking"],
                icon: <ServerCog className="w-5 h-5" />
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                  <Card className="h-full flex flex-col bg-background shadow-lg border-border/50 overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="h-2 bg-gradient-to-r from-primary to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <Button variant="outline" size="sm" className="w-full gap-2 group-hover:border-primary/50 transition-colors">
                          <Github className="w-4 h-4" /> Code
                        </Button>
                        <Button variant="default" size="sm" className="w-full gap-2 shadow-md">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="What I Do"
          subtitle="Specialized services to help you achieve your technical goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              title: "Freelance Web Development",
              desc: "Building scalable, responsive, and performant web applications from scratch.",
              icon: <Code className="w-6 h-6 text-primary" />
            },
            {
              title: "ERP & Frappe Customization",
              desc: "Tailoring ERPNext to fit your exact business workflows and requirements.",
              icon: <Database className="w-6 h-6 text-primary" />
            },
            {
              title: "Mobile App Development",
              desc: "Creating beautiful cross-platform mobile experiences for iOS and Android.",
              icon: <Smartphone className="w-6 h-6 text-primary" />
            },
            {
              title: "Online Programming Tuition",
              desc: "1-on-1 mentoring in Python, React, and Frappe framework development.",
              icon: <GraduationCap className="w-6 h-6 text-primary" />
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 flex gap-4 hover:border-primary/50 hover:shadow-xl transition-all h-full"
              >
                <div className="flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses & Tuition Section */}
      <section id="courses" className="py-24 bg-card/40 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Programming Courses & Mentorship"
            subtitle="Master the most in-demand technologies with 1-on-1 expert guidance."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
            {[
              "C / C++", "Java", "Python", "DevOps", "Cloud Computing",
              "C# / .NET", "ASP.NET / VB.NET", "React", "TypeScript", "Tailwind CSS",
              "Next.js", "Docker", "Git", "Linux / Ubuntu", "Firebase",
              "Frappe / ERPNext", "Data Structures", "Web Development", "Mobile App Dev", "System Design"
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="bg-background border border-border/50 rounded-xl p-4 text-center font-semibold text-sm shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto border-primary/20 bg-background overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Enroll in a Course Today</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Ready to accelerate your tech career? Click below to register directly via my personal WhatsApp and discuss your learning goals.
                </p>
                <form
                  action="https://wa.me/919922565388"
                  method="get"
                  target="_blank"
                  className="flex flex-col gap-4 max-w-sm mx-auto"
                >
                  <input type="hidden" name="text" value="Hi Vaibhav! I would like to register for a programming course." />
                  <Button type="submit" size="lg" className="w-full text-lg h-14 bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 shadow-lg hover:shadow-xl transition-all">
                    <MessageCircle className="w-6 h-6" /> Register via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <SectionHeader
              title="Education"
              subtitle="My academic background."
            />
            <div className="space-y-6 mt-8">
              {[
                { degree: "M.C.A", institution: "YCMOU", year: "2025" },
                { degree: "PGDCA", institution: "E-Max", year: "2022" },
                { degree: "B.Sc", institution: "Shivaji University", year: "2021" }
              ].map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg font-display">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">
                        {edu.year}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Traits */}
          <div>
            <SectionHeader
              title="Certifications & Extras"
              subtitle="Achievements, languages, and core traits."
            />
            <div className="space-y-6 mt-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4 text-primary">Certifications & Achievements</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Certified Cyber Warrior – HackingFlix Academy</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> The Complete Cyber Security – STATIONX</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> NCC – Nagpur (National Level)</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> National Level Athlete (100x4 Relay, Gymnastics)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-bold text-primary mb-2">Languages</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>Marathi - Native</li>
                          <li>Hindi - Proficient</li>
                          <li>English - Advanced</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Traits</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Hardworking, honest, disciplined, quick learner, effective problem solver.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to learn? Drop me a message.
            </p>
          </div>

          <Card className="border-border/50 shadow-xl overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-violet-500" />
            <CardContent className="p-6 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="h-12 bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Freelance">Freelance Web/App Project</SelectItem>
                            <SelectItem value="Job">Job Opportunity</SelectItem>
                            <SelectItem value="ERP">ERP & Frappe Customization</SelectItem>
                            <SelectItem value="Tuition">Programming Tuition</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or inquiry..."
                            className="min-h-[150px] resize-y bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="text-primary" size={24} />
            <span className="font-display font-bold text-xl">Vaibhav.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="https://github.com/VaibhavPetkar" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm">Main GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/vaibhav-petkar-8370b424a" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="mailto:vaibhavprakashpetkar@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
            <a href="tel:+919922565938" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-medium">+91 9922565938</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaibhav Petkar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
