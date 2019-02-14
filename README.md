## MT-refugee-stories

OER Bookr is a teacher's source for open educational resources (OER). 
Picture the Yelp of text books, a social platform for peer reviewed, open licensed text books. 

MVP Features Breakdown:

Login Page - After a user logs in, they'll be directed to a home page.

Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

Home Page - Contains a list of OER Books laid out in a grid format.

Single Book Page - Loads information about the book, Author, Name, Publisher and a scrolling list of reviews. Add review and delete own review buttons present.

Single Book Add Review Page - Clicking add review brings up a form (could be modal, could be its own page) where a user can add their review of the book. Clicking submit adds the review to the books information.

Delete Book - Modal confirming the action, on confirmation user is routed back to the home page and book is gone from the list of books.

Data Modeling: Each book has a Title - String, Author - String, Publisher - String, License-String and Reviews- Array of Objects field. The reviews object shape should be Reviewer - String, Review - String.
