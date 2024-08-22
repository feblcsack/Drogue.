import React, { useEffect } from 'react';
import gsap from 'gsap';
import VanillaTilt from 'vanilla-tilt';

// Define the Skeleton component first
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-700 dark:from-neutral-900 dark:to-neutral-800 to-neutral-600"></div>
);

const BentoGrid = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
};

const BentoGridItem = ({ title, description, image, link, className }) => {
  useEffect(() => {
    // GSAP animation for the BentoGridItem
    gsap.fromTo(
      '.bento-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.bento-item',
          start: 'top 80%',
        },
      }
    );

    // VanillaTilt for the tilt effect
    VanillaTilt.init(document.querySelectorAll('.bento-item'), {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
    });
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-item bg-black dark:bg-black p-6 rounded-lg shadow-lg border border-gray-700 ${className}`}
    >
      <div className="relative mb-4 overflow-hidden rounded-md">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-white hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 dark:text-gray-300">{description}</p>
    </a>
  );
};

export const BentoGridDemo = () => {
  return (
    <BentoGrid className="max-w-6xl mx-auto px-4 mb-12 mt-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
};

const items = [
    {
      title: "International Drug Network Bust in Indonesia",
      description: "Indonesian authorities successfully arrested an international drug network operating in Southeast Asia. The operation seized dozens of kilograms of narcotics.",
      image: "/assets/images/internasional.jpeg",
      link: "#",
    },
    {
      title: "Increase in Drug Abuse Cases Among Indonesian Teenagers",
      description: "Recent reports show a significant rise in drug abuse among Indonesian teenagers, with new types of narcotics continuously emerging in the market.",
      image: "/assets/images/meningkat.jpg",
      link: "#",
    },
    {
      title: "Discovery of Marijuana Fields in Sumatra Forests",
      description: "The police discovered a marijuana field spanning several hectares hidden deep within the forests of Sumatra. This is one of the largest marijuana field discoveries in Indonesia.",
      image: "/assets/images/ganja.jpg",
      link: "#",
    },
    {
      title: "Anti-Drug Campaigns in Indonesian Schools",
      description: "The government launched a large-scale campaign in schools to raise awareness about the dangers of drugs. The program has received widespread support from the community.",
      image: "/assets/images/kampanye.jpg",
      link: "#",
    },
    {
      title: "Revelation of Drug Cases Involving Indonesian Celebrities",
      description: "Several Indonesian celebrities have been involved in drug scandals that have shocked the public. This case highlights the pressures and influences in the entertainment world.",
      image: "/assets/images/artis.jpg",
      link: "#",
    },
    {
      title: "Seizure of Narcotics Worth Billions at the Port",
      description: "Customs successfully thwarted the smuggling of narcotics worth billions of rupiah at one of Indonesia's main ports. This is one of the largest seizures of the year.",
      image: "/assets/images/laut.jpeg",
      link: "#",
    },
    {
      title: "Rehabilitation and Recovery Programs for Drug Users in Indonesia",
      description: "The government is strengthening rehabilitation programs for drug users by improving facilities and providing more comprehensive services throughout the country.",
      image: "/assets/images/rehab.jpg",
      link: "#",
    },
  ];
  