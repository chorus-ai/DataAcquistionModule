# CHoRUS Bridge2AI Standards Module

## Checklist/Progress Tracking/ Discussions Framework

### Purpose
This framework provides an integrated solution for:

- A structured "to-do list" for sites
- A "workspace" for sites to track their own progress, keep notes, and reach out to SM for assistance
- A project management tool for SM to visualize multiple sites' progress and/or friction points

### Overview
This framework solves three problems for the SM and the B2AI contributing sites:
1) SM seeks to provide sites with a detailed checklist of tasks involved in the ETL development, use of OHDSI tools, and concept mapping necessary to contribute data to CHoRUS B2AI.
2) SM needs to understand the overall and individual status of sites' progress in order to better tailor support to the entire group and specific sites.
3) SM wants to host a discussion board/ forum where sites can post questions or present topics for discussion with other sites and SM simultaneously.

Standards Module (SM) provides sites with detailed checklists to "map" the path from source data to OMOP CDM database. These checklists should help demystify the core processes of 1) Developing an OMOP ETL and standing up the required computational infrastucture 2) Standing up the OHDSI toolstack to extract standardized quality and characterization information, and subsequently sharing quality and characterization information with SM, and 3) The selection and mapping of a subset of relevant source concepts to the OMOP Vocabulary.

To know how best to support sites, SM needs to understand where sites are in their OMOP transofrmation progress, and where they are meeting friction. By making sites' checklists visible to the SM, checlists serve the second purpose of providing a window into sites' progress. This allows SM to tailor their support to each site's individual needs, as well as create content for all sites that addresses issues that multiple sites may be facing.

The final benefit of sites utilizing the checklist/progress tracker in GitHub (as opposed to adhoc, site-specific project managment methods) is the integration with GitHub Discussions. GitHub Discussions offers a collaborative forum for sites to post questions and receive answers from SM or other sites. It integrates well with the GitHub issue tracker, which allows this framework to connect discussions to issues in the Progress Tracker or Checklist issues, or even create new discussion topics from a question that a site posted on their own Progress Tracker or checklist.

### Instructions for use (for sites)
Each site has four issues in the tracker with their site's name attached to them; the issues each site has are Complete ETL, Results Sharing, Flowsheets, and Progress Tracker. The first three issues ("milestone issues") contain detailed checklists for how to complete each essential part of the B2AI data submission process. The milestone issues are each linked to a single milestone. The milestone has a due date and displays the percent of completed issues. This is mostly a feature of progress tracking. The fourth issue is the Progress Tracker. This can be thought of as a "landing page" for a site. In the initial comment, there is a brief site profile and a very high-level TODO list which links to the GitHub Discussions page and to the three other issues. The progress tracker issue is linked to a project, which has many attributes associated with a site's specific progress (date of data submission, status of work related to Achilles, etc.)

The amount of benefits a site will derive from this framework directly relate to the amount with which they engage. To begin to see the benefits of this framework, sites should nominate one or more representatives to begin tracking their own progress using the checklists. Accurately representing a site's own progress by simply checking boxes of what has been completed will provide a world of insight to the SM.

To take things further, sites should begin leaving comments directly on the issue at a regular frequency (weekly or bi-weekly), or more frequently whenever they encounter road blocks. Comments, whether they simply reflect that everything is moving smoothly, or that progress is slowed for reasons beyond a site's control, or that the whole team is confused by a concept and requires expert input, are useful feedback that the SM needs in order to know how to best support the group.

A final way to use these issues is for a site to report their status using the "labels" feature. All four of the issue types have labels for "Blocked", "Help Wanted", and "Under Review". Making use of these labels in tandem with comments sends a clear signal to the SM of what a site's "status" is and if or what they are expecting for feedback. For example, using the "Blocked" label sends a message that a site can not move forward with work (either on a specific milestone, or in general). In a comment, they may elaborate if they are blocked on something out of their own control or if it is a problem that SM can help solve. The "Help Wanted" label sends a clear message that a site would like SM to reach out for assistance (on what can be elaborated in a comment) and the "Under Review" label can be used to mark that a site has requested feedback and progress is paused until feedback is received.

Ultimately, any interaction with the issues, whether it is simply high level progress updates on the Progress Tracker issue, checking boxes in the milestone issues, utilizing labels, or a combination, is significantly better than no interaction.
