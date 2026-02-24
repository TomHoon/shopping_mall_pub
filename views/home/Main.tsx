'use client';

import styles from '@/views/home/Main.module.css';
import { useState } from 'react';

type Tab =
  | {
      title: string;
      active: boolean;
    }
  | {
      title: React.ReactNode;
      active: boolean;
    };

const mockTabs = [
  { title: '추천', active: true },
  {
    title: (
      <>
        <img src="/aftersale.png" alt="sale.png" />
      </>
    ),
    active: false,
  },
  { title: '랭킹', active: false },
  { title: '세일', active: false },
  { title: '발매', active: false },
  { title: '콘텐츠', active: false },
];

export default function Main() {
  const [tabs, setTabs] = useState(mockTabs);

  const chagneActive = (tab: Tab) => {
    const _tabs = tabs.map((item) => ({
      ...item,
      active: item.title === tab.title,
    }));
    setTabs(_tabs);
  };

  return (
    <div className={styles.appTabContainer}>
      {tabs.map((tab, idx) => (
        <div
          className={`${styles.appTab} ${tab.active ? styles.active : styles.normal}`}
          key={idx}
          onClick={() => chagneActive(tab)}
        >
          <span>{tab.title}</span>
        </div>
      ))}
    </div>
  );
}
