const styles = {
  link: "text-2xl text-secondary-200 hover:brightness-150 transition-all",
};
const Footer = () => {
  return (
    <section className="mt-20 w-screen flex-col-center gap-y-4 bg-secondary-900 p-8">
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
      <div className="flex-row-v-center gap-x-2 text-neutral-50">
        <span>Ramce Concepcion</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
};

export default Footer;
