export default ({ Vue, isServer, router }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }
  if (router) {
    router.onReady(() => {
      const { hash } = document.location
      setTimeout(() => {
        if (hash && hash.length > 1) {
          const targetElement = document.querySelector(decodeURIComponent(hash))
          if (targetElement) {
            const parent = targetElement.parentElement
            if (parent && parent.classList.contains('reco-list')) {
              parent.scrollIntoView({ behavior: 'smooth' })
            } else {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }
      }, 1000)
    })
  }
}
