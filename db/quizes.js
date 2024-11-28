//import {v4 as uuid} from "uuid";
const {v4:uuid} =require("uuid");

const quizzes = {
    "data":[

        //1st- title,des,cat,quiz
        {
          id:uuid(),
          category: "From 100 to 110",
          imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgvR3f9J19LzSNaFRsGcQHdFMP-v9Xc6VVg&s",
          description: "Quizzes from 100 to 110",
          quiz: [
            {
              id: uuid(),
              question: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
              options: [
                { id: uuid(), option: "AWS CostExplorer", isRight: false },
                { id: uuid(), option: "AWS Budgets", isRight: false },
                { id: uuid(), option: "AWS Cost and Usagereport", isRight: true },
                { id: uuid(), option: "AWS Billingdashboard", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster?",
              options: [
                { id: uuid(), option: "AWSConcierge", isRight: false },
                { id: uuid(), option: "AWSCloudFormation", isRight: false },
                { id: uuid(), option: "Amazon Simple Storage Service (Amazon S3)", isRight: false },
                { id: uuid(), option: "AWS ManagementConsole", isRight: true }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following is an AWS Cloud architecture design principle?",
              options: [
                { id: uuid(), option: "Implement single points of failure.", isRight: false },
                { id: uuid(), option: "Implement loose coupling.", isRight: true },
                { id: uuid(), option: "Implement monolithic design.", isRight: false },
                { id: uuid(), option: "Implement vertical scaling.", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following security measures protect access to an AWS account? (Choose two.)",
              options: [
                { id: uuid(), option: "Enable AWSCloudTrail.", isRight: false },
                { id: uuid(), option: "Grant least privilege access to IAMusers.", isRight: true },
                { id: uuid(), option: "Create one IAM user and share with many developers and users.", isRight: false },
                { id: uuid(), option: "Enable AmazonCloudFront.", isRight: false },
                { id: uuid(), option: "Activate multi-factor authentication (MFA) for privilegedusers.", isRight: true }
              ]
            },
            {
              id: uuid(),
              question: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
              options: [
                { id: uuid(), option: "Amazon Glacier", isRight: false },
                { id: uuid(), option: "AWS Snowball", isRight: false },
                { id: uuid(), option: "AWS Storage Gateway", isRight: true },
                { id: uuid(), option: "Amazon Elastic Block Storage (Amazon EBS)", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
              options: [
                { id: uuid(), option: "AmazonRDS", isRight: false },
                { id: uuid(), option: "Amazon EC2", isRight: true },
                { id: uuid(), option: "Amazon ElastiCache", isRight: false },
                { id: uuid(), option: "AWS Fargate", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following is an important architectural design principle when designing cloud applications?",
              options: [
                { id: uuid(), option: "Use multiple AvailabilityZones.", isRight: true },
                { id: uuid(), option: "Use tightly coupled components.", isRight: false },
                { id: uuid(), option: "Use open source software.", isRight: false },
                { id: uuid(), option: "Provision extra capacity.", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which AWS support plan includes a dedicated Technical Account Manager?",
              options: [
                { id: uuid(), option: "Developer", isRight: false },
                { id: uuid(), option: "Enterprise", isRight: true },
                { id: uuid(), option: "Business", isRight: false },
                { id: uuid(), option: "Basic", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
              options: [
                { id: uuid(), option: "AWS manages the data stored in Amazon RDS tables.", isRight: false },
                { id: uuid(), option: "AWS manages the maintenance of the operating system.", isRight: true },
                { id: uuid(), option: "AWS automatically scales up instance types on demand.", isRight: false },
                { id: uuid(), option: "AWS manages the database type.", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which service is best for storing common database query results, which helps to alleviate database access load?",
              options: [
                { id: uuid(), option: "Amazon MachineLearning", isRight: false },
                { id: uuid(), option: "Amazon SQS", isRight: false },
                { id: uuid(), option: "Amazon ElastiCache", isRight: true },
                { id: uuid(), option: "Amazon EC2 Instance Store", isRight: false }
              ]
            },
            {
              id: uuid(),
              question: "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
              options: [
                { id: uuid(), option: "Patching operating system software", isRight: false },
                { id: uuid(), option: "Encrypting data", isRight: false },
                { id: uuid(), option: "Enforcing multi-factor authentication", isRight: false },
                { id: uuid(), option: "Auditing physical data center assets", isRight: true }
              ]
            }
          ]          
        },

        {
            id:uuid(),
            category: "From 110 to 120",
            description: "Questions From 110 to 120",
            imageUrl :"https://img.freepik.com/premium-photo/one-hundred-ten-3d-illustration-golden-number-110-white-copy-space-right-hand-side-text_131956-46.jpg",
            quiz:[
                {
                  "id": "111",
                  "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Choose two.)",
                  "options": [
                    { "id": "A", "option": "AWS Trusted Advisor", "isRight": false },
                    { "id": "B", "option": "AWS Online Tech Talks", "isRight": true },
                    { "id": "C", "option": "AWS Blog", "isRight": false },
                    { "id": "D", "option": "AWS Forums", "isRight": false },
                    { "id": "E", "option": "AWS Classroom Training", "isRight": true }
                  ]
                },
                {
                  "id": "112",
                  "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Choose two.)",
                  "options": [
                    { "id": "A", "option": "Amazon CloudFront distributions", "isRight": false },
                    { "id": "B", "option": "Amazon Route 53", "isRight": false },
                    { "id": "C", "option": "Security Groups", "isRight": true },
                    { "id": "D", "option": "Subnets", "isRight": true },
                    { "id": "E", "option": "Elastic Load Balancing", "isRight": false }
                  ]
                },
                {
                  "id": "113",
                  "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
                  "options": [
                    { "id": "A", "option": "Use AWS Budgets on each account to pay only to budget.", "isRight": false },
                    { "id": "B", "option": "Contact AWS Support for a monthly bill.", "isRight": false },
                    { "id": "C", "option": "Create an AWS Organization from the payer account and invite the other accounts to join.", "isRight": true },
                    { "id": "D", "option": "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.", "isRight": false }
                  ]
                },
                {
                  "id": "114",
                  "question": "How do customers benefit from Amazon’s massive economies of scale?",
                  "options": [
                    { "id": "A", "option": "Periodic price reductions as the result of Amazon’s operational efficiencies", "isRight": true },
                    { "id": "B", "option": "New Amazon EC2 instance types providing the latest hardware", "isRight": false },
                    { "id": "C", "option": "The ability to scale up and down when needed", "isRight": false },
                    { "id": "D", "option": "Increased reliability in the underlying hardware of Amazon EC2 instances", "isRight": false }
                  ]
                },
                {
                  "id": "115",
                  "question": "Which AWS services can be used to gather information about AWS account activity? (Choose two.)",
                  "options": [
                    { "id": "A", "option": "Amazon CloudFront", "isRight": false },
                    { "id": "B", "option": "AWS Cloud9", "isRight": false },
                    { "id": "C", "option": "AWS CloudTrail", "isRight": true },
                    { "id": "D", "option": "AWS CloudHSM", "isRight": false },
                    { "id": "E", "option": "Amazon CloudWatch", "isRight": true }
                  ]
                },
                {
                  "id": "116",
                  "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Choose two.)",
                  "options": [
                    { "id": "A", "option": "Patching database software", "isRight": true },
                    { "id": "B", "option": "Testing application releases", "isRight": false },
                    { "id": "C", "option": "Backing up databases", "isRight": true },
                    { "id": "D", "option": "Creating database schema", "isRight": false },
                    { "id": "E", "option": "Running penetration tests", "isRight": false }
                  ]
                },
                {
                  "id": "117",
                  "question": "In which scenario should Amazon EC2 Spot Instances be used?",
                  "options": [
                    { "id": "A", "option": "A company wants to move its main website to AWS from an on-premises web server.", "isRight": false },
                    { "id": "B", "option": "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.", "isRight": false },
                    { "id": "C", "option": "A company’s heavily used legacy database is currently running on-premises.", "isRight": false },
                    { "id": "D", "option": "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.", "isRight": true }
                  ]
                },
                {
                  "id": "118",
                  "question": "Which AWS feature should a customer leverage to achieve high availability of an application?",
                  "options": [
                    { "id": "A", "option": "AWS Direct Connect", "isRight": false },
                    { "id": "B", "option": "Availability Zones", "isRight": true },
                    { "id": "C", "option": "Data centers", "isRight": false },
                    { "id": "D", "option": "Amazon Virtual Private Cloud (Amazon VPC)", "isRight": false }
                  ]
                },
                {
                  "id": "119",
                  "question": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
                  "options": [
                    { "id": "A", "option": "Enterprise", "isRight": true },
                    { "id": "B", "option": "Business", "isRight": false },
                    { "id": "C", "option": "Developer", "isRight": false },
                    { "id": "D", "option": "Basic", "isRight": false }
                  ]
                },
                {
                  "id": "120",
                  "question": "Which AWS service can serve a static website?",
                  "options": [
                    { "id": "A", "option": "Amazon S3", "isRight": true },
                    { "id": "B", "option": "Amazon Route 53", "isRight": false },
                    { "id": "C", "option": "Amazon QuickSight", "isRight": false },
                    { "id": "D", "option": "AWS X-Ray", "isRight": false }
                  ]
                }
              ]
              
              
          
          }
        

    ]
}

module.exports = quizzes
