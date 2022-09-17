import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

export function Footer(): JSX.Element {
    type IconData = {
        url: string;
        src: string;
        alt: string;
    };

    type IconDataArray = IconData[];

    const socialIcons: IconDataArray = [
        {
            url: 'https://www.facebook.com/',
            src: '/images/facebook-logo.svg',
            alt: 'Facebook Logo',
        },
        {
            url: 'https://www.meetup.com/',
            src: '/images/meetup-logo.svg',
            alt: 'Meetup Logo',
        },
        {
            url: 'https://discord.com/',
            src: '/images/discord-logo.svg',
            alt: 'Discord Logo',
        },
        {
            url: 'https://twitter.com/?lang=en',
            src: '/images/twitter-logo.svg',
            alt: 'Twitter Logo',
        },
    ];

    type IconElementGenerator = (iconDataArray: IconDataArray) => JSX.Element[];

    const socialIconElementGenerator: IconElementGenerator = (iconDataArray) => {
        return iconDataArray.map(({ url, src, alt }) => {
            return (
                <div className={styles.imageWrapper} key={url}>
                    <Link href={url} passHref>
                        <a>
                            <Image src={src} layout="fill" alt={alt} />
                            <div className={styles.backgroundFill} />
                        </a>
                    </Link>
                </div>
            );
        });
    };

    return (
        <div className={styles.pageContainer}>
            <footer className={styles.footer}>
                <Link href="https://codeforamerica.org/" passHref>
                    <a>
                        <Image
                            src="/images/code-for-america-logo.svg"
                            width={275}
                            height={95}
                            alt="CodeforAmerica Logo"
                        />
                    </a>
                </Link>
                <div className={styles.socials}>{socialIconElementGenerator(socialIcons)}</div>
            </footer>
        </div>
    );
}
