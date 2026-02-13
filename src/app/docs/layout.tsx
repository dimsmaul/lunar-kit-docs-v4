
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="font-bold tracking-tight">
            🌙 Lunar Kit
          </span>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
