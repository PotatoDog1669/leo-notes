# Content Workflow

1. Copy `templates/blog-post.mdx` into `posts/` and rename it with a lowercase hyphenated slug.
2. Fill in the frontmatter and write the article.
3. Keep `draft: true` while editing. Drafts are excluded from pages, RSS, topics, and navigation.
4. Set `draft: false` or remove the field when the article is ready to publish.

Set `NEXT_PUBLIC_SITE_URL` to the production URL during deployment so canonical metadata and social previews point to the public site.
