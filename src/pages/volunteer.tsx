import type { GetServerSideProps } from 'next';
import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import React from 'react';
import { UpcomingEvents } from '@/components/Blocks/UpcomingEvents/UpcomingEvents';
import { getMeetupEvents } from '@/utils/api';
import styles from '@/styles/pages/Volunteer.module.scss';

export const getServerSideProps: GetServerSideProps = async () => {
    const events = await getMeetupEvents();

    return { props: { events } };
};

export default function volunteer({ events }: { events: MeetupEvent[] }): JSX.Element {
    const heroImage: JSX.Element = (
        <Image src={'/images/icons/volunteer-working.svg'} alt="volunteers-working" width={362} height={175} />
    );

    const heroText: JSX.Element = (
        <div className={styles.heroText}>
            <h1>Volunteer With Us</h1>
            <p className={styles.groupDescription}>
                We are a volunteer group of designers and developers
                out of Springfield, Missouri. We provide a forum for
                mobile, web, and application designers and developers
                to tackle technical problems for our community.
            </p>
            <p className={styles.groupDescription}>
                Many organizations lack the necessary funding to
                produce quality technical solutions for their problems.
                This group aims to close that gap by bringing people
                together to work on these projects weekly 
            </p>
            <h2 className="p">Where We Could Use Help</h2>
            <ul>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Project Management</li>
            </ul>
        </div>
    );

    const socialIcons: Icon[] = [
        {
            image: {
                url: 'https://www.meetup.com/open-sgf/',
                src: '/images/logos/meetup-logo.svg',
                alt: 'Meetup Logo',
            },
            title: <div className="h1">Meetup</div>,
        },
        {
            image: {
                url: 'https://discord.gg/jFD8dZP',
                src: '/images/logos/discord-logo.svg',
                alt: 'Discord Logo',
            },
            title: <div className="h1">Discord</div>,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <ImageText image={heroImage} text={heroText} dotsUrl="/images/icons/dots-three.png" />
            <UpcomingEvents events={events} />
            <div className={styles.socialIconWrapper}>
                <IconSet icons={socialIcons} />
            </div>
        </div>
    );
}
