export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62146517812c811dbc2b2a07',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-koicctuu',
                  apiId: '78e49f3b-5181-44a6-91ef-b6f0f8cbb9f2'
                },
                {
                  buildHookId: '6214651702b6350f4ccaffc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f75rwd2v',
                  apiId: 'ddbd4b5f-fae7-4a09-8a0f-26066394e8be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/victorhernandezo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f75rwd2v.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
