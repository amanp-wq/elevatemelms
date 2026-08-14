/* ═══════════════════════════════════════
   ElevateMe — Shared Curriculum Data
   Single source of truth for all module IDs/content.
   Extracted verbatim from week1-10/index.html — do not hand-edit
   the arrays without also checking week pages still match, or vice versa.
═══════════════════════════════════════ */

window.CURRICULUM = {};

window.CURRICULUM[1] = [
  { id:'w1m1', icon:'fa-hand-peace', title:'Welcome to ElevateMe', subtitle:'Bootcamp overview', hasVideo:false,
    notes:`<p style="margin-bottom:1rem;">Hello and congratulations on embarking on this exciting journey! We're thrilled to have you join our community of aspiring professionals.</p>
           <p style="margin-bottom:1rem;">This program is designed to enhance your technical skills and equip you with comprehensive career skills to thrive in the US job market.</p>
           <p>Each module, lesson, and activity has been crafted with your success in mind. Engage actively, challenge yourself, and don't hesitate to reach out to your support team.</p>`,
    takeaways:['This program covers both technical skills and career readiness for the US job market.','Each of the 10 weeks builds on the last — complete them in order.','Career coaches are available for 1-on-1 calls throughout the program.'],
    action:'Explore the full Week 1 Table of Contents and familiarize yourself with all 5 modules ahead.',
    resources:[] },

  { id:'w1m2', icon:'fa-file-alt', title:'Job Search Worksheet', subtitle:'Your job search plan', hasVideo:false,
    notes:`<p style="margin-bottom:1rem;">Fill in the Job Search Worksheet using the link below. This is a crucial tool to organize your job search, refine your elevator pitch, update your resume, and apply for roles directly.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-top:1rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-list-ol" style="margin-right:6px;"></i>Submission Instructions</p>
             <ol style="padding-left:1.2rem;font-size:0.88rem;line-height:1.9;">
               <li>Click the link below to open the view-only Google Doc.</li>
               <li>Go to <strong>File → Make a Copy</strong> or <strong>Download</strong> to edit.</li>
               <li>Fill out with as much detail as possible.</li>
               <li>Save as: <strong>FirstName_LastName_Job Search Worksheet</strong></li>
               <li>Submit via email once complete.</li>
             </ol>
           </div>`,
    takeaways:['The worksheet covers your job search plan, elevator pitch, resume, and LinkedIn all in one place.','Fill it in as carefully as you would a real job application.','Book a coach call if you need help with any section.'],
    action:'Access the Job Search Worksheet, make a copy, fill it in completely, and submit via email as FirstName_LastName_Job Search Worksheet.',
    resources:[{label:'Job Search Worksheet (Google Doc)', icon:'fa-external-link-alt', tag:'Open', url:'https://docs.google.com/document/d/1NcH2f4BqTqS2JoWHxtsw_P1-1uKN_zgE/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'}] },

  { id:'w1m3', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Meet Nitti & Dr. Divina', hasVideo:false,
    notes:`<p style="margin-bottom:1.2rem;">Now that you are working on the Job Search Worksheet, book your first introductory call with your Career Coach — Nitti or Dr. Divina.</p>
           <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
             <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
               <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;">
                 <div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong>
               </div>
               <p style="font-size:0.84rem;line-height:1.8;">
                 <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
                 <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
                 <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
               </p>
             </div>
             <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
               <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;">
                 <div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong>
               </div>
               <p style="font-size:0.84rem;line-height:1.8;">
                 <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
                 <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
                 <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
               </p>
             </div>
           </div>
           <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.2rem;border:1px solid #f5c6be;">
             <p style="font-size:0.84rem;line-height:1.8;"><strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 per week &nbsp;·&nbsp; <strong>Reschedule:</strong> at least 12 hrs before</p>
           </div>`,
    takeaways:['Book your call early — this is your most personalized support resource.','Come prepared with your Job Search Worksheet and 2–3 specific questions.','Each call is 30 minutes — you can book one per week.'],
    action:"Book your first coach call this week using Nitti's Calendly or Dr. Divina's TidyCal. Confirm the Zoom link in your email.",
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]},

  { id:'w1m4', icon:'fa-hourglass-half', title:'Time Management', subtitle:'Eisenhower Matrix', optional:true,
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">Highly recommended for students managing both this program and a Technical Project.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;">Key Topics</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Why Time Management matters</li>
               <li><i class="fas fa-check-circle"></i> Step 1: Listing out your tasks</li>
               <li><i class="fas fa-check-circle"></i> Step 2: Prioritizing your tasks</li>
               <li><i class="fas fa-check-circle"></i> Step 3: How to use the Eisenhower Box</li>
             </ul>
           </div>`,
    takeaways:["List all your tasks first — you can't prioritize what you haven't written down.",'The Eisenhower Box separates urgent tasks from important ones.','Working smarter with prioritization beats working longer without a plan.'],
    action:'List all your daily tasks then categorize each using the Eisenhower Box template. Share with your coach in your next call.',
    resources:[
      
      {label:'Eisenhower Box Template', icon:'fa-th-large', tag:'Template', url:'https://docs.google.com/spreadsheets/d/1Mf2dkVrR9OidcaRCOB4Oa4vlCSCneguCo_U0IXDzbAg/edit?usp=sharing'}
    ]},

  { id:'w1m5', icon:'fa-journal-whills', title:'Time Management with Planners', subtitle:'Daily planner system', optional:true,
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">Master time management using planners to visually organize your day — meet deadlines without overwhelming stress.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;">Key Topics</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Introduction to Daily Planning</li>
               <li><i class="fas fa-check-circle"></i> Daily Planner Template walkthrough</li>
               <li><i class="fas fa-check-circle"></i> 5 Ways to Use a Planner Effectively</li>
             </ul>
           </div>`,
    takeaways:['A planner externalizes your schedule so your brain can focus on doing, not remembering.','Plan your goals, submissions, to-do lists, and schedules together.','10 minutes of planning daily reduces stress significantly.'],
    action:"Download the Daily Planner Template and fill in tomorrow's schedule tonight. Include your goals, to-do list, and any deadlines.",
    resources:[
     
      {label:'Daily Planner Template', icon:'fa-calendar-day', tag:'Template', url:'https://docs.google.com/spreadsheets/d/1wAxFn20OCpSmgpNQOlNikhwVWhbEvEOR0701LmeNxp8/edit?usp=sharing'}
    ]}
];

