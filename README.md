# CHoRUS Bridge2AI Standards Module

## Checklist/Progress Tracking/ Discussions Framework

### Purpose
The CHoRUS Bridge2AI Standards Module is designed to offer a comprehensive platform for efficient project management and communication. 
Our framework enables you to:
* Organize tasks with a structured **to-do list** for sites.
* Create a **workspace** where sites can monitor their progress, keep notes, and reach out to the Standards Module (SM) for assistance.
* Equip the SM with tools for overseeing the progress and challenges of multiple sites at once.
  
### Overview
This framework solves three problems for the SM and the Bridge2AI contributing sites:
1) **Task guidance**: SM seeks to provide sites with a detailed checklist of tasks involved in the ETL development, use of OHDSI tools, and concept mapping necessary to contribute data to CHoRUS Bridge2AI.
2) **Progress monitoring**: SM needs to understand the overall and individual status of sites' progress in order to better tailor support to the entire group and specific sites.
3) **Discussion platform**: SM wants to host a discussion board or forum where sites can post questions or present topics for discussion with other sites and SM simultaneously.

To address these challenges, the SM introduces the following solutions:
1) **Detailed checklists**: The SM provides detailed checklists to guide sites through the entire process of transforming source data into an OMOP CDM database. These checklists are designed to clarify the core procedures of:
    * Developing an OMOP ETL and setting up the necessary computational infrastructure
    * Implementing the OHDSI toolstack to extract standardized quality and characterization information, and then sharing this information with the SM
    * Selecting and mapping a subset of relevant source concepts to the OMOP Vocabulary
2) **Progress tracking**: SM makes sites' checklists accessible to understand their OMOP transformation progress and challenges. This visibility enables tailored support for each site and content addressing common issues.
3) **Discussion forum integration**: The framework integrates with GitHub Discussions, offering a platform for sites to post questions and receive answers from SM or other sites. This integration connects discussions to issues in the Progress Tracker or Checklist and allows the creation of new topics from posted questions.

### Site Instructions
This framework uses a progress tracking system categorized into two main categories, each containing issues attached to each site's name:
1) **Milestone issues** (**Complete ETL**, **Results Sharing**, **Flowsheets**): these issues come with detailed checklists for essential steps in the Bridge2AI data submission process. Each issue is connected to a single milestone with a due date and a progress percentage display.
2) **Progress Tracker issue**: this single issue serves as the central hub for tracking a site's progress:
    * Serves as a landing page for each site.
    * Includes a site profile and high-level to-do list.
    * Offers links to the GitHub Discussions page and the three milestone issues.
    * Is associated with a project that tracks specific progress attributes (e.g., data submission date, Achilles work status, etc.).

### Engagement and Benefits
The benefits a site gains from this framework are directly related to its level of engagement.
Here's how to get the most from the framework:

1. **Progress tracking**: sites should assign representatives to track their progress using the checklists. Regularly updating the checklists provides valuable insights to the SM.
2. **Regular comments**: sites should leave comments on the issues at regular intervals (weekly or bi-weekly) or whenever encountering challenges. These comments help SM provide tailored support.
3. **Status labels**: sites should use the issue labels to report their status. Labels include:  
    * **Blocked**: indicates that a site cannot proceed with work. Comments can specify whether the blockage is external or something the SM can assist with.
    * **Help Wanted**: signals that a site needs SM assistance. The reason for help can be explained in a comment.
    * **Under Review**: marks that a site has requested feedback and progress is paused until feedback is received.
    
Using these labels in conjunction with comments helps the SM understand a site's current situation and support needs.

Ultimately, any interaction with the issues, whether it is simply high-level progress updates on the Progress Tracker issue, checking boxes in the milestone issues, utilizing labels, or a combination, is significantly better than no interaction at all.
