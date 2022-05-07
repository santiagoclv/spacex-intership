export type Launch = {
  details: string;
  id: string;
  launch_success: boolean;
  launch_date_utc: string;
  mission_id: Array<string>;
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    article_link: string;
    flickr_images: Array<string>;
  };
  launch_site: {
    site_name: string;
  };
}
