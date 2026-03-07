import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, Linkedin, Mail, Globe, 
  Award, Code2,
  Building2, GraduationCap
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vaibhav Petkar",
  "jobTitle": ["Software Developer", "Frappe Developer", "ERPNEXT Developer", "Programming Instructor"],
  "url": "https://vaibhavpetkar.site",
  "image": "https://vaibhavpetkar.site/vaibhav-avatar.png", // Update with your photo
  "email": "mailto:your-email@example.com", // Update with your email
  "telephone": "+91-your-phone", // Update with your phone
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolhapur",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/in/vaibhavpetkar",
    "https://github.com/vaibhavpetkar"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "V10x Technologies Pvt Ltd"
  },
  "knowsAbout": [
    "Frappe Framework",
    "ERPNext",
    "Python",
    "JavaScript",
    "React",
    "TypeScript",
    "Web Development",
    "Full Stack Development"
  ]
};

export default function About() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-primary shadow-lg">
                  <img 
                    src="/vaibhav-avatar.png" 
                    alt="Vaibhav Petkar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio Section */}
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-2">Vaibhav Petkar</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Software Developer | Frappe & ERPNext Specialist | Programming Instructor
                </p>
                
                <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                  <p>📍 <strong>Location:</strong> Kolhapur, Maharashtra, India</p>
                  <p>🏢 <strong>Company:</strong> V10x Technologies Pvt Ltd</p>
                  <p>📱 <strong>Experience:</strong> Full Stack Development & Frappe/ERPNext Expertise</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-6">
                  <a 
                    href="https://linkedin.com/in/vaibhavpetkar" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/vaibhavpetkar" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a 
                    href="mailto:your-email@example.com" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:opacity-90"
                  >
                    <Mail size={18} /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 size={24} /> Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Frappe", "ERPNext", "SQL", "API Design"].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe size={24} /> Web Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["REST APIs", "Web Sockets", "Docker", "Git", "CI/CD"].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award size={24} /> Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["ERP Systems", "Custom Modules", "Business Logic", "Database Design", "Performance Optimization"].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* About Content */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p>
                  I'm a passionate software developer with deep expertise in Frappe Framework and ERPNext. 
                  With experience at V10x Technologies, I've built scalable ERP solutions and custom business applications.
                </p>
                <p>
                  Beyond development, I'm a programming instructor sharing knowledge with aspiring developers, 
                  helping them master full-stack development and enterprise application architecture.
                </p>
                <p>
                  My focus areas include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Building robust ERPNext customizations and modules</li>
                  <li>Full-stack web application development</li>
                  <li>Teaching programming best practices</li>
                  <li>Enterprise software architecture</li>
                  <li>Performance optimization and scalability</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Building2 size={32} /> Experience
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Developer</CardTitle>
                    <p className="text-muted-foreground">V10x Technologies Pvt Ltd</p>
                  </div>
                  <Badge>Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Developing custom ERPNext modules and integrations</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Built and maintained 10+ ERPNext custom apps</li>
                  <li>Optimized database queries for 40% performance improvement</li>
                  <li>Mentored junior developers on best practices</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Education Section */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap size={32} /> Education & Certifications
            </h2>
            
            <Card>
              <CardContent className="pt-6 space-y-3">
                <p><strong>Continuous Learning:</strong> Always staying updated with latest technologies and frameworks</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Full Stack Development</Badge>
                  <Badge variant="outline">Frappe Framework Certified</Badge>
                  <Badge variant="outline">ERPNext Expertise</Badge>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
