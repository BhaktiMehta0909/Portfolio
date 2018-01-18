import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)': 'OnScroll($event)'
}
})
export class AppComponent {
  constructor(){}
  Name = 'Bhakti Mehta';
  Description = 'Actively Looking for a Summer Internship 2018';
  MyPhoto= "../assets/Images/profile.jpg";
  HamIcon="../assets/Images/ham-icon.png";
  MyData = [{Heading: 'About Me', Content:"<p>I am pursuing my Masters in Information Systems at Santa Clara University.I am actively looking for a summer internship for 2018.</p>"+
  '<p>I have a year of professional experience as a Programmer Analyst at Cognizant Technology Solutions India. Working at Cognizant Technology Solutions has been a great learning experience and I look forward to learn more in the next few years.'+
   'My experience spans across multicultural and multinational environments. In addition, interaction with different teams and clients has enhanced my organizational skills. Working with an Agile software development methodology also encouraged frequent adaption to changes, self-organization and accountability.</p>'+
  '<p>Moreover, my extra-curricular activities have helped me develop an excellent ability to work in teams and also ability to develop positive relationships very quickly – both at work and personally.</p>'},
  {Heading: 'Education', Content: '<ul><li>Santa Clara University, Leavey School of Business,</br>Santa Clara, CA</br>Master of Science in Information Systems</br>Related Courses:  Information Systems Analysis and Design, Database Management Systems</br>GPA: 3.9</li><li>University of Pune</brBachelor of Engineering in Computer Engineering</br>Graduated in May 2016 </li></ul>'},
  {Heading: 'Skills', Content: '<ul><li>Programming Languages & Frameworks: C, C++, Basic Java, HTML5/CSS3 Bootstrap, JavaScript, Jquery, TypeScript, Angular 2.</li><li>Tools & Platforms: Eclipse, Netbeans, Dreamweaver, Sublime, Visual Studio Code.</li><li>Databases: SQL, MongoDB.</li><li>Version Control Systems: Git.</li><li>Project Management Tools: Atlassian Jira, Bitbucket, Confluence.</li><li>Operating Systems:  Windows and Linux.</li></ul>'},
  {Heading: 'Experience', Content: 'Cognizant Technology Solutions Pune, India<p>Programmer Analyst</br>2016-2017</p><ul><li>Collaborated with 12-person user interface development team to create modules for the online processing of secured and  unsecured loans as a part of the project for a large non-banking financial company using Angular 2, Typescript, HTML5, CSS3 and Bootstrap.</li><li>Wrote unit test cases for Angular 2 application using Karma to optimize each functionality to reduce bugs and enable the identification and immediate resolution of issues.</li><li>Partnered with the client to identify specifications and analyze feasibility of the Agile requirements evolved throughout the project lifecycle.</li><li>Coordinated with 95-people project team using team collaboration tools such as Atlassian Jira, Confluence and Bitbucket to ensure proper integration and testing of the modules.</li><li>Worked with Agile software development methodology and attended SCRUM meetings.</li></ul>'},
  {Heading: 'Academic Projects', Content: '<ul><li>Analysis,Design and Web Development (Smart Housing):<ul><li>Analyzed the business need, value, business and system requirements for a web based application that accomplished the goal of Business Process Automation for Homeowners community management.</li><li>Developed use cases and data flow diagrams according to the system requirements identified previously.</li><li>Designed and developed a responsive User Interface for the application using HTML5, CSS3, Bootstrap and JavaScript.</li></ul></li><li>Database Management Systems (LoveDtours):<ul><li>Developed a hybrid database for location based and personalized recommender system using both Mysql and MongoDB.</li><li>Implemented techniques like Indexing and stored procedures to improve query performance and sharding data across three servers for horizontal scaling of the database.</li></ul></li></ul>'}];
  pos= 10;
  ngOnInit(){
    window.scrollTo(0,0);
  }
 OnScroll(evt) {
   for( var i=0;i<this.MyData.length;i++){
    if(window.scrollY>=(document.body.scrollHeight/(this.MyData.length+i))*i && window.scrollY<=(document.body.scrollHeight/(this.MyData.length+i))*i + 200 || window.scrollY== document.body.scrollHeight){
      this.pos=i;
      console.log(i);
      document.getElementById('section-'+i).classList.remove('hide-header');
      document.getElementById('section-'+i).classList.add('show-header');
      document.getElementById('section-p-'+i).classList.remove('hide-header');
      document.getElementById('section-p-'+i).classList.add('show-header');

    } 
  }
}
ToggleMenu(evt){
  console.log('called');
  if(document.getElementById('ham-menu').classList.contains('hide-header')){
  document.getElementById('ham-menu').classList.remove('hide-header');
  document.getElementById('ham-menu').classList.add('show-header');
  this.HamIcon="../assets/Images/cancel-icon.svg";
  }else{
    document.getElementById('ham-menu').classList.add('hide-header');
    document.getElementById('ham-menu').classList.remove('show-header');
    this.HamIcon="../assets/Images/ham-icon.png";
  }
}
}
