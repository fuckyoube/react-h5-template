import React, { useState, useEffect, useRef } from 'react';
import { numberDevide } from '@/utils/numbercaculate';
import { getFaithDonates } from '@/api/temple';
import { storage } from '@/utils/storage';
import emitter from '@/utils/mitt';
import type { MeritValue, MeritObj } from '@/api/temple/type';
import styles from './index.module.less';

interface MeritListProps {
  list?: Array<MeritValue>;
  field: Array<string>;
  type: number;
}

const MeritList: React.FC<MeritListProps> = ({ field, type }) => {
  const [meritList, setMeritList] = useState<MeritObj[]>([]);
  const [isShow, setIsShow] = useState(true);
  const tableListRef = useRef<HTMLDivElement | null>(null);

  const numberDevideData = (item: number) => {
    return numberDevide(item, 100);
  };

  const handleScroll = () => {
    const tableList = tableListRef.current;
    if (tableList) {
      const scrollTop = tableList.scrollTop;
      const scrollHeight = tableList.scrollHeight;
      const clientHeight = tableList.clientHeight;
      if (scrollTop + clientHeight > scrollHeight / 2) {
        // 滚动条位置在整个容器的一半以下时自动回到顶部
        tableList.scrollTop = 0; // 回到顶部
      }
    }
  };

  useEffect(() => {
    const getList = async () => {
      const codePlateJson = JSON.parse(
        storage.getItem('codePlateJson') || '{}'
      );
      const projectId = '41';
      const res = await getFaithDonates(projectId);
      setMeritList(res.pages);
      emitter.emit('meritEmit', res.total);
    };

    getList();

    const handlePaySuccess = () => {
      setIsShow(false);
      setTimeout(() => {
        setIsShow(true);
      }, 0);
      getList();
    };

    emitter.on('paySuccess', handlePaySuccess);

    return () => {
      emitter.off('paySuccess', handlePaySuccess);
    };
  }, []);

  return (
    <div
      ref={tableListRef}
      className={styles.tablelist}
      onScroll={handleScroll}
    >
      {isShow && (
        <div className={styles.table}>
          <table className={styles.table}>
            <tbody>
              {meritList.map((item, index) => (
                <tr key={index}>
                  {field.map((fieldName) => (
                    <th key={fieldName}>
                      {fieldName === 'time' && item.createTime.slice(0, 10)}
                      {fieldName === 'name' && (item.name || '匿名')}
                      {fieldName === 'type' &&
                        (type === 1
                          ? item.donateTypeName || ''
                          : item.lanternName || '')}
                      {fieldName === 'amt' &&
                        `${numberDevideData(item.totalAmt || 0)}元`}
                    </th>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MeritList;
