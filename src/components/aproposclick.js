const handleScrollToSection = () => {
        const Apropos = document.getElementById('apropos');
        if (Apropos) {
                Apropos.scrollIntoView({ behavior: 'smooth' });
        }
};

export default handleScrollToSection;