window.CURRICULUM[2] = [
  {
    id:'w2m1', icon:'fa-robot', title:'Introduction to ATS', subtitle:'How ATS works',
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">In this module, you will learn about the Applicant Tracking System (ATS), its importance in the hiring process, and practical tips for creating an ATS-friendly resume. This knowledge will help you tailor your resume to pass through the initial screening and increase your chances of securing an interview.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> What is an Applicant Tracking System (ATS)</li>
               <li><i class="fas fa-check-circle"></i> Companies that use ATS and Why</li>
               <li><i class="fas fa-check-circle"></i> How Applicant Tracking Systems Work</li>
               <li><i class="fas fa-check-circle"></i> Tips for Creating an ATS-Friendly Resume</li>
               <li><i class="fas fa-check-circle"></i> How to Further Strengthen Your ATS Compliant Resume</li>
             </ul>
           </div>
           <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you should be well-equipped to create an ATS-friendly resume that effectively showcases your skills and experiences, improving your chances of landing job interviews.</p>`,
    takeaways:['ATS screens out resumes before a human ever sees them — formatting matters as much as content.','Mirror the exact keywords from the job description in your resume.','Avoid tables, images, and fancy formatting — ATS systems cannot read them.'],
    action:'Run your current resume through the Jobscan ATS checker and note your match score for one target job description.',
    resources:[
      {label:'ATS: Everything You Need to Know', icon:'fa-external-link-alt', tag:'Article', url:'https://www.jobscan.co/applicant-tracking-systems'},
      {label:'Get Tailored ATS Tips with Jobscan', icon:'fa-external-link-alt', tag:'Article', url:'https://www.jobscan.co/video-ats-tip/'}
    ]
  },
  {
    id:'w2m2', icon:'fa-file-pdf', title:'Building a Resume', subtitle:'Mandatory',
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">This module is crucial for students aiming to create a strong resume that stands out to potential employers. An effective resume is your first step towards securing job interviews and advancing in your career.</p>
           <p style="margin-bottom:1rem;">You will learn the importance of an effective resume, how companies view your resume, and top tips for crafting a compelling resume.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Importance of an Effective Resume</li>
               <li><i class="fas fa-check-circle"></i> How Companies View your Resume</li>
               <li><i class="fas fa-check-circle"></i> Top Resume Tips</li>
             </ul>
           </div>
           <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you will have a well-crafted resume that effectively showcases your skills and experiences, increasing your chances of securing job interviews.</p>`,
    takeaways:['Recruiters spend an average of 6–7 seconds on an initial resume scan — clarity is everything.','Every bullet point should follow: Action Verb + Task + Measurable Result.','One page for under 5 years experience; two pages is acceptable beyond that.'],
    action:'Rewrite 3 bullet points from your current resume using the Action Verb + Task + Result formula and compare the before/after.',
    resources:[]
  },
  {
    id:'w2m3', icon:'fa-layer-group', title:'Resume Structure', subtitle:'Mandatory',
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">Let's dive deeper into the specific sections of a resume. Understanding how to effectively structure each section will enhance the overall impact of your resume, making it more attractive to potential employers.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Contact Information</li>
               <li><i class="fas fa-check-circle"></i> Summary</li>
               <li><i class="fas fa-check-circle"></i> Education Section</li>
               <li><i class="fas fa-check-circle"></i> Technical Skills and Tools</li>
               <li><i class="fas fa-check-circle"></i> Work Experience</li>
               <li><i class="fas fa-check-circle"></i> University Projects</li>
               <li><i class="fas fa-check-circle"></i> Awards and Involvement</li>
               <li><i class="fas fa-check-circle"></i> Soft Skills</li>
             </ul>
           </div>
           <div style="background:#fff8f7;border-radius:14px;padding:1.2rem 1.4rem;margin-top:1rem;border:1px solid #f5c6be;">
             <p style="font-size:0.84rem;font-weight:700;color:var(--brand-accent);margin-bottom:0.6rem;"><i class="fas fa-calendar-check" style="margin-right:6px;"></i>Need Help? Book a Coach Call</p>
             <div style="display:flex;flex-wrap:wrap;gap:1rem;font-size:0.82rem;line-height:1.9;">
               <div><strong>Nitti Vidhu Mohan</strong><br><a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a> · nitti.v@elevateme.pro</div>
               <div><strong>Dr. Divina Raghav</strong><br><a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a> · divina.r@elevateme.pro</div>
             </div>
           </div> `,
    takeaways:['Your professional summary is your headline — make it role-specific, never generic.','For entry-level roles, Education should come before Work Experience.','University Projects carry as much weight as work experience — treat them with the same rigor.'],
    action:'Review your resume against all 8 structural sections. Identify which are missing or weak and update them before your next coach call.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },
  {
    id:'w2m4', icon:'fab fa-linkedin', title:'Creating a LinkedIn Profile', subtitle:'Mandatory',
    hasVideo:false,
    notes:`<p style="margin-bottom:1rem;">This module guides you through creating a robust LinkedIn profile. A well-crafted LinkedIn profile is crucial for networking, job searching, and establishing your professional brand. It will help you attract positive attention from recruiters and potential employers.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>What to Complete</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Follow the LinkedIn Profile Checklist</li>
               <li><i class="fas fa-check-circle"></i> Add a professional photo and banner</li>
               <li><i class="fas fa-check-circle"></i> Optimise your headline with role-relevant keywords</li>
               <li><i class="fas fa-check-circle"></i> Complete your About section in first person</li>
               <li><i class="fas fa-check-circle"></i> Enable "Open to Work" if applicable</li>
             </ul>
           </div>
           <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-top:1rem;border:1px solid #c8e6d8;">
             <p style="font-size:0.84rem;"><i class="fas fa-info-circle" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Already have a profile?</strong> If your LinkedIn already follows the guidelines in the checklist, skip this module and move to the next one.</p>
           </div>`,
    takeaways:['Profiles with a professional photo get 21× more views from recruiters.','Your LinkedIn headline appears in every search result — pack it with relevant keywords.','Recruiters filter by location and skills — make sure both are accurately filled in.'],
    action:'Complete the LinkedIn Profile Checklist. Tick every item. If you score less than 80%, book a coach call to review it together.',
    resources:[
      {label:'LinkedIn Profile Checklist', icon:'fa-list-check', tag:'Checklist', url:'https://www.linkedin.com/pulse/linkedin-profile-ultimate-optimization-checklist-updated-24fke/'}
    ]
  },
  {
    id:'w2m5', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Resume review support',
    hasVideo:false,
    notes:`<p style="margin-bottom:1.2rem;">Now that you are working on your resume and filling in your details, it's time to book a call with your Career Coach. This will be a focused session on your resume and LinkedIn.</p>
           <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
             <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
               <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
               <p style="font-size:0.84rem;line-height:1.9;">
                 <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
                 <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
                 <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
               </p>
             </div>
             <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
               <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
               <p style="font-size:0.84rem;line-height:1.9;">
                 <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
                 <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
                 <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
               </p>
             </div>
           </div>
           <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
             <strong>Instructions:</strong><br>
             1. Click the booking link to open the calendar<br>
             2. Choose a date and time that works for you<br>
             3. Fill in your name, email, and topics to discuss<br>
             4. Confirm — you'll receive a Zoom link via email<br>
             5. Join on time. Reschedule at least 12 hours in advance.<br>
             6. For any emergency: nitti.v@elevateme.pro<br><br>
             <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week
           </div>`,
    takeaways:['Come prepared with your updated resume and LinkedIn profile for maximum value.','Prepare 2–3 specific questions before the session.','Each call is 30 minutes — book once per week, reschedule at least 12 hours in advance.'],
    action:'Book your Week 2 coach call now. Bring your updated resume and LinkedIn profile URL to the session.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },
  {
    id:'w2m6', icon:'fa-map', title:'Overview of the Complete Recruitment Process', subtitle:'Your hiring roadmap',
    hasVideo:false,
    notes:`<p style="margin-bottom:1rem;">This module guides program graduates through the various stages of the hiring process, from job search to onboarding. It offers a step-by-step approach tailored specifically for those entering the job market in the U.S., helping you navigate each phase with confidence and clarity.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-route" style="margin-right:6px;"></i>The Full Hiring Journey</p>
             <div style="display:flex;flex-direction:column;gap:0.5rem;">
               ${['Job Search & Application','Resume Screening','Initial Recruiter Screening','Online Assessments','Hiring Manager Interview','Technical Round','Project / Case Study','Final Interview','Reference Checks','Job Offer & Negotiation','Onboarding'].map((s,i)=>`<div style="display:flex;align-items:center;gap:0.8rem;padding:0.5rem 0.8rem;background:white;border-radius:8px;font-size:0.85rem;"><span style="width:24px;height:24px;background:var(--brand-teal);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;">${i+1}</span>${s}</div>`).join('')}
             </div>
           </div>
           <p style="margin-top:1rem;font-size:0.88rem;">By following this guide, you can effectively navigate the hiring process from searching for job openings to successfully onboarding in a new role. Highlighting program projects, continuous learning, practicing with mock interviews, and following up after interviews are key strategies to enhance your job search and career success.</p>`,
    takeaways:['Most hiring processes have 6–10 distinct stages — knowing what comes next reduces anxiety.','Every stage requires a different type of preparation — treat each one separately.','Following up professionally after every stage keeps you top of mind with recruiters.'],
    action:'For one company you are targeting, research and map out which of these stages they use. Note it in your Job Search Worksheet.',
    resources:[
      {label:'Overview of the Complete Recruitment Process', icon:'fa-file-alt', tag:'Doc', url:'https://docs.google.com/document/d/1UL-LyLSeEuMLwwYWNDAzPnCVJkZJRvm7/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'}
    ]
  },
  {
    id:'w2m7', icon:'fa-diagram-project', title:'Understanding the Various Recruitment Steps', subtitle:'Step-by-step breakdown',
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">Here we will discuss the various steps involved in the recruitment process, which will help you prepare effectively for job applications. Understanding these steps will support you to navigate the hiring process with confidence and improve your chances of success.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>Recruitment Steps to Prepare for</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> Resume and Application Submission</li>
               <li><i class="fas fa-check-circle"></i> Initial Screening with the Recruiter</li>
               <li><i class="fas fa-check-circle"></i> Online Assessments</li>
               <li><i class="fas fa-check-circle"></i> Interview with Hiring Manager or Team Manager</li>
               <li><i class="fas fa-check-circle"></i> Technical Round</li>
               <li><i class="fas fa-check-circle"></i> Project Submission or Case Study</li>
               <li><i class="fas fa-check-circle"></i> Final Interview</li>
               <li><i class="fas fa-check-circle"></i> Reference Checks</li>
               <li><i class="fas fa-check-circle"></i> Job Offer and Negotiation</li>
             </ul>
           </div>
           <p style="margin-top:1rem;font-size:0.88rem;">It is highly recommended to tailor your approach for each step, leverage mock interviews and practice assessments, and engage with your career coach and technical mentor to enhance your readiness for these stages.</p>`,
    takeaways:['Tailor your preparation specifically for each recruitment stage — generic prep is not enough.','Mock interviews and practice assessments are your most valuable preparation tools.','Engage your career coach and technical mentor at every stage, not just at the beginning.'],
    action:'Rate your current readiness for each of the 9 recruitment steps from 1–5. Share this self-assessment with your coach in your next call.',
    resources:[]
  },
  {
    id:'w2m8', icon:'fa-phone-alt', title:'Prepare for the Initial Screening Call', subtitle:'First impression matters',
    hasVideo:true,
    notes:`<p style="margin-bottom:1rem;">This module is designed to help you effectively prepare for initial screening interviews. These are critical first steps in the hiring process, where recruiters assess your basic qualifications and fit for the role. By following the steps outlined, you can make a strong impression and increase your chances of moving forward.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> What Are Initial Screening Calls?</li>
               <li><i class="fas fa-check-circle"></i> Step-by-Step Guide to Preparing for Initial Interviews</li>
               <li><i class="fas fa-check-circle"></i> How to Prepare for Screening Calls Made Without Prior Warning</li>
             </ul>
           </div>`,
    takeaways:['Initial screening calls are about fit and enthusiasm — not technical depth.','Always have your resume, the job description, and company research in front of you.','Prepare a clear 60-second pitch about yourself before every screening call.'],
    action:'Practice answering "Tell me about yourself" and "Why are you interested in this role?" out loud. Record yourself and listen back.',
    resources:[
      {label:'How to Prepare for your Phone Screen', icon:'fa-external-link-alt', tag:'Guide', url:'https://www.themuse.com/advice/phone-screen-definition-preparation'},
      {label:'Practice Common Interview Questions', icon:'fa-external-link-alt', tag:'Practice', url:'https://www.themuse.com/advice/phone-interview-questions-answers'}
    ]
  },
  {
    id:'w2m9', icon:'fa-headset', title:'Handling Initial Screening Calls from Recruiters', subtitle:'Initial screening walkthrough',
    hasVideo:false,
    notes:`<p style="margin-bottom:1rem;">This module is designed to help you navigate the challenge of receiving initial screening calls from recruiters.</p>
           <p style="margin-bottom:1rem;">There are guidelines and sample scripts to handle unexpected recruiter calls — whether you can reschedule or need to handle the call immediately. This will help you respond professionally and confidently in any situation.</p>
           <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
             <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;">Two Scenarios Covered</p>
             <ul class="worksheet-bullets">
               <li><i class="fas fa-check-circle"></i> <strong>Scenario 1:</strong> Recruiter Call That Can Be Rescheduled</li>
               <li><i class="fas fa-check-circle"></i> <strong>Scenario 2:</strong> Recruiter Call That Cannot Be Rescheduled</li>
             </ul>
           </div>
           <p style="margin-top:1rem;font-size:0.88rem;">By following these steps, you can effectively prepare for initial screening interviews and make a positive impression on recruiters. Practice regularly and use the resources provided to refine your approach and improve your chances of success.</p>`,
    takeaways:['Never sound caught off guard — always have a professional response ready, even for surprise calls.','It is completely acceptable to politely reschedule a surprise recruiter call — do it gracefully.','Practice both scenarios out loud so your response becomes second nature.'],
    action:'Practice both scripts with a friend or in front of a mirror. Then try a mock scenario with your career coach in your next session.',
    resources:[
      {label:'Scenario 1: Recruiter Call That Can Be Rescheduled', icon:'fa-file-alt', tag:'Doc', url:'https://docs.google.com/document/d/1v3V_KX3qdjP0V9SOztIyoY2P1kpmsnjA/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'},
      {label:'Scenario 2: Recruiter Call That Cannot Be Rescheduled', icon:'fa-file-alt', tag:'Doc', url:'https://docs.google.com/document/d/1Xx7ee0Oebm01slffAYibu6qIPiw7rH4e/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'}
    ]
  },
  {
    id:'w2m10', icon:'fa-tasks', title:'Week 2 — Practice Activity', subtitle:'Complete before Week 3',
    hasVideo:false,
    notes:`<p style="margin-bottom:1.2rem;">Complete all three actions below before moving to Week 3. These are essential steps that will form the foundation of your job search.</p>
           <ul class="practice-checklist">
             <li><i class="fas fa-check"></i> Build your ATS-optimised resume</li>
             <li><i class="fas fa-check"></i> Optimise your LinkedIn profile using the checklist</li>
             <li><i class="fas fa-check"></i> Run your resume through an ATS scanner and review your match score</li>
           </ul>
           <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-top:1rem;border:1px solid #c8e6d8;">
             <p style="font-size:0.84rem;"><i class="fas fa-trophy" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Well done on completing Week 2!</strong> Once you have finished all three activities, submit your updated resume through the LMS submission link that will appear after completing all Week 2 modules.</p>
           </div>`,
    takeaways:['An ATS-optimised resume and a strong LinkedIn profile work together — both are essential.','Your ATS scan score should be 70%+ for any role you apply to.','Completing these before Week 3 sets you up to focus on interviews with confidence.'],
    action:'Submit your completed ATS resume through the LMS submission link. Screenshot your Jobscan score and share it with your coach.',
    resources:[
      {label:'ATS Resume Scanner – Jobscan', icon:'fa-search', tag:'Tool', url:'https://www.jobscan.co'}
    ]
  }
];


