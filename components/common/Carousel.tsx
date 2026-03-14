import styles from '@/components/common/Carousel.module.css';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';

type rowType = {
  brand: string;
  name?: string;
  origin: string;
  img: string;
  price: string;
  percent: string;
};

interface CarouselProps {
  rows: 1 | 2;
  rows1: rowType[];
  rows2: rowType[];
  showMore: boolean;
  showLike: boolean;
  carouselTitle: React.ReactNode;
}

export default function Carousel({
  rows,
  rows1,
  rows2,
  showMore = true,
  showLike = true,
  carouselTitle,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionX = useRef(0);
  const tempPositionX = useRef(0);
  const moveRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const maxPositionMoveToRight = useMemo(() => {
    if (rows === 1) {
      return 260 * rows1.length - 260 * 4;
    } else {
      return 260 * Math.max(rows1.length, rows2.length) - 260 * 4;
    }
  }, [rows]);

  const onMouseMove = (e: MouseEvent | React.MouseEvent) => {
    const moveX = e.clientX;
    if (!containerRef.current || !moveRef.current) return;

    // 캐러젤 제한(왼쪽이동)
    if (moveX - moveRef.current + positionX.current >= 0) {
      containerRef.current!.style.transform = `translateX(${0}}px)`;
      return;
    }
    // 캐러젤 제한(오른쪽이동)
    if (
      moveX - moveRef.current + positionX.current <=
      -maxPositionMoveToRight
    ) {
      containerRef.current!.style.transform = `translateX(${-maxPositionMoveToRight}}px)`;
      return;
    }

    containerRef.current!.style.transform = `translateX(${moveX - moveRef.current + positionX.current}px)`;
    tempPositionX.current = moveX - moveRef.current;
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault(); // 텍스트 선택 방지
    // setIsDragging(true);

    moveRef.current = e.clientX;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseUp = (e: MouseEvent | React.MouseEvent) => {
    e.preventDefault(); // 텍스트 선택 방지
    // setIsDragging(false);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    // 최종 값 저장
    positionX.current = tempPositionX.current + positionX.current;
  };

  return (
    <>
      <section
        className={clsx(
          styles.carouselContainer,
          isDragging ? styles.dragging : '',
        )}
        onMouseDown={onMouseDown}
      >
        <div className={styles.titleWrapper}>
          <h3>{carouselTitle}</h3>
          {showMore && <a>더보기</a>}
        </div>

        <div className={styles.carouselWrapper} ref={containerRef}>
          <div className={styles.carouselRowWrapper}>
            <div className={styles.carouselRowWrapper}>
              <div className={clsx(styles.flex, styles.carouselRow1)}>
                {rows1.map((item) => (
                  <>
                    <div className={styles.card}>
                      <img src={item.img} alt="" />
                      {showLike && (
                        <i className={clsx('bx bx-heart', styles.like)} />
                      )}
                      <div className={styles.cardInfo}>
                        <span className={styles.brand}>{item.brand}</span>
                        <p className={styles.product}>{item.name}</p>
                        <span className={styles.percent}>
                          {item.percent}&nbsp;
                        </span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {rows === 2 && (
                <div className={clsx(styles.flex, styles.carouselRow2)}>
                  {rows2.map((item) => (
                    <>
                      <div className={styles.card}>
                        <img src={item.img} alt="" />
                        {showLike && (
                          <i className={clsx('bx bx-heart', styles.like)} />
                        )}
                        <div className={styles.cardInfo}>
                          <span className={styles.brand}>{item.brand}</span>
                          <p className={styles.product}>{item.name}</p>
                          <span className={styles.percent}>
                            {item.percent}&nbsp;
                          </span>
                          <span className={styles.price}>{item.price}</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
