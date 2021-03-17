import { gql } from '@apollo/client'

export default {
  query: gql`
    query GetLaunches {
      launchesPast(limit: 10) {
        id
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
          flickr_images
        }
        rocket {
          rocket_name
        }
        launch_success
      }
    }
  `,
}
