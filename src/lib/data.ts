import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export interface Design {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'Branding' | 'Social Media' | 'Posters';
  description: string;
  longDescription: string;
  coverImage: ImagePlaceholder;
  designs: ImagePlaceholder[];
}

// Helper to find image by ID, ensures data integrity
const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    console.error(`Image with id "${id}" not found.`);
    // Return a fallback or throw an error
    return { id: 'not-found', description: 'Image not found', imageUrl: 'https://placehold.co/600x400', imageHint: 'error' };
  }
  return image;
};

export const projects: Project[] = [
  {
    slug: 'aura-cosmetics-branding',
    title: 'Aura Cosmetics',
    category: 'Branding',
    description: 'A complete brand identity for a new-age cosmetics line.',
    longDescription: 'We developed a complete brand identity for Aura Cosmetics, a new-age cosmetics line focused on natural ingredients and minimalist aesthetics. The project included logo design, packaging, and a full suite of marketing materials aimed at creating a serene and trustworthy brand image.',
    coverImage: findImage('branding-1-cover'),
    designs: [
      findImage('branding-1-design-1'),
      findImage('branding-1-design-2'),
      findImage('branding-1-design-3'),
    ],
  },
  {
    slug: 'digital-wave-social-campaign',
    title: 'Digital Wave',
    category: 'Social Media',
    description: 'Engaging social media campaign for a tech conference.',
    longDescription: 'For the annual Digital Wave tech conference, we created an engaging social media campaign to drive ticket sales and online engagement. The campaign featured a vibrant color palette, dynamic animations, and interactive content formats across Instagram, Facebook, and Twitter.',
    coverImage: findImage('social-1-cover'),
    designs: [
      findImage('social-1-design-1'),
      findImage('social-1-design-2'),
      findImage('social-1-design-3'),
    ],
  },
  {
    slug: 'urban-sounds-music-festival',
    title: 'Urban Sounds Fest',
    category: 'Posters',
    description: 'Vibrant and energetic poster series for a music festival.',
    longDescription: 'This project involved creating a vibrant and energetic poster series for the Urban Sounds Music Festival. The design direction focused on bold typography and abstract geometric shapes to capture the dynamic atmosphere of the event, with variations for different artists and stages.',
    coverImage: findImage('poster-2-cover'),
    designs: [
      findImage('poster-2-design-1'),
      findImage('poster-2-design-2'),
    ],
  },
  {
    slug: 'nova-tech-identity',
    title: 'Nova Tech',
    category: 'Branding',
    description: 'Modern and clean brand identity for a technology startup.',
    longDescription: 'Nova Tech, a forward-thinking AI startup, required a modern and clean brand identity. We delivered a versatile logo system, a defined color and typography guide, and templates for their web and print presence, reflecting their innovative and sophisticated technology.',
    coverImage: findImage('branding-2-cover'),
    designs: [
      findImage('branding-2-design-1'),
      findImage('branding-2-design-2'),
    ],
  },
  {
    slug: 'cinema-noir-film-festival',
    title: 'Cinema Noir Fest',
    category: 'Posters',
    description: 'A series of minimalist posters for a film festival.',
    longDescription: 'We designed a series of minimalist posters for the Cinema Noir Film Festival. Using a limited color palette and stark imagery, the posters evoke the mood and tension of the classic film noir genre, creating a cohesive and atmospheric promotional campaign.',
    coverImage: findImage('poster-1-cover'),
    designs: [
      findImage('poster-1-design-1'),
      findImage('poster-1-design-2'),
    ],
  },
  {
    slug: 'luxe-fashion-social',
    title: 'Luxe Fashion',
    category: 'Social Media',
    description: 'Elegant and high-fashion social media visuals.',
    longDescription: 'Luxe Fashion required elegant and high-fashion social media visuals for their new collection launch. Our team produced a suite of content including carousel posts, story templates, and header graphics that embody the brand\'s sophisticated and luxurious aesthetic.',
    coverImage: findImage('social-2-cover'),
    designs: [
      findImage('social-2-design-1'),
      findImage('social-2-design-2'),
    ],
  },
];
