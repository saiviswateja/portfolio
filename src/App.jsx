import { useState } from 'react'
import Header from './components/Header.jsx'
import SectionCard from './components/SectionCard.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import ArticleItem from './components/ArticleItem.jsx'
import about from './data/about.json'
import experiencesData from './data/experiences.json'
import articles from './data/articles.json'

const ARTICLES_PER_PAGE = 10

export default function App() {
  const [tag, setTag] = useState(null)
  const [articleTag, setArticleTag] = useState(null)
  const [articlesToShow, setArticlesToShow] = useState(ARTICLES_PER_PAGE)
  
  const filtered = tag ? experiencesData.map(e=>({...e,roles:e.roles.filter(r=>r.tags?.includes(tag))})).filter(e=>e.roles.length) : experiencesData
  
  const filteredArticles = articleTag 
    ? articles.filter(a => a.tags?.includes(articleTag))
    : articles
  
  const displayedArticles = filteredArticles.slice(0, articlesToShow)
  const hasMore = filteredArticles.length > articlesToShow
  
  return (
    <div className="pb-16">
      <Header />
      <main className="space-y-6">
        <SectionCard id="about" title="About">
          <div className="space-y-4 leading-7 text-slate-700">
            <p>
              I'm a Software Engineer with ~5 years of experience building <strong>high-performance backend systems</strong> using Java, Spring Boot, and distributed architectures. I enjoy solving performance challenges and designing systems that scale reliably under high load.
            </p>

            <p className="font-medium">What I work on:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Search & data retrieval systems using Elasticsearch</li>
              <li>Distributed tracing & observability (OpenTelemetry)</li>
              <li>Performance engineering & JVM optimization</li>
            </ul>

            <p className="font-medium">How I work:</p>
            <p>
              Pragmatic, collaborative, and driven by impact. I enjoy diving into complex problems, simplifying architectures, and improving performance and developer experience.
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1M5yWt9ejRHvpcWkabvUoYD-PQosSOrJ4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors touch-manipulation text-sm sm:text-base">
            Resume
          </a>
        </SectionCard>
        <SectionCard id="experience" title="Experience">
          {tag && <button onClick={()=>setTag(null)} className="text-sm text-blue-600 mb-2 px-2 py-1 hover:underline touch-manipulation">Clear: {tag}</button>}
          <ul className="space-y-4">
            {filtered.map((e,i)=>(<ExperienceItem key={i} exp={e} onTagClick={setTag} />))}
          </ul>
        </SectionCard>
        <SectionCard id="articles" title="Articles">
          {articleTag && (
            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <button onClick={()=>{setArticleTag(null); setArticlesToShow(ARTICLES_PER_PAGE)}} className="text-sm text-blue-600 px-2 py-1 hover:underline touch-manipulation">Clear: {articleTag}</button>
              <span className="text-sm text-slate-500">({filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''})</span>
            </div>
          )}
          <ul className="space-y-4">
            {displayedArticles.map((a,i)=>(<ArticleItem key={i} a={a} onTagClick={setArticleTag} />))}
          </ul>
          {hasMore && (
            <button 
              onClick={() => setArticlesToShow(prev => prev + ARTICLES_PER_PAGE)}
              className="mt-4 text-sm text-blue-600 hover:underline px-2 py-1 touch-manipulation"
            >
              Load more ({filteredArticles.length - articlesToShow} remaining)
            </button>
          )}
        </SectionCard>
      </main>
      <footer className="container mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} {about.name}.</footer>
    </div>
  )
}

