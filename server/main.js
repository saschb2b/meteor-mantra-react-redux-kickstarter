Meteor.startup(() => {
  const date = new Date(Date.now())
  console.log(`Server start:  ${date}`)

  ServiceConfiguration.configurations.upsert(
    { service: 'github' },
    {
      $set: {
        clientId: '0a816631a1c5ca5ff538',
        loginStyle: 'popup',
        secret: 'f494c702eec5a942e87b44f9a2875cc8dc30f7e3'
      }
    }
  )
})
