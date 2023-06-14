import React, { ReactElement } from 'react';
import styles from './MainLayout.module.scss'
import type { LayoutProps } from '@/types/layout';

type OwnProps = LayoutProps

const MainLayout = ({ content, header, navbar }: OwnProps) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.topBar}>{header}</header>
      <aside className={styles.navBar}>{navbar}</aside>
      <section className={styles.content}>
        {content}
      </section>
    </div>
  );
};

export { MainLayout };
