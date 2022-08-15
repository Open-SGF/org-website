import { ChatBubble } from '@/components/Blocks/ChatBubble/ChatBubble';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Blocks/Hero/Hero';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { ParticlesComp } from '@/components/Particles/Particles';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';

export default function Project(): JSX.Element {
    return (
        <div className={styles.container}>
            <Hero
                header={<h2>Project Name</h2>}
                text={
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore
                        reprehenderit repudiandae tenetur velit voluptates!
                    </p>
                }
                image={<Image src={'/images/Laptop-phone.svg'} alt="laptop" width={500} height={500} />}
                particles={<ParticlesComp />}
                lable={<h3>Skills/Help Needed</h3>}
                list={
                    <ul>
                        <li>Design</li>
                        <li>Development</li>
                        <li>Marketing</li>
                    </ul>
                }
                bool={true}
            />
            <ProjectDetails />
            <ChatBubble />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav text={'Previous'} />
                <ProjectNav text={'Next'} />
            </div>
        </div>
    );
}