window.CURRICULUM[3] = [

  /* ── 1. Crafting your Elevator Pitch ── */
  {
    id:'w3m1', icon:'fa-rocket', title:'Crafting your Elevator Pitch', subtitle:'60-second pitch',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module is designed to help you create an effective and strong Elevator Pitch. An elevator pitch is a brief, persuasive speech that you can use to spark interest in what you do. Whether at networking events, career fairs, or job interviews, a well-crafted elevator pitch can open doors and make a lasting impression.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> What is an Elevator Pitch</li>
          <li><i class="fas fa-check-circle"></i> Benefits of having an Elevator Pitch</li>
          <li><i class="fas fa-check-circle"></i> How to form an Elevator Pitch</li>
          <li><i class="fas fa-check-circle"></i> Elevator Pitch Examples</li>
          <li><i class="fas fa-check-circle"></i> How to Practice and Refine</li>
          <li><i class="fas fa-check-circle"></i> Improving Non-Verbal Communication</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you will be equipped to create and deliver a compelling elevator pitch. This skill is essential for making strong impressions in professional settings, whether you are networking or interviewing for a job. Practice regularly and refine your pitch to ensure it is clear, engaging, and reflective of your unique strengths and goals.</p>`,
    takeaways:[
      'An elevator pitch should be 30–60 seconds — clear, confident, and outcome-focused.',
      'Structure it as: Who you are → What you do → The value you bring → Your ask.',
      'Non-verbal communication — eye contact, posture, pace — matters as much as the words.'
    ],
    action:'Write your elevator pitch using the structure from the video. Record yourself delivering it and refine until it feels natural and confident.',
    resources:[]
  },

  /* ── 2. Pre-Interview Checklist — TWO VIDEOS ── */
  {
    id:'w3m2', icon:'fa-clipboard-list', title:'Pre-Interview Checklist', subtitle:'2 videos · Interview readiness',
    hasVideo:false, isDualVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module is designed to help you get ready for interviews by providing checklists and addressing common misconceptions. By following these steps, you can ensure you're thoroughly prepared and confident, making a strong impression on your interviewers.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>Step-by-Step Guide to Preparing for Your Interviews</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Research the Company</li>
          <li><i class="fas fa-check-circle"></i> Read the Job Description Carefully</li>
          <li><i class="fas fa-check-circle"></i> Try the Company's Product or Service (if applicable)</li>
          <li><i class="fas fa-check-circle"></i> Learn About the Interviewers</li>
          <li><i class="fas fa-check-circle"></i> Know Why You're Interested in This Position</li>
          <li><i class="fas fa-check-circle"></i> Prepare Questions to Ask</li>
          <li><i class="fas fa-check-circle"></i> Figure Out What to Wear</li>
          <li><i class="fas fa-check-circle"></i> Prepare a Reference List</li>
          <li><i class="fas fa-check-circle"></i> Test Any Needed Tech</li>
          <li><i class="fas fa-check-circle"></i> Prepare Your Environment</li>
          <li><i class="fas fa-check-circle"></i> Fill in an Interview Cheat Sheet</li>
          <li><i class="fas fa-check-circle"></i> Day of the Interview</li>
        </ul>
      </div>`,
    takeaways:[
      'Preparation is the single biggest differentiator between candidates at the same skill level.',
      'Research your interviewers on LinkedIn before the call — it builds rapport and shows initiative.',
      'Test your tech, background, and lighting the night before — not 5 minutes before the call.'
    ],
    action:'For your next target role, work through all 12 steps on the checklist 48 hours before the interview. Fill in the Interview Cheat Sheet.',
    resources:[
      {label:'How to Prepare for your Phone Screen', icon:'fa-external-link-alt', tag:'Guide', url:'https://www.themuse.com/advice/phone-screen-definition-preparation'},
      {label:'Research about the Company', icon:'fa-external-link-alt', tag:'Guide', url:'https://www.themuse.com/advice/the-ultimate-guide-to-researching-a-company-preinterview'},
      {label:'Crunchbase — Company Research', icon:'fa-building', tag:'Tool', url:'https://www.crunchbase.com'},
      {label:'Glassdoor — Company Research', icon:'fa-building', tag:'Tool', url:'https://www.glassdoor.com'},
      {label:'Job Description', icon:'fa-file-alt', tag:'Resource', url:'https://www.themuse.com/advice/how-to-read-job-description-keywords'},
      {label:'Smart questions to ask at an Interview', icon:'fa-question-circle', tag:'Resource', url:'https://www.themuse.com/advice/51-interview-questions-you-should-be-asking'},
      {label:'Interview Cheat Sheet', icon:'fa-file-alt', tag:'Template', url:'https://docs.google.com/document/d/1pxFw76i5H-KGsr1EPI0Fy6bZdsa8PVOuaL-95OWKpSU/edit?usp=sharing'},
      {label:'Job Tracking Tool', icon:'fa-table', tag:'Tool', url:'https://www.jobscan.co/job-tracker'}
    ]
  },

  /* ── 3. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w3m3', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Elevator pitch & mock interview prep',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on your elevator pitch and preparing for mock interviews, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'Deliver your elevator pitch to your coach and get direct feedback before using it in real interviews.',
      'Use this session to do a mock interview run-through — treat it like the real thing.',
      'Come prepared with your queries and topics — 30 minutes goes fast.'
    ],
    action:'Book your Week 3 coach call now. Prepare to deliver your elevator pitch and ask for feedback on your pre-interview checklist.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 4. Practice Activity — NO VIDEO ── */
  {
    id:'w3m4', icon:'fa-video', title:'Practice Activity', subtitle:'Record your 1-minute introduction',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is to record a <strong>1-minute introduction video</strong> of yourself. This is an excellent way to practise your elevator pitch and get comfortable presenting yourself on camera — a skill increasingly required in modern hiring processes.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-video" style="margin-right:6px;"></i>Your Video Should Cover</p>
        <ul class="practice-checklist">
          <li><i class="fas fa-user"></i> Who you are — your name, background, and education</li>
          <li><i class="fas fa-tools"></i> Your skills — technical and soft skills relevant to your target role</li>
          <li><i class="fas fa-project-diagram"></i> Your projects — highlight 1–2 key projects from your program</li>
          <li><i class="fas fa-bullseye"></i> Your career goals — what role you are targeting and why</li>
        </ul>
      </div>
      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-top:1rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-lightbulb" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Tips for a great recording:</strong> Good lighting (face the window), clean background, speak slowly and clearly, maintain eye contact with the camera, keep it to exactly 1 minute.</p>
      </div>
      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;margin-top:1rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-share-alt" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Share with your coach:</strong> Send your recorded video to your Career Coach before your next session for feedback.</p>
      </div>`,
    takeaways:[
      'Watching yourself on video is uncomfortable at first — that discomfort is exactly what makes it valuable.',
      'Keep your introduction to exactly 1 minute — brevity and clarity are the goal.',
      'Your projects are as compelling as work experience — frame them with impact and outcomes.'
    ],
    action:'Record your 1-minute introduction video this week. Watch it back, refine it, then share it with your career coach for feedback before Week 4.',
    resources:[]
  }

];


window.CURRICULUM[4] = [

  /* ── 1. Communication Skills ── */
  {
    id:'w4m1', icon:'fa-comments', title:'Communication Skills', subtitle:'Verbal & non-verbal mastery',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module focuses on developing essential communication skills that are crucial for both personal and professional success. Strong communication abilities help convey information, thoughts, and feelings effectively and efficiently, whether through verbal or non-verbal means.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> What Are Considered under Communication Skills?</li>
          <li><i class="fas fa-check-circle"></i> Types of Communication</li>
          <li><i class="fas fa-check-circle"></i> Importance of these Skills During Interviews</li>
          <li><i class="fas fa-check-circle"></i> How to Improve Communication Skills</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By actively working on these communication skills, you can enhance your confidence and effectiveness in both personal and professional settings, making a positive impact during interviews and in your daily interactions.</p>`,
    takeaways:[
      '55% of communication is non-verbal — your body language matters as much as your words.',
      'Active listening is a skill — practice reflecting back what you hear before responding.',
      'Clear, concise answers beat long rambling ones in every interview setting.'
    ],
    action:'Record yourself answering "Tell me about yourself" and watch it back. Focus specifically on your body language, pacing, and eye contact.',
    resources:[]
  },

  /* ── 2. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w4m2', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Communication & mock interview support',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on your communication skills and preparing for mock interviews, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'Use this session to practice your communication skills directly with your coach.',
      'Ask for feedback on your tone, pacing, and clarity — be open to honest critique.',
      'Come prepared with your topics — 30 minutes goes fast.'
    ],
    action:'Book your Week 4 coach call now. Come prepared to discuss your communication strengths and areas for improvement.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 3. Imposter Syndrome ── */
  {
    id:'w4m3', icon:'fa-brain', title:'Imposter Syndrome', subtitle:'Overcome self-doubt',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">Imposter Syndrome is when a person feels like they are not as good as others think they are and that they are an imposter or a fraud even in their field of study. It's especially common among Bootcamp graduates and can significantly impact international students adjusting to new environments.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> What is Imposter Syndrome?</li>
          <li><i class="fas fa-check-circle"></i> How Imposter Syndrome could impact International Students</li>
          <li><i class="fas fa-check-circle"></i> Common Signs of Imposter Syndrome</li>
          <li><i class="fas fa-check-circle"></i> How to Overcome Imposter Syndrome</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">We hope these strategies help you recognize and combat imposter syndrome, fostering self-confidence and a healthier mindset as you transition into your career.</p>`,
    takeaways:[
      '70% of professionals experience imposter syndrome — you are not alone in feeling this way.',
      'The feeling of not belonging does not mean you actually don\'t belong.',
      'Documenting your wins daily is one of the most effective antidotes to imposter syndrome.'
    ],
    action:'Start a "win journal" today. Write down 3 things you accomplished this week — however small. Review it before every interview.',
    resources:[]
  },

  /* ── 4. Building Self-Esteem (Optional) — NO VIDEO ── */
  {
    id:'w4m4', icon:'fa-heart', title:'Building Self-Esteem', subtitle:'Optional module',
    
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1rem;">This optional module is designed to support students who may be struggling with self-esteem as they navigate the job search process. It provides practical strategies to build and maintain a healthy sense of self-worth, which is crucial for overcoming challenges and staying motivated.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> <strong>Understanding Self-Esteem:</strong> What self-esteem is and why it matters in your job search. Key aspects like self-worth, self-confidence, self-respect, and self-acceptance.</li>
          <li><i class="fas fa-check-circle"></i> <strong>Characteristics of High and Low Self-Esteem:</strong> Signs of strong self-esteem such as resilience and a positive self-image. Indicators of low self-esteem including self-doubt and perfectionism.</li>
          <li><i class="fas fa-check-circle"></i> <strong>How to Improve Your Self-Esteem:</strong> Practical steps like practicing resilience, maintaining a growth mindset, and seeking support from your community.</li>
          <li><i class="fas fa-check-circle"></i> Engaging in self-care activities, focusing on personal strengths, and expanding your network.</li>
          <li><i class="fas fa-check-circle"></i> <strong>Maintaining Self-Esteem During Rejection:</strong> Viewing rejection as part of the learning process and staying persistent in your job search.</li>
        </ul>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1.4rem;margin-top:1.5rem;border:1px solid #f5c6be;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-accent);margin-bottom:0.9rem;"><i class="fas fa-pencil-alt" style="margin-right:6px;"></i>Practice Exercise — Company Research Sheet</p>
        <p style="font-size:0.88rem;margin-bottom:0.8rem;">Prepare a Company Research Sheet for one company you are targeting. Include the following:</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Company mission and values</li>
          <li><i class="fas fa-check-circle"></i> Products and/or services</li>
          <li><i class="fas fa-check-circle"></i> Key competitors</li>
          <li><i class="fas fa-check-circle"></i> Current hiring trends and open roles</li>
        </ul>
      </div>`,
    takeaways:[
      'Self-esteem is built through small consistent actions — not one big breakthrough moment.',
      'Rejection is data, not a verdict on your worth as a person or professional.',
      'The way you talk to yourself in private directly shapes how you present in interviews.'
    ],
    action:'Complete the Company Research Sheet for one target company. Bring it to your next coach session and use it to practice answering "Why do you want to work here?"',
    resources:[
      {label:'Building Self-Esteem (Optional)', icon:'fa-file-powerpoint', tag:'PPT', url:'https://drive.google.com/file/d/1BZbn67WtIBa0GKaZR8Petb4C1RA4dGFR/view?usp=sharing'}
    ]
  }

];


window.CURRICULUM[5] = [

  /* ── 1. Preparing for Interviews, 2nd round and beyond ── */
  {
    id:'w5m1', icon:'fa-user-tie', title:'Preparing for Interviews, 2nd Round and Beyond', subtitle:'Behavioural & advanced rounds',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">In this module, we prepare you for the critical stages of the interview process, from the second round to the final interview. You'll learn how to handle behavioral interview questions, understand the differences between initial screenings and later-stage interviews, and gain insights into the types of questions you may encounter.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Understanding Behavioral Interview Questions</li>
          <li><i class="fas fa-check-circle"></i> Difference Between Initial Screening and 2nd/3rd Round Interviews</li>
          <li><i class="fas fa-check-circle"></i> Common Interview Questions: Teamwork, Adaptability, Time Management, Communication, Motivation &amp; Values</li>
        </ul>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1.2rem 1.4rem;margin-top:1.2rem;border:1px solid #f5c6be;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-accent);margin-bottom:0.9rem;"><i class="fas fa-question-circle" style="margin-right:6px;"></i>Common Behavioural Questions to Prepare</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/3-ways-youre-messing-up-the-answer-to-tell-me-about-a-conflict-youve-faced-at-work" target="_blank" style="color:var(--brand-teal);">"Give me an example of a time you faced a conflict with a coworker. How did you handle that?"</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/demonstrated-leadership-skills-job-interview-question-answer-examples" target="_blank" style="color:var(--brand-teal);">"Describe a time when you had to step up and demonstrate leadership skills."</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/3-rules-that-guarantee-youll-nail-the-answer-to-tell-me-about-a-time-you-made-a-mistake" target="_blank" style="color:var(--brand-teal);">"Tell me about a time you made a mistake and wish you'd handled a situation differently."</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/3-ways-youre-messing-up-the-answer-to-how-do-you-deal-with-stressful-situations" target="_blank" style="color:var(--brand-teal);">"Tell me about a time you were under a lot of pressure at work or at school. How did you get through it?"</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/4-steps-for-answering-tell-me-about-a-time-you-failed" target="_blank" style="color:var(--brand-teal);">"Tell me about a time you failed. How did you deal with the situation?"</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/greatest-accomplishment-interview-question-answer-examples" target="_blank" style="color:var(--brand-teal);">"What is your greatest accomplishment?"</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> <a href="https://www.themuse.com/advice/improve-time-management-skills-workplace-examples" target="_blank" style="color:var(--brand-teal);">"How is your time management?"</a></li>
        </ul>
      </div>

      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you will have the tools and confidence to excel in the more intensive rounds of interviews, increasing your chances of securing the job. We wish you all the best!</p>`,
    takeaways:[
      '2nd and 3rd round interviews go much deeper — prepare specific stories, not just general answers.',
      'Behavioral questions test how you acted in the past to predict how you\'ll act in the future.',
      'Use the STAR method for every behavioral answer — Situation, Task, Action, Result.'
    ],
    action:'Prepare written STAR answers for at least 3 of the behavioral questions listed above before your next coach session.',
    resources:[
      {label:'Harvard Business School Interview Prep Guide', icon:'fa-graduation-cap', tag:'Guide', url:'https://www.alumni.hbs.edu/careers/job-search/Pages/interviewing.aspx'},
      {label:'Pramp — Mock Interview Platform', icon:'fa-comments', tag:'Practice', url:'https://www.pramp.com/#/'},
      {label:'Interviewing.io — Mock Interviews', icon:'fa-comments', tag:'Practice', url:'https://interviewing.io/'},
      {label:'Big Interview — Practice Tool', icon:'fa-video', tag:'Practice', url:'https://www.biginterview.com/'},
      {label:'50 Common Interview Questions & Answers 2026', icon:'fa-list', tag:'Reference', url:'https://www.glassdoor.com/blog/common-interview-questions/'},
      {label:'General Soft Technical Questions', icon:'fa-file-alt', tag:'Reference', url:'https://docs.google.com/document/d/1Sc4A4neT_Z0TPx2TziT2nOpOGsIvDYhx9Zaks0SUhU0/edit?usp=sharing'},
      {label:'Using STAR Method for Behavioural Questions', icon:'fa-star', tag:'Guide', url:'https://docs.google.com/document/d/1HrpYmTqOAeozb7-8mgXChsoKKdjMkmhaidt3eJJOrHY/edit?usp=sharing'},
      {label:'Tips on Answering Unusual Interview Questions', icon:'fa-lightbulb', tag:'Guide', url:'https://www.themuse.com/advice/4-steps-for-answering-offthewall-interview-questions'},
      {label:'Guide to Soft Skills in the Workplace', icon:'fa-handshake', tag:'Guide', url:'https://www.themuse.com/advice/soft-skills-definition-examples'},
      {label:'Advice from a Recruiter at Meta', icon:'fa-external-link-alt', tag:'Article', url:'https://www.themuse.com/advice/university-recruiter-facebook-jessie-k'}
    ]
  },

  /* ── 2. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w5m2', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Behavioural mock interview',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on your interview preparation and mock interviews, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'This is your behavioural mock interview session — treat it exactly like a real interview.',
      'Bring your 5 prepared STAR stories and be ready to deliver them under pressure.',
      'Honest feedback from your coach now is worth more than reassurance before a real interview.'
    ],
    action:'Book your Week 5 coach call for a behavioural mock interview. Come with your 5 STAR stories prepared and ready to deliver.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 3. Practice Activity — 5 STAR Stories — NO VIDEO ── */
  {
    id:'w5m3', icon:'fa-star', title:'Practice Activity — 5 STAR Stories', subtitle:'Complete before mock interview',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is to prepare <strong>5 STAR stories</strong> — one for each of the key behavioural categories below. These stories will be your core toolkit for any behavioural interview question you face.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-star" style="margin-right:6px;"></i>STAR Method Reminder</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          ${[
            ['S — Situation','Set the scene briefly. Where were you? What was the context?'],
            ['T — Task','What was your specific responsibility or challenge?'],
            ['A — Action','What did YOU specifically do? Focus on your actions, not the team.'],
            ['R — Result','What was the measurable outcome? Use numbers where possible.']
          ].map(([label, desc]) => `
          <div style="display:flex;align-items:flex-start;gap:0.8rem;padding:0.6rem 0.8rem;background:white;border-radius:8px;font-size:0.85rem;">
            <span style="font-weight:700;color:var(--brand-teal);white-space:nowrap;min-width:120px;">${label}</span>
            <span style="color:#636e72;">${desc}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="star-grid">
        <div class="star-card">
          <div class="star-card-icon"><i class="fas fa-crown"></i></div>
          <h4>Leadership</h4>
          <p>A time you took charge, guided a team, or led a project to success</p>
        </div>
        <div class="star-card">
          <div class="star-card-icon"><i class="fas fa-handshake"></i></div>
          <h4>Conflict</h4>
          <p>A time you navigated a disagreement with a teammate or stakeholder</p>
        </div>
        <div class="star-card">
          <div class="star-card-icon"><i class="fas fa-redo"></i></div>
          <h4>Failure</h4>
          <p>A time something went wrong, what you learned, and how you recovered</p>
        </div>
        <div class="star-card">
          <div class="star-card-icon"><i class="fas fa-trophy"></i></div>
          <h4>Achievement</h4>
          <p>Your greatest accomplishment — a result you are genuinely proud of</p>
        </div>
        <div class="star-card">
          <div class="star-card-icon"><i class="fas fa-fire"></i></div>
          <h4>Pressure</h4>
          <p>A time you had to deliver under tight deadlines or high-stakes conditions</p>
        </div>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-top:1.2rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-lightbulb" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Tip:</strong> Write each story out in full first, then practice delivering it verbally in under 2 minutes. Your goal is fluency — not memorization.</p>
      </div>
      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;margin-top:1rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-medal" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Congratulations on completing the ElevateMe 5-Week Bootcamp!</strong> You now have the skills, stories, and strategies to land interviews and convert them into offers. Keep practising, stay persistent, and reach out to your coaches whenever you need support. Good luck! 🎉</p>
      </div>`,
    takeaways:[
      'Having 5 prepared STAR stories lets you answer almost any behavioural question confidently.',
      'Write each story out fully first — then practice delivering it in under 2 minutes.',
      'One strong story can often be adapted to answer multiple different interview questions.'
    ],
    action:'Write all 5 STAR stories in full this week. Practice each one out loud. Bring them to your mock interview session with your coach.',
    resources:[
      {label:'Using STAR Method for Behavioural Questions', icon:'fa-star', tag:'Guide', url:'https://docs.google.com/document/d/1HrpYmTqOAeozb7-8mgXChsoKKdjMkmhaidt3eJJOrHY/edit?usp=sharing'},
      {label:'50 Common Interview Questions & Answers 2026', icon:'fa-list', tag:'Reference', url:'https://www.glassdoor.com/blog/common-interview-questions/'}
    ]
  }

];


