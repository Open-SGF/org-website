﻿import styles from './Gallery.module.scss';
import Image from 'next/image';

export function Gallery(): JSX.Element {
    const images = [
        {
            src: '/images/rectangle-1.png',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-2.png',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-3.png',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-4.png',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-5.png',
            alt: 'alt text'
        }
    ]
    return (
        <div className={styles.container}>
            {images.map((image, index ) => (
                <div className={styles.imageWrapper} key={index}>
                    <Image src={image.src} alt={image.alt} layout="fill" />
                </div>
            ))}
        </div>
    );
}
