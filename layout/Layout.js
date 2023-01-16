import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className="flex bg-blue-400 h-screen justify-center items-center">
      <div className=" bg-white w-3/4 h-3/4 grid lg:grid-cols-2 ">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.imageOne}></div>
          <div className={styles.imageTwo}></div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