window.CURRICULUM[6] = [

  /* ── 1. Interpersonal / People Skills ── */
  {
    id:'w6m1', icon:'fa-people-arrows', title:'Interpersonal / People Skills', subtitle:'Essential workplace skills',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1rem;">Mastering interpersonal and people skills at the workplace is very important. This module focuses on developing essential interpersonal skills, often referred to as "people skills." They impact how effectively you communicate, collaborate, and build relationships with others. Understanding and practicing these skills can help you excel in both professional settings and interviews.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> What Are Interpersonal Skills?</li>
          <li><i class="fas fa-check-circle"></i> Difference Between Interpersonal and Communication Skills</li>
          <li><i class="fas fa-check-circle"></i> Using Interpersonal Skills in the Job Search</li>
          <li><i class="fas fa-check-circle"></i> Showing Interpersonal Skills During Interviews</li>
          <li><i class="fas fa-check-circle"></i> Elements of Effective Interpersonal Communication</li>
        </ul>
      </div>
      <p style="margin-bottom:1.2rem;font-size:0.88rem;">By the end of this module, you'll understand the importance of interpersonal skills, how to demonstrate them in professional settings, and how they can contribute to your success in interviews and teamwork.</p>
      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-file-powerpoint" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Presentation Slides:</strong> Access the full Interpersonal / People Skills presentation below for detailed content and frameworks.</p>
      </div>`,
    takeaways:[
      'Interpersonal skills are what get you hired — technical skills are what keep you employed.',
      'Interviewers assess your people skills from the moment you enter the room — first impressions are formed in seconds.',
      'Demonstrating empathy, active listening, and adaptability sets you apart from equally qualified candidates.'
    ],
    action:'Identify your top 3 interpersonal strengths. Prepare a specific example for each that you can share in an interview.',
    resources:[
      {label:'Interpersonal Skills — Full Presentation', icon:'fa-file-powerpoint', tag:'Slides', url:'https://docs.google.com/presentation/d/1iljYH5tLTzMmvfsh7Y25XFCkk6x53iMY/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'},
      {label:'What Interviewers Notice First in an Interview', icon:'fa-eye', tag:'Article', url:'https://money.usnews.com/money/outside-voices-careers/articles/things-interviewers-notice-first'}
    ]
  },

  /* ── 2. Networking and its Importance ── */
  {
    id:'w6m2', icon:'fa-network-wired', title:'Networking and its Importance', subtitle:'Why 80% of jobs are hidden',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module focuses on the importance of networking and how it can open doors to new job opportunities. Networking is not just about building contacts — it's about exchanging valuable information, developing professional relationships, and advancing your career. This is especially crucial in the job market, where <strong>80% of roles are found through networking</strong>.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> What is an Networking?</li>
          <li><i class="fas fa-check-circle"></i> Why Networking is Critical for Your Career</li>
          <li><i class="fas fa-check-circle"></i> How to Network Effectively (Online &amp; Offline)</li>
          <li><i class="fas fa-check-circle"></i> Building and Nurturing Your Professional Network</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you'll have the knowledge and tools to become an effective networker, significantly enhancing your job search and career development.</p>`,
    takeaways:[
      '80% of jobs are filled through networking — most roles are never publicly posted.',
      'Networking is about building genuine relationships, not collecting contacts.',
      'Start with who you already know — your existing network is larger than you think.'
    ],
    action:'List 10 people already in your network — classmates, professors, former colleagues, family contacts. These are your starting points.',
    resources:[]
  },

  /* ── 3. Networking Tips ── */
  {
    id:'w6m3', icon:'fa-handshake', title:'Networking Tips', subtitle:'Advanced strategies',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">Here, you will dive deeper into mastering the art of networking, focusing on building genuine relationships, adding value to your network, and maintaining those connections over time. You'll also explore strategies for engaging on social media platforms and utilizing your existing network to grow your professional circle.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Top Networking Tips for Success</li>
          <li><i class="fas fa-check-circle"></i> Building Authentic Relationships</li>
          <li><i class="fas fa-check-circle"></i> Leveraging Social Media for Networking</li>
          <li><i class="fas fa-check-circle"></i> Maintaining and Growing Your Network</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you'll have a toolkit of advanced networking strategies to create meaningful, long-lasting professional relationships.</p>`,
    takeaways:[
      'Always lead with value — ask how you can help before asking for anything in return.',
      'Follow up within 24 hours of connecting with someone new — timing matters.',
      'LinkedIn is your most powerful networking tool — use it daily, not just when job searching.'
    ],
    action:'Connect with 3 people on LinkedIn this week. Send each a personalised connection message — not the default template.',
    resources:[
      {label:'Join Handshake', icon:'fa-tools', tag:'Tool', url:'https://joinhandshake.com/'},
      {label:'Hunter.io', icon:'fa-search', tag:'Tool', url:'https://hunter.io'},
      {label:'Apollo.io', icon:'fa-rocket', tag:'Tool', url:'https://apollo.io'}
    ]
  },

  /* ── 4. Book a Call with Career Coach ── */
  {
    id:'w6m4', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Networking & mock interview support',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on your networking skills and preparing for mock interviews, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'Ask your coach to review your networking messages before you send them.',
      'Use this session to do a mock behavioural interview — you\'re now well prepared for it.',
      'Come with your list of 10 network contacts and discuss which to prioritise.'
    ],
    action:'Book your Week 6 coach call. Bring your networking message drafts and your list of target contacts to review together.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 5. Practice Activity ── */
  {
    id:'w6m5', icon:'fa-paper-plane', title:'Practice Activity — Send 5 Networking Messages', subtitle:'Complete this week',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is to send <strong>5 personalised networking messages</strong> to people in your target professional circles. Quality matters more than quantity — each message should be thoughtful and specific.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-users" style="margin-right:6px;"></i>Your 3 Target Groups</p>
        <div class="message-card">
          <div class="message-card-icon"><i class="fas fa-user-graduate"></i></div>
          <div>
            <h4>Alumni</h4>
            <p>Reach out to graduates from your university or program who are now working in your target industry. Ask for a 15-minute informational call.</p>
          </div>
        </div>
        <div class="message-card">
          <div class="message-card-icon"><i class="fas fa-briefcase"></i></div>
          <div>
            <h4>Hiring Managers</h4>
            <p>Connect with hiring managers at companies you are targeting. Express genuine interest in their team and ask a thoughtful question about the role or company.</p>
          </div>
        </div>
        <div class="message-card">
          <div class="message-card-icon"><i class="fas fa-headset"></i></div>
          <div>
            <h4>Recruiters</h4>
            <p>Connect with recruiters who specialise in your field. Let them know you are actively looking, your target role, and your key skills.</p>
          </div>
        </div>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-lightbulb" style="margin-right:6px;"></i>Tips for a Great Networking Message</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Personalise every message — mention something specific about their work</li>
          <li><i class="fas fa-check-circle"></i> Keep it short — 3–4 sentences maximum</li>
          <li><i class="fas fa-check-circle"></i> Be clear about who you are and what you are asking for</li>
          <li><i class="fas fa-check-circle"></i> Never ask for a job directly in a first message</li>
          <li><i class="fas fa-check-circle"></i> Always follow up if you don't hear back within 1 week</li>
        </ul>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-share-alt" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Share with your coach:</strong> Forward the 5 messages you sent (or plan to send) to your Career Coach for review and feedback before your next session.</p>
      </div>`,
    takeaways:[
      'A personalised message gets a response rate 5× higher than a generic template.',
      'Never ask for a job in a first networking message — ask for a conversation or advice instead.',
      'Consistency beats intensity — send 5 messages weekly and your network grows significantly over time.'
    ],
    action:'Send 5 personalised networking messages this week — at least 1 to an alumni, 1 to a hiring manager, and 1 to a recruiter. Track responses.',
    resources:[]
  }

];


window.CURRICULUM[7] = [

  /* ── 1. Follow Up After Job Applications ── */
  {
    id:'w7m1', icon:'fa-reply', title:'Follow Up After Job Applications', subtitle:'Stay on the recruiter\'s radar',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">In this week's module, we would be focusing on the crucial step of following up after submitting a job application. Following up can demonstrate your continued interest in a role and keep your application on the recruiter's radar. You'll learn how to find the right contact, draft personalized follow-up messages, and stay organized throughout the process.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Finding the Right Contact Person</li>
          <li><i class="fas fa-check-circle"></i> Sending a Connection Request</li>
          <li><i class="fas fa-check-circle"></i> Crafting an Effective Follow-Up Message</li>
          <li><i class="fas fa-check-circle"></i> Tips for Managing and Tracking Applications</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you'll understand the importance of timely follow-ups and learn best practices for crafting professional messages that increase your chances of securing an interview.</p>`,
    takeaways:[
      'Following up 5–7 days after applying shows initiative and keeps your name visible.',
      'Always find and connect with the hiring manager on LinkedIn before following up.',
      'Track every application in a spreadsheet — you cannot follow up on what you cannot remember.'
    ],
    action:'For every application you have submitted this week, find the hiring manager on LinkedIn and send a personalised connection request.',
    resources:[]
  },

  /* ── 2. Email Follow Up After Application ── */
  {
    id:'w7m2', icon:'fa-envelope-open-text', title:'Email Follow Up After Application', subtitle:'Professional email strategies',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module builds upon the basics of following up on job applications, providing in-depth strategies for crafting effective and professional follow-up emails. Learn how to communicate with hiring managers, avoid common pitfalls, and ensure your application remains a priority.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Crafting Professional and Polite Follow-Up Emails</li>
          <li><i class="fas fa-check-circle"></i> Using Templates for Efficient Communication</li>
          <li><i class="fas fa-check-circle"></i> Best Practices for Timing and Etiquette</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you'll have mastered the art of follow-up communication, enhancing your chances of progressing in the hiring process.</p>`,
    takeaways:[
      'The subject line of your follow-up email determines whether it gets opened — keep it clear and specific.',
      'Send follow-up emails between Tuesday and Thursday morning for the highest open rates.',
      'One follow-up is professional. Two is persistent. Three is too many — know when to stop.'
    ],
    action:'Draft a follow-up email for one application you have submitted. Share it with your coach for feedback before sending.',
    resources:[]
  },

  /* ── 3. Informational Interviews ── */
  {
    id:'w7m3', icon:'fa-comments', title:'Informational Interviews', subtitle:'Uncover hidden opportunities',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module provides a comprehensive guide to conducting successful informational interviews. These interviews are a powerful tool for networking, gaining industry insights, and uncovering hidden job opportunities. You'll learn how to identify potential interviewees, craft effective outreach messages, and conduct professional and productive conversations.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-play-circle" style="margin-right:6px;"></i>Key Topics Covered</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Purpose and Benefits of Informational Interviews</li>
          <li><i class="fas fa-check-circle"></i> Setting Up and Preparing for the Interview</li>
          <li><i class="fas fa-check-circle"></i> Conducting the Interview and Asking the Right Questions</li>
          <li><i class="fas fa-check-circle"></i> Following Up and Building Lasting Connections</li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you will be equipped with the skills to confidently conduct informational interviews and leverage them to enhance your career prospects.</p>`,
    takeaways:[
      'An informational interview is a conversation, not a job interview — it removes pressure and builds genuine relationships.',
      'Most people are willing to give 20 minutes to help someone — the ask is smaller than you think.',
      'Always send a thank-you email within 24 hours and stay in touch — the long-term relationship is the reward.'
    ],
    action:'Identify 2 people you would like to conduct an informational interview with. Draft your outreach message for each and share with your coach.',
    resources:[
      {label:'Informational Interviews: What it is & Pro Tips', icon:'fa-external-link-alt', tag:'Article', url:'https://docs.google.com/presentation/d/1eJZctl4hgSvbjx4bDscwkShiveuARwrW/edit?usp=sharing&ouid=106199168472763600209&rtpof=true&sd=true'},
      {label:'Get the Most Out of an Informational Interview', icon:'fa-external-link-alt', tag:'Guide', url:'https://www.linkedin.com/pulse/how-ask-make-most-informational-interview-jenny-foss/'}
    ]
  },

  /* ── 4. Body Language for Confidence ── */
  {
    id:'w7m4', icon:'fa-person', title:'Body Language for Confidence', subtitle:'Present with impact',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">This module provides an understanding of how you can improve your overall body language for interviews. This is important because interviewers will draw assumptions about your confidence and several other important skills based on your presentation skills and body language.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-lightbulb" style="margin-right:6px;"></i>Why This Matters</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> 55% of communication is non-verbal — interviewers are constantly reading your body language</li>
          <li><i class="fas fa-check-circle"></i> Confident body language signals leadership, reliability, and emotional intelligence</li>
          <li><i class="fas fa-check-circle"></i> Poor posture, avoiding eye contact, or fidgeting can undermine even the best verbal answers</li>
          <li><i class="fas fa-check-circle"></i> Body language can be trained — it improves with deliberate practice</li>
        </ul>
      </div>`,
    takeaways:[
      'Sit up straight, maintain eye contact, and keep your hands visible — these three things signal confidence immediately.',
      'Smile genuinely when you greet your interviewer — warmth builds rapport instantly.',
      'Record yourself in a mock interview and watch it back with the sound off — focus only on what your body is doing.'
    ],
    action:'Record yourself answering one interview question. Watch it back with the sound off and note 3 things your body language communicates.',
    resources:[]
  },

  /* ── 5. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w7m5', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Informational interview & mock session',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on your follow-up skills and informational interview preparation, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'Ask your coach to review your follow-up email drafts before you send them.',
      'Practice your informational interview questions with your coach — they can role-play the other side.',
      'Come prepared with your topics — 30 minutes goes fast.'
    ],
    action:'Book your Week 7 coach call. Bring your follow-up email drafts and your informational interview outreach messages to review.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 6. Practice Activity — NO VIDEO ── */
  {
    id:'w7m6', icon:'fa-user-friends', title:'Practice Activity — Conduct 1 Informational Interview', subtitle:'Complete this week',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is to conduct <strong>1 informational interview</strong> with someone working in your target industry or at a company you are interested in.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>How to Approach It</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> <strong>Find your person:</strong> Alumni, LinkedIn connections, or someone referred by your network</li>
          <li><i class="fas fa-check-circle"></i> <strong>Send your outreach:</strong> Short, personalised message — ask for a 15–20 minute call</li>
          <li><i class="fas fa-check-circle"></i> <strong>Prepare 5–7 questions</strong> about their career path, the industry, and any advice they have</li>
          <li><i class="fas fa-check-circle"></i> <strong>Conduct the interview:</strong> Listen more than you talk. Take notes.</li>
          <li><i class="fas fa-check-circle"></i> <strong>Follow up:</strong> Send a thank-you email within 24 hours</li>
        </ul>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.7rem;"><i class="fas fa-question-circle" style="margin-right:6px;"></i>Sample Questions to Ask</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> "How did you get into this role / industry?"</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> "What does a typical day look like for you?"</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> "What skills are most valued in this field?"</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> "What do you wish you had known before starting?"</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> "Is there anyone else you'd suggest I speak to?"</li>
        </ul>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-share-alt" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Share with your coach:</strong> After the interview, write a short summary of what you learned and share it in your next coaching session.</p>
      </div>`,
    takeaways:[
      'An informational interview is one of the most powerful job search tools — most people never use it.',
      'The last question — "Is there anyone else I should speak to?" — is the one that compounds your network.',
      'Every informational interview makes the next one easier — the first one is always the hardest.'
    ],
    action:'Conduct 1 informational interview this week. Send your thank-you email within 24 hours. Write a summary of your key learnings to share with your coach.',
    resources:[]
  }

];


window.CURRICULUM[8] = [

  /* ── 1. Handling Job Offers ── */
  {
    id:'w8m1', icon:'fa-file-signature', title:'Handling Job Offers', subtitle:'Evaluate & respond with confidence',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">Handling a job offer is a critical step in your career journey, and it's important to approach it thoughtfully rather than making a quick decision. Once you receive an offer, take time to carefully review all aspects including salary, job role, location, benefits, work authorization support, and growth opportunities.</p>
      <p style="margin-bottom:1rem;">In this module, we will cover how to effectively evaluate and respond to job offers with confidence and clarity. You will learn how to carefully assess different components of an offer to ensure it aligns with your career goals.</p>
      <p style="margin-bottom:1.2rem;">We will also guide you on how to communicate professionally with employers, whether you are accepting, declining, or requesting time to consider an offer. Additionally, you will learn how to handle multiple offers, avoid common mistakes, and make informed decisions that set you up for long-term success.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-list-check" style="margin-right:6px;"></i>What to Review in Every Job Offer</p>
        <ul class="offer-checklist">
          <li><i class="fas fa-dollar-sign"></i><div><strong>Salary</strong> — Does it match market rate and your expectations? Is there room to negotiate?</div></li>
          <li><i class="fas fa-briefcase-medical"></i><div><strong>Benefits</strong> — Health insurance, 401k, PTO, remote work policy, signing bonus</div></li>
          <li><i class="fas fa-id-badge"></i><div><strong>Job Role</strong> — Does the day-to-day match the job description? What are the real responsibilities?</div></li>
          <li><i class="fas fa-chart-line"></i><div><strong>Growth Opportunities</strong> — Is there a clear promotion path? Learning &amp; development budget?</div></li>
          <li><i class="fas fa-building"></i><div><strong>Company Culture</strong> — Does it match your working style and values?</div></li>
          <li><i class="fas fa-map-marker-alt"></i><div><strong>Location &amp; Work Mode</strong> — On-site, hybrid, or remote? Commute considerations?</div></li>
          <li><i class="fas fa-passport"></i><div><strong>Work Authorization Support</strong> — Does the company sponsor visas if needed?</div></li>
        </ul>
      </div>
      <p style="margin-top:1rem;font-size:0.88rem;">By the end of this module, you will be equipped to navigate job offers strategically and make choices that best support your career journey.</p>`,
    takeaways:[
      'Never accept or decline a job offer on the spot — it is always professional to ask for time to review.',
      'Evaluate the full package, not just the salary — benefits, growth, and culture matter equally.',
      'Handling multiple offers professionally keeps all doors open and strengthens your negotiating position.'
    ],
    action:'Create a personal job offer evaluation scorecard with your top 5 criteria. Use it to score any offer you receive objectively before deciding.',
    resources:[]
  },

  /* ── 2. Salary Negotiation ── */
  {
    id:'w8m2', icon:'fa-hand-holding-usd', title:'Salary Negotiation', subtitle:'Advocate for your true worth',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">In this module, we will cover the fundamentals of salary negotiation and how to confidently approach compensation discussions during your job search. You will learn how to research market salary benchmarks, understand your value based on your skills and experience, and prepare effectively for negotiation conversations.</p>
      <p style="margin-bottom:1rem;">We will also explore strategies to communicate your expectations clearly, handle common employer responses, and negotiate beyond just salary — including benefits, bonuses, and growth opportunities.</p>
      <p style="margin-bottom:1.2rem;">By the end of this module, you will feel more confident advocating for yourself and securing an offer that reflects your true worth.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-lightbulb" style="margin-right:6px;"></i>Key Negotiation Principles</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> Always research market salary before any negotiation conversation</li>
          <li><i class="fas fa-check-circle"></i> Let the employer make the first offer whenever possible</li>
          <li><i class="fas fa-check-circle"></i> Negotiate based on market data and your value — not personal need</li>
          <li><i class="fas fa-check-circle"></i> Negotiate beyond salary — PTO, remote days, signing bonus, professional development</li>
          <li><i class="fas fa-check-circle"></i> Get the final offer in writing before making any decisions</li>
        </ul>
      </div>`,
    takeaways:[
      '85% of employers expect candidates to negotiate — not negotiating often leaves money on the table.',
      'Anchor high but reasonably — your first number sets the range for the entire negotiation.',
      'Silence is a powerful tool — after stating your number, stop talking and let the employer respond.'
    ],
    action:'Research the market salary range for your target role on Salary.com and Glassdoor. Define your target, minimum, and walkaway numbers before your next offer.',
    resources:[
      {label:'Salary Research — Salary.com', icon:'fa-search-dollar', tag:'Tool', url:'https://www.salary.com/'},
      {label:'Salary Research — Glassdoor', icon:'fa-search-dollar', tag:'Tool', url:'https://www.glassdoor.co.in/Salaries/index.htm'},
      {label:'Salary Negotiation Tips & Examples', icon:'fa-external-link-alt', tag:'Guide', url:'https://in.indeed.com/career-advice/pay-salary/how-to-negotiate-salary'}
    ]
  },

  /* ── 3. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w8m3', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Offer evaluation & negotiation prep',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on handling job offers and salary negotiation, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for this critical stage of your job search!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'If you have a real offer in hand, bring it to the coaching session — your coach can help you evaluate and negotiate it.',
      'Role-play the negotiation conversation with your coach before doing it with an employer.',
      'Come with your salary research and your target, minimum, and walkaway numbers already defined.'
    ],
    action:'Book your Week 8 coach call. Bring your salary negotiation script and your offer evaluation scorecard to review together.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 4. Practice Activity — NO VIDEO ── */
  {
    id:'w8m4', icon:'fa-pen-fancy', title:'Practice Activity — Write Your Salary Negotiation Script', subtitle:'Complete this week',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is to write your personal <strong>salary negotiation script</strong>. Having a prepared script removes the emotional pressure from negotiation and helps you stay confident and professional in the moment.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-file-alt" style="margin-right:6px;"></i>Your Script Should Cover These 4 Scenarios</p>

        <div style="margin-bottom:1rem;">
          <div class="script-label">Scenario 1 — When Asked "What are your salary expectations?"</div>
          <div class="script-block">"Based on my research of market rates for this role in [location], and given my [X years of experience / specific skills], I'm targeting a range of $[X] to $[Y]. I'm open to discussing the full compensation package."</div>
        </div>

        <div style="margin-bottom:1rem;">
          <div class="script-label">Scenario 2 — When the offer comes in below your target</div>
          <div class="script-block">"Thank you so much for the offer — I'm genuinely excited about this opportunity. Based on my research and the value I bring, I was hoping for something closer to $[X]. Is there flexibility to move in that direction?"</div>
        </div>

        <div style="margin-bottom:1rem;">
          <div class="script-label">Scenario 3 — When the employer says "This is our best offer"</div>
          <div class="script-block">"I appreciate that. Given I can't move much on base salary, would you be open to discussing [a signing bonus / additional PTO / remote work flexibility / professional development budget]?"</div>
        </div>

        <div style="margin-bottom:0;">
          <div class="script-label">Scenario 4 — Requesting time to consider</div>
          <div class="script-block">"Thank you for the offer — I'm very interested. Could I have until [specific date, typically 3–5 business days] to review the details and get back to you with my decision?"</div>
        </div>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-bottom:1rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-lightbulb" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Tip:</strong> Fill in your actual target numbers and personalise each script before practising. Then rehearse all 4 scenarios out loud until they feel natural — not memorised.</p>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-share-alt" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Share with your coach:</strong> Send your completed salary negotiation script to your Career Coach before your session. Role-play the negotiation conversation together.</p>
      </div>`,
    takeaways:[
      'A prepared script takes the emotion out of negotiation and replaces it with calm confidence.',
      'Practice all 4 scenarios — you never know which one you\'ll face in a real conversation.',
      'Personalise the numbers with real market research — a script with placeholders won\'t help you when it matters.'
    ],
    action:'Write your complete salary negotiation script covering all 4 scenarios. Practise each one out loud. Share with your coach before your Week 8 session.',
    resources:[
      {label:'Salary Research — Salary.com', icon:'fa-search-dollar', tag:'Tool', url:'https://www.salary.com/'},
      {label:'Salary Research — Glassdoor', icon:'fa-search-dollar', tag:'Tool', url:'https://www.glassdoor.co.in/Salaries/index.htm'}
    ]
  }

];


