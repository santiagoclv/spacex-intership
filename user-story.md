# User stories: SpaceX Past Launches Application

As a user, I want to take a quick look at the past spaceX launches and see details about every launch.

## Application acceptance Criteria:

- There must be a past spaceX launches list page ( root page `/` ).
- There must be a past spaceX launch detail page ( launch page `/launch/:launchId` ).
- There must be a Not Found (404) page where all the urls that don't match the routes redirect to.

### Launches list page acceptance Criteria:

- The page should contain the next filters:

  - An input text with label "filter by mission name" field in order to do the search.
  - A Search Button.

- The results section should contain:
  - Before the first search, show the initial state message “Please provide a search option and click in the search button”.
  - The search button should be disabled until the search is done.
  - The data should be displayed as a table.
  - The header table should contain: 'Mision', 'Rocket', 'Launch Site', 'Launch date'
  - Each result should have: owner avatar image, mision name, rocket name, launch site, launch date.
    It should have a link over the mission name that redirect to the Launch Detail page about the launch.
  - Total results count of the search and the current number of results on table.
    * Examples of first 30 results of total count of 100: `1-30 of 100`
    * Examples of 30 results of total count of 344 between the 31 and 61: `31-61 of 344`
  - A results size per page select/combobox with the options: `30`, `50`, `100`. The
    default is `30`.
  - Next and previous pagination when the context applies to them, example: on
    the first page, the previous page should be disabled.
  - If there is no results, then show a empty state message `You search has no
    results`
- Handling filter:
  - If the user types "falcon" in the "filter by mission name" input and
    clicks on search, the app should return launches with the "falcon" word
    associated.
- Size per page:
  - If the user clicks on search button and then selects 50 per page value,
    the app should show 50 launches on the table
- Pagination:
  - If the user clicks on search and then on next page button, the app
    should show the next launches.
  - If the user clicks on search and then on next page button and then
    clicks on previous button, the app should show the previous launches.
- Handling errors:
  - If there is an unexpected error from the frontend app, the app should show a
    message “There is an unexpected error” and a reload button.
  - If there is an unexpected error from the backend, the app should display an
    alert message error with the message from the service if any, if not show
    the generic “there is an unexpected error”.

### Launch detail page acceptance Criteria:

- The page should contain the next information about the launch:
  - Mission name + Lunch site as title shown as `${mission_name} at ${launch_site}`
  - Rocket name, launch date (formated as `MM/DD/YYYY HH:MM`) as a description list.
  - A picture of the launch if there is at last one.
  - A paragraph with a description about the launch
  - A 'see more' link to a external article that opens in a new tab about the launch if there is a link.
  - A link to the Launches List page as way to go back.

- Handling errors:
  - If the article does not exit there should be a message that says `This launch does not exist` and there should be a way to go back to Launches List page.