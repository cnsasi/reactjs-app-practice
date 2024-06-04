import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Digital Transformation', body: 'Digitizing and optimizing internal processes to increase efficiency, reduce costs, and improve productivity. This often involves automation of repetitive tasks, digitization of paperwork, and implementation of digital workflows using Amazon Web Services, Google Cloud Platform, Microsoft Azure.', author: 'Digital', id: 3 },
    { title: 'Snowflake', body: 'Snowflake\'s architecture, scalability, performance, and advanced features make it a compelling choice for organizations seeking a modern, cloud-native data platform to unlock the full potential of their data assets and drive data-driven insights and decision-making.', author: 'AI', id: 2 },
    { title: 'Elastic Search, Logestic, Kibana', body: 'The ELK stack provides a comprehensive solution for log management, real-time data analysis, and visualization, empowering organizations to gain actionable insights from their data, monitor system health, troubleshoot issues, and optimize performance effectively.', author: 'AI', id: 3 },
    { title: 'Microservices Development', body: 'Microservices offer a scalable, resilient, and agile approach to software development, allowing organizations to build complex applications more efficiently, adapt to changing business needs, and deliver value to customers faster. However, adopting microservices also introduces challenges such as managing distributed systems, ensuring data consistency, and coordinating inter-service communication, which need to be addressed effectively for successful implementation.', author: 'Migration', id: 3 },
    { title: 'Database Migration to Cloud', body: 'Migrating databases to the cloud offers numerous benefits, including scalability, cost efficiency, flexibility, high availability, security, ease of management, and global reach. However, organizations should carefully plan and execute database migrations to ensure a smooth transition and mitigate potential risks.', author: 'Migration', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs.filter(blog => blog.author === 'Digital')} title="Digital Transformation" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'AI')} title="Artificial Inteligent / Machine Learning / Data Lake" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'Migration')} title="Modernization" />
    </div>
  );
}
 
export default Home;