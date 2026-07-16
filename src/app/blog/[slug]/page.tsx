import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import ViewTracker from "@/components/ViewTracker";
import { ARTICLES, getArticle, type ArticleBlock } from "@/lib/blog";
import { SITE_URL, COMPANY_TH } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      publishedTime: article.date,
      images: [{ url: article.cover, alt: article.coverAlt }],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 dangerouslySetInnerHTML={{ __html: block.html || "" }} />;
    case "h3":
      return <h3 dangerouslySetInnerHTML={{ __html: block.html || "" }} />;
    case "ul":
      return (
        <ul>
          {(block.items || []).map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="table-scroll">
          <table className="spec-table">
            <thead>
              <tr>
                {(block.columns || []).map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(block.rows || []).map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return <p dangerouslySetInnerHTML={{ __html: block.html || "" }} />;
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== article.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.cover}`,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "th",
    author: { "@type": "Organization", name: COMPANY_TH, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: COMPANY_TH,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <ViewTracker event="blog_view" params={{ article_title: article.title }} />

      <PageHeader
        title={article.title}
        crumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "บทความ", href: "/blog" },
          { label: article.title },
        ]}
      >
        <p>
          <time dateTime={article.date}>
            เผยแพร่{" "}
            {new Date(article.date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
          </time>{" "}
          · โดยทีมงานเหล็กใต้
        </p>
      </PageHeader>

      <section className="section--tight section">
        <div className="container">
          <div className="card" style={{ overflow: "hidden", maxWidth: 760, marginBottom: 40 }}>
            <div style={{ position: "relative", aspectRatio: "16/9" }}>
              <Image
                src={article.cover}
                alt={article.coverAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 760px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <article className="prose">
            {article.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </article>

          {others.length > 0 && (
            <aside style={{ maxWidth: 760, marginTop: 64 }}>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>บทความอื่นที่น่าสนใจ</h2>
              <ul style={{ paddingLeft: 24 }}>
                {others.map((a) => (
                  <li key={a.slug} style={{ marginBottom: 8 }}>
                    <Link href={`/blog/${a.slug}`} style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
}
