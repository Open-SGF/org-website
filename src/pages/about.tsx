import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import { projects } from '@/utils/projectData';
import styles from '@/styles/pages/About.module.scss';

export default function About(): JSX.Element {
    const teamIcons: Icon[] = [
        {
            image: {
                src: '/images/people/levi-zitting-headshot.jpg',
                alt: 'Image of Levi Zitting',
            },
            title: <figcaption className={'h3 ' + styles.name}>Levi Zitting</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/people/kayla-paden-headshot.jpg',
                alt: 'Image of Kayla Paden',
            },
            title: <figcaption className={'h3 ' + styles.name}>Kayla Paden</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/people/thomas-hammon-headshot.jpg',
                alt: 'Image of Thomas Hammon',
            },
            title: <figcaption className={'h3 ' + styles.name}>Thomas Hammon</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
    ];

    const images = [
        projects[1].siteScreenshots[0],
        projects[0].siteScreenshots[1],
        projects[1].siteScreenshots[2],
        projects[0].siteScreenshots[3],
    ];

    return (
        <div className={styles.pageWrapper}>
            <h1>About Us</h1>
            <IconSet icons={teamIcons} />
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
            <Gallery images={images} />
        </div>
    );
}
