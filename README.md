# cs465-fullstack
CS-465 Full Stack Development with Mean

README - Full Stack Web Application
Architecture
Frontend Development Types: In this project, we used a combination of technologies for frontend development:

Express HTML: Allowed us to serve dynamic content to our users. It is integrated with our backend, ensuring that the user received relevant and current data.
JavaScript: The primary programming language for web interactivity. It ensured the user interface was responsive and dynamic.
Single-page application (SPA): SPA provided a smooth user experience by allowing users to interact with the web app without constant page reloads. Content was dynamically updated as needed.

Comparatively, Express HTML is more about rendering server-side templates, while JavaScript is the workhorse for client-side interactivity. SPA, on the other hand, bridges both and offers an uninterrupted user experience.

Backend NoSQL MongoDB Database: MongoDB, a NoSQL database, was used because of its flexibility, scalability, and capability to handle unstructured data. The application required storing dynamic and varied data without a rigid schema, making MongoDB a perfect fit.

Functionality
JSON vs. JavaScript: JSON, which stands for JavaScript Object Notation, is a lightweight data-interchange format. While it's derived from JavaScript, it is language agnostic. JSON is mainly used to transmit data between a server and a client. In our full stack project, JSON seamlessly tied the frontend and backend pieces by allowing data exchange in a format that's easy to read and write.

Refactoring and UI Components: Throughout the development process, I found opportunities to optimize the code. One instance was when it was realized that some UI components were repetitive. By creating reusable UI components, this reduced redundancy, improved consistency across the app, and expedited the development process.

Testing
API Testing and Security: A full stack application necessitates testing on multiple layers. The most vital was testing our API endpoints. These endpoints, which are URLs at which requests can be made, had to be rigorously checked to ensure they returned the right data. With the added security layer, especially for admin logins, we had to ensure that unauthorized access was restricted. Methods refer to the types of requests made (GET, POST, PUT, DELETE), and each had its own testing challenges. The security features added another layer of complexity, ensuring that only authenticated and authorized requests accessed sensitive endpoints.
Reflection
This course has been instrumental in equipping me with practical skills that make me a competent full-stack developer. By working hands-on with both frontend and backend technologies, I've gained a comprehensive understanding of the web development landscape. The project, especially, gave me insights into the intricacies of developing a secure and functional web application. These competencies not only make me marketable but also instill confidence in my ability to handle similar projects in the future.
