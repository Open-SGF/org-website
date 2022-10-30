import { EventCard } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import React from 'react';
import styles from './UpcomingEvents.module.scss';

interface IUpcomingEvents {
    events: MeetupEvent[];
}

export function UpcomingEvents({ events }: IUpcomingEvents): JSX.Element {
    return (
        <div className={styles.container}>
            <hr />
            <h2 className="p">View Upcoming Events</h2>
            <div className={styles.cardWrapper}>
                {events.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
            <hr />
        </div>
    );
}
