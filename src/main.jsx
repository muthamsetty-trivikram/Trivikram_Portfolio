import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Linkedin, MapPin, GraduationCap, Cloud, BriefcaseBusiness } from 'lucide-react';
import profileImage from './images/vickprofke.jpeg';
import './style.css';

const linkedIn = 'https://www.linkedin.com/in/trivikram-m-800b57252/';
const activityFeed = 'https://www.linkedin.com/in/trivikram-m-800b57252/recent-activity/all/';
const angularPost = 'https://www.linkedin.com/posts/trivikram-m-800b57252_angular-dotnet-aspnetcore-activity-7487581731445862400-XRrh';
const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
if (pathname !== '/') window.history.replaceState(null, '', '/');

function Header() {
  return <header className="header wrap">
    <a className="wordmark" href="#top" aria-label="Trivikram M home"><span className="mark">tm<span>.</span></span><span className="wordmark-name">Trivikram M<br/><small>SOFTWARE ENGINEER</small></span></a>
    <nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#posts">Posts</a><a href="#contact">Contact <ArrowUpRight size={13}/></a></nav>
    <a className="availability" href={linkedIn}><i/> .NET DEVELOPER · MWEBWARE</a>
  </header>
}

const posts = [
  { title: 'Angular request & response flow', category: 'Web development', href: angularPost },
  { title: 'C# parameters: ref, out & in', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7493502959130157056-A-yw' },
  { title: 'Why var is used in .NET projects', category: '.NET', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-dotnetdeveloper-activity-7501672136210817024-vYuV' },
  { title: 'C# classes & objects', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7495348658155204608-PXL8' },
  { title: 'C# access modifiers', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7495868235423252481-A73e' },
  { title: 'C# struct basics', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7495018208668786688-Eu2m' },
  { title: 'C# 13 vs C# 14 switch expressions', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-csharp14-dotnet-activity-7510175251834707968-C1EQ' },
  { title: 'C# type casting', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7490971933174423552-hG6_' },
  { title: 'C# input & output fundamentals', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7491535348561240064-B7P8' },
  { title: 'C# const vs readonly', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-dotnetdeveloper-activity-7490588976618082304-ZaQg' },
  { title: 'Why use Parse() and TryParse()?', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-dotnetdeveloper-activity-7502611180012716032-w33N' },
  { title: 'C# constructors in .NET', category: '.NET', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-dotnetdeveloper-activity-7495513704344682496-YKeD' },
  { title: 'C# OOP core concepts', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-oop-activity-7497483257790476288-6IM9' },
  { title: 'C# fundamentals: variables & data types', category: 'C#', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_csharp-dotnet-programming-activity-7489882968484691968-Thv_' },
  { title: 'C# operators', category: 'C#', href: activityFeed },
  { title: 'C# method overloading vs overriding', category: 'C#', href: activityFeed },
  { title: 'Why interfaces matter in .NET', category: '.NET', href: activityFeed },
  { title: 'Why use a service layer in ASP.NET Core MVC?', category: 'Web development', href: activityFeed },
  { title: 'ASP.NET Core MVC fundamentals', category: 'Web development', href: activityFeed },
  { title: 'Migrating .NET projects to .NET 10', category: '.NET', href: 'https://www.linkedin.com/posts/trivikram-m-800b57252_dotnet-dotnet10-csharp-activity-7512749585992232960-zJb8' },
];

function PostsSection() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'C#', '.NET', 'Web development'];
  const visiblePosts = filter === 'All' ? posts : posts.filter(post => post.category === filter);
  return <section className="posts-section wrap" id="posts">
    <div className="section-top"><p className="eyebrow"><span className="eyebrow-line"/> NOTES FROM MY LEARNING JOURNEY</p><span className="section-count">20 POSTS</span></div>
    <div className="section-heading"><h2>Ideas, shared<br/><em>in progress.</em></h2><p>Short notes on the concepts I’m learning and sharing on LinkedIn.</p></div>
    <div className="post-filters" role="group" aria-label="Filter posts by topic">{filters.map(item => <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}<span>{item === 'All' ? posts.length : posts.filter(post => post.category === item).length}</span></button>)}</div>
    <div className="post-chip-grid">{visiblePosts.map(post => <a className="post-chip" key={post.title} href={post.href} target="_blank" rel="noreferrer"><span className="post-chip-number">{String(posts.indexOf(post) + 1).padStart(2, '0')}</span><span className="post-chip-title">{post.title}</span><span className="post-chip-category">{post.category}</span><ArrowUpRight size={15}/></a>)}</div>
    <a className="posts-more" href={linkedIn} target="_blank" rel="noreferrer">See all posts on LinkedIn <ArrowUpRight size={15}/></a>
  </section>
}

function Home() {
 return <>
  <Header />
  <main id="top">
    <section className="hero wrap" id="about">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line"/> SOFTWARE ENGINEER · HYDERABAD, INDIA</p>
        <h1>Building<br/>software with<br/><em>purpose.</em></h1>
        <p className="intro">Hi, I’m Trivikram — a Software Engineer working as a .NET Developer at MWebWare. I enjoy understanding how applications fit together, from the interface to the API and data layer.</p>
        <div className="hero-actions"><a className="button dark" href="#experience">Explore my profile <ArrowDownRight size={16}/></a><a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a></div>
        <div className="hero-foot"><span>JNTU KAKINADA · 2020—2024</span><span className="scroll-note">SCROLL TO EXPLORE <ArrowDownRight size={13}/></span></div>
      </div>
      <div className="hero-art portrait-art">
        <img src={profileImage} alt="Portrait of Trivikram M" />
        <div className="portrait-label">TRIVIKRAM M <span>· SOFTWARE ENGINEER</span></div>
        <div className="portrait-index">FIG. 01</div>
      </div>
      <div className="hero-number">01</div>
    </section>

    <section className="ticker" aria-label="Technologies and interests"><div className="ticker-track">.NET DEVELOPMENT <b>✳</b> ASP.NET CORE <b>✳</b> WEB API <b>✳</b> ANGULAR <b>✳</b> SOFTWARE ARCHITECTURE <b>✳</b> .NET DEVELOPMENT <b>✳</b></div></section>

    <section className="projects wrap" id="experience">
      <div className="section-top"><p className="eyebrow"><span className="eyebrow-line"/> PROFESSIONAL EXPERIENCE</p><span className="section-count">3 ROLES</span></div>
      <div className="section-heading"><h2>Where I’ve<br/><em>worked.</em></h2><p>Experience across software development and customer-focused teams.</p></div>
      <article className="project-card marvel profile-card">
        <div className="project-meta"><span>01&nbsp; / &nbsp;CURRENT ROLE</span><span>APR 2026 — PRESENT</span></div>
        <div className="profile-card-body"><div className="profile-icon"><BriefcaseBusiness size={24}/></div><div className="profile-card-copy"><h3>.NET Developer<br/><em>at MWebWare.</em></h3><p>Full-time · On-site<br/>Hyderabad, Telangana, India</p></div><div className="profile-tag">CURRENT<br/>ROLE <ArrowUpRight size={16}/></div></div>
        <div className="project-bottom"><span><MapPin size={13}/> Apr 2026 — Present</span><a href={linkedIn} target="_blank" rel="noreferrer">VIEW LINKEDIN PROFILE <ArrowUpRight size={14}/></a></div>
      </article>
      <article className="project-card flit profile-card profile-card-alt">
        <div className="project-meta"><span>02&nbsp; / &nbsp;PREVIOUS EXPERIENCE</span><span>MAR 2025 — MAR 2026</span></div>
        <div className="profile-card-body"><div className="profile-icon"><BriefcaseBusiness size={24}/></div><div className="profile-card-copy"><h3>.NET Developer<br/><em>at MakroCare.</em></h3><p>Full-time · On-site<br/>Hyderabad, Telangana, India</p></div><div className="profile-tag">1 YEAR<br/>1 MONTH <ArrowUpRight size={16}/></div></div>
        <div className="project-bottom"><span>Mar 2025 — Mar 2026</span><span>MAKROCARE</span></div>
      </article>
      <article className="project-card marvel profile-card">
        <div className="project-meta"><span>03&nbsp; / &nbsp;PREVIOUS EXPERIENCE</span><span>FEB 2024 — FEB 2025</span></div>
        <div className="profile-card-body"><div className="profile-icon"><BriefcaseBusiness size={24}/></div><div className="profile-card-copy"><h3>Junior Dotnet Developer<br/><em>at Sahasna.</em></h3><p>Full-time · On-site</p></div><div className="profile-tag">1 YEAR<br/>1 MONTH <ArrowUpRight size={16}/></div></div>
        <div className="project-bottom"><span>Feb 2024 — Feb 2025</span><span>SAHASNA</span></div>
      </article>    </section>

    <PostsSection />

    <section className="interlude wrap"><div className="interlude-mark"><GraduationCap size={22}/></div><p className="eyebrow">EDUCATION</p><h2>Learning is part<br/>of the <em>work.</em></h2><p className="interlude-copy">Jawaharlal Nehru Technological University, Kakinada<br/>2020 — 2024</p><a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">See my LinkedIn profile <ArrowRight size={15}/></a></section>

    <section className="motion wrap"><div className="motion-copy"><p className="eyebrow"><span className="eyebrow-line"/> CONTINUOUS LEARNING</p><h2>Curious about<br/>the <em>cloud.</em></h2><p>I completed AWS Cloud Practitioner Essentials to build a foundation in cloud concepts and AWS services. I’m always interested in understanding how the pieces of software fit together.</p><a className="button light" href={linkedIn} target="_blank" rel="noreferrer">View LinkedIn updates <ArrowUpRight size={15}/></a></div><div className="motion-art learning-art"><div className="motion-orbit orbit-a"/><div className="motion-orbit orbit-b"/><div className="motion-core"><Cloud size={48}/></div><span className="motion-label label-a">AWS CLOUD PRACTITIONER ESSENTIALS</span><span className="motion-label label-b">LEARNING BY BUILDING ↗</span><span className="motion-label label-c">CLOUD · CODE · CURIOSITY</span></div></section>

    <section className="contact wrap" id="contact"><div className="section-top"><p className="eyebrow"><span className="eyebrow-line"/> LET’S CONNECT</p><span className="section-count">TRIVIKRAM M</span></div><h2>Have a good<br/>conversation <em>in mind?</em></h2><p className="contact-intro">Reach out by email, phone, or LinkedIn.</p><div className="contact-links"><a className="contact-mail" href="mailto:muthamsettytrivikram2003@gmail.com">muthamsettytrivikram2003@gmail.com <ArrowUpRight size={17}/></a><a className="contact-mail" href="tel:+919700772789">+91 9700772789 <ArrowUpRight size={17}/></a><a className="contact-mail" href={linkedIn} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={19}/><ArrowUpRight size={17}/></a></div><div className="contact-lower"><span>SOFTWARE ENGINEER · HYDERABAD, INDIA<br/>JNTU KAKINADA · CLASS OF 2024</span><a href={linkedIn} target="_blank" rel="noreferrer" className="round-link" aria-label="LinkedIn profile"><ArrowUpRight size={20}/></a></div></section>
  </main>
  <Footer />
 </>
}
function Footer(){return <footer className="footer wrap"><a className="wordmark" href="#top"><span className="mark">tm<span>.</span></span><span className="wordmark-name">Trivikram M<br/><small>SOFTWARE ENGINEER</small></span></a><span className="footer-note">HYDERABAD, INDIA&nbsp; ✳ &nbsp;2025</span><div className="socials"><a href={linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15}/></a></div></footer>}

createRoot(document.getElementById('root')).render(<React.StrictMode><Home/></React.StrictMode>);


