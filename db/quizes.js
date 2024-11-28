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
                  question: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Choose two.)",
                 options: [
                    { id: uuid(), option: "AWS Trusted Advisor", "isRight": false },
                    { id: uuid(), option: "AWS Online Tech Talks", "isRight": true },
                    {id: uuid(), option: "AWS Blog", "isRight": false },
                    { id: uuid(), option: "AWS Forums", "isRight": false },
                    { id: uuid(), option: "AWS Classroom Training", "isRight": true }
                  ]
                },
                {
                  "id": "112",
                  question: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Choose two.)",
                 options: [
                    { id: uuid(), option: "Amazon CloudFront distributions", "isRight": false },
                    { id: uuid(), option: "Amazon Route 53", "isRight": false },
                    {id: uuid(), option: "Security Groups", "isRight": true },
                    { id: uuid(), option: "Subnets", "isRight": true },
                    { id: uuid(), option: "Elastic Load Balancing", "isRight": false }
                  ]
                },
                {
                  "id": "113",
                  question: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
                 options: [
                    { id: uuid(), option: "Use AWS Budgets on each account to pay only to budget.", "isRight": false },
                    { id: uuid(), option: "Contact AWS Support for a monthly bill.", "isRight": false },
                    {id: uuid(), option: "Create an AWS Organization from the payer account and invite the other accounts to join.", "isRight": true },
                    { id: uuid(), option: "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.", "isRight": false }
                  ]
                },
                {
                  "id": "114",
                  question: "How do customers benefit from Amazon’s massive economies of scale?",
                 options: [
                    { id: uuid(), option: "Periodic price reductions as the result of Amazon’s operational efficiencies", "isRight": true },
                    { id: uuid(), option: "New Amazon EC2 instance types providing the latest hardware", "isRight": false },
                    {id: uuid(), option: "The ability to scale up and down when needed", "isRight": false },
                    { id: uuid(), option: "Increased reliability in the underlying hardware of Amazon EC2 instances", "isRight": false }
                  ]
                },
                {
                  "id": "115",
                  question: "Which AWS services can be used to gather information about AWS account activity? (Choose two.)",
                 options: [
                    { id: uuid(), option: "Amazon CloudFront", "isRight": false },
                    { id: uuid(), option: "AWS Cloud9", "isRight": false },
                    {id: uuid(), option: "AWS CloudTrail", "isRight": true },
                    { id: uuid(), option: "AWS CloudHSM", "isRight": false },
                    { id: uuid(), option: "Amazon CloudWatch", "isRight": true }
                  ]
                },
                {
                  "id": "116",
                  question: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Choose two.)",
                 options: [
                    { id: uuid(), option: "Patching database software", "isRight": true },
                    { id: uuid(), option: "Testing application releases", "isRight": false },
                    {id: uuid(), option: "Backing up databases", "isRight": true },
                    { id: uuid(), option: "Creating database schema", "isRight": false },
                    { id: uuid(), option: "Running penetration tests", "isRight": false }
                  ]
                },
                {
                  "id": "117",
                  question: "In which scenario should Amazon EC2 Spot Instances be used?",
                 options: [
                    { id: uuid(), option: "A company wants to move its main website to AWS from an on-premises web server.", "isRight": false },
                    { id: uuid(), option: "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.", "isRight": false },
                    {id: uuid(), option: "A company’s heavily used legacy database is currently running on-premises.", "isRight": false },
                    { id: uuid(), option: "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.", "isRight": true }
                  ]
                },
                {
                  "id": "118",
                  question: "Which AWS feature should a customer leverage to achieve high availability of an application?",
                 options: [
                    { id: uuid(), option: "AWS Direct Connect", "isRight": false },
                    { id: uuid(), option: "Availability Zones", "isRight": true },
                    {id: uuid(), option: "Data centers", "isRight": false },
                    { id: uuid(), option: "Amazon Virtual Private Cloud (Amazon VPC)", "isRight": false }
                  ]
                },
                {
                  "id": "119",
                  question: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
                 options: [
                    { id: uuid(), option: "Enterprise", "isRight": true },
                    { id: uuid(), option: "Business", "isRight": false },
                    {id: uuid(), option: "Developer", "isRight": false },
                    { id: uuid(), option: "Basic", "isRight": false }
                  ]
                },
                {
                  "id": "120",
                  question: "Which AWS service can serve a static website?",
                 options: [
                    { id: uuid(), option: "Amazon S3", "isRight": true },
                    { id: uuid(), option: "Amazon Route 53", "isRight": false },
                    {id: uuid(), option: "Amazon QuickSight", "isRight": false },
                    { id: uuid(), option: "AWS X-Ray", "isRight": false }
                  ]
                }
              ]
          },

          {
            id:uuid(),
            category: "From 120 to 130",
            description: "Questions From 120 to 130",
            imageUrl :"https://upload.wikimedia.org/wikipedia/commons/8/8b/Route_120-FIN.png?20161203174340",
            quiz: [
                {
                  "id": "121",
                  question: "How does AWS shorten the time to provision IT resources?",
                 options: [
                    { id: uuid(), option: "It supplies an online IT ticketing platform for resource requests.", "isRight": false },
                    { id: uuid(), option: "It supports automatic code validation services.", "isRight": false },
                    {id: uuid(), option: "It provides the ability to programmatically provision existing resources.", "isRight": true },
                    { id: uuid(), option: "It automates the resource request process from a company’s IT vendor list.", "isRight": false }
                  ]
                },
                {
                  "id": "122",
                  question: "What can AWS edge locations be used for? (Choose two.)",
                 options: [
                    { id: uuid(), option: "Hosting applications", "isRight": false },
                    { id: uuid(), option: "Delivering content closer to users", "isRight": true },
                    {id: uuid(), option: "Running NoSQL database caching services", "isRight": false },
                    { id: uuid(), option: "Reducing traffic on the server by caching responses", "isRight": true },
                    { id: uuid(), option: "Sending notification messages to end users", "isRight": false }
                  ]
                },
                {
                  "id": "123",
                  question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
                 options: [
                    { id: uuid(), option: "A public and private key-pair", "isRight": false },
                    { id: uuid(), option: "Amazon Inspector", "isRight": false },
                    {id: uuid(), option: "AWS Identity and Access Management (IAM) policies", "isRight": true },
                    { id: uuid(), option: "Security Groups", "isRight": false }
                  ]
                },
                {
                  "id": "124",
                  question: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
                 options: [
                    { id: uuid(), option: "Think parallel", "isRight": false },
                    { id: uuid(), option: "Implement elasticity", "isRight": true },
                    {id: uuid(), option: "Decouple your components", "isRight": false },
                    { id: uuid(), option: "Design for failure", "isRight": false }
                  ]
                },
                {
                  "id": "125",
                  question: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
                 options: [
                    { id: uuid(), option: "Moving from variable operational expense (opex) to upfront capital expense (capex).", "isRight": false },
                    { id: uuid(), option: "Moving from upfront capital expense (capex) to variable capital expense (capex).", "isRight": false },
                    {id: uuid(), option: "Moving from upfront capital expense (capex) to variable operational expense (opex).", "isRight": true },
                    { id: uuid(), option: "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex).", "isRight": false }
                  ]
                },
                {
                  "id": "126",
                  question: "How should a customer forecast the future costs for running a new web application?",
                 options: [
                    { id: uuid(), option: "Amazon Aurora Backtrack", "isRight": false },
                    { id: uuid(), option: "Amazon CloudWatch Billing Alarms", "isRight": false },
                    {id: uuid(), option: "AWS Simple Monthly Calculator", "isRight": true },
                    { id: uuid(), option: "AWS Cost and Usage report", "isRight": false }
                  ]
                },
                {
                  "id": "127",
                  question: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
                 options: [
                    { id: uuid(), option: "Enterprise", "isRight": false },
                    { id: uuid(), option: "Business", "isRight": true },
                    {id: uuid(), option: "Developer", "isRight": false },
                    { id: uuid(), option: "Basic", "isRight": false }
                  ]
                },
                {
                  "id": "128",
                  question: "Which of the following tasks is the responsibility of AWS?",
                 options: [
                    { id: uuid(), option: "Encrypting client-side data", "isRight": false },
                    { id: uuid(), option: "Configuring AWS Identity and Access Management (IAM) roles", "isRight": false },
                    {id: uuid(), option: "Securing the Amazon EC2 hypervisor", "isRight": true },
                    { id: uuid(), option: "Setting user password policies", "isRight": false }
                  ]
                },
                {
                  "id": "129",
                  question: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
                 options: [
                    { id: uuid(), option: "the ability to bid for a lower hourly cost.", "isRight": false },
                    { id: uuid(), option: "paying a daily rate regardless of time used.", "isRight": false },
                    {id: uuid(), option: "paying only for time used.", "isRight": true },
                    { id: uuid(), option: "pre-paying for instances and paying a lower hourly rate.", "isRight": false }
                  ]
                },
                {
                  "id": "130",
                  question: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
                 options: [
                    { id: uuid(), option: "AWS Well-Architected Framework documentation", "isRight": false },
                    { id: uuid(), option: "Amazon CloudFront", "isRight": false },
                    {id: uuid(), option: "AWS CodeCommit", "isRight": false },
                    { id: uuid(), option: "AWS Quick Start reference deployments", "isRight": true }
                  ]
                }
              ]
              
                     
          }
        

    ]
}

module.exports = quizzes
















