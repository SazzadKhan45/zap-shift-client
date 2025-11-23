Pricing Structure

# Parcel Type Weight Within City Outside City/District

# Document Any ৳60 ৳80

# Non-Document Up to 3kg ৳110 ৳150

# Non-Document >3kg +৳40/kg +৳40/kg +৳40 extra

ZAPSHIFT
Overview
ZAPSHIFT is a home/office pickup parcel delivery system that streamlines booking, tracking, and delivery processes.
It offers tracking, delivery, and digital proof of delivery, enhancing efficiency and customer satisfaction.
Designed for businesses, it simplifies logistics while ensuring fast, reliable, and transparent delivery operations.
User Roles
The ZAPSHIFT system is designed around three core user roles — User, Admin, and Rider — each responsible for distinct stages in the parcel delivery process.
Their coordinated efforts ensure a seamless end-to-end logistics experience across Bangladesh.
🧑‍💼 1. User
Users are registered users who initiate parcel deliveries through the platform. Their responsibilities include:

Creating and submitting parcel with accurate type, weight, destination, and contact details.
Making payment based on dynamic pricing calculated by the system.
Receiving a unique tracking ID for each parcel.
Monitoring parcel status in real-time.
Reviewing the service after successful delivery to provide feedback and improve system quality.
🛠️ 2. Admin
Admins are system operators responsible for managing parcel logistics and overseeing operational efficiency. Their key functions include:

Manage , Approve / Reject Agent
Assigning pickup riders & Delivery Riders.
Managing inter-district parcel routing and coordinating service center operations.
Monitoring parcel movement, performance, and overall system operations.
🚚 3. Rider
Riders are responsible for the physical handling and movement of parcels.

Within City

Collect parcels directly from users.
Update the system to reflect transit and delivery readiness.
Deliver parcels to customers.
Outside City

Collect parcels directly from users.
Submit collected parcels to the origin district service center.
Deliver parcels to customers.
Dashboard Requirements
Layouts
The System will have a simple Responsive Dashboard.

A Sidebar at the Left

Contain logo, User Info such as Name, Image, Email, Role
Some Dynamic Navigation Links based on user Role
Navigation for Public Interfaces (Home, Coverage, etc)
LogOut Button, on Clicking It user will be logged out
Pages at the Right

Pages will be show dynamically based on Routes
User Home (User)
States: Show Some States about user all parcels

unpaid
paid
ready-to-pickup
in-transit
reached-service-center
shipped
ready-to-delivery
delivered
Rechart & User Info:

Show User info such as name, email, photo URL and an edit button with Card Format at the left
Show a Pie Chart with states value at the right
Tracking
All the documents from the tracking collection where the sender is the user.
Show data in a 1 column notification format with a view details button.
Add Parcel (User)
As the system is based on Door to Door delivery, Parcel needs both pickup and delivery location.

Will have a Heading & a subtitle

A Form with Multiple input field divided into 3 sub section

Parcel Info (3):

type (document, non-document), title, weight (if type non-document)
Sender info (6):

Name (prefilled), contact
Select Region, Select Service Center
Address, Pick up Instruction
Receiver info (6):

Name, contact
Select Region, Select Service Center
Address, Delivery Instruction
Each of the fields are required except parcel weight

The cost will be calculated based on type, service center & weight.

On Clicking Submit Show user a Toast with Delivery Cost and a confirmation button. By clicking confirm, save the parcel info into the database with a creation_date

Parcel To Pay (User)
Show Total Parcel Found

Show a Search bar with a button to find parcels based on phone number.

Show all the parcels in a table format of user where sender is user & status is unpaid

Show important data such as, parcel Name, receiver info, cost, receiver address, etc.

Show some Actionable button

Pay → Take user to ("/pay/parcelID") payment page
Delete → (will delete after confirmation)
View → ("/pay/parcelID") Take user to parcel details
Parcel Details Page (User, Admin, Rider)
Show users all the details of the parcel.
if no parcel found show user that parcel not Found
Payment Page (User)
Total Charge to Pay

Integrate a Card Based Payment System

On Successful payment

Save Payment Info
Add a 6 digit unique tracking_no to the parcel
Insert a tracking_doc to the tracking_collection
Show a Success Alert with Tracking_No & Transaction
Manage Parcel (User)
A search feature based on receiver mobile number

Show all the parcel in a table format

Each row will have some required information with 2 button

