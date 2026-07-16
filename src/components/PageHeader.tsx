import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  desc?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

// แถบหัวเรื่องพื้นน้ำเงินของหน้ารอง พร้อม breadcrumb + BreadcrumbList schema
export default function PageHeader({ title, desc, crumbs, children }: PageHeaderProps) {
  const breadcrumbSchema = crumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
        })),
      }
    : null;

  return (
    <header className="page-header">
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <div className="container">
        {crumbs && (
          <nav aria-label="breadcrumb">
            <ol className="crumbs">
              {crumbs.map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : c.label}</li>
              ))}
            </ol>
          </nav>
        )}
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
        {children}
      </div>
    </header>
  );
}
