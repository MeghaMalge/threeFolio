export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-5 gap-2 text-white text-sm justify-center mt-6 pointer-events-auto">
      {/* Email */}
      <a
        href="mailto:meghamalge226@gmail.com"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        meghamalge226@gmail.com
      </a>

      <span className="opacity-40 md:block hidden">|</span>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/meghamalge/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3zM9 8.98h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9z" />
        </svg>
        LinkedIn
      </a>

      <span className="opacity-40 md:block hidden">|</span>

      {/* GitHub */}
      <a
        href="https://github.com/MeghaMalge"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.4.8 1 .8 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
        </svg>
        GitHub
      </a>
    </div>
  );
}
