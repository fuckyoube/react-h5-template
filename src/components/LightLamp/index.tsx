import styles from './index.module.less';
import type { DonaValue } from '@/api/temple/type';
import lightImg from '@/assets/images/icon_light.png';
interface IProps {
  list: DonaValue[];
  openFormfn: (item: DonaValue) => void;
}

const LightLamp: React.FC<IProps> = (props) => {
  const {
    list = [{ name: '暂无', url: '123', desc: '2434', id: '1' }],
    openFormfn,
  } = props;
  const openForm = (item: DonaValue) => {
    // 处理点击事件
    openFormfn(item);
    console.log('Open form for item:', item);
  };

  return (
    <div>
      <div className={styles.lightlamp}>
        {list &&
          list.length > 0 &&
          list.map((item, index) => (
            <div
              key={index}
              className={styles.chooseitem}
              onClick={() => openForm(item)}
            >
              <img
                style={{ width: '65px', height: '53px' }}
                src={lightImg}
                alt="light"
              />
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LightLamp;
