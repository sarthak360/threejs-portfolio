<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/d206b015-b28f-4104-8aa1-eab74c344b57" />

<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/9f6467f4-3b4f-46fa-b19b-a4c85d62721b" />

🚀 3D Developer Portfolio
A high-performance, visually stunning 3D portfolio built with React, Three.js, and TailwindCSS. This project showcases full-stack expertise, AI-integrated solutions, and interactive 3D environments.

🛠️ Tech Stack
Frontend: React.js, TailwindCSS, Framer Motion

3D Rendering: Three.js, React Three Fiber, React Three Drei

Deployment: Vercel

Contact System: EmailJS

✨ Key Features
Interactive 3D Hero: A fully animated 3D "Hacker Room" environment with responsive camera movement.

Custom 3D Globe: A bespoke, lightweight wireframe globe built without external globe libraries to optimize performance.

Performance Optimized: Implements react-intersection-observer to unmount heavy 3D canvases when off-screen, preventing GPU lag.

Responsive Design: Seamless experience across Mobile, Tablet, and Desktop using react-responsive.

Dynamic Project Showcase: A curated list of projects including AI Customer Support Bots and Health Insight Portals.

🚀 Getting Started
Clone the repository:

git clone https://github.com/sarthak360/threejs-portfolio.git
cd threejs-portfolio
Install dependencies:


npm install
Set up Environment Variables:
Create a .env file in the root directory and add your EmailJS credentials:


VITE_APP_EMAILJS_RECEIVERID=your_receiver_id
VITE_APP_EMAILJS_TEMPLATEID=your_template_id
VITE_APP_EMAILJS_USERID=your_user_id

Run the development server:
npm run dev

📈 Performance Optimization
To ensure a smooth user experience, this project uses:

dpr={[1, 1.5]}: Caps the Device Pixel Ratio to prevent 4K monitors from overloading the GPU.

Asset Preloading: Uses useGLTF.preload and useFBX.preload to eliminate "pop-in" during navigation.

Lazy Rendering: 3D components only initialize when they enter the viewport.

🤝 Contact
Sarthak Kumar - sarthak3604@gmail.com

Location: Bhopal, MP, India

Portfolio: https://www.devsarthak.online/
