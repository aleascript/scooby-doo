export function definePublications(config) {
  return config;
}

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {
    game: {
      author: 'AleaScript',
      revision: 'Draft',
      license: {
        label: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        attribution: {
          title: 'Scooby-Doo',
          author: 'AleaScript',
          href: null,
        },
      },
      lineage: {
        designedWith: {
          label: 'Resonance',
          href: 'https://aleascript.github.io/resonance/',
        },
        poweredBy: {
          label: 'Regard',
          href: 'https://aleascript.github.io/regard/',
        },
      },
      size: 'A5',
      theme: 'publication/theme.css',
      cover: {
        image: 'static/img/site/scooby-icon.png',
        showTitle: true,
        showMetadata: true,
      },
      outputName: 'scooby-doo',
      locales: {
        en: {
          title: 'Scooby-Doo',
          tocTitle: 'Contents',
          contents: [
            'docs/en/index.md',
            'docs/en/rules.md',
            'docs/en/scenario.md',
          ],
          outputs: ['pdf'],
        },
        fr: {
          title: 'Scooby-Doo',
          tocTitle: 'Sommaire',
          contents: [
            'docs/fr/index.md',
            'docs/fr/rules.md',
            'docs/fr/scenario.md',
          ],
          outputs: ['pdf'],
        },
      },
    },
  },
});
