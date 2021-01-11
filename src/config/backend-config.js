const backendConfig = {
  sessionService: {
    baseURL: 'https://sessions-v1-2yk5rkp73q-uc.a.run.app',
    operations: {
      sessionCreate: {
        path: '/',
        method: 'POST',
      },
    },
  },
}

export default backendConfig
