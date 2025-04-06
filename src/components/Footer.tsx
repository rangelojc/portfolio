const styles = {
  link: "text-2xl text-gray-400 hover:text-gray-200 transition",
};
const Footer = () => {
  return (
    <section className="mt-40 w-screen flex-col-center gap-y-4 bg-gray-900 text-white p-8 md:py-16">
      <div className="flex-row-v-center gap-x-4">
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/ramceconcepcion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          className={styles.link}
          href="https://github.com/rangelojc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          className={styles.link}
          href="https://www.instagram.com/rangelojc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <div className="flex-row-v-center gap-x-2">
        <span>Ramce Concepcion</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
};

export default Footer;
