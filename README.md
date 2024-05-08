CS559 - P4

This Github repository / Github Page was created for my UW-Madison CS559 Extra Project P4.

The project is a 3d visualization of United States Geological Survey (USGS) hydrologic imagery and data from the Yahara River at Windsor WI stream gaging station (https://waterdata.usgs.gov/monitoring-location/05427718/). Specifically, this project shows the instantaneous discharge (flow) data and the 100x images collected during a flood event from March 12th - 19th in 2019.

The data visualization utilizes Three.js to render a 3D scene where the following components are added:
- A large cube, which the scene camera is placed inside of, and which has a material displaying a texture on the side facing the camera and light blue material on the other 5 surrounding sides
- Smaller blue spheres to represent each dischargge data point. The spheres are positioned based on the date (x coordinate) and data value (y coordinate) of a data point at a given index.
- Larger orange spheres to represent the time of each image. These image spheres are positioned based on the date of the image (x coordinate) and the value of the closest data point date (y coordinate). Doing this overlays the orange spheres on the smaller blue spheres.
- A red ring (torus) to represent the current position within the animation. The ring position starts at the same position as the first data point and thne as the animate() function gets called, it moves forward along the rest of the data points. Additionally, as the red ring moves showing the current position, the image in the background changes to show whichever image is closest to the current position. This allows the user to see both what the data and the image looked like at each point in time throughout the storm.
- A couple other small features implemented were a play/pause button and a slider that controls the speed of the ring moving across the data. Both of these inputs can be found above the vizualization window. Additionally, Orbit controls were implemented within the vizualization window so that users can pan and zoom around the 3d space.

Notes:
- The usgs discharge (flow) data was downloaded from the nwis api: https://nwis.waterservices.usgs.gov/nwis/iv/?sites=05427718&agencyCd=USGS&parameterCd=00060&startDT=2019-03-12T00:00:00.000-05:00&endDT=2019-03-20T23:59:59.999-05:00&siteStatus=all&format=json
- The iamges are from a timelapse network camera that is installed at this USGS gaging station.