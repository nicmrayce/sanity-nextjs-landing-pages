export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60db572c6924dd196bc32886',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ixbotku7',
                  apiId: 'e1523878-0688-4fd3-9ff4-d5b85a66078f'
                },
                {
                  buildHookId: '60db572d4679e51a8e0438f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wtqs8wps',
                  apiId: '9736ad29-960d-4500-a326-a587983cbbb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicmrayce/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wtqs8wps.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
