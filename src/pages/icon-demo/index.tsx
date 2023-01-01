import styles from './icon-demo.module.css';
import classnames from 'classnames';
import AcademicCap from '@components/Icon/AcademicCap';
import Mindfulness from '@components/Icon/Mindfulness';

const Index = () => {
  return (
    <>
      <h4>This demo buttons which its appearance contains an icon/SVG image.</h4>
      <div className={styles.container}>
        <button className={styles.button}>
          <span className={styles.iconSpan}>
            <AcademicCap />
            &nbsp;
          </span>
          <span>Hello world </span>
        </button>
        <button className={classnames(styles.button, styles.svgButton)}>
          <Mindfulness />
        </button>
      </div>
    </>
  );
};

export default Index;