Track: will open a modal with tracking information / Take user to the tracking page
View: will navigate users to parcel details information
Payment History (User)
Show all payments made by the user in a table format.
The table will have payment info with Date Distance (ex. 13 days ago)
User Settings (User, Rider, Admin)
A Page from where a user can change his info such as update his image, name, password.
If Role Rider Show All the Data of Rider & Add update feature
Admin Dashboard
Admin Home (Admin)
States: Customer, Riders, Parcel Delivered, Service Centers, Earning
Recharts: Show a Rechart of service centers with a graph of the payments / Parcel Count
Payment History: Show all the payments in a notification format.
Manage Users (Admin)
Search feature based on user email address
Filter feature based on role
List of all users with role, user & admin on the database in a table format with conditional button Make Admin if User, Make User if Admin
On clicking Admin user role will be an admin with confirmation alert.
Manage Rider (Admin)
Show All riders in the system in a table

Add some conditional button based on status

Approve (if pending / reject)
Reject (If approved)
By clicking approve the Rider status will be approved & user role will be rider

By clicking Reject the Rider status will be reject & user role will be user

Delivery Management (Admin)
Show States based on Parcel Status

Show all the Parcel Counts

A search System based on tracking_no

Show Parcel Info such as Origin, destination, Tracking_no, status, date, Actionable buttons (view, Manage)

View will take user to parcel Details
Manage will take user to manage Parcel Delivery Route
Disable Manage Button (if status is unpaid)
Parcel Statuses:

unpaid
paid
ready-to-pickup
in-transit
reached-service-center
shipped
ready-for-delivery
delivered
Manage Parcel Delivery (Admin)
Show Parcel Title as Title and a subtitle

Show Origin and Destination service center

Show parcel Details, Delivery Timeline (tracking Data)

Show Buttons & Cards based on status with a Ordered-List

Assign Parcel for PickUp (enable it when status == paid)
Parcel Recived by Rider Card (Show it when status == ready-to-pickup)
Confirm Parcel Recieved (show it if service centers are different & enable it when status == in-transit)
Ship Parcel (show it if service centers are different & enable it when status == reached-service-center)
Assign Parcel for Delivery (show it if service centers are different & enable it when status == shipped)
Parcel Delivery by Rider Card (Show it when status == ready-for-delivery)
Parcel Delivery Successfull Card (Show it when status == delivered)
Button Functionalities

Assign Parcel for PickUp:

Shoow a Modal with pickup service center Info, Rider who works in the service center
On Select a Rider Card Show Assign Button
On Clicking Assign Rider email will be add on pickupRider, status will be ready-to-pickup, and a Tracking Doc will be created with relevant status message & date
Confirm Parcel Recieved

On Clicking it status will be changed to "reached-service-center"
and a Tracking Doc will be created with relevant status message & date
Ship Parcel

On Clicking it status will be changed to "shipped"
and a Tracking Doc will be created with relevant status message & date
Assign Parcel for Delivery

Shoow a Modal with delivery service center Info, Rider who works in the service center
On Select a Rider Card Show Assign Button
On Clicking Assign Rider email will be add on deliveryRider, status will be ready-for-delivery, a Tracking Doc will be created with relevant status message & date
Rider Dashboard
Rider Home (Rider)
States: Earning, Parcel to Deliver, Parcel to PickUp

Rechart & User Info:

Show Rider info with name, email, photo URL, and an edit button with Card Format at the left. on Clicking it take user to the user settings route.
Show a Pie Chart with states value at the right
Current Task's: Show all the tracking docs where status is "ready-to-pickup" or "ready-for delivery" & deliveryRider / pickUp rider is user with date.

Parcel-to-PickUp (Rider)
Show Parcels where pickUp rider is user and status "ready-to-pickup" in a table format with address, sender contact and info and date
Add a button Confirm PickUp. On Clicking It, show Modal with Confirm Tracking_no Input and Confirm button. On writing correct tracking_no do some action
Parcel status will be changed to "in-transit" ( if the origin & destination service center different ) / "ready-for-delivery" ( if the origin & destination service center same )
a new tracking doc will be stored in tracking with a status message
Rider Earning will be increased by 20.
Parcel-to-Delivery (Rider)
Show Parcels where delivery rider is user and status "ready-for-delivery" in a table format with address, receiver contact and info, and date
Add a button Confirm Delivery. On Clicking It, show Modal with Confirm Tracking_no Input and Confirm button. On writing correct tracking_no do some action
Parcel status will be changed to "delivered". A new tracking doc will be stored in tracking with a status message
Rider Earning will be increased by 20.
