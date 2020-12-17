import React from "react"
import Layout from "../components/layout"

export default function Resume() {
  return (
    <Layout>
      <div>
        <h2>Resume</h2>
        <hr></hr>

        <h3>Experience</h3>

        <div>
          <p>Software Engineer, Rocket Loans, Detroit, MI.</p>
          <p>Oct. 2020 ~ Dec. 2020</p>
          <ul>
            <li>Create and maintain automated CI/CD pipeline for code deployment.</li>
            <li>Use AWS CDK to script Infrastructure as Code, working with AWS CDK, Glue, S3, RDS, VPC</li>
          </ul>
        </div>

        <h3>Projects</h3>

        <div>
          <p>Cloud Resume Challenge</p>
          <p>The website you are currently looking at. The frontend is developed in Gatsby, React, Tailwind CSS, while the backend is developed on AWS CDK, leveraging Lambda functions, DynamoDB, API Gateway and S3.</p>
        </div>

        <h3>Education</h3>
        <div>
          <p>College for Creative Studies</p>
          <p>BFA, Product Design, Animation, Film, Photography</p>
          <p>Activities: Siigraph CCS Chapter - President, Resident Assistant, Peer Tutor</p>
          <p>CCS Ranked #3 design school in the U.S. and best in the midwest based on alumni success (LinkedIn)</p>
        </div>
      </div>
    </Layout>
  )
}
