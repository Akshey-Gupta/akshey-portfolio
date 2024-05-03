// next.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purgeCSS: {
    whitelist: ['px-4', 'py-10', 'md:px-6', 'md:py-14', 'lg:py-16'], // Add any Tailwind CSS classes you want to whitelist
  },
};
