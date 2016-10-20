# DuelingPicklist_Lookup-Lightning

This Lightning component can be configured with any Standard or Custom object

I have configured this component with Contact standard object.

Initially the "Available Contact" picklist load with all the contacts in your org.

User can give search criteria in "Enter search criteria" textbox and click the search button. 
The searched criteria results will populate in "Available Contact" picklist.

Now user can select more than one contact from "Available Contact" and push it to "Selected Contact" picklist by clicking the right arrow
button and vice versa to remove contact from "Selected Contact" to "Available Contact" by clicking the left arrow button.

When user click the Save button, Selected contact(s) are added to text area(by semi-colon separated).
We can customise the save option either to display the contact in text area or can save it to some other object
