// Configuración para WordPress como Headless CMS
export const WORDPRESS_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL || '';

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export async function fetchWordPressPosts(limit: number = 10): Promise<WordPressPost[]> {
  if (!WORDPRESS_API_URL) {
    console.warn('WordPress API URL no configurada');
    return [];
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener posts: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al conectar con WordPress:', error);
    return [];
  }
}

export async function fetchWordPressPage(slug: string): Promise<WordPressPost | null> {
  if (!WORDPRESS_API_URL) {
    console.warn('WordPress API URL no configurada');
    return null;
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener página: ${response.statusText}`);
    }
    
    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Error al conectar con WordPress:', error);
    return null;
  }
}



