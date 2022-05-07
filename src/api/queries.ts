import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    query get_launches($limit: Int, $offset: Int, $find: LaunchFind ){
        launchesPastResult (limit: $limit, offset: $offset, find: $find)  {
            result {
                totalCount
            }
            data {
                id
                mission_name
                launch_date_utc
                launch_site {
                    site_name   
                }
                links {
                    flickr_images
                }
                rocket {
                    rocket_name
                }
            }
        }
}`;

export const GET_LAUNCH = gql`
    query get_launch($id: ID!){
        launch(id: $id) {
            mission_name
            launch_date_utc
            launch_site {
                site_name
            }
            links {
                article_link
                flickr_images
            }
            rocket {
                rocket_name
            }
            details
    }
}`;
