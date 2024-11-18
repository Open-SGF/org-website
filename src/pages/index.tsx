import { Button } from '@/components/atoms/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ImageTextLink } from '@/components/Blocks/ImageTextLink/ImageTextLink';
import { Sponsors } from '@/components/Blocks/Sponsors/Sponsors';
import { Stats } from '@/components/Blocks/Stats/Stats';
import { projects } from '@/utils/projectData';
import styles from '@/styles/pages/Home.module.scss';

export default function Home(): JSX.Element {
    const heroImage = <Image src={'/images/icons/group-working.svg'} alt="group working " width={360} height={220} />;

    const heroText = (
        <div className={styles.heroText}>
            <h1>Open SGF</h1>
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
        </div>
    );

    const projectTeaserImage = <Image src={projects[1].showCaseImage.src} alt="laptop" fill />;

    const projectTeaserText = (
        <div className={`${styles.projectTeaserText} h1`}>
            <h2>Motherhood Reclaimed</h2>
            <p>
                Motherhood Reclaimed seeks to work with mothers to uncover primary causes of family instability, often
                rooted in unstable identity and unprocessed trauma. It seeks to provide education and support for
                healthy relationships and meaningful life engagement, including long-term employment and financial
                stability.
            </p>
        </div>
    );

    const volunteerButton = <Button text="Volunteer" href="/volunteer" />;
    const partnerButton = <Button text="Partner" href="/partner" />;

    const volunteerCard = (
        <Card
            heading="Volunteer With Us"
            text="Are you a developer, designer, or a community person interested in bringing technological solutions to problems for our community? Come join us at our Code & Demo nights!"
            button={volunteerButton}
        />
    );

    const partnerCard = (
        <Card
            heading="Partner With Us"
            text="Are you a non-profit that needs help with your website or some other technical aspect of your project?"
            button={partnerButton}
        />
    );

    return (
        <>
            <Head>
                <title>Open SGF | Home</title>
                <meta name="keywords" content="Open SGF" />
            </Head>
            <div className={styles.pageWrapper}>
                <ImageText
                    image={heroImage}
                    text={heroText}
                    dotsUrl="/images/icons/dots-one.png"
                    imageTextSizeRatio={0.35}
                />
                <Stats />
                <Sponsors />
                <ImageTextLink
                    image={projectTeaserImage}
                    text={projectTeaserText}
                    textRight={true}
                    link={{ text: 'View All Projects', url: '/projects' }}
                />
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}
