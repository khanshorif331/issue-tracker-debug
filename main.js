document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random()*100000000) + '';
  const status = 'Open';

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')){
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}

const closeIssue = id => {
  console.log(id);
  const issues = JSON.parse(localStorage.getItem('issues'));

  console.log(issues);
  const currentIssue = issues.find(issue => Number(issue.id) === id);
  console.log(currentIssue);
  currentIssue.status = 'Closed';
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

const deleteIssue = id => {

  const issues = JSON.parse(localStorage.getItem('issues'));
  console.log(issues);
  const remainingIssues = issues.filter(issue => Number(issue.id) !== id )
  console.log(remainingIssues);
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
  fetchIssues()
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    const {id, description, severity, assignedTo, status} = issues[i];

    issuesList.innerHTML +=   `<div class="well">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
                              </div>`;
  }
}

















// টাস্ক-২:

// ১১.আমাদের গিটহাব এ issue-tracker নামে একটা রিপোজিটরি আছে।সেখানে কোন একটা issue যোগ করার পর সেটাকে close করা যায়না। আবার ডিলিট ও করা যায় না। তো তোমার কাজ হচ্ছে সেই সাইটের বাগ ফিক্স করা। 



// [ এক্সট্রা হোম ওয়ার্ক ] [ আজকে না পারলে আগামীকাল করবে] 

// ১২. আমাদের গিটহাব এ যাও। সেখানে ranga-store নামে একটা রিপোজটিরি আছে। সেটা ক্লোন করো। 

// ১৩. সেখানেও কী কী বাগ আছে। তুমি নিজেই খুঁজে বের করার চেষ্টা করো। মিনিমাম তিনটা বাগ খুঁজে বের করে সেগুলা ফিক্স করার চেষ্টা করো। 