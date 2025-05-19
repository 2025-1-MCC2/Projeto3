import { useState } from 'react';
import './blog.css';

export default function Blog() {
  // Estado para filtros e busca
  const [activeFilters, setActiveFilters] = useState({
    tecnologia: true,
    metodologia: true,
    curriculo: true,
    inclusao: true,
    evento: true
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Dados dos posts do blog
  // Dentro do componente Blog.jsx, atualize o array de posts:
const posts = [
  {
    id: 1,
    title: "Como a Inteligência Artificial está revolucionando a educação",
    excerpt: "Explore as novas ferramentas de IA que estão transformando a forma como ensinamos e aprendemos.",
    date: "01/05/2025",
    category: "tecnologia",
    image: "https://source.unsplash.com/random/600x400/?ai,education"
  },
  {
    id: 2,
    title: "Gamificação na Educação: Como transformar o aprendizado em jogo",
    excerpt: "Descubra como elementos de jogos podem aumentar o engajamento dos alunos e melhorar os resultados de aprendizagem.",
    date: "01/05/2025",
    category: "tecnologia",
    image: "https://source.unsplash.com/random/600x400/?gamification,education"
  },
  {
    id: 3,
    title: "Palestra",
    excerpt: "Palestra sobre desbloqueio do poder da mente na Prodam, empresa de tecnologia e comunicação de São Paulo.",
    date: "01/05/2025",
    category: "metodologia",
    image: "https://source.unsplash.com/random/600x400/?lecture,mind"
  },
  {
    id: 4,
    title: "O instituto apoia competidores em maratona de programação!",
    excerpt: "Evento de programação promovido pelo Instituto Criativo com participação de diversos competidores.",
    date: "01/05/2025",
    category: "evento",
    image: "https://source.unsplash.com/random/600x400/?programming,event"
  },
  {
    id: 5,
    title: "BNCC na Prática: Implementando as competências gerais",
    excerpt: "Guia prático para implementar as competências da Base Nacional Comum Curricular.",
    date: "01/05/2025",
    category: "curriculo",
    image: "https://source.unsplash.com/random/600x400/?curriculum,education"
  },
  {
    id: 6,
    title: "Como a Inteligência Artificial está revolucionando a educação",
    excerpt: "Explore as novas ferramentas de IA que estão transformando a forma como ensinamos e aprendemos.",
    date: "01/05/2025",
    category: "inclusao",
    image: "https://source.unsplash.com/random/600x400/?inclusion,education"
  }
];

  // Dados dos destaques
  const highlights = [
    {
      id: 1,
      type: "Evento",
      icon: "calendar",
      title: "Workshop de Inovação Educacional",
      linkText: "Workshop de Inovação Educacional →",
      subtitle: "Como aplicar Design Thinking em sala de aula",
      description: "Evento gratuito com certificado para educadores. Com especialistas do MIT e UNESCO.",
      meta: "Inscrições abertas até 30/06",
      cta: "Garantir Vaga",
      ctaType: "primary"
    },
    {
      id: 2,
      type: "Pesquisa",
      icon: "chart",
      title: "Resultados da pesquisa 'Educação 2030'",
      linkText: "Resultados da pesquisa 'Educação 2030' →",
      subtitle: "86% dos professores adotaram IA em 2025",
      description: "Dados coletados em 5 países mostram o impacto da tecnologia nas escolas.",
      meta: "24 páginas",
      cta: "Ler agora",
      ctaType: "secondary"
    },
    {
      id: 3,
      type: "Conquista",
      icon: "trophy",
      title: "Prêmio Educação 4.0",
      linkText: "Prêmio Educação 4.0 →",
      subtitle: "Melhor ONG de Inovação Educacional",
      description: "Reconhecimento pela UNESCO por nosso trabalho em comunidades.",
      date: "05/06/2025",
      cta: "Ver Reportagem",
      ctaType: "primary"
    }
  ];

  // Filtrar posts
  const filteredPosts = posts.filter(post => {
    const matchesFilter = activeFilters[post.category];
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Manipulador de filtros
  const handleFilterChange = (filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  // Obter ícone SVG
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'calendar':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
          </svg>
        );
      case 'chart':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        );
      case 'trophy':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
          </svg>
        );
      case 'search':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        );
      case 'filter':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"/>
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      case 'arrow':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="blog-container">
      {/* Banner Principal */}
      <section className="blog-banner">
        <div className="banner-content">
          <h1>Blog do Instituto Criativo</h1>
          <p>Artigos, pesquisas e reflexões sobre educação, tecnologia e inovação no ensino.</p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="blog-main">
        {/* Controles de Filtro e Busca */}
        <div className="blog-controls">
          <div className="search-box">
            {getIcon('search')}
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-dropdown">
            <button className="filter-button">
              {getIcon('filter')}
              Filtrar
            </button>
            <div className="filter-options">
              {Object.keys(activeFilters).map(filter => (
                <label key={filter} className="filter-option">
                  <input
                    type="checkbox"
                    checked={activeFilters[filter]}
                    onChange={() => handleFilterChange(filter)}
                  />
                  <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Posts */}
        <div className="section-header">
          <h2>
            Todos os Posts
          </h2>
        </div>
<div className="posts-grid">
  {filteredPosts.length > 0 ? (
    filteredPosts.map(post => (
      <article key={post.id} className="post-card" data-category={post.category}>
        <img src={post.image} alt={post.title} className="post-image" />
        <div className="post-content">
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className={`post-category ${post.category}`}>
              {post.category.toUpperCase()}
            </span>
          </div>
          <h2 className="post-title">{post.title}</h2>
          {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-footer">
            <a href="#" className="read-more">
              Leia Mais
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    ))
  ) : (
    <div className="no-results">
      <p>Nenhum post encontrado com os filtros selecionados.</p>
    </div>
  )}
</div>
        {/* Seção de Destaques */}
      <section className="highlights-section">
        <div className="section-header">
          <h2>
            {getIcon('star')}
            Destaques do Mês
          </h2>
        </div>

        <div className="highlights-grid">
          {highlights.map(highlight => (
            <div key={highlight.id} className="highlight-card">
              <div className="highlight-header">
                <div className="highlight-icon">
                  {getIcon(highlight.icon)}
                </div>
                <h3>{highlight.type}</h3>
              </div>
              <div className="highlight-content">
                <a href="#" className="highlight-link">{highlight.linkText}</a>
                <h4>{highlight.subtitle}</h4>
                <p>{highlight.description}</p>
                <div className="highlight-footer">
                  {highlight.date && <span className="highlight-date">{highlight.date}</span>}
                  {highlight.meta && <span className="highlight-meta">{highlight.meta}</span>}
                  <a href="#" className={`cta-button ${highlight.ctaType}`}>
                    {highlight.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
    </div>
  );
};