window.CURRICULUM[9] = [

  /* ── 1. Cultural Sensitivity in the Workplace ── */
  {
    id:'w9m1', icon:'fa-globe', title:'Cultural Sensitivity in the Workplace', subtitle:'Navigate multicultural environments',
    hasVideo:true,
    notes:`
      <p style="margin-bottom:1rem;">In this module, we will cover the importance of cultural sensitivity in a diverse and global work environment. You will learn how to recognize, respect, and adapt to different cultural norms, communication styles, and workplace expectations — especially when working in an international setting.</p>
      <p style="margin-bottom:1rem;">We will explore common cultural differences that may arise in professional environments, including communication styles, feedback approaches, teamwork, and professional etiquette. You will also learn how to avoid misunderstandings, build strong relationships with colleagues from diverse backgrounds, and create a positive impression at the workplace.</p>
      <p style="margin-bottom:1.2rem;">By the end of this module, you will be better prepared to navigate multicultural work environments with confidence, professionalism, and respect.</p>
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-lightbulb" style="margin-right:6px;"></i>Key Areas of Cultural Difference to Be Aware Of</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> <strong>Communication styles</strong> — Direct vs indirect, formal vs informal, high-context vs low-context cultures</li>
          <li><i class="fas fa-check-circle"></i> <strong>Feedback approaches</strong> — How different cultures give and receive constructive criticism professionally</li>
          <li><i class="fas fa-check-circle"></i> <strong>Teamwork expectations</strong> — Individual accountability vs collective decision-making norms</li>
          <li><i class="fas fa-check-circle"></i> <strong>Professional etiquette</strong> — Greetings, punctuality, hierarchy, and workplace social norms</li>
          <li><i class="fas fa-check-circle"></i> <strong>Building relationships</strong> — Strategies for connecting authentically across cultural backgrounds</li>
        </ul>
      </div>`,
    takeaways:[
      'Cultural sensitivity is not about knowing every culture — it\'s about staying curious, humble, and open to learning.',
      'When in doubt, observe before acting — watching how your colleagues interact tells you a lot about unspoken norms.',
      'Misunderstandings in multicultural workplaces are almost never personal — they are usually cultural. Assume positive intent.'
    ],
    action:'Reflect on one cultural norm or communication style that differs from your own background. How might it show up in your new US workplace? Write 3–5 sentences.',
    resources:[
      {label:'Building Cross-Cultural Relationships in a Global Workplace', icon:'fa-external-link-alt', tag:'Article', url:'https://hbr.org/2024/02/building-cross-cultural-relationships-in-a-global-workplace?utm_medium=paidsearch&utm_source=google&utm_campaign=domcontent_bussoc&utm_term=Non-Brand&tpcc=domcontent_bussoc&gad_source=1&gad_campaignid=20702632551&gbraid=0AAAAAD9b3uSshd_gtkuY5rs5WwwMlydQa&gclid=CjwKCAjw1N7NBhAoEiwAcPchp0zxoj7qypCm64Cl18Qzug0JZaGjbzhm_ZiFUfbXbEq8XDP3Vc7CGBoCN8gQAvD_BwE'}
    ]
  },

  /* ── 2. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w9m2', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Cultural workplace & mock interview support',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">Now that you are working on cultural sensitivity and preparing for your new workplace, it's time to book a call with your Career Coach. We are looking forward to providing you with the support you require for a successful job search journey!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your queries or topic of discussion prior to the call so as to ensure that you are able to make the most of your coaching call.
      </div>`,
    takeaways:[
      'Discuss any specific workplace cultural situations you are unsure how to navigate with your coach.',
      'Your coach has direct US workplace experience — use this session to ask specific cultural questions.',
      'Come with your practice activity reflection ready to discuss.'
    ],
    action:'Book your Week 9 coach call. Bring your cultural reflection and any specific questions about US workplace norms.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 3. Practice Activity — NO VIDEO ── */
  {
    id:'w9m3', icon:'fa-pen-alt', title:'Practice Activity — Cultural Reflection', subtitle:'Complete this week',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This week's practice activity is a personal reflection exercise on two key areas that will directly impact your success in a US workplace.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-comments" style="margin-right:6px;"></i>Reflection 1 — Cross-Cultural Communication</p>
        <p style="font-size:0.88rem;margin-bottom:0.8rem;">Reflect on the following questions and write 3–5 sentences for each:</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> How does your home culture typically communicate in professional settings — directly or indirectly?</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> How might this differ from US workplace communication norms?</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> What is one specific adjustment you can make to communicate more effectively in a US work environment?</li>
        </ul>
      </div>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-building" style="margin-right:6px;"></i>Reflection 2 — Workplace Expectations</p>
        <p style="font-size:0.88rem;margin-bottom:0.8rem;">Reflect on the following questions and write 3–5 sentences for each:</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> What are 2–3 US workplace expectations that feel different or new to you?</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> How will you prepare yourself to meet these expectations from day one?</li>
          <li><i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> Who can you ask for guidance if you are unsure about a cultural norm at work?</li>
        </ul>
      </div>

      <div style="background:#fff8f7;border-radius:14px;padding:1rem 1.4rem;border:1px solid #f5c6be;">
        <p style="font-size:0.84rem;"><i class="fas fa-share-alt" style="color:var(--brand-accent);margin-right:8px;"></i><strong>Share with your coach:</strong> Bring your written reflections to your Week 9 coaching session to discuss your cultural adaptation strategies.</p>
      </div>`,
    takeaways:[
      'Self-awareness about your own cultural background is the first step to navigating cultural differences at work.',
      'Asking questions is a sign of professionalism in US workplaces — not weakness.',
      'Building cross-cultural relationships starts with genuine curiosity about your colleagues\' experiences and perspectives.'
    ],
    action:'Complete both written reflections this week. Be honest and specific — these insights will directly help you succeed in your first US role.',
    resources:[]
  }

];


window.CURRICULUM[10] = [

  /* ── 1. Success on the Job — PPT link, no video ── */
  {
    id:'w10m1', icon:'fa-trophy', title:'Success on the Job', subtitle:'Thrive from day one',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1rem;">In this module, we will cover the essential habits and strategies that will help you thrive once you land your role. You'll learn how to set clear goals, integrate into your team, and communicate effectively with colleagues and managers.</p>
      <p style="margin-bottom:1rem;">We will also focus on maintaining productivity, adapting to company culture, receiving feedback, and continuously growing in your role.</p>
      <p style="margin-bottom:1.2rem;">By the end of this module, you'll feel confident in your ability to make a strong impact and create long-term success in your career.</p>

      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-lightbulb" style="margin-right:6px;"></i>Key Habits for Early Success at Work</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> <strong>Set clear goals</strong> — Align your personal goals with your manager's expectations from week one</li>
          <li><i class="fas fa-check-circle"></i> <strong>Integrate into your team</strong> — Build relationships deliberately, not just professionally</li>
          <li><i class="fas fa-check-circle"></i> <strong>Communicate proactively</strong> — Over-communicate in your first 90 days — keep your manager informed</li>
          <li><i class="fas fa-check-circle"></i> <strong>Maintain productivity</strong> — Time management habits from this bootcamp apply directly here</li>
          <li><i class="fas fa-check-circle"></i> <strong>Adapt to company culture</strong> — Observe first, then contribute your perspective</li>
          <li><i class="fas fa-check-circle"></i> <strong>Receive feedback well</strong> — Ask for feedback proactively and act on it visibly</li>
          <li><i class="fas fa-check-circle"></i> <strong>Keep growing</strong> — Identify learning opportunities and request a development plan within 60 days</li>
        </ul>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-file-powerpoint" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Presentation Slides:</strong> Access the full Success on the Job presentation below for detailed content and frameworks.</p>
      </div>`,
    takeaways:[
      'The first 90 days set your reputation at a company — be intentional, visible, and proactive.',
      'Asking for feedback early shows maturity and initiative — most managers will respect you for it.',
      'Your technical skills got you hired. Your soft skills, cultural fit, and attitude will determine how far you go.'
    ],
    action:'Before starting your new role, write down 3 specific goals you want to achieve in your first 30 days. Share them with your manager in your first week.',
    resources:[
      {label:'Success on the Job — Full Presentation', icon:'fa-file-powerpoint', tag:'Slides', url:'https://docs.google.com/presentation/d/1hLrtK8ZYpEa0TJ7IE3xaWUux0V9uSnTz/edit?usp=sharing'},
      {label:'How To Succeed in Your New Job', icon:'fa-external-link-alt', tag:'Article', url:'https://in.indeed.com/career-advice/starting-new-job/new-job-guide'},
      {label:'Career Planning Guide', icon:'fa-external-link-alt', tag:'Guide', url:'https://hbr.org/topic/subject/career-planning'}
    ]
  },

  /* ── 2. Book a Call with Career Coach — NO VIDEO ── */
  {
    id:'w10m2', icon:'fa-calendar-alt', title:'Book a Call with your Career Coach', subtitle:'Final coaching session',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This is your final coaching call of the 10-week bootcamp. Use this session to review your 30-60-90 day plan, discuss your 5-year career roadmap, and get any last guidance before you step into your new role. We are proud of how far you have come!</p>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:1.2rem;">
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">NV</div><strong>Nitti Vidhu Mohan</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://calendly.com/nitti-v" target="_blank" style="color:var(--brand-teal);">calendly.com/nitti-v</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> nitti.v@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-559-3829
          </p>
        </div>
        <div style="flex:1;min-width:220px;background:#f4faf7;border-radius:14px;padding:1.2rem;">
          <div style="display:flex;gap:0.8rem;align-items:center;margin-bottom:0.8rem;"><div class="coach-avatar">DR</div><strong>Dr. Divina Raghav</strong></div>
          <p style="font-size:0.84rem;line-height:1.9;">
            <i class="fas fa-calendar" style="color:var(--brand-teal);width:18px;"></i> <a href="https://tidycal.com/divinar" target="_blank" style="color:var(--brand-teal);">tidycal.com/divinar</a><br>
            <i class="fas fa-envelope" style="color:var(--brand-teal);width:18px;"></i> divina.r@elevateme.pro<br>
            <i class="fas fa-phone" style="color:var(--brand-teal);width:18px;"></i> 614-585-5715
          </p>
        </div>
      </div>
      <div style="background:#f0f7f4;border-radius:14px;padding:1rem 1.4rem;font-size:0.84rem;line-height:1.9;">
        <strong>Instructions:</strong><br>
        1. Click the booking link to open the calendar<br>
        2. Choose a date and time that works for you<br>
        3. Fill in your name, email, and topics you'd like to discuss<br>
        4. Confirm — you'll receive a Zoom link via email<br>
        5. Join on time. Reschedule at least 12 hours in advance.<br>
        6. For any emergency: nitti.v@elevateme.pro<br><br>
        <strong>Call Duration:</strong> 30 minutes &nbsp;·&nbsp; <strong>Cadence:</strong> 1 call per week<br><br>
        <strong>Important:</strong> Please come prepared with your 30-60-90 day plan and 5-year career roadmap to make the most of this final session.
      </div>`,
    takeaways:[
      'Use this final session to get your coach\'s review of your 30-60-90 day plan before you start your new role.',
      'Your relationship with your coach does not have to end here — stay in touch as your career evolves.',
      'Come with your 5-year roadmap ready — your coach can help you validate and refine it.'
    ],
    action:'Book your final Week 10 coach call. Bring your completed 30-60-90 day plan and 5-year career roadmap to review together.',
    resources:[
      {label:'Book with Nitti – Calendly', icon:'fa-calendar-check', tag:'Book', url:'https://calendly.com/nitti-v'},
      {label:'Book with Dr. Divina – TidyCal', icon:'fa-calendar-check', tag:'Book', url:'https://tidycal.com/divinar'}
    ]
  },

  /* ── 3. Practice Activity — NO VIDEO ── */
  {
    id:'w10m3', icon:'fa-map-signs', title:'Practice Activity — 30-60-90 Day Plan & 5-Year Roadmap', subtitle:'Your career blueprint',
    hasVideo:false,
    notes:`
      <p style="margin-bottom:1.2rem;">This final practice activity is your most important one. You are building two documents that will guide your entire career trajectory.</p>

      <!-- 30-60-90 Day Plan -->
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-calendar-check" style="margin-right:6px;"></i>Activity 1 — Build Your 30-60-90 Day Plan</p>
        <p style="font-size:0.88rem;margin-bottom:1rem;">For each phase, define your goals, key actions, and how you will measure success.</p>
        <div class="plan-grid">
          <div class="plan-card" style="background:#eef7f2;border-color:#c8e6d8;">
            <div class="plan-card-header">
              <div class="plan-card-icon" style="background:#2d7a4f;"><i class="fas fa-seedling"></i></div>
              <h4 style="color:#0a1a0f;">First 30 Days<br><small style="font-weight:400;color:#4a6b55;">Learn</small></h4>
            </div>
            <ul>
              <li>Understand your team, role, and processes</li>
              <li>Build relationships with colleagues & manager</li>
              <li>Complete all onboarding & training</li>
              <li>Identify quick wins you can deliver</li>
            </ul>
          </div>
          <div class="plan-card" style="background:#fff8f0;border-color:#fce4c0;">
            <div class="plan-card-header">
              <div class="plan-card-icon" style="background:#d97706;"><i class="fas fa-chart-line"></i></div>
              <h4 style="color:#78350f;">Days 31–60<br><small style="font-weight:400;color:#92400e;">Contribute</small></h4>
            </div>
            <ul>
              <li>Take ownership of your first project or task</li>
              <li>Apply feedback from your first 30 days</li>
              <li>Propose at least one improvement</li>
              <li>Request a mid-point check-in with manager</li>
            </ul>
          </div>
          <div class="plan-card" style="background:#f0f4ff;border-color:#c7d2fe;">
            <div class="plan-card-header">
              <div class="plan-card-icon" style="background:#4338ca;"><i class="fas fa-rocket"></i></div>
              <h4 style="color:#1e1b4b;">Days 61–90<br><small style="font-weight:400;color:#3730a3;">Lead</small></h4>
            </div>
            <ul>
              <li>Deliver measurable results on your first project</li>
              <li>Mentor or support a newer team member</li>
              <li>Share your 90-day learnings with your manager</li>
              <li>Define your goals for the next 6 months</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 5-Year Roadmap -->
      <div style="background:#f0f7f4;border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1.2rem;">
        <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--brand-teal);margin-bottom:0.9rem;"><i class="fas fa-road" style="margin-right:6px;"></i>Activity 2 — Create Your 5-Year Career Roadmap</p>
        <p style="font-size:0.88rem;margin-bottom:0.8rem;">Map out where you want to be in 1, 3, and 5 years. For each milestone, define the role, the skills you need, and the actions you will take to get there.</p>
        <ul class="worksheet-bullets">
          <li><i class="fas fa-check-circle"></i> <strong>Year 1:</strong> What role and level do you want to be at? What skills will you develop?</li>
          <li><i class="fas fa-check-circle"></i> <strong>Year 3:</strong> What promotion or career move are you targeting? What experience do you need to build?</li>
          <li><i class="fas fa-check-circle"></i> <strong>Year 5:</strong> What is your ultimate career goal? Leadership, specialisation, entrepreneurship?</li>
          <li><i class="fas fa-check-circle"></i> For each year, identify 1–2 certifications, courses, or experiences that will accelerate your growth.</li>
        </ul>
      </div>

      <div style="background:#eef7f2;border-radius:14px;padding:1rem 1.4rem;margin-bottom:1rem;border:1px solid #c8e6d8;">
        <p style="font-size:0.84rem;"><i class="fas fa-lightbulb" style="color:var(--brand-teal);margin-right:8px;"></i><strong>Tip:</strong> Your 5-year roadmap doesn't have to be perfect — it just has to be intentional. It will evolve as your career does. The act of writing it down is what makes it powerful.</p>
      </div>

      <div style="background:#1a1a1a;border-radius:14px;padding:1.4rem;margin-top:0.5rem;">
        <p style="font-size:1rem;font-weight:800;color:white;text-align:center;margin-bottom:0.5rem;">🎉 Congratulations on completing the ElevateMe 10-Week Career Bootcamp!</p>
        <p style="font-size:0.88rem;color:rgba(255,255,255,0.7);text-align:center;line-height:1.7;">You have built the skills, mindset, and strategies to land and succeed in your dream role. Stay persistent, keep networking, and reach out to your coaches whenever you need support. The best is yet to come. Good luck! 🚀</p>
      </div>`,
    takeaways:[
      'A written 30-60-90 day plan turns your first weeks from reactive to intentional — share it with your manager.',
      'A 5-year roadmap gives you direction without rigidity — revisit and revise it every 6–12 months.',
      'The skills from this bootcamp — communication, networking, interviewing, negotiation — serve you for your entire career.'
    ],
    action:'Complete your 30-60-90 day plan and 5-year career roadmap this week. Bring both documents to your final coaching session for review.',
    resources:[
      {label:'Success on the Job — Full Presentation', icon:'fa-file-powerpoint', tag:'Slides', url:'https://docs.google.com/presentation/d/1hLrtK8ZYpEa0TJ7IE3xaWUux0V9uSnTz/edit?usp=sharing'},
      {label:'How To Succeed in Your New Job', icon:'fa-external-link-alt', tag:'Article', url:'https://in.indeed.com/career-advice/starting-new-job/new-job-guide'},
      {label:'Career Planning Guide', icon:'fa-external-link-alt', tag:'Guide', url:'https://hbr.org/topic/subject/career-planning'}
    ]
  }

];


