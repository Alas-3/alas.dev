import expressjsLogo from "../components/logos/skill-icons--expressjs-dark.svg";
import firebaseLogo from "../components/logos/logos--firebase.svg";
import vscodeLogo from "../components/logos/skill-icons--vscode-dark.svg";
import tailwindcssLogo from "../components/logos/skill-icons--tailwindcss-dark.svg";
import supabaseLogo from "../components/logos/skill-icons--supabase-dark.svg";
import nodejsLogo from "../components/logos/skill-icons--nodejs-dark.svg";
import nextjsLogo from "../components/logos/skill-icons--nextjs-dark.svg";
import javascriptLogo from "../components/logos/skill-icons--javascript.svg";
import htmlLogo from "../components/logos/skill-icons--html.svg";
import githubLogo from "../components/logos/skill-icons--github-dark.svg";
import gitLogo from "../components/logos/skill-icons--git.svg";
import axiosLogo from "../components/logos/devicon-plain--axios.svg";
import appwriteLogo from "../components/logos/skill-icons--appwrite.svg";
import reactLogo from "../components/logos/skill-icons--react-light.svg";
import cssLogo from "../components/logos/vscode-icons--file-type-css.svg";
import vercelLogo from "../components/logos/skill-icons--vercel-dark.svg";
import lighthouseLogo from "../components/logos/logos--lighthouse.svg";
import npmLogo from "../components/logos/skill-icons--npm-dark.svg";

const techData = {
  frontend: [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "React", logo: reactLogo },
    { name: "Next.js", logo: nextjsLogo },
    { name: "Tailwind CSS", logo: tailwindcssLogo },
    // Add more frontend techs here
  ],
  backend: [
    { name: "Node.js", logo: nodejsLogo },
    { name: "Express.js", logo: expressjsLogo },
    { name: "Firebase", logo: firebaseLogo }, 
    { name: "Supabase", logo: supabaseLogo },
    { name: "Appwrite", logo: appwriteLogo },
    { name: "Axios", logo: axiosLogo },
    // Add more backend techs here
  ],
  tools: [
    { name: "GitHub", logo: githubLogo },
    { name: "Git", logo: gitLogo },
    { name: "npm", logo: npmLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Lighthouse", logo: lighthouseLogo },
    // Add more tools here
  ],
};

export default techData;
