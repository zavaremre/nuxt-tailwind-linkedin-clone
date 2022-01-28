import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckywoos4y03mh01xoekvffouq/master')

export default (_, inject) => {
  inject('graphcms', graphcmsClient)
}
