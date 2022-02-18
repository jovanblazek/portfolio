import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'nqfor2zx',
  dataset: 'production',
  useCdn: true,
})
