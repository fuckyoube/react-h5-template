import { useMemo } from 'react';
import styles from './index.module.less';
import leftBtbg from '@/assets/images/left_btbg.png';
import rightBtbg from '@/assets/images/right_btbg.png';
interface Props {
  title: string;
  children: React.ReactNode;
}
function Content(props: Props) {
  const { title, children } = props;
  const isScale = useMemo(() => {
    return (value: string) => {
      return value.length > 10;
    };
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.contenttitle}>
        <div className={styles.title}>『 {title} 』</div>
      </div>
      <div className={styles.text}>{children}</div>
      {/* <div className={`chine ${isScale(title) ? 'is-scale' : ''}`}>{title}</div> */}
      <img
        className={[styles.bg, styles.bg1].join(' ')}
        src={leftBtbg}
        alt=""
      />
      <img className={`${styles.bg} ${styles.bg2}`} src={rightBtbg} alt="" />
    </div>
  );
}

export default Content;
