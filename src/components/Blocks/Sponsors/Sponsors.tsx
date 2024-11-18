import Image from 'next/image';
import React from 'react';
import styles from './Sponsors.module.scss';

export function Sponsors(): JSX.Element {
    const sponsors = [
        {
            src: '/images/sponsors/eFactory-sponsor-edit-3.png',
            width: 275,
            height: 92,
            alt: 'efactory',
            text: 'efactory',
        },
        {
            src: '/images/sponsors/logic-forte-edit-2.png',
            width: 275,
            height: 92,
            alt: 'Logic Forte',
            text: 'Logic Forte',
        },
    ];

    return (
        <div className={styles.wrap}>
            <h2>Our Sponsors</h2>
            <div className={styles.container}>
                {sponsors.map(({ src, alt, width, height, text }, index) => (
                    <div className={styles.card} key={index}>
                        <Image src={src} width={width} height={height} alt={alt} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
