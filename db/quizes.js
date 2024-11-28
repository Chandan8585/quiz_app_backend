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
                  id: uuid(),
                  question: "Which AWS service is suitable for analyzing streaming data in real time?",
                  options: [
                    { id: uuid(), option: "Amazon Kinesis", isRight: true },
                    { id: uuid(), option: "Amazon Athena", isRight: false },
                    { id: uuid(), option: "Amazon Redshift", isRight: false },
                    { id: uuid(), option: "Amazon QuickSight", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which AWS service helps ensure that the latest security patches are applied to Amazon EC2 instances?",
                  options: [
                    { id: uuid(), option: "AWS Shield", isRight: false },
                    { id: uuid(), option: "AWS Inspector", isRight: true },
                    { id: uuid(), option: "AWS Trusted Advisor", isRight: false },
                    { id: uuid(), option: "AWS Systems Manager", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which of the following services can be used to host a static website?",
                  options: [
                    { id: uuid(), option: "Amazon S3", isRight: true },
                    { id: uuid(), option: "Amazon RDS", isRight: false },
                    { id: uuid(), option: "Amazon Redshift", isRight: false },
                    { id: uuid(), option: "Amazon DynamoDB", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which AWS service is designed to improve the performance of web and mobile applications by caching data closer to users?",
                  options: [
                    { id: uuid(), option: "AWS CloudFront", isRight: true },
                    { id: uuid(), option: "AWS Lambda", isRight: false },
                    { id: uuid(), option: "Amazon RDS", isRight: false },
                    { id: uuid(), option: "AWS Step Functions", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which service is used to manage infrastructure as code in AWS?",
                  options: [
                    { id: uuid(), option: "AWS CloudFormation", isRight: true },
                    { id: uuid(), option: "AWS Systems Manager", isRight: false },
                    { id: uuid(), option: "Amazon EC2", isRight: false },
                    { id: uuid(), option: "AWS CloudTrail", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which AWS service allows developers to deploy and manage containerized applications?",
                  options: [
                    { id: uuid(), option: "Amazon ECS", isRight: true },
                    { id: uuid(), option: "AWS Fargate", isRight: true },
                    { id: uuid(), option: "AWS Lambda", isRight: false },
                    { id: uuid(), option: "Amazon RDS", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which AWS service can be used to automatically distribute incoming application traffic across multiple targets?",
                  options: [
                    { id: uuid(), option: "Amazon Route 53", isRight: false },
                    { id: uuid(), option: "Elastic Load Balancing (ELB)", isRight: true },
                    { id: uuid(), option: "AWS Auto Scaling", isRight: false },
                    { id: uuid(), option: "AWS CloudFront", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which AWS service provides automatic scaling for your applications?",
                  options: [
                    { id: uuid(), option: "Amazon EC2", isRight: false },
                    { id: uuid(), option: "AWS Auto Scaling", isRight: true },
                    { id: uuid(), option: "AWS Elastic Beanstalk", isRight: false },
                    { id: uuid(), option: "AWS Systems Manager", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which service allows you to run code without provisioning or managing servers?",
                  options: [
                    { id: uuid(), option: "AWS Lambda", isRight: true },
                    { id: uuid(), option: "AWS Fargate", isRight: false },
                    { id: uuid(), option: "Amazon EC2", isRight: false },
                    { id: uuid(), option: "Amazon ECS", isRight: false }
                  ]
                },
                {
                  id: uuid(),
                  question: "Which service can be used to track user activity and API usage within your AWS account?",
                  options: [
                    { id: uuid(), option: "AWS CloudTrail", isRight: true },
                    { id: uuid(), option: "Amazon CloudWatch", isRight: false },
                    { id: uuid(), option: "AWS Config", isRight: false },
                    { id: uuid(), option: "AWS Trusted Advisor", isRight: false }
                  ]
                }
              ]
              
          
          }
        

    ]
}

module.exports = quizzes
