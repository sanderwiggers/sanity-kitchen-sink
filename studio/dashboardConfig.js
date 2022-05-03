export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6270f2de847fba144cd46cd3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mhdiv492',
                  apiId: '688244d5-130f-4dfa-95f2-d38b2fad8da9'
                },
                {
                  buildHookId: '6270f2df159917131a0033e4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-se85pea5',
                  apiId: '5c93206c-da86-4985-a89f-ea1f2b24470f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanderwiggers/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-se85pea5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
